import React from 'react';

/**
 * Reusable Skill / Specialization Card Component
 * Engineering aesthetic with category tags, clean border line, and micro-hover
 */
export default function SkillCard({
  badge,
  iconText,
  iconColor = "cyan",
  title,
  subtitle,
  description,
  tags = []
}) {
  const themeMap = {
    cyan: {
      accentLine: "bg-cyan-500",
      iconBg: "bg-cyan-950/60 text-tech-cyan border-cyan-500/30",
      borderHover: "hover:border-cyan-500/50",
      tagBorder: "border-cyan-500/20 text-cyan-200/90"
    },
    emerald: {
      accentLine: "bg-emerald-500",
      iconBg: "bg-emerald-950/60 text-tech-emerald border-emerald-500/30",
      borderHover: "hover:border-emerald-500/50",
      tagBorder: "border-emerald-500/20 text-emerald-200/90"
    },
    amber: {
      accentLine: "bg-amber-500",
      iconBg: "bg-amber-950/60 text-tech-amber border-amber-500/30",
      borderHover: "hover:border-amber-500/50",
      tagBorder: "border-amber-500/20 text-amber-200/90"
    },
    violet: {
      accentLine: "bg-violet-500",
      iconBg: "bg-violet-950/60 text-tech-violet border-violet-500/30",
      borderHover: "hover:border-violet-500/50",
      tagBorder: "border-violet-500/20 text-violet-200/90"
    }
  };

  const theme = themeMap[iconColor] || themeMap.cyan;

  return (
    <article
      className={`group relative bg-dark-900/70 hover:bg-dark-850/90 border border-slate-800/90 ${theme.borderHover} rounded-2xl p-5 sm:p-6 transition-all duration-300 card-hover-effect flex flex-col justify-between overflow-hidden shadow-lg`}
    >
      {/* Top Category Accent Line */}
      <div className={`absolute top-0 left-0 right-0 h-[2px] ${theme.accentLine} opacity-80 group-hover:opacity-100 transition-opacity`}></div>

      <div className="space-y-3.5">
        <div className="flex items-center justify-between gap-3">
          <div
            className={`w-11 h-11 rounded-xl border flex items-center justify-center font-mono font-bold text-base transition-transform group-hover:scale-105 ${theme.iconBg}`}
          >
            {iconText}
          </div>
          {badge && (
            <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-dark-950 border border-slate-800 text-slate-400">
              {badge}
            </span>
          )}
        </div>

        <div>
          <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-slate-100 transition-colors">
            {title}
          </h3>
          {subtitle && (
            <p className="text-xs font-mono text-slate-400 mt-0.5">
              {subtitle}
            </p>
          )}
        </div>

        <p className="text-xs sm:text-sm text-slate-300/90 leading-relaxed">
          {description}
        </p>
      </div>

      {tags && tags.length > 0 && (
        <div className="pt-4 mt-4 border-t border-slate-800/80 flex flex-wrap gap-1.5">
          {tags.map((tag, idx) => (
            <span
              key={idx}
              className={`px-2 py-0.5 rounded-md text-[11px] font-mono bg-dark-950/80 border ${theme.tagBorder}`}
            >
              #{tag}
            </span>
          ))}
        </div>
      )}
    </article>
  );
}
