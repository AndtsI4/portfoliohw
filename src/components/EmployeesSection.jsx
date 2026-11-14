import React, { useState, useEffect } from 'react';
import SectionHeader from './SectionHeader';
import EmployeeCard from './EmployeeCard';

/**
 * Employees Section Component
 * Comprehensive JSONPlaceholder REST API integration:
 * - GET /users
 * - POST /users (Add employee modal with real HTTP 201 feedback)
 * - DELETE /users/:id (Remove employee with HTTP 200 feedback)
 * - GET /posts?userId=:id (User posts modal)
 */
export default function EmployeesSection() {
  const [employees, setEmployees] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Toast feedback state
  const [toast, setToast] = useState(null);

  // View Posts Modal state
  const [activePostsEmployee, setActivePostsEmployee] = useState(null);
  const [posts, setPosts] = useState([]);
  const [postsLoading, setPostsLoading] = useState(false);

  // Add Employee Modal state
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [newEmployee, setNewEmployee] = useState({
    name: '',
    email: '',
    phone: '',
    companyName: '',
    city: ''
  });
  const [submitting, setSubmitting] = useState(false);

  const showToast = (message, type = 'success') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3500);
  };

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

  // DELETE method
  const handleDelete = async (id) => {
    try {
      const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
        method: 'DELETE',
      });
      setEmployees((prev) => prev.filter((emp) => emp.id !== id));
      showToast(`თანამშრომელი #${id} წარმატებით წაიშალა (HTTP ${res.status} OK)`, 'info');
    } catch (err) {
      // Fallback local deletion
      setEmployees((prev) => prev.filter((emp) => emp.id !== id));
      showToast(`თანამშრომელი #${id} წაიშალა`, 'info');
    }
  };

  // GET /posts?userId=:id
  const handleViewPosts = async (employee) => {
    setActivePostsEmployee(employee);
    setPostsLoading(true);
    setPosts([]);
    try {
      const res = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${employee.id}`);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();
      setPosts(data.slice(0, 5)); // show top 5 posts
    } catch (err) {
      setPosts([]);
      showToast('პოსტების წამოღება ვერ მოხერხდა', 'error');
    } finally {
      setPostsLoading(false);
    }
  };

  // POST /users
  const handleAddSubmit = async (e) => {
    e.preventDefault();
    if (!newEmployee.name || !newEmployee.email) return;

    setSubmitting(true);
    try {
      const payload = {
        name: newEmployee.name,
        username: newEmployee.name.toLowerCase().replace(/\s+/g, '_'),
        email: newEmployee.email,
        phone: newEmployee.phone || '+995 555 000 000',
        company: { name: newEmployee.companyName || 'Freelance' },
        address: { city: newEmployee.city || 'Tbilisi' },
        website: 'example.com'
      };

      const res = await fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      const created = await res.json();
      // Ensure unique ID if API returns 11
      const createdWithId = {
        ...payload,
        id: created.id || Date.now()
      };

      setEmployees((prev) => [createdWithId, ...prev]);
      setIsAddModalOpen(false);
      setNewEmployee({ name: '', email: '', phone: '', companyName: '', city: '' });
      showToast(`ახალი თანამშრომელი დაემატა (HTTP ${res.status} Created)`, 'success');
    } catch (err) {
      showToast('დამატება ვერ მოხერხდა', 'error');
    } finally {
      setSubmitting(false);
    }
  };

  const filteredEmployees = employees.filter((emp) => {
    const query = searchQuery.toLowerCase().trim();
    if (!query) return true;
    const nameMatch = emp.name?.toLowerCase().includes(query);
    const emailMatch = emp.email?.toLowerCase().includes(query);
    const companyMatch = emp.company?.name?.toLowerCase().includes(query);
    const usernameMatch = emp.username?.toLowerCase().includes(query);
    return nameMatch || emailMatch || companyMatch || usernameMatch;
  });

  return (
    <section id="employees" className="scroll-mt-24 space-y-6 sm:space-y-8 relative">
      {/* Toast Notification */}
      {toast && (
        <div className="fixed bottom-6 right-6 z-50 animate-slide-down">
          <div className="flex items-center gap-2.5 px-4 py-3 rounded-xl bg-dark-900 border border-slate-700 text-xs sm:text-sm text-slate-100 shadow-2xl font-mono">
            <span className="w-2 h-2 rounded-full bg-tech-emerald animate-pulse"></span>
            <span>{toast.message}</span>
          </div>
        </div>
      )}

      <SectionHeader
        badge="REST API • JSONPlaceholder"
        badgeColor="cyan"
        title="გუნდის წევრები & თანამშრომლები"
        icon="fa-solid fa-users-gear"
        description="სრული RESTful CRUD ფუნქციონალი: GET /users, POST /users, DELETE /users და GET /posts"
        action={
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsAddModalOpen(true)}
              className="px-3 py-1.5 rounded-xl bg-tech-cyan/20 hover:bg-tech-cyan/30 text-tech-cyan border border-tech-cyan/40 text-xs font-mono font-semibold transition-colors flex items-center gap-1.5"
            >
              <i className="fa-solid fa-plus text-[10px]"></i>
              <span>თანამშრომლის დამატება</span>
            </button>
            <button
              onClick={fetchEmployees}
              className="p-2 rounded-xl bg-dark-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white text-xs transition-colors"
              title="API მონაცემების განახლება"
            >
              <i className={`fa-solid fa-arrows-rotate ${loading ? 'animate-spin' : ''}`}></i>
            </button>
          </div>
        }
      />

      {/* Search Bar & Result Counter */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
        <div className="relative flex-1 max-w-md">
          <i className="fa-solid fa-magnifying-glass absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500 text-xs"></i>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="ძებნა: სახელი, კომპანია, მეილი..."
            className="w-full bg-dark-900/90 border border-slate-800 focus:border-tech-cyan rounded-xl pl-9 pr-8 py-2 text-xs sm:text-sm text-slate-200 placeholder-slate-500 focus:outline-none font-mono transition-colors"
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

        <div className="text-xs font-mono text-slate-400 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-tech-emerald"></span>
          <span>ნაჩვენებია: {filteredEmployees.length} / {employees.length}</span>
        </div>
      </div>

      {/* Loading State */}
      {loading && (
        <div className="py-16 text-center text-slate-400 space-y-3 bg-dark-900/40 rounded-2xl border border-slate-800/80">
          <i className="fa-solid fa-circle-notch animate-spin text-2xl text-tech-cyan"></i>
          <p className="text-xs sm:text-sm font-mono">იტვირთება JSONPlaceholder API-დან...</p>
        </div>
      )}

      {/* Error State */}
      {!loading && error && (
        <div className="p-6 rounded-2xl bg-rose-500/10 border border-rose-500/20 text-center space-y-3 font-mono text-xs">
          <i className="fa-solid fa-triangle-exclamation text-2xl text-rose-400"></i>
          <p className="text-rose-300">{error}</p>
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {filteredEmployees.map((emp) => (
            <EmployeeCard
              key={emp.id}
              employee={emp}
              onDelete={handleDelete}
              onViewPosts={handleViewPosts}
            />
          ))}
        </div>
      )}

      {/* Empty Search Result */}
      {!loading && !error && filteredEmployees.length === 0 && (
        <div className="py-12 text-center text-slate-400 bg-dark-900/40 rounded-2xl border border-slate-800/80 font-mono text-xs">
          <i className="fa-regular fa-folder-open text-2xl text-slate-500 mb-2"></i>
          <p>თანამშრომელი მოთხოვნით "{searchQuery}" ვერ მოიძებნა</p>
        </div>
      )}

      {/* Modal: View Employee Posts */}
      {activePostsEmployee && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-dark-900 border border-slate-800 rounded-3xl max-w-lg w-full max-h-[85vh] flex flex-col shadow-2xl animate-fade-in overflow-hidden">
            <div className="px-5 py-4 border-b border-slate-800 flex items-center justify-between">
              <div>
                <h3 className="text-sm sm:text-base font-bold text-white flex items-center gap-2">
                  <i className="fa-regular fa-newspaper text-tech-cyan"></i>
                  <span>{activePostsEmployee.name}-ის პოსტები</span>
                </h3>
                <span className="text-[11px] font-mono text-slate-400">
                  GET /posts?userId={activePostsEmployee.id}
                </span>
              </div>
              <button
                onClick={() => setActivePostsEmployee(null)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              >
                <i className="fa-solid fa-xmark text-sm"></i>
              </button>
            </div>

            <div className="p-5 overflow-y-auto space-y-3 font-mono text-xs">
              {postsLoading && (
                <div className="py-10 text-center text-slate-400">
                  <i className="fa-solid fa-spinner animate-spin text-xl text-tech-cyan mr-2"></i>
                  პოსტები იტვირთება...
                </div>
              )}

              {!postsLoading && posts.map((post) => (
                <div key={post.id} className="p-3.5 rounded-xl bg-dark-950/80 border border-slate-800/80 space-y-1.5">
                  <h4 className="font-bold text-slate-200 capitalize">
                    #{post.id}. {post.title}
                  </h4>
                  <p className="text-slate-400 font-sans text-xs leading-relaxed">
                    {post.body}
                  </p>
                </div>
              ))}
            </div>

            <div className="px-5 py-3 border-t border-slate-800 flex justify-end">
              <button
                onClick={() => setActivePostsEmployee(null)}
                className="px-4 py-1.5 rounded-xl bg-dark-950 hover:bg-slate-800 text-slate-300 text-xs font-mono transition-colors border border-slate-800"
              >
                დახურვა
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal: Add New Employee (POST /users) */}
      {isAddModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-dark-900 border border-slate-800 rounded-3xl max-w-md w-full shadow-2xl animate-fade-in overflow-hidden">
            <div className="px-5 py-4 border-b border-slate-800 flex items-center justify-between">
              <div>
                <h3 className="text-sm sm:text-base font-bold text-white flex items-center gap-2">
                  <i className="fa-solid fa-user-plus text-tech-cyan"></i>
                  <span>თანამშრომლის დამატება</span>
                </h3>
                <span className="text-[11px] font-mono text-slate-400">
                  HTTP POST to /users
                </span>
              </div>
              <button
                onClick={() => setIsAddModalOpen(false)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              >
                <i className="fa-solid fa-xmark text-sm"></i>
              </button>
            </div>

            <form onSubmit={handleAddSubmit} className="p-5 space-y-3.5 font-mono text-xs">
              <div>
                <label className="block text-slate-300 mb-1">სახელი & გვარი *</label>
                <input
                  type="text"
                  required
                  value={newEmployee.name}
                  onChange={(e) => setNewEmployee({ ...newEmployee, name: e.target.value })}
                  placeholder="მაგ: დავით ყიფიანი"
                  className="w-full bg-dark-950 border border-slate-800 focus:border-tech-cyan rounded-xl px-3 py-2 text-slate-200 outline-none"
                />
              </div>

              <div>
                <label className="block text-slate-300 mb-1">ელ-ფოსტა *</label>
                <input
                  type="email"
                  required
                  value={newEmployee.email}
                  onChange={(e) => setNewEmployee({ ...newEmployee, email: e.target.value })}
                  placeholder="name@example.com"
                  className="w-full bg-dark-950 border border-slate-800 focus:border-tech-cyan rounded-xl px-3 py-2 text-slate-200 outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-300 mb-1">კომპანია</label>
                  <input
                    type="text"
                    value={newEmployee.companyName}
                    onChange={(e) => setNewEmployee({ ...newEmployee, companyName: e.target.value })}
                    placeholder="Tech Lab"
                    className="w-full bg-dark-950 border border-slate-800 focus:border-tech-cyan rounded-xl px-3 py-2 text-slate-200 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-slate-300 mb-1">ქალაქი</label>
                  <input
                    type="text"
                    value={newEmployee.city}
                    onChange={(e) => setNewEmployee({ ...newEmployee, city: e.target.value })}
                    placeholder="Tbilisi"
                    className="w-full bg-dark-950 border border-slate-800 focus:border-tech-cyan rounded-xl px-3 py-2 text-slate-200 outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-slate-300 mb-1">ტელეფონი</label>
                <input
                  type="text"
                  value={newEmployee.phone}
                  onChange={(e) => setNewEmployee({ ...newEmployee, phone: e.target.value })}
                  placeholder="+995 599 123 456"
                  className="w-full bg-dark-950 border border-slate-800 focus:border-tech-cyan rounded-xl px-3 py-2 text-slate-200 outline-none"
                />
              </div>

              <div className="pt-3 flex items-center justify-end gap-2 border-t border-slate-800">
                <button
                  type="button"
                  onClick={() => setIsAddModalOpen(false)}
                  className="px-4 py-2 rounded-xl text-slate-400 hover:text-white"
                >
                  გაუქმება
                </button>
                <button
                  type="submit"
                  disabled={submitting}
                  className="px-5 py-2 rounded-xl bg-tech-cyan text-dark-950 font-bold hover:bg-cyan-300 transition-colors flex items-center gap-1.5"
                >
                  {submitting ? 'იგზავნება...' : 'დამატება (POST)'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
