import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import Specializations from './components/Specializations';
import ProjectsSection from './components/ProjectsSection';
import EmployeesSection from './components/EmployeesSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');

  // Handle section scrolling and update hash
  const handleNavigate = (href) => {
    const targetId = href.replace('#', '');
    setActiveSection(targetId);
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      if (window.history.pushState) {
        window.history.pushState(null, '', href);
      }
    }
  };

  // Precise scroll spy using getBoundingClientRect
  useEffect(() => {
    const sectionIds = ['hero', 'about', 'skills', 'projects', 'employees', 'contact'];
    
    const handleScroll = () => {
      const triggerPoint = 160;
      let current = 'hero';

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= triggerPoint) {
            current = id;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // initial call
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-dark-950 text-slate-100 min-h-screen flex flex-col font-sans selection:bg-tech-cyan selection:text-dark-950 relative overflow-x-hidden">
      {/* Precision Technical Engineering Background Pattern */}
      <div className="fixed inset-0 bg-tech-grid opacity-60 pointer-events-none -z-10"></div>
      <div className="fixed inset-0 vignette-overlay pointer-events-none -z-10"></div>
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-80 bg-gradient-to-b from-cyan-500/[0.035] to-transparent pointer-events-none -z-10"></div>

      {/* Header & Navigation */}
      <Navbar activeSection={activeSection} onNavigate={handleNavigate} />

      {/* Main Content Sections */}
      <main className="flex-grow max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-12 space-y-16 sm:space-y-24">
        <Hero onNavigate={handleNavigate} />
        <AboutSection />
        <Specializations />
        <ProjectsSection />
        <EmployeesSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
