import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';

/**
 * Interactive Developer Terminal Widget
 * Showcases the authentic developer environment (Void Linux, Sway, C++, GCC)
 */
export default function TerminalWidget() {
  const [activeTab, setActiveTab] = useState('neofetch');
  const [copied, setCopied] = useState(false);

  const { systemSpecs } = personalInfo;

  const copyContact = () => {
    navigator.clipboard?.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full rounded-2xl bg-dark-900/90 border border-slate-800 shadow-2xl overflow-hidden font-mono text-xs sm:text-sm">
      {/* Terminal Title Bar */}
      <div className="bg-dark-950 px-4 py-2.5 border-b border-slate-800/90 flex items-center justify-between select-none">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-rose-500/80 border border-rose-600/40"></div>
          <div className="w-3 h-3 rounded-full bg-amber-500/80 border border-amber-600/40"></div>
          <div className="w-3 h-3 rounded-full bg-emerald-500/80 border border-emerald-600/40"></div>
          <span className="ml-2 text-slate-400 text-xs hidden sm:inline">
            andria@void-box:~ (sway/wayland)
          </span>
        </div>

        {/* Tab Buttons */}
        <div className="flex items-center gap-1">
          <button
            onClick={() => setActiveTab('neofetch')}
            className={`px-2.5 py-1 rounded-md text-xs transition-colors ${
              activeTab === 'neofetch'
                ? 'bg-slate-800 text-tech-cyan font-bold'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            specs.sh
          </button>
          <button
            onClick={() => setActiveTab('toolchain')}
            className={`px-2.5 py-1 rounded-md text-xs transition-colors ${
              activeTab === 'toolchain'
                ? 'bg-slate-800 text-tech-emerald font-bold'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            toolchain.cfg
          </button>
        </div>
      </div>

      {/* Terminal Body */}
      <div className="p-4 sm:p-5 bg-dark-950/60 leading-relaxed text-slate-300">
        {activeTab === 'neofetch' && (
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-slate-400">
              <span className="text-tech-emerald">andria@void</span>
              <span className="text-slate-600">:</span>
              <span className="text-tech-cyan">~</span>
              <span className="text-slate-500">$</span>
              <span className="text-slate-100">fastfetch --profile dev</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2 text-xs sm:text-sm">
              <div className="space-y-1 text-slate-400 border-r-0 md:border-r border-slate-800/80 pr-2">
                <p>
                  <span className="text-tech-cyan font-semibold">OS: </span>
                  <span className="text-slate-200">{systemSpecs.os}</span>
                </p>
                <p>
                  <span className="text-tech-cyan font-semibold">WM: </span>
                  <span className="text-slate-200">{systemSpecs.wm}</span>
                </p>
                <p>
                  <span className="text-tech-cyan font-semibold">Shell: </span>
                  <span className="text-slate-200">{systemSpecs.shell}</span>
                </p>
                <p>
                  <span className="text-tech-cyan font-semibold">Editor: </span>
                  <span className="text-slate-200">{systemSpecs.editor}</span>
                </p>
              </div>

              <div className="space-y-1 text-slate-400">
                <p>
                  <span className="text-tech-emerald font-semibold">Toolchain: </span>
                  <span className="text-slate-200">{systemSpecs.compilers}</span>
                </p>
                <p>
                  <span className="text-tech-emerald font-semibold">Embedded: </span>
                  <span className="text-slate-200">ATmega328P / Arduino / PlatformIO</span>
                </p>
                <p>
                  <span className="text-tech-emerald font-semibold">Web Stack: </span>
                  <span className="text-slate-200">React 18, Vite, Flask, Tailwind</span>
                </p>
                <p>
                  <span className="text-tech-emerald font-semibold">Status: </span>
                  <span className="text-emerald-400">{systemSpecs.status}</span>
                </p>
              </div>
            </div>

            <div className="pt-2 text-xs text-slate-500 flex items-center justify-between">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                ready for production &amp; algorithm challenges
              </span>
              <button
                onClick={copyContact}
                className="text-slate-400 hover:text-tech-cyan underline underline-offset-2 transition-colors"
              >
                {copied ? '✓ დაკოპირდა!' : 'echo $EMAIL'}
              </button>
            </div>
          </div>
        )}

        {activeTab === 'toolchain' && (
          <div className="space-y-2 text-xs">
            <div className="flex items-center gap-2 text-slate-400">
              <span className="text-tech-emerald">andria@void</span>
              <span className="text-slate-500">:~$ cat ~/.config/toolchain.env</span>
            </div>
            <pre className="text-slate-300 bg-dark-900/80 p-3 rounded-lg border border-slate-800 overflow-x-auto text-[11px] sm:text-xs">
{`CXX = g++ -std=c++20 -O3 -Wall -Wextra
PYTHON = python3.11 -m venv
NODE_ENV = production (Vite + React)
PLATFORMIO_BOARD = uno (ATmega328P)
SECURITY = Basic Cryptography & Network Hygiene`}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
}

