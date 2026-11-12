import React from 'react';
import SectionHeader from './SectionHeader';
import StatCard from './StatCard';
import { personalInfo } from '../data/portfolioData';

/**
 * About Section Component
 * Displays biographical information and reusable stat cards
 */
export default function AboutSection() {
  return (
    <section id="about" className="scroll-mt-24 space-y-8">
      <SectionHeader
        badge="ბიოგრაფია & პროფილი"
        badgeColor="purple"
        title="ჩემ შესახებ"
        icon="fa-regular fa-user"
        description="ტექნიკური განათლება, ინტერესები და პროფესიული ფილოსოფია"
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
        {/* About Bio Text */}
        <div className="lg:col-span-2 space-y-4 text-slate-300 leading-relaxed text-sm sm:text-base">
          <p className="bg-slate-900/40 p-5 rounded-2xl border border-slate-800/80">
            {personalInfo.about}
          </p>
          <div className="flex flex-wrap gap-2 text-xs font-mono text-indigo-300">
            <span className="px-3 py-1.5 rounded-lg bg-indigo-500/10 border border-indigo-500/20">
              <i className="fa-solid fa-graduation-cap mr-1.5"></i>GeoLab Student
            </span>
            <span className="px-3 py-1.5 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-300">
              <i className="fa-solid fa-laptop-code mr-1.5"></i>Full-Stack Developer
            </span>
            <span className="px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-300">
              <i className="fa-solid fa-microchip mr-1.5"></i>Systems Enthusiast
            </span>
          </div>
        </div>

        {/* Stats Grid using reusable StatCard */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4">
          {personalInfo.stats.map((stat, idx) => (
            <StatCard
              key={idx}
              value={stat.value}
              label={stat.label}
              icon={stat.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
