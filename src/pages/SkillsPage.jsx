import React from 'react';
import Specializations from '../components/Specializations';
import TerminalWidget from '../components/TerminalWidget';

/**
 * Skills / Specialization Page (Route: "/skills")
 * Comprehensive breakdown of C++, Web, Embedded and OS disciplines
 */
export default function SkillsPage() {
  return (
    <div className="space-y-12 animate-fade-in">
      <Specializations />
      <div className="space-y-4 pt-4">
        <h3 className="text-base font-bold text-white font-mono flex items-center gap-2">
          <i className="fa-solid fa-terminal text-tech-cyan"></i>
          <span>სისტემური გარემო &amp; ხელსაწყოები</span>
        </h3>
        <TerminalWidget />
      </div>
    </div>
  );
}
