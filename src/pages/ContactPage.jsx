import React from 'react';
import ContactSection from '../components/ContactSection';
import TerminalWidget from '../components/TerminalWidget';

/**
 * Contact Page (Route: "/contact")
 * Dedicated contact channels, interactive message form, and terminal specs
 */
export default function ContactPage() {
  return (
    <div className="space-y-12 animate-fade-in">
      <ContactSection />
      <div className="space-y-3 pt-4 border-t border-slate-800/80">
        <h4 className="text-xs font-mono uppercase text-slate-500">
          Environment &amp; Communication Endpoint
        </h4>
        <TerminalWidget />
      </div>
    </div>
  );
}
