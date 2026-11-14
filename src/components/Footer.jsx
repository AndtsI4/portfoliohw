import React from 'react';
import { personalInfo, navItems } from '../data/portfolioData';

/**
 * Footer Component
 * Clean engineering footer with navigation, system uptime note, and copyright
 */
export default function Footer({ onNavigate }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-slate-800/80 bg-dark-950/90 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-6 font-mono text-xs">
        {/* Navigation Quick Links */}
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
          <span className="text-slate-500 uppercase text-[10px]">
            Index:
          </span>
          <ul className="flex flex-wrap items-center justify-center gap-3 text-slate-400">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    if (onNavigate) onNavigate(item.href);
                  }}
                  className="hover:text-tech-cyan transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact info and copyright */}
        <div className="text-center md:text-right text-slate-400 space-y-1">
          <p className="flex items-center justify-center md:justify-end gap-1.5">
            <span className="text-slate-600">contact:</span>
            <a
              href={`mailto:${personalInfo.email}`}
              className="text-tech-cyan hover:underline break-all"
            >
              {personalInfo.email}
            </a>
          </p>
          <p className="text-slate-600 text-[11px]">
            &copy; {currentYear} {personalInfo.name} &bull; Built with React 18 &amp; Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
