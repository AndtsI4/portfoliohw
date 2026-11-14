import React, { useState } from 'react';
import SectionHeader from './SectionHeader';
import { personalInfo } from '../data/portfolioData';

/**
 * Contact Section Component
 * Interactive form with client validation, character counters, and copy email utility
 */
export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard?.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="scroll-mt-24 space-y-6 sm:space-y-8">
      <SectionHeader
        badge="კომუნიკაცია & კონტაქტი"
        badgeColor="cyan"
        title="საკონტაქტო არხები"
        icon="fa-regular fa-envelope"
        description="ტექნიკური თანამშრომლობისთვის, კოდის განხილვისთვის ან შეკითხვებისთვის"
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
        {/* Contact Info Cards */}
        <div className="lg:col-span-5 space-y-3.5">
          {/* Email Card with Copy button */}
          <div className="bg-dark-900/80 border border-slate-800/90 rounded-2xl p-5 space-y-2.5 transition-colors hover:border-slate-700">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-slate-500 uppercase">Direct Email</span>
              <button
                onClick={handleCopyEmail}
                className="text-[11px] font-mono px-2 py-0.5 rounded bg-dark-950 border border-slate-800 text-tech-cyan hover:text-white transition-colors"
              >
                {copied ? '✓ დაკოპირდა!' : 'დააკოპირე'}
              </button>
            </div>
            <a
              href={`mailto:${personalInfo.email}`}
              className="text-sm sm:text-base font-mono text-slate-200 hover:text-tech-cyan break-all transition-colors block font-semibold"
            >
              {personalInfo.email}
            </a>
            <p className="text-xs text-slate-400">
              სამუშაო და სასწავლო ელ-ფოსტა GeoLab-ში
            </p>
          </div>

          {/* GitHub Card */}
          <div className="bg-dark-900/80 border border-slate-800/90 rounded-2xl p-5 space-y-2 transition-colors hover:border-slate-700">
            <span className="text-xs font-mono text-slate-500 uppercase">Repository Hub</span>
            <div className="flex items-center justify-between pt-1">
              <span className="text-sm font-mono text-slate-200 font-semibold">
                github.com/AndtsI4
              </span>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-xl bg-dark-950 border border-slate-800 text-slate-400 hover:text-white transition-colors"
              >
                <i className="fa-brands fa-github text-base"></i>
              </a>
            </div>
            <p className="text-xs text-slate-400">
              C++, Python, React და Arduino რეპოზიტორიები
            </p>
          </div>

          {/* Academy Info */}
          <div className="bg-dark-900/80 border border-slate-800/90 rounded-2xl p-5 space-y-1.5 font-mono text-xs">
            <div className="flex items-center gap-2 text-slate-300 font-semibold">
              <i className="fa-solid fa-graduation-cap text-tech-cyan"></i>
              <span>GeoLab Full-Stack 2026</span>
            </div>
            <p className="text-slate-500">
              Tbilisi, Georgia &bull; Remote &bull; UTC+4
            </p>
          </div>
        </div>

        {/* Interactive Form */}
        <div className="lg:col-span-7 bg-dark-900/80 border border-slate-800/90 rounded-3xl p-6 sm:p-7 shadow-xl">
          <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-800/80">
            <h3 className="text-sm sm:text-base font-bold text-white flex items-center gap-2 font-mono">
              <i className="fa-regular fa-paper-plane text-tech-cyan"></i>
              <span>message.send()</span>
            </h3>
            <span className="text-[11px] font-mono text-slate-500">
              React State Controlled
            </span>
          </div>

          {submitted ? (
            <div className="py-12 text-center space-y-3 bg-dark-950/80 border border-emerald-500/30 rounded-2xl animate-fade-in font-mono">
              <i className="fa-solid fa-circle-check text-3xl text-tech-emerald"></i>
              <h4 className="text-sm sm:text-base font-bold text-white">
                შეტყობინება წარმატებით გაიგზავნა!
              </h4>
              <p className="text-xs text-slate-400 max-w-sm mx-auto">
                მადლობა დაკავშირებისთვის. შეტყობინება დამუშავებულია React state-ში.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 font-mono text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-400 mb-1.5">თქვენი სახელი *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="მაგ: გიორგი ბერიძე"
                    className="w-full bg-dark-950 border border-slate-800 focus:border-tech-cyan rounded-xl px-3.5 py-2.5 text-slate-200 outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-slate-400 mb-1.5">ელ-ფოსტა *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@example.com"
                    className="w-full bg-dark-950 border border-slate-800 focus:border-tech-cyan rounded-xl px-3.5 py-2.5 text-slate-200 outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-slate-400 mb-1.5">თემა</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="თანამშრომლობა / ალგორითმული პროექტი"
                  className="w-full bg-dark-950 border border-slate-800 focus:border-tech-cyan rounded-xl px-3.5 py-2.5 text-slate-200 outline-none transition-colors"
                />
              </div>

              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="text-slate-400">შეტყობინების ტექსტი *</label>
                  <span className="text-[10px] text-slate-500">
                    {formData.message.length} / 500 სიმბოლო
                  </span>
                </div>
                <textarea
                  name="message"
                  required
                  rows="4"
                  maxLength={500}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="დაწერეთ თქვენი შეტყობინება აქ..."
                  className="w-full bg-dark-950 border border-slate-800 focus:border-tech-cyan rounded-xl px-3.5 py-2.5 text-slate-200 outline-none transition-colors resize-none font-sans text-xs sm:text-sm"
                ></textarea>
              </div>

              <div className="flex items-center justify-between pt-2">
                <button
                  type="button"
                  onClick={() => setFormData({ name: '', email: '', subject: '', message: '' })}
                  className="text-slate-500 hover:text-slate-300 text-xs"
                >
                  გასუფთავება
                </button>

                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-xl font-bold text-dark-950 bg-tech-cyan hover:bg-cyan-300 transition-colors flex items-center gap-2"
                >
                  <i className="fa-regular fa-paper-plane text-xs"></i>
                  <span>გაგზავნა</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
