import React from 'react';
import { ArrowRight, Sparkles, Wand2 } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden py-20">
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-primary/10 to-transparent" aria-hidden />
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 md:flex-row md:items-center">
        <div className="flex-1 space-y-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm text-primary">
            <Sparkles className="h-4 w-4" />
            <span>AI-powered experience for modern teams</span>
          </div>
          <div className="space-y-4">
            <p className="font-display text-4xl font-bold leading-tight text-white md:text-5xl">
              Build stunning AI experiences that feel hand-crafted.
            </p>
            <p className="max-w-2xl text-lg text-slate-400">
              MD Limon blends world-class web design with production-ready AI workflows. Launch chat, image, and video experiences with delightful UX and thoughtful strategy.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <a
              href="#build"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-slate-950 transition hover:translate-y-0.5 hover:bg-cyan-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              Start a new build
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 rounded-full border border-slate-800 px-6 py-3 text-sm font-semibold text-white transition hover:border-primary/60 hover:text-primary"
            >
              Explore services
            </a>
          </div>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {["Chat", "Image", "Video", "Automation"].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-slate-800/80 bg-slate-900/50 p-4 text-center text-sm font-medium text-slate-200"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="flex-1">
          <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900/80 to-slate-950 p-8 shadow-2xl">
            <div className="absolute -right-12 -top-12 h-44 w-44 rounded-full bg-primary/20 blur-3xl" aria-hidden />
            <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-accent/10 blur-3xl" aria-hidden />
            <div className="flex items-center justify-between rounded-2xl border border-slate-800/70 bg-slate-900/80 px-4 py-3 text-sm text-slate-300">
              <div className="inline-flex items-center gap-2 text-primary">
                <Wand2 className="h-4 w-4" />
                Live preview
              </div>
              <span className="rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-400">v2.1</span>
            </div>

            <div className="mt-6 space-y-4">
              <div className="rounded-2xl border border-slate-800/70 bg-slate-950/70 p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Chatbot response</p>
                <p className="mt-2 text-sm text-slate-200">
                  “Here’s a launch-ready AI chat layout with sidebar navigation, multi-modal outputs, and editable system prompts. Need it themed for your brand?”
                </p>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl border border-slate-800/70 bg-slate-950/70 p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Image</p>
                  <div className="mt-2 h-28 rounded-xl bg-gradient-to-br from-primary/30 via-purple-500/20 to-accent/20" />
                </div>
                <div className="rounded-2xl border border-slate-800/70 bg-slate-950/70 p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Video</p>
                  <div className="mt-2 h-28 rounded-xl bg-slate-900/80 text-center text-sm text-slate-400">
                    <div className="flex h-full items-center justify-center">Preview thumbnail</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
