import React, { useState, useEffect } from 'react';
import SectionHeader from './SectionHeader';
import EmployeeCard from './EmployeeCard';

/**
 * Employees Section Component
 * Connects to JSONPlaceholder API, supports search filter, loading states, and renders reusable EmployeeCards
 */
export default function EmployeesSection() {
  const [employees, setEmployees] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchEmployees = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status}`);
      }
      const data = await response.json();
      setEmployees(data);
    } catch (err) {
      setError(err.message || 'თანამშრომლების ჩატვირთვა ვერ მოხერხდა');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  const handleDelete = (id) => {
    setEmployees((prev) => prev.filter((emp) => emp.id !== id));
  };

  const filteredEmployees = employees.filter((emp) => {
    const query = searchQuery.toLowerCase();
    const nameMatch = emp.name.toLowerCase().includes(query);
    const emailMatch = emp.email.toLowerCase().includes(query);
    const companyMatch = emp.company?.name?.toLowerCase().includes(query);
    return nameMatch || emailMatch || companyMatch;
  });

  return (
    <section id="employees" className="scroll-mt-24 space-y-6 sm:space-y-8">
      <SectionHeader
        badge="გუნდი • JSONPlaceholder API"
        badgeColor="emerald"
        title="თანამშრომლები"
        icon="fa-solid fa-users"
        description="მონაცემები დინამიურად იტვირთება REST API-დან და წარმოდგენილია მრავალჯერადი EmployeeCard კომპონენტით"
        action={
          <div className="flex items-center gap-2">
            <span className="px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-xs font-mono text-indigo-400">
              სულ: {employees.length}
            </span>
            <button
              onClick={fetchEmployees}
              className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white text-xs transition-colors"
              title="განახლება API-დან"
            >
              <i className="fa-solid fa-arrows-rotate"></i>
            </button>
          </div>
        }
      />

      {/* Search Input Filter */}
      <div className="relative max-w-md">
        <i className="fa-solid fa-magnifying-glass absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500 text-sm"></i>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="ძიება სახელით, მეილით ან კომპანიით..."
          className="w-full bg-slate-900/80 border border-slate-800 focus:border-indigo-500 rounded-xl pl-10 pr-4 py-2.5 text-xs sm:text-sm text-slate-200 placeholder-slate-500 focus:outline-none transition-colors"
        />
        {searchQuery && (
          <button
            onClick={() => setSearchQuery('')}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300 text-xs"
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
        )}
      </div>

      {/* Loading State */}
      {loading && (
        <div className="py-16 text-center text-slate-400 space-y-3 bg-slate-900/30 rounded-2xl border border-slate-800/60">
          <i className="fa-solid fa-spinner animate-spin text-2xl text-indigo-400"></i>
          <p className="text-sm">თანამშრომლების სია იტვირთება API-დან...</p>
        </div>
      )}

      {/* Error State */}
      {!loading && error && (
        <div className="p-6 rounded-2xl bg-rose-500/10 border border-rose-500/20 text-center space-y-3">
          <i className="fa-solid fa-triangle-exclamation text-2xl text-rose-400"></i>
          <p className="text-sm text-rose-300">{error}</p>
          <button
            onClick={fetchEmployees}
            className="px-4 py-2 rounded-xl text-xs font-semibold bg-rose-600 hover:bg-rose-500 text-white transition-colors"
          >
            ხელახლა ცდა
          </button>
        </div>
      )}

      {/* Employee Cards Grid */}
      {!loading && !error && filteredEmployees.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredEmployees.map((emp) => (
            <EmployeeCard
              key={emp.id}
              employee={emp}
              onDelete={handleDelete}
            />
          ))}
        </div>
      )}

      {/* Empty State */}
      {!loading && !error && filteredEmployees.length === 0 && (
        <div className="py-12 text-center text-slate-400 bg-slate-900/30 rounded-2xl border border-slate-800/60">
          <i className="fa-regular fa-folder-open text-2xl text-slate-500 mb-2"></i>
          <p className="text-sm">თანამშრომელი მოცემული ძიებით ვერ მოიძებნა</p>
        </div>
      )}
    </section>
  );
}
