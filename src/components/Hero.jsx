import React from 'react';
import { personalInfo } from '../data/portfolioData';

/**
 * Hero Section Component
 * Modern engineering aesthetic with status pills, terminal intro, and clean actions
 */
export default function Hero({ onNavigate }) {
  return (
    <section id="hero" className="pt-2 sm:pt-8 space-y-8">
      {/* Top Technical Status Banner */}
      <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-mono pb-2 border-b border-slate-800/80 text-slate-400">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-tech-emerald animate-pulse"></span>
          <span className="text-slate-300 font-semibold">{personalInfo.status}</span>
        </div>
        <div className="hidden sm:flex items-center gap-3 text-slate-500">
          <span>HOST: void-linux</span>
          <span>&bull;</span>
          <span>STACK: C++20 / React 18</span>
          <span>&bull;</span>
          <span className="text-tech-cyan">ONLINE</span>
        </div>
      </div>

      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-8 lg:gap-14">
        {/* Left Column: Intro & Bio */}
        <div className="flex-1 space-y-5 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-dark-900 border border-slate-800 text-xs font-mono text-tech-cyan">
            <span>&gt; andria_tsitsishvili:~$</span>
            <span className="text-slate-300">./introduce.sh</span>
            <span className="w-1.5 h-3 bg-tech-cyan animate-terminal-cursor"></span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            მე ვარ{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-tech-cyan">
              {personalInfo.name}
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-normal">
            {personalInfo.tagline}
          </p>

          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-xl">
            პროექტი აგებულია სუფთა <strong>React 18</strong> კომპონენტებით, მოდულარული არქიტექტურითა და JSONPlaceholder API ინტეგრაციით.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2">
            <button
              onClick={() => onNavigate('#projects')}
              className="px-5 py-2.5 rounded-xl font-mono text-xs sm:text-sm font-semibold text-dark-950 bg-tech-cyan hover:bg-cyan-300 transition-all shadow-lg shadow-cyan-950 flex items-center gap-2"
            >
              <span>ნახე პროექტები</span>
              <i className="fa-solid fa-arrow-right text-xs"></i>
            </button>

            <button
              onClick={() => onNavigate('#about')}
              className="px-5 py-2.5 rounded-xl font-mono text-xs sm:text-sm font-medium text-slate-300 bg-dark-900 hover:bg-dark-850 border border-slate-700/80 hover:text-white transition-all"
            >
              ჩემ შესახებ
            </button>

            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2.5 rounded-xl font-mono text-xs sm:text-sm font-medium text-slate-400 hover:text-tech-cyan transition-colors flex items-center gap-2"
            >
              <i className="fa-brands fa-github text-sm"></i>
              <span>GitHub</span>
            </a>
          </div>
        </div>

        {/* Right Column: Technical Avatar Frame */}
        <div className="flex-shrink-0 relative group">
          <div className="relative bg-dark-900 p-3 sm:p-4 rounded-3xl border border-slate-800 shadow-2xl overflow-hidden">
            {/* Engineering Corner Accents */}
            <div className="absolute top-2 left-2 text-[10px] font-mono text-slate-600 select-none">
              [SRC]
            </div>
            <div className="absolute top-2 right-2 text-[10px] font-mono text-tech-emerald select-none">
              VER: 2.0
            </div>

            <div className="relative mt-3 rounded-2xl overflow-hidden bg-dark-950 border border-slate-800/80">
              <img
                src="/images/avatar.svg"
                alt={personalInfo.name}
                width="220"
                height="220"
                className="w-36 h-36 sm:w-48 sm:h-48 md:w-56 md:h-56 object-cover transform group-hover:scale-[1.02] transition-transform duration-300"
              />
            </div>

            <div className="mt-2.5 px-2 flex items-center justify-between text-[11px] font-mono text-slate-500">
              <span>{personalInfo.handle}</span>
              <span className="text-slate-400">sway@void</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
