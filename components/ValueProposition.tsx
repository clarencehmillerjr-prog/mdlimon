import React from 'react';
import { Lightbulb, Palette, ShieldCheck } from 'lucide-react';

const ValueProposition: React.FC = () => {
  const values = [
    {
      icon: <Palette className="h-5 w-5" />,
      title: 'Brand-perfect UI',
      description:
        'Layouts tuned to your brand voice with meticulous typography, animation, and responsive behavior.',
    },
    {
      icon: <Lightbulb className="h-5 w-5" />,
      title: 'Strategy-first builds',
      description:
        'Discovery-driven workflows to map user journeys, data flow, and AI prompts before shipping.',
    },
    {
      icon: <ShieldCheck className="h-5 w-5" />,
      title: 'Reliable delivery',
      description: 'Versioned hand-offs, QA-ready states, and launch playbooks that keep teams aligned.',
    },
  ];

  return (
    <section className="border-y border-slate-800/70 bg-slate-900/40 py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-8 md:grid-cols-3">
          {values.map((value) => (
            <div
              key={value.title}
              className="rounded-2xl border border-slate-800/70 bg-slate-950/70 p-6 shadow-lg shadow-slate-950/50"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                {value.icon}
              </div>
              <h3 className="text-xl font-semibold text-white">{value.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
