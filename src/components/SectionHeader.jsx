import React from 'react';

/**
 * Reusable Section Header Component
 * Provides consistent typography, badge, title and optional action element across sections
 */
export default function SectionHeader({
  badge,
  badgeColor = "indigo",
  title,
  icon,
  description,
  action
}) {
  const badgeColorMap = {
    indigo: "text-indigo-400 bg-indigo-500/10 border-indigo-500/20",
    cyan: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
    emerald: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    amber: "text-amber-400 bg-amber-500/10 border-amber-500/20",
    purple: "text-purple-400 bg-purple-500/10 border-purple-500/20"
  };

  const selectedBadgeClasses = badgeColorMap[badgeColor] || badgeColorMap.indigo;

  return (
    <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-800 pb-5">
      <div className="space-y-1">
        {badge && (
          <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider border ${selectedBadgeClasses}`}>
            {badge}
          </span>
        )}
        <h2 className="text-2xl sm:text-3xl font-bold text-white flex items-center gap-3 pt-1">
          {icon && <i className={`${icon} text-indigo-400`}></i>}
          <span>{title}</span>
        </h2>
        {description && (
          <p className="text-xs sm:text-sm text-slate-400 max-w-xl">
            {description}
          </p>
        )}
      </div>
      {action && (
        <div className="flex-shrink-0">
          {action}
        </div>
      )}
    </div>
  );
}
