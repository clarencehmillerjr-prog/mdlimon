import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const links = [
    { icon: <Github className="h-4 w-4" />, label: 'GitHub', href: 'https://github.com/mdlimon' },
    { icon: <Linkedin className="h-4 w-4" />, label: 'LinkedIn', href: 'https://linkedin.com' },
    { icon: <Mail className="h-4 w-4" />, label: 'Email', href: 'mailto:hello@example.com' },
  ];

  return (
    <footer className="border-t border-slate-800/70 bg-slate-950 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 text-sm text-slate-400 md:flex-row md:justify-between">
        <p>© {new Date().getFullYear()} MD Limon. Crafted for AI-forward brands.</p>
        <div className="flex items-center gap-4">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="inline-flex items-center gap-2 text-slate-300 transition hover:text-primary"
            >
              {link.icon}
              <span>{link.label}</span>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
