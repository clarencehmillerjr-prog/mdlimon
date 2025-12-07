import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ValueProposition from './components/ValueProposition';
import Services from './components/Services';
import CTA from './components/CTA';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-primary selection:text-slate-950">
      <Header />
      <main>
        <Hero />
        <ValueProposition />
        <Services />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default App;