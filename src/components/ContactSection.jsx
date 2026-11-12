import React, { useState } from 'react';
import SectionHeader from './SectionHeader';
import { personalInfo } from '../data/portfolioData';

/**
 * Contact Section Component
 * Provides contact info links and an interactive controlled contact form with feedback
 */
export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="scroll-mt-24 space-y-6 sm:space-y-8">
      <SectionHeader
        badge="კავშირი"
        badgeColor="indigo"
        title="საკონტაქტო ინფორმაცია"
        icon="fa-regular fa-envelope"
        description="დაინტერესების შემთხვევაში შეგიძლიათ დამიკავშირდეთ ელ-ფოსტით ან შეტყობინების ფორმით"
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
        {/* Contact Information Cards */}
        <div className="space-y-4">
          <div className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-5 space-y-2 hover:border-indigo-500/40 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center text-lg">
              <i className="fa-regular fa-envelope"></i>
            </div>
            <h4 className="text-sm font-semibold text-white">ელ-ფოსტა</h4>
            <a
              href={`mailto:${personalInfo.email}`}
              className="text-xs sm:text-sm text-indigo-400 hover:text-indigo-300 font-mono break-all transition-colors"
            >
              {personalInfo.email}
            </a>
          </div>

          <div className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-5 space-y-2 hover:border-cyan-500/40 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center text-lg">
              <i className="fa-brands fa-github"></i>
            </div>
            <h4 className="text-sm font-semibold text-white">GitHub რეპოზიტორი</h4>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="text-xs sm:text-sm text-cyan-400 hover:text-cyan-300 font-mono transition-colors"
            >
              github.com/AndtsI4
            </a>
          </div>

          <div className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-5 space-y-2 hover:border-purple-500/40 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center text-lg">
              <i className="fa-solid fa-graduation-cap"></i>
            </div>
            <h4 className="text-sm font-semibold text-white">სასწავლებელი</h4>
            <p className="text-xs sm:text-sm text-slate-300 font-mono">
              GeoLab Full-Stack Course
            </p>
          </div>
        </div>

        {/* Interactive Controlled Form */}
        <div className="lg:col-span-2 bg-slate-900/50 border border-slate-800/80 rounded-3xl p-6 sm:p-8">
          <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
            <i className="fa-regular fa-paper-plane text-indigo-400"></i>
            <span>მომწერეთ შეტყობინება</span>
          </h3>

          {submitted ? (
            <div className="py-12 text-center space-y-3 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl animate-fadeIn">
              <i className="fa-solid fa-circle-check text-3xl text-emerald-400"></i>
              <h4 className="text-base font-bold text-white">მადლობა, შეტყობინება გაგზავნილია!</h4>
              <p className="text-xs sm:text-sm text-slate-300 max-w-sm mx-auto">
                თქვენი შეტყობინება წარმატებით დაფიქსირდა (React State Demo).
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    თქვენი სახელი *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="მაგ: გიორგი ბერიძე"
                    className="w-full bg-slate-950/80 border border-slate-800 focus:border-indigo-500 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-slate-200 placeholder-slate-500 focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    ელ-ფოსტა *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@example.com"
                    className="w-full bg-slate-950/80 border border-slate-800 focus:border-indigo-500 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-slate-200 placeholder-slate-500 focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">
                  თემა
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="პროექტის შეთავაზება / თანამშრომლობა"
                  className="w-full bg-slate-950/80 border border-slate-800 focus:border-indigo-500 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-slate-200 placeholder-slate-500 focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">
                  შეტყობინება *
                </label>
                <textarea
                  name="message"
                  required
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="დაწერეთ თქვენი შეტყობინება აქ..."
                  className="w-full bg-slate-950/80 border border-slate-800 focus:border-indigo-500 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-slate-200 placeholder-slate-500 focus:outline-none transition-colors resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-indigo-600 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 shadow-lg shadow-indigo-600/30 transition-all flex items-center justify-center gap-2 text-sm"
              >
                <i className="fa-regular fa-paper-plane text-xs"></i>
                <span>შეტყობინების გაგზავნა</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
