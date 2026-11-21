import React from 'react';
import { Link } from 'react-router-dom';

/**
 * 404 Not Found Page
 * Technical terminal styling with quick navigation back to home
 */
export default function NotFoundPage() {
  return (
    <div className="py-20 text-center space-y-6 font-mono animate-fade-in">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-rose-500/10 border border-rose-500/20 text-xs text-rose-400">
        <i className="fa-solid fa-triangle-exclamation"></i>
        <span>ERROR 404: ROUTE_NOT_FOUND</span>
      </div>

      <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
        404 <span className="text-slate-600">//</span> <span className="text-tech-cyan">NULL</span>
      </h1>

      <p className="text-xs sm:text-sm text-slate-400 max-w-md mx-auto leading-relaxed">
        მოთხოვნილი მისამართი არ არსებობს ან გადაადგილებულია. სისტემაში მსგავსი მარშრუტი ვერ მოიძებნა.
      </p>

      <div className="pt-2">
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-tech-cyan text-dark-950 hover:bg-cyan-300 transition-colors"
        >
          <i className="fa-solid fa-house text-xs"></i>
          <span>მთავარ გვერდზე დაბრუნება</span>
        </Link>
      </div>
    </div>
  );
}
