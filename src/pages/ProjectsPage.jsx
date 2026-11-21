import React, { useState } from 'react';
import SectionHeader from '../components/SectionHeader';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/portfolioData';

/**
 * Projects Page (Route: "/projects")
 * Dedicated portfolio page featuring real-time project search and category filtering
 */
export default function ProjectsPage() {
  const [filter, setFilter] = useState('all');
  const [search, setSearch] = useState('');

  const filterCategories = [
    { id: 'all', label: 'ყველა' },
    { id: 'web', label: 'Web Systems' },
    { id: 'algo', label: 'Algorithms (C++)' },
    { id: 'hardware', label: 'Hardware & IoT' }
  ];

  const filteredProjects = projects.filter((p) => {
    const matchesFilter = filter === 'all' || p.category === filter;
    const matchesSearch =
      !search.trim() ||
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.description.toLowerCase().includes(search.toLowerCase()) ||
      p.technologies.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="space-y-8 animate-fade-in">
      <SectionHeader
        badge="პორტფოლიო &amp; ინჟინერია"
        badgeColor="cyan"
        title="შესრულებული პროექტები"
        icon="fa-solid fa-code-branch"
        description="სხვადასხვა მიმართულებით შექმნილი სისტემური გადაწყვეტილებები და კოდური ბაზა"
        action={
          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-dark-900 border border-slate-800">
            {filterCategories.map((cat) => {
              const count =
                cat.id === 'all'
                  ? projects.length
                  : projects.filter((p) => p.category === cat.id).length;

              return (
                <button
                  key={cat.id}
                  onClick={() => setFilter(cat.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all flex items-center gap-1.5 ${
                    filter === cat.id
                      ? 'bg-tech-cyan/20 text-tech-cyan border border-tech-cyan/40 font-semibold'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <span>{cat.label}</span>
                  <span className="text-[10px] opacity-70 px-1 rounded bg-dark-950">
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        }
      />

      {/* Projects Search Bar */}
      <div className="relative max-w-md">
        <i className="fa-solid fa-magnifying-glass absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500 text-xs"></i>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="პროექტების ძებნა ტექნოლოგიით ან სათაურით..."
          className="w-full bg-dark-900/90 border border-slate-800 focus:border-tech-cyan rounded-xl pl-9 pr-8 py-2 text-xs sm:text-sm text-slate-200 placeholder-slate-500 focus:outline-none font-mono transition-colors"
        />
        {search && (
          <button
            onClick={() => setSearch('')}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300 text-xs"
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
        )}
      </div>

      {/* Projects List */}
      <div className="space-y-6 sm:space-y-8">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}

        {filteredProjects.length === 0 && (
          <div className="py-16 text-center text-slate-400 bg-dark-900/40 rounded-2xl border border-slate-800/80 font-mono text-xs">
            <i className="fa-regular fa-folder-open text-2xl text-slate-500 mb-2"></i>
            <p>პროექტი ძიებით "{search}" ვერ მოიძებნა</p>
          </div>
        )}
      </div>
    </div>
  );
}
