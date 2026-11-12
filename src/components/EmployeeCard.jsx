import React from 'react';

/**
 * Reusable Employee Card Component
 * Renders data fetched from the JSONPlaceholder API with responsive actions and styling
 */
export default function EmployeeCard({ employee, onDelete }) {
  const { id, name, username, email, phone, website, company, address } = employee;

  // Generate initials for the avatar badge
  const initials = name
    ? name
        .split(' ')
        .map((part) => part[0])
        .slice(0, 2)
        .join('')
        .toUpperCase()
    : 'U';

  // Deterministic avatar gradient based on id
  const gradients = [
    'from-indigo-600 to-cyan-500',
    'from-purple-600 to-pink-500',
    'from-emerald-600 to-teal-500',
    'from-amber-600 to-orange-500',
    'from-blue-600 to-indigo-500'
  ];
  const gradient = gradients[(id || 0) % gradients.length];

  return (
    <article className="group bg-slate-900/60 hover:bg-slate-900/95 border border-slate-800/90 hover:border-indigo-500/50 rounded-2xl p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1 shadow-lg flex flex-col justify-between relative overflow-hidden">
      {/* Top subtle glow */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-500/5 rounded-full blur-2xl group-hover:bg-indigo-500/10 pointer-events-none transition-all"></div>

      <div>
        {/* Header with Avatar & User Info */}
        <div className="flex items-start justify-between gap-3 mb-4">
          <div className="flex items-center gap-3">
            <div
              className={`w-12 h-12 rounded-xl bg-gradient-to-tr ${gradient} flex items-center justify-center font-bold text-white text-base shadow-md shadow-indigo-500/10 flex-shrink-0`}
            >
              {initials}
            </div>
            <div>
              <h3 className="text-base font-bold text-white group-hover:text-indigo-300 transition-colors">
                {name}
              </h3>
              <p className="text-xs text-indigo-400 font-mono">@{username || 'user'}</p>
            </div>
          </div>
          <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-800 text-slate-400 border border-slate-700/60">
            ID #{id}
          </span>
        </div>

        {/* Details list */}
        <div className="space-y-2 text-xs sm:text-sm text-slate-300 py-2 border-t border-slate-800/80">
          <div className="flex items-center gap-2">
            <i className="fa-regular fa-envelope text-slate-400 w-4 text-center"></i>
            <a
              href={`mailto:${email}`}
              className="text-slate-300 hover:text-indigo-300 truncate transition-colors"
            >
              {email}
            </a>
          </div>

          {phone && (
            <div className="flex items-center gap-2">
              <i className="fa-solid fa-phone text-slate-400 w-4 text-center"></i>
              <span className="truncate">{phone}</span>
            </div>
          )}

          {company && (
            <div className="flex items-center gap-2">
              <i className="fa-solid fa-building text-slate-400 w-4 text-center"></i>
              <span className="truncate text-slate-300 font-medium">
                {company.name || company}
              </span>
            </div>
          )}

          {address && (
            <div className="flex items-center gap-2">
              <i className="fa-solid fa-location-dot text-slate-400 w-4 text-center"></i>
              <span className="truncate text-slate-400">
                {address.city ? `${address.city}, ${address.street || ''}` : address}
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Footer Actions */}
      <div className="pt-4 mt-3 border-t border-slate-800/80 flex items-center justify-between gap-2">
        {website ? (
          <a
            href={`https://${website}`}
            target="_blank"
            rel="noreferrer"
            className="text-xs font-mono text-cyan-400 hover:text-cyan-300 flex items-center gap-1.5 transition-colors"
          >
            <i className="fa-solid fa-globe"></i>
            <span>{website}</span>
          </a>
        ) : (
          <span className="text-xs text-slate-500 font-mono">No website</span>
        )}

        {onDelete && (
          <button
            onClick={() => onDelete(id)}
            title="თანამშრომლის წაშლა (Client-side)"
            className="p-1.5 text-slate-500 hover:text-rose-400 hover:bg-rose-500/10 rounded-lg transition-colors"
          >
            <i className="fa-regular fa-trash-can text-sm"></i>
          </button>
        )}
      </div>
    </article>
  );
}
