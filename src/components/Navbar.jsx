import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { personalInfo, navItems } from '../data/portfolioData';

/**
 * Responsive Multi-Page Engineering Navbar Component
 * Powered by React Router NavLink for seamless routing
 */
export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu whenever location changes or Escape is pressed
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-dark-950/85 backdrop-blur-md border-b border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        {/* Brand Logo */}
        <div className="flex items-center gap-3">
          <Link
            to="/"
            className="flex items-center gap-2.5 group"
          >
            <div className="w-9 h-9 rounded-xl bg-dark-900 border border-slate-700/80 text-tech-cyan flex items-center justify-center font-mono font-bold text-sm shadow-inner group-hover:border-tech-cyan group-hover:text-white transition-colors">
              {personalInfo.initials}
            </div>
            <div>
              <div className="text-sm sm:text-base font-bold text-white group-hover:text-tech-cyan transition-colors leading-tight">
                {personalInfo.name}
              </div>
              <div className="text-[11px] font-mono text-slate-400 hidden sm:block">
                <span>sway@void</span>
                <span className="text-slate-600"> :: </span>
                <span className="text-tech-emerald">react-router</span>
              </div>
            </div>
          </Link>
        </div>

        {/* Desktop Nav with React Router NavLink */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-1">
            {navItems.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  end={item.path === '/'}
                  className={({ isActive }) =>
                    `px-3 py-1.5 rounded-lg text-xs font-mono transition-all flex items-center gap-1.5 ${
                      isActive
                        ? 'bg-dark-900 text-tech-cyan border border-tech-cyan/30 font-semibold shadow-sm'
                        : 'text-slate-400 hover:text-slate-200 hover:bg-dark-900/60'
                    }`
                  }
                >
                  <i className={`${item.icon} text-[11px]`}></i>
                  <span>{item.label}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Burger Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          className="md:hidden inline-flex items-center justify-center p-2 rounded-xl text-slate-300 hover:text-white bg-dark-900 border border-slate-800 focus:outline-none focus:ring-1 focus:ring-tech-cyan transition-colors"
          aria-label={mobileMenuOpen ? "მენიუს დახურვა" : "მენიუს გახსნა"}
          aria-expanded={mobileMenuOpen}
        >
          <i
            className={`fa-solid ${
              mobileMenuOpen ? 'fa-xmark text-lg text-tech-cyan' : 'fa-bars text-lg'
            }`}
          ></i>
        </button>
      </div>

      {/* Mobile Drawer Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-800 bg-dark-950/95 backdrop-blur-xl px-4 py-3 space-y-1 animate-slide-down">
          <ul className="flex flex-col space-y-1 text-xs font-mono text-slate-300">
            {navItems.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  end={item.path === '/'}
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-3 py-2 rounded-xl transition-colors ${
                      isActive
                        ? 'text-tech-cyan bg-dark-900 border border-tech-cyan/30 font-semibold'
                        : 'hover:text-white hover:bg-dark-900/60'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <i className={`${item.icon} w-4 text-center ${isActive ? 'text-tech-cyan' : 'text-slate-500'}`}></i>
                      <span>{item.label}</span>
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
