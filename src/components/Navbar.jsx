import React, { useState } from 'react';
import { personalInfo, navItems } from '../data/portfolioData';

/**
 * Responsive Header & Navigation Component
 * Features desktop navigation, mobile burger menu toggle with state, and smooth scroll
 */
export default function Navbar({ activeSection, onNavigate }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  const handleLinkClick = (href) => {
    setMobileMenuOpen(false);
    if (onNavigate) {
      onNavigate(href);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between">
        {/* Logo and Brand */}
        <div className="flex items-center gap-3">
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('#hero');
            }}
            className="flex items-center gap-3 group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-cyan-400 flex items-center justify-center font-bold text-white shadow-lg shadow-indigo-500/20 group-hover:scale-105 transition-transform">
              {personalInfo.initials}
            </div>
            <div>
              <h1 className="text-base sm:text-lg font-bold bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent group-hover:from-indigo-400 group-hover:to-cyan-400 transition-colors">
                {personalInfo.name}
              </h1>
              <p className="text-xs text-indigo-400 font-mono hidden sm:block">
                Portfolio &bull; React
              </p>
            </div>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-1 sm:gap-2">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.replace('#', '');
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick(item.href);
                    }}
                    className={`px-3 sm:px-4 py-2 rounded-xl text-sm font-medium transition-all flex items-center gap-1.5 ${
                      isActive
                        ? 'bg-indigo-600/20 text-indigo-300 border border-indigo-500/30 shadow-sm font-semibold'
                        : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                    }`}
                  >
                    <i className={`${item.icon} text-xs`}></i>
                    <span>{item.label}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={toggleMobileMenu}
          className="md:hidden inline-flex items-center justify-center p-2.5 rounded-xl text-slate-300 hover:text-white hover:bg-slate-800/80 border border-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors"
          aria-label={mobileMenuOpen ? "მენიუს დახურვა" : "მენიუს გახსნა"}
          aria-expanded={mobileMenuOpen}
        >
          <i
            className={`fa-solid ${
              mobileMenuOpen ? 'fa-xmark text-xl text-indigo-400' : 'fa-bars text-xl'
            }`}
          ></i>
        </button>
      </div>

      {/* Mobile Drawer Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-800/80 bg-slate-950/95 backdrop-blur-xl px-4 py-3 space-y-1 animate-fadeIn">
          <ul className="flex flex-col space-y-1.5 text-sm font-medium text-slate-300">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.replace('#', '');
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick(item.href);
                    }}
                    className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl transition-colors ${
                      isActive
                        ? 'text-indigo-300 bg-indigo-600/20 border border-indigo-500/30 font-semibold'
                        : 'hover:text-white hover:bg-slate-800/80'
                    }`}
                  >
                    <i className={`${item.icon} w-4 text-center ${isActive ? 'text-indigo-400' : 'text-slate-400'}`}></i>
                    <span>{item.label}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </header>
  );
}
