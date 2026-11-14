import React from 'react';

/**
 * Reusable Stat Card Component
 * Crisp technical metric card with icon, gradient number, and descriptive hint
 */
export default function StatCard({ value, label, icon, hint }) {
  return (
    <div className="bg-dark-900/80 border border-slate-800/90 hover:border-slate-700/80 rounded-2xl p-4 sm:p-5 text-center flex flex-col items-center justify-center space-y-1.5 transition-all duration-300 card-hover-effect shadow-lg group">
      {icon && (
        <div className="w-8 h-8 rounded-lg bg-dark-950 border border-slate-800 text-tech-cyan flex items-center justify-center text-xs mb-0.5 group-hover:scale-110 transition-transform">
          <i className={icon}></i>
        </div>
      )}
      <div className="text-xl sm:text-2xl font-mono font-bold text-white tracking-tight">
        {value}
      </div>
      <div className="text-xs text-slate-300 font-medium">
        {label}
      </div>
      {hint && (
        <div className="text-[10px] font-mono text-slate-500">
          {hint}
        </div>
      )}
    </div>
  );
}
