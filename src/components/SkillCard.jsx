import React from 'react';

/**
 * Reusable Skill / Specialization Card Component
 * Encapsulates the visual styling for a skill domain with tags and icons
 */
export default function SkillCard({
  iconText,
  iconColor = "indigo",
  title,
  description,
  tags = []
}) {
  const colorMap = {
    indigo: {
      icon: "bg-indigo-600/10 border-indigo-500/20 text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white",
      hoverBorder: "hover:border-indigo-500/50",
      titleHover: "group-hover:text-indigo-400"
    },
    cyan: {
      icon: "bg-cyan-600/10 border-cyan-500/20 text-cyan-400 group-hover:bg-cyan-600 group-hover:text-white",
      hoverBorder: "hover:border-cyan-500/50",
      titleHover: "group-hover:text-cyan-400"
    },
    amber: {
      icon: "bg-amber-600/10 border-amber-500/20 text-amber-400 group-hover:bg-amber-600 group-hover:text-white",
      hoverBorder: "hover:border-amber-500/50",
      titleHover: "group-hover:text-amber-400"
    },
    purple: {
      icon: "bg-purple-600/10 border-purple-500/20 text-purple-400 group-hover:bg-purple-600 group-hover:text-white",
      hoverBorder: "hover:border-purple-500/50",
      titleHover: "group-hover:text-purple-400"
    }
  };

  const currentTheme = colorMap[iconColor] || colorMap.indigo;

  return (
    <article
      className={`group bg-slate-900/50 hover:bg-slate-900/90 border border-slate-800/80 ${currentTheme.hoverBorder} rounded-2xl p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1.5 shadow-lg flex flex-col justify-between`}
    >
      <div className="space-y-3 sm:space-y-4">
        <div
          className={`w-12 h-12 rounded-xl border flex items-center justify-center font-mono font-bold text-lg transition-colors ${currentTheme.icon}`}
        >
          {iconText}
        </div>
        <h3 className={`text-base sm:text-lg font-bold text-white ${currentTheme.titleHover} transition-colors`}>
          {title}
        </h3>
        <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
          {description}
        </p>
      </div>

      {tags && tags.length > 0 && (
        <div className="pt-4 mt-4 border-t border-slate-800/60 flex flex-wrap gap-1.5">
          {tags.map((tag, idx) => (
            <span
              key={idx}
              className="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-800/90 text-slate-300 border border-slate-700/50"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </article>
  );
}
