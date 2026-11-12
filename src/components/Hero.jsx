import React from 'react';
import { personalInfo } from '../data/portfolioData';

/**
 * Hero Section Component
 * Welcomes visitors with introduction, status indicators, and call-to-actions
 */
export default function Hero({ onNavigate }) {
  return (
    <section id="hero" className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-14 pt-4 sm:pt-10">
      <div className="flex-1 space-y-5 sm:space-y-6 text-center md:text-left">
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shadow-sm max-w-full text-left">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse flex-shrink-0"></span>
          <span className="break-words">{personalInfo.status}</span>
        </div>

        <div className="space-y-2 sm:space-y-3">
          <span className="text-xs sm:text-sm font-mono text-indigo-400 uppercase tracking-widest block">
            მოგესალმებით ჩემს პორტფოლიოში
          </span>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
            მე ვარ{' '}
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              {personalInfo.name}
            </span>
          </h2>
        </div>

        <p className="text-sm sm:text-base md:text-lg text-slate-300 leading-relaxed max-w-2xl">
          {personalInfo.tagline}
        </p>

        <p className="text-xs sm:text-sm md:text-base text-slate-400 leading-relaxed max-w-xl">
          პროექტი გარდაქმნილია თანამედროვე <strong>React</strong> კომპონენტებად, მრავალჯერადად გამოყენებადი ბარათებითა და დინამიური მონაცემებით.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center md:justify-start gap-3 pt-2">
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('#projects');
            }}
            className="px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 shadow-lg shadow-indigo-600/30 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 text-center text-sm sm:text-base"
          >
            <span>ნახე პროექტები</span>
            <i className="fa-solid fa-arrow-right text-xs"></i>
          </a>
          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('#about');
            }}
            className="px-6 py-3 rounded-xl font-semibold text-slate-200 bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 hover:border-slate-600 hover:text-white transition-all text-center text-sm sm:text-base"
          >
            ჩემ შესახებ
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('#contact');
            }}
            className="px-6 py-3 rounded-xl font-medium text-slate-400 hover:text-indigo-300 transition-colors text-center text-sm sm:text-base"
          >
            კონტაქტი &rarr;
          </a>
        </div>
      </div>

      {/* Profile Avatar with Glowing Backing */}
      <div className="flex-shrink-0 relative group">
        <div className="absolute -inset-1 bg-gradient-to-tr from-indigo-500 via-purple-500 to-cyan-400 rounded-3xl blur opacity-70 group-hover:opacity-100 transition duration-500"></div>
        <div className="relative bg-slate-900 p-2 sm:p-3 rounded-3xl border border-slate-800 shadow-2xl">
          <img
            src="/images/avatar.svg"
            alt={personalInfo.name}
            width="220"
            height="220"
            className="w-36 h-36 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-2xl object-cover transform group-hover:scale-[1.02] transition-transform duration-300"
          />
        </div>
      </div>
    </section>
  );
}
