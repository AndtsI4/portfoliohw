import React from 'react';

/**
 * Reusable Section Header Component
 * Provides clean engineering typography, status pill, and action controls
 */
export default function SectionHeader({
  badge,
  badgeColor = "cyan",
  title,
  icon,
  description,
  action
}) {
  const badgeColors = {
    cyan: "text-tech-cyan bg-cyan-950/40 border-cyan-500/30",
    emerald: "text-tech-emerald bg-emerald-950/40 border-emerald-500/30",
    amber: "text-tech-amber bg-amber-950/40 border-amber-500/30",
    violet: "text-tech-violet bg-violet-950/40 border-violet-500/30",
    indigo: "text-indigo-300 bg-indigo-950/40 border-indigo-500/30"
  };

  const currentBadgeClass = badgeColors[badgeColor] || badgeColors.cyan;

  return (
    <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-800/80 pb-5">
      <div className="space-y-1.5">
        {badge && (
          <div className="flex items-center gap-2">
            <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-[11px] font-mono tracking-wider uppercase border ${currentBadgeClass}`}>
              <span className="w-1.5 h-1.5 rounded-full bg-current opacity-80"></span>
              {badge}
            </span>
          </div>
        )}
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white flex items-center gap-3 tracking-tight">
          {icon && <i className={`${icon} text-tech-cyan text-xl`}></i>}
          <span>{title}</span>
        </h2>
        {description && (
          <p className="text-xs sm:text-sm text-slate-400 max-w-2xl leading-relaxed">
            {description}
          </p>
        )}
      </div>
      {action && (
        <div className="flex-shrink-0 pt-1 sm:pt-0">
          {action}
        </div>
      )}
    </div>
  );
}
