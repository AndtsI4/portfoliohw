import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import SkillsPage from './pages/SkillsPage';
import ProjectsPage from './pages/ProjectsPage';
import EmployeesPage from './pages/EmployeesPage';
import PostsPage from './pages/PostsPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';

/**
 * Root Application Component
 * Powered by React Router with multi-page routing
 */
export default function App() {
  return (
    <div className="bg-dark-950 text-slate-100 min-h-screen flex flex-col font-sans selection:bg-tech-cyan selection:text-dark-950 relative overflow-x-hidden">
      {/* Precision Technical Engineering Background Pattern */}
      <div className="fixed inset-0 bg-tech-grid opacity-60 pointer-events-none -z-10"></div>
      <div className="fixed inset-0 vignette-overlay pointer-events-none -z-10"></div>
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-80 bg-gradient-to-b from-cyan-500/[0.035] to-transparent pointer-events-none -z-10"></div>

      {/* Automatically scroll to top on page navigation */}
      <ScrollToTop />

      {/* Multi-Page Navigation Header */}
      <Navbar />

      {/* Routed Main Content */}
      <main className="flex-grow max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-12 w-full">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/employees" element={<EmployeesPage />} />
          <Route path="/posts" element={<PostsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
