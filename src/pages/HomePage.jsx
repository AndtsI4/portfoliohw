import React from 'react';
import Hero from '../components/Hero';
import AboutSection from '../components/AboutSection';
import Specializations from '../components/Specializations';
import ProjectsSection from '../components/ProjectsSection';
import EmployeesSection from '../components/EmployeesSection';
import ContactSection from '../components/ContactSection';

/**
 * Home Page (Route: "/")
 * Complete portfolio dashboard and overview
 */
export default function HomePage() {
  return (
    <div className="space-y-16 sm:space-y-24 animate-fade-in">
      <Hero />
      <AboutSection />
      <Specializations />
      <ProjectsSection />
      <EmployeesSection />
      <ContactSection />
    </div>
  );
}
