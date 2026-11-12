import React from 'react';

/**
 * Reusable Stat Card Component
 * Highlights achievements, metrics and quick stats
 */
export default function StatCard({ value, label, icon }) {
  return (
    <div className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-4 sm:p-5 text-center flex flex-col items-center justify-center space-y-1 hover:border-indigo-500/40 transition-colors shadow-lg">
      {icon && (
        <div className="w-8 h-8 rounded-lg bg-indigo-500/10 text-indigo-400 flex items-center justify-center text-sm mb-1">
          <i className={icon}></i>
        </div>
      )}
      <div className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
        {value}
      </div>
      <div className="text-xs text-slate-400 font-medium">
        {label}
      </div>
    </div>
  );
}
