import React from 'react';
import { Bot, LayoutDashboard, MessageSquare, Video } from 'lucide-react';
import type { ServiceCardProps } from '../types';

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon }) => (
  <div className="flex flex-col gap-4 rounded-2xl border border-slate-800/70 bg-slate-950/70 p-6">
    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">{icon}</div>
    <div className="space-y-2">
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <p className="text-sm leading-relaxed text-slate-400">{description}</p>
    </div>
    <button className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:text-cyan-300">
      Learn more
      <span aria-hidden>→</span>
    </button>
  </div>
);

const Services: React.FC = () => {
  const services: ServiceCardProps[] = [
    {
      title: 'Chatbot UX',
      description: 'Custom chat interfaces with prompt controls, streaming states, and persistent sessions.',
      icon: <MessageSquare className="h-5 w-5" />,
    },
    {
      title: 'Builder systems',
      description: 'Modular UI for configuring system prompts, temperature, and safety settings.',
      icon: <LayoutDashboard className="h-5 w-5" />,
    },
    {
      title: 'Generative visuals',
      description: 'Image and video generation flows with queued jobs, previews, and download options.',
      icon: <Video className="h-5 w-5" />,
    },
    {
      title: 'Automation & agents',
      description: 'Background workers and agentic flows with clear error states and monitoring.',
      icon: <Bot className="h-5 w-5" />,
    },
  ];

  return (
    <section id="services" className="bg-slate-950 py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="space-y-3">
            <p className="text-sm uppercase tracking-[0.25em] text-primary">Services</p>
            <h2 className="font-display text-3xl font-bold text-white">Crafted for AI-first products</h2>
            <p className="max-w-2xl text-slate-400">
              Everything you need to launch multi-modal AI experiences with confidence—from chat to visuals to back-office automation.
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-slate-800 px-5 py-2 text-sm font-semibold text-white transition hover:border-primary/60 hover:text-primary"
          >
            View availability
          </a>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
