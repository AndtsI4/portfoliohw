import React, { useState } from 'react';

/**
 * Reusable Project Card Component
 * Engineering layout with expandable architecture highlights, metrics, and repository links
 */
export default function ProjectCard({ project }) {
  const [showDetails, setShowDetails] = useState(false);

  const {
    id,
    title,
    badge,
    badgeColor = "cyan",
    description,
    metrics,
    technologies,
    tags = [],
    image,
    githubUrl,
    demoUrl,
    highlights = []
  } = project;

  const colorMap = {
    cyan: {
      badge: "bg-cyan-950/60 text-tech-cyan border-cyan-500/30",
      accent: "hover:border-cyan-500/40",
      btn: "text-tech-cyan border-cyan-500/30 hover:bg-cyan-950/40"
    },
    emerald: {
      badge: "bg-emerald-950/60 text-tech-emerald border-emerald-500/30",
      accent: "hover:border-emerald-500/40",
      btn: "text-tech-emerald border-emerald-500/30 hover:bg-emerald-950/40"
    },
    amber: {
      badge: "bg-amber-950/60 text-tech-amber border-amber-500/30",
      accent: "hover:border-amber-500/40",
      btn: "text-tech-amber border-amber-500/30 hover:bg-amber-950/40"
    }
  };

  const theme = colorMap[badgeColor] || colorMap.cyan;

  return (
    <article
      id={id}
      className={`group bg-dark-900/70 hover:bg-dark-850/90 border border-slate-800/90 ${theme.accent} rounded-3xl p-5 sm:p-7 transition-all duration-300 card-hover-effect flex flex-col lg:flex-row items-center gap-6 sm:gap-8 shadow-xl`}
    >
      {/* Project Visual / Diagram */}
      <div className="w-full lg:w-5/12 flex-shrink-0 overflow-hidden rounded-2xl border border-slate-800 bg-dark-950 p-2 sm:p-3 relative group-hover:border-slate-700 transition-colors">
        <img
          src={image}
          alt={title}
          width="450"
          height="260"
          className="w-full h-auto object-cover rounded-xl transform group-hover:scale-[1.02] transition-transform duration-500"
        />
        {metrics && (
          <div className="mt-2.5 px-3 py-1.5 rounded-lg bg-dark-900/95 border border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-tech-cyan animate-pulse"></span>
              {metrics}
            </span>
          </div>
        )}
      </div>

      {/* Project Details */}
      <div className="w-full lg:w-7/12 space-y-3.5">
        <div className="flex flex-wrap items-center justify-between gap-2">
          {badge && (
            <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-[11px] font-mono border ${theme.badge}`}>
              <i className="fa-solid fa-code-commit text-[10px]"></i>
              {badge}
            </span>
          )}
          <span className="text-[11px] font-mono text-slate-500">
            project_id: #{id}
          </span>
        </div>

        <h3 className="text-lg sm:text-2xl font-bold text-white group-hover:text-slate-100 transition-colors">
          {title}
        </h3>

        <p className="text-xs sm:text-sm text-slate-300/90 leading-relaxed">
          {description}
        </p>

        {technologies && (
          <div className="text-xs text-slate-400 py-1 font-mono">
            <span className="text-slate-500 uppercase text-[10px] block mb-0.5">სტეკი:</span>
            <span className="text-slate-300">{technologies}</span>
          </div>
        )}

        {/* Tech tags */}
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 pt-1">
            {tags.map((tag, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-dark-950 border border-slate-800 text-slate-400"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Expandable Technical Highlights */}
        {highlights && highlights.length > 0 && (
          <div className="pt-2">
            <button
              onClick={() => setShowDetails((prev) => !prev)}
              className="text-xs font-mono text-tech-cyan hover:underline flex items-center gap-1.5 transition-colors"
            >
              <i className={`fa-solid ${showDetails ? 'fa-chevron-up' : 'fa-chevron-down'} text-[10px]`}></i>
              <span>{showDetails ? 'არქიტექტურის დამალვა' : 'არქიტექტურის დეტალები'}</span>
            </button>

            {showDetails && (
              <ul className="mt-2.5 space-y-1.5 p-3 rounded-xl bg-dark-950/80 border border-slate-800 text-xs text-slate-300 font-mono animate-fade-in">
                {highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-tech-cyan">▸</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}

        {/* Action buttons */}
        <div className="flex items-center gap-3 pt-3 border-t border-slate-800/70">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-dark-950 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-700/80 transition-colors"
            >
              <i className="fa-brands fa-github text-sm"></i>
              <span>GitHub კოდი</span>
            </a>
          )}
          {demoUrl && (
            <a
              href={demoUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-tech-cyan/20 hover:bg-tech-cyan/30 text-tech-cyan border border-tech-cyan/30 transition-colors"
            >
              <span>Live Preview</span>
              <i className="fa-solid fa-arrow-up-right-from-square text-xs"></i>
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
