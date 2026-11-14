import React, { useState } from 'react';
import SectionHeader from './SectionHeader';
import ProjectCard from './ProjectCard';
import { projects } from '../data/portfolioData';

/**
 * Projects Section Component
 * Fully data-driven category filtering with dynamic project count badges
 */
export default function ProjectsSection() {
  const [filter, setFilter] = useState('all');

  const filterCategories = [
    { id: 'all', label: 'ყველა' },
    { id: 'web', label: 'Web Systems' },
    { id: 'algo', label: 'Algorithms (C++)' },
    { id: 'hardware', label: 'Hardware & IoT' }
  ];

  const filteredProjects = projects.filter((p) => {
    if (filter === 'all') return true;
    return p.category === filter;
  });

  return (
    <section id="projects" className="scroll-mt-24 space-y-6 sm:space-y-8">
      <SectionHeader
        badge="პორტფოლიო & ინჟინერია"
        badgeColor="emerald"
        title="შესრულებული პროექტები"
        icon="fa-solid fa-code-branch"
        description="პრაქტიკული ინჟინერია: ვებ-სერვერები, C++ ალგორითმული სისტემები და აპარატურული ტელემეტრია"
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
                      ? 'bg-tech-emerald/20 text-tech-emerald border border-tech-emerald/40 font-semibold'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <span>{cat.label}</span>
                  <span className="text-[10px] opacity-70 px-1 py-0.2 rounded bg-dark-950">
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        }
      />

      {/* Render Project Cards */}
      <div className="space-y-6 sm:space-y-8">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
