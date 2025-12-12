import React from 'react';
import { Send } from 'lucide-react';

const CTA: React.FC = () => {
  return (
    <section id="contact" className="py-16">
      <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl border border-slate-800/70 bg-gradient-to-r from-primary/10 via-slate-900 to-accent/10 px-8 py-12 shadow-2xl">
        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.25em] text-primary">Ready to ship</p>
            <h2 className="font-display text-3xl font-bold text-white">Let’s design your AI product</h2>
            <p className="text-slate-300">
              Whether you need a polished MVP or an enterprise rollout, MD Limon delivers thoughtful design, clean code, and reliable timelines.
            </p>
          </div>

          <form className="grid gap-4">
            <div className="grid gap-3 md:grid-cols-2">
              <input
                type="text"
                name="name"
                placeholder="Your name"
                className="rounded-xl border border-slate-800 bg-slate-950/70 px-4 py-3 text-sm text-white outline-none transition focus:border-primary/60"
              />
              <input
                type="email"
                name="email"
                placeholder="Work email"
                className="rounded-xl border border-slate-800 bg-slate-950/70 px-4 py-3 text-sm text-white outline-none transition focus:border-primary/60"
              />
            </div>
            <textarea
              name="project"
              rows={3}
              placeholder="Tell me about your project"
              className="rounded-xl border border-slate-800 bg-slate-950/70 px-4 py-3 text-sm text-white outline-none transition focus:border-primary/60"
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              Send message
              <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default CTA;
