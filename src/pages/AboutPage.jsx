import React from 'react';
import AboutSection from '../components/AboutSection';
import Specializations from '../components/Specializations';

/**
 * About Page (Route: "/about")
 * Dedicated profile, bio, developer environment & technical competencies
 */
export default function AboutPage() {
  return (
    <div className="space-y-16 animate-fade-in">
      <AboutSection />
      <Specializations />
    </div>
  );
}
