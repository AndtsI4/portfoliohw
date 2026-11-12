import React from 'react';

/**
 * Reusable Project Card Component
 * Showcases an individual project with interactive image preview, badges, technologies, and action buttons
 */
export default function ProjectCard({ project }) {
  const {
    id,
    title,
    badge,
    badgeColor = "blue",
    description,
    technologies,
    tags = [],
    image,
    githubUrl,
    demoUrl
  } = project;

  const badgeColorMap = {
    blue: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    emerald: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    amber: "bg-amber-500/10 text-amber-400 border-amber-500/20",
    purple: "bg-purple-500/10 text-purple-400 border-purple-500/20"
  };

  const badgeClass = badgeColorMap[badgeColor] || badgeColorMap.blue;

  return (
    <article
      id={id}
      className="group bg-slate-900/50 hover:bg-slate-900/80 border border-slate-800/80 hover:border-indigo-500/40 rounded-3xl p-5 sm:p-8 transition-all duration-300 shadow-xl flex flex-col lg:flex-row items-center gap-6 sm:gap-8"
    >
      {/* Project Image Preview */}
      <div className="w-full lg:w-1/2 flex-shrink-0 overflow-hidden rounded-2xl border border-slate-800 bg-slate-950 group-hover:border-indigo-500/30 transition-all">
        <img
          src={image}
          alt={title}
          width="450"
          height="260"
          className="w-full h-auto object-cover transform group-hover:scale-[1.03] transition-transform duration-500"
        />
      </div>

      {/* Project Details */}
      <div className="w-full lg:w-1/2 space-y-3 sm:space-y-4">
        {badge && (
          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono border ${badgeClass}`}>
            <span>{badge}</span>
          </div>
        )}

        <h3 className="text-lg sm:text-2xl font-bold text-white group-hover:text-indigo-400 transition-colors">
          {title}
        </h3>

        <div className="space-y-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
          {technologies && (
            <p>
              <strong className="text-white">ტექნოლოგიები: </strong>
              <span className="text-indigo-300 font-mono">{technologies}</span>
            </p>
          )}
          <p>
            <strong className="text-white">აღწერა: </strong>
            {description}
          </p>
        </div>

        {/* Tech tags */}
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-1 sm:pt-2">
            {tags.map((tag, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 rounded-lg text-xs font-mono bg-slate-800 text-slate-300 border border-slate-700/60"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Action buttons */}
        <div className="flex items-center gap-3 pt-3">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-slate-800/90 hover:bg-slate-700 text-slate-200 hover:text-white border border-slate-700 transition-colors"
            >
              <i className="fa-brands fa-github text-base"></i>
              <span>GitHub კოდი</span>
            </a>
          )}
          {demoUrl && demoUrl !== "#" && (
            <a
              href={demoUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-indigo-600 hover:bg-indigo-500 text-white transition-colors"
            >
              <span>Live Demo</span>
              <i className="fa-solid fa-arrow-up-right-from-square text-xs"></i>
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
