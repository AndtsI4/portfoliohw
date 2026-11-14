import React from 'react';

/**
 * Reusable Employee Card Component
 * Engineering layout with avatar initials, company info, external links, and action buttons
 */
export default function EmployeeCard({ employee, onDelete, onViewPosts }) {
  const { id, name, username, email, phone, website, company, address } = employee;

  const initials = name
    ? name
        .split(' ')
        .filter(Boolean)
        .map((p) => p[0])
        .slice(0, 2)
        .join('')
        .toUpperCase()
    : 'U';

  const webUrl = website
    ? website.startsWith('http://') || website.startsWith('https://')
      ? website
      : `https://${website}`
    : null;

  return (
    <article className="group relative bg-dark-900/80 hover:bg-dark-850/95 border border-slate-800/90 hover:border-tech-cyan/40 rounded-2xl p-5 transition-all duration-300 card-hover-effect flex flex-col justify-between shadow-lg">
      <div>
        {/* Header with Avatar and User Info */}
        <div className="flex items-start justify-between gap-3 mb-3.5">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-dark-950 border border-slate-700/80 text-tech-cyan flex items-center justify-center font-mono font-bold text-sm shadow-inner flex-shrink-0 group-hover:border-tech-cyan/60 group-hover:text-white transition-colors">
              {initials}
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-tech-cyan transition-colors leading-tight">
                {name}
              </h3>
              <p className="text-xs text-slate-400 font-mono mt-0.5">
                @{username || 'user'}
              </p>
            </div>
          </div>
          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-dark-950 text-slate-400 border border-slate-800">
            ID:{id}
          </span>
        </div>

        {/* Company & Role */}
        {company && (
          <div className="mb-3 px-3 py-2 rounded-xl bg-dark-950/70 border border-slate-800/80 text-xs">
            <div className="flex items-center gap-1.5 text-slate-300 font-medium">
              <i className="fa-solid fa-briefcase text-[11px] text-tech-cyan"></i>
              <span className="truncate">{company.name}</span>
            </div>
            {company.catchPhrase && (
              <p className="text-[11px] text-slate-500 italic mt-0.5 truncate">
                "{company.catchPhrase}"
              </p>
            )}
          </div>
        )}

        {/* Contact info list */}
        <div className="space-y-1.5 text-xs text-slate-400 font-mono py-1">
          <div className="flex items-center gap-2">
            <i className="fa-regular fa-envelope text-slate-500 w-3.5 text-center"></i>
            <a
              href={`mailto:${email}`}
              className="hover:text-tech-cyan truncate transition-colors"
            >
              {email}
            </a>
          </div>

          {phone && (
            <div className="flex items-center gap-2">
              <i className="fa-solid fa-phone text-slate-500 w-3.5 text-center"></i>
              <span className="truncate text-slate-300">{phone}</span>
            </div>
          )}

          {address && (
            <div className="flex items-center gap-2">
              <i className="fa-solid fa-location-dot text-slate-500 w-3.5 text-center"></i>
              <span className="truncate text-slate-400">
                {address.city}
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Action Footer */}
      <div className="pt-3.5 mt-3 border-t border-slate-800/80 flex items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          {onViewPosts && (
            <button
              onClick={() => onViewPosts(employee)}
              className="px-2.5 py-1 rounded-lg text-[11px] font-mono bg-dark-950 hover:bg-slate-800 text-tech-cyan border border-slate-800 hover:border-tech-cyan/40 transition-colors flex items-center gap-1.5"
              title="თანამშრომლის პოსტების ნახვა"
            >
              <i className="fa-regular fa-newspaper text-[10px]"></i>
              <span>პოსტები</span>
            </button>
          )}

          {webUrl && (
            <a
              href={webUrl}
              target="_blank"
              rel="noreferrer"
              className="text-[11px] font-mono text-slate-400 hover:text-white flex items-center gap-1 transition-colors"
              title="ვებსაიტი"
            >
              <i className="fa-solid fa-globe text-[10px]"></i>
              <span className="hidden sm:inline truncate max-w-[80px]">{website}</span>
            </a>
          )}
        </div>

        {onDelete && (
          <button
            onClick={() => onDelete(id)}
            className="p-1.5 rounded-lg text-slate-500 hover:text-rose-400 hover:bg-rose-500/10 transition-colors"
            title="თანამშრომლის წაშლა (HTTP DELETE Demo)"
          >
            <i className="fa-regular fa-trash-can text-xs"></i>
          </button>
        )}
      </div>
    </article>
  );
}
