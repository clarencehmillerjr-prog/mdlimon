import React from 'react';
import { Menu, Rocket, Sun } from 'lucide-react';
import type { NavItem } from '../types';

const primaryNav: NavItem[] = [
  { label: 'New Chat', href: '#new-chat' },
  { label: 'Build', href: '#build' },
  { label: 'Image', href: '#image' },
  { label: 'Video', href: '#video' },
];

const secondaryNav: NavItem[] = [
  { label: 'Settings', href: '#settings' },
];

const Header: React.FC = () => {
  return (
    <header className="border-b border-slate-800/80 bg-slate-950/70 backdrop-blur sticky top-0 z-20">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3 text-primary">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
            <Rocket className="h-5 w-5" />
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-slate-400">AI Studio</p>
            <h1 className="font-display text-xl font-bold text-white">MD Limon</h1>
          </div>
        </div>

        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-300 md:flex">
          {primaryNav.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="transition hover:text-primary focus-visible:text-primary"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            aria-label="Toggle theme"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-800 bg-slate-900 text-slate-200 transition hover:border-primary/60 hover:text-primary"
          >
            <Sun className="h-5 w-5" />
          </button>
          <button
            aria-label="Open menu"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-800 bg-slate-900 text-slate-200 transition hover:border-primary/60 hover:text-primary md:hidden"
          >
            <Menu className="h-5 w-5" />
          </button>
          <div className="hidden items-center gap-3 md:flex">
            <div className="h-10 w-10 overflow-hidden rounded-full border border-primary/50">
              <img
                src="https://avatars.githubusercontent.com/u/107782113?v=4"
                alt="Profile"
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <p className="text-xs text-slate-500">Welcome back</p>
              <p className="font-semibold text-white">MD Limon</p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-800/80 bg-slate-900/60 md:hidden">
        <nav className="mx-auto flex max-w-6xl gap-6 overflow-x-auto px-6 py-3 text-sm font-medium text-slate-300">
          {primaryNav.concat(secondaryNav).map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="whitespace-nowrap transition hover:text-primary focus-visible:text-primary"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>

      <div id="new-chat" className="sr-only">New chat anchor</div>
      <div id="build" className="sr-only">Build anchor</div>
      <div id="image" className="sr-only">Image anchor</div>
      <div id="video" className="sr-only">Video anchor</div>
      <div id="settings" className="sr-only">Settings anchor</div>
    </header>
  );
};

export default Header;
