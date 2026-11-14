import React from 'react';
import SectionHeader from './SectionHeader';
import StatCard from './StatCard';
import TerminalWidget from './TerminalWidget';
import { personalInfo } from '../data/portfolioData';

/**
 * About Section Component
 * Biographical overview, technical philosophy, stat cards, and interactive terminal
 */
export default function AboutSection() {
  return (
    <section id="about" className="scroll-mt-24 space-y-8">
      <SectionHeader
        badge="პროფილი & ფილოსოფია"
        badgeColor="violet"
        title="ჩემ შესახებ"
        icon="fa-regular fa-user"
        description="სისტემური აზროვნება, ალგორითმული სიზუსტე და მინიმალისტური დეველოპმენტის პრინციპები"
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
        {/* Narrative & Bio */}
        <div className="lg:col-span-7 space-y-5">
          <div className="bg-dark-900/80 p-5 sm:p-6 rounded-2xl border border-slate-800/90 space-y-3 leading-relaxed text-sm sm:text-base text-slate-300">
            <p>{personalInfo.about}</p>
            <div className="pt-2 flex flex-wrap gap-2 text-xs font-mono">
              <span className="px-3 py-1 rounded-md bg-dark-950 border border-tech-cyan/30 text-tech-cyan">
                #competitive-coding
              </span>
              <span className="px-3 py-1 rounded-md bg-dark-950 border border-tech-emerald/30 text-tech-emerald">
                #void-linux-sway
              </span>
              <span className="px-3 py-1 rounded-md bg-dark-950 border border-tech-amber/30 text-tech-amber">
                #arduino-hardware
              </span>
              <span className="px-3 py-1 rounded-md bg-dark-950 border border-tech-violet/30 text-tech-violet">
                #react-fullstack
              </span>
            </div>
          </div>

          {/* Interactive Terminal Specs */}
          <TerminalWidget />
        </div>

        {/* Stats Grid */}
        <div className="lg:col-span-5 grid grid-cols-2 gap-3 sm:gap-4">
          {personalInfo.stats.map((stat, idx) => (
            <StatCard
              key={idx}
              value={stat.value}
              label={stat.label}
              icon={stat.icon}
              hint={stat.hint}
            />
          ))}

          {/* GeoLab Status Box */}
          <div className="col-span-2 bg-dark-900/60 border border-slate-800/90 rounded-2xl p-4 text-xs font-mono text-slate-400 space-y-1">
            <div className="flex items-center justify-between text-slate-300 font-semibold">
              <span className="flex items-center gap-1.5 text-tech-cyan">
                <i className="fa-solid fa-graduation-cap"></i>
                GeoLab Academy
              </span>
              <span className="text-[10px] px-2 py-0.5 rounded bg-dark-950 border border-slate-800 text-slate-400">
                Full-Stack Course
              </span>
            </div>
            <p className="text-slate-400 pt-1">
              პრაქტიკული ვებ-დეველოპმენტი, React კომპონენტური არქიტექტურა, RESTful API ინტეგრაცია და Git workflow.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
