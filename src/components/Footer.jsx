import React from 'react';
import { personalInfo, navItems } from '../data/portfolioData';

/**
 * Footer Component
 * Clean, responsive footer with brand initials, navigation links, and credits
 */
export default function Footer({ onNavigate }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-slate-800/80 bg-slate-950/80 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Navigation Quick Links */}
        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 text-center sm:text-left">
          <span className="text-xs uppercase tracking-wider text-slate-500 font-mono">
            ნავიგაცია:
          </span>
          <ul className="flex flex-wrap items-center justify-center gap-3 sm:gap-5 text-sm text-slate-400 font-medium">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    if (onNavigate) onNavigate(item.href);
                  }}
                  className="hover:text-white transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact info and copyright */}
        <div className="text-center md:text-right text-xs text-slate-400 space-y-1.5">
          <p className="flex flex-wrap items-center justify-center md:justify-end gap-1.5">
            <span className="text-slate-500">ელ-ფოსტა:</span>
            <a
              href={`mailto:${personalInfo.email}`}
              className="text-indigo-400 hover:text-indigo-300 hover:underline font-mono break-all"
            >
              {personalInfo.email}
            </a>
          </p>
          <p className="text-slate-500">
            &copy; {currentYear} {personalInfo.name} &bull; Built with React &amp; Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
