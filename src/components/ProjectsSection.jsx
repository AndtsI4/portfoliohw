import React, { useState } from 'react';
import SectionHeader from './SectionHeader';
import ProjectCard from './ProjectCard';
import { projects } from '../data/portfolioData';

/**
 * Projects Section Component
 * Features dynamic category filtering and renders reusable ProjectCard components
 */
export default function ProjectsSection() {
  const [filter, setFilter] = useState('all');

  const filterCategories = [
    { id: 'all', label: 'ყველა პროექტი' },
    { id: 'web', label: 'Web Development' },
    { id: 'algo', label: 'C++ Algorithms' },
    { id: 'hardware', label: 'Hardware & IoT' }
  ];

  const filteredProjects = projects.filter((p) => {
    if (filter === 'web') return p.id === 'ecommerce';
    if (filter === 'algo') return p.id === 'cpp-coding';
    if (filter === 'hardware') return p.id === 'arduino-iot';
    return true;
  });

  return (
    <section id="projects" className="scroll-mt-24 space-y-6 sm:space-y-8">
      <SectionHeader
        badge="პორტფოლიო & ნამუშევრები"
        badgeColor="cyan"
        title="შესრულებული პროექტები"
        icon="fa-solid fa-layer-group"
        description="სხვადასხვა მიმართულებით შექმნილი პრაქტიკული პროექტები: ვებ-აპლიკაციები, ალგორითმები და აპარატურა"
        action={
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {filterCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all ${
                  filter === cat.id
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                    : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        }
      />

      {/* Render reusable ProjectCards */}
      <div className="space-y-6 sm:space-y-8">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
