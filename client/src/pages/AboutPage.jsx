import React from 'react';
import { Shield, Cpu, Lock, Terminal, Award, CheckCircle2, Code2, Server, Database, Globe } from 'lucide-react';

export default function AboutPage() {
  const techStack = [
    { name: 'Vite + React 18', desc: 'Modern high-performance SPA frontend framework', category: 'Frontend' },
    { name: 'Tailwind CSS v3', desc: 'Cybersecurity SOC dark theme styling & glassmorphism', category: 'Styling' },
    { name: 'Lucide React & Recharts', desc: 'Interactive visual icons & data visualization charts', category: 'UI Tools' },
    { name: 'Node.js & Express API', desc: 'RESTful backend services with JWT authentication', category: 'Backend' },
    { name: 'MongoDB & Mongoose', desc: 'NoSQL document storage for user profiles & scores', category: 'Database' },
    { name: 'Local Shannon Entropy', desc: 'Zero-trust client-side mathematical password evaluation', category: 'Security' }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      
      {/* Banner */}
      <div className="glass-panel p-8 rounded-2xl text-center space-y-4 border-cyan-500/30 relative overflow-hidden">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-semibold">
          <Shield className="w-4 h-4" />
          <span>Final-Year College Cybersecurity Project</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white">
          About CyberShield Portal
        </h1>

        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
          CyberShield is designed as a production-quality cybersecurity education & awareness platform. It emphasizes hands-on interactive defense over static reading.
        </p>

        <div className="pt-2 text-xs font-mono text-cyan-400">
          Tagline: "Learn. Detect. Protect."
        </div>
      </div>

      {/* Educational Philosophy & Principles */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="glass-card p-6 space-y-3">
          <div className="p-3 rounded-lg bg-cyan-500/10 text-cyan-400 w-fit">
            <Lock className="w-6 h-6" />
          </div>
          <h3 className="text-base font-bold text-gray-900 dark:text-white">Defensive & Educational Only</h3>
          <p className="text-xs text-gray-400 leading-relaxed">
            All simulations, emails, and URLs utilize strictly fictional demo data. No real credentials are ever collected or transmitted.
          </p>
        </div>

        <div className="glass-card p-6 space-y-3">
          <div className="p-3 rounded-lg bg-emerald-500/10 text-emerald-400 w-fit">
            <Cpu className="w-6 h-6" />
          </div>
          <h3 className="text-base font-bold text-gray-900 dark:text-white">Zero-Trust Client Analytics</h3>
          <p className="text-xs text-gray-400 leading-relaxed">
            Sensitive user evaluations (such as password entropy testing) occur 100% inside your local browser to respect user privacy.
          </p>
        </div>

        <div className="glass-card p-6 space-y-3">
          <div className="p-3 rounded-lg bg-amber-500/10 text-amber-400 w-fit">
            <Award className="w-6 h-6" />
          </div>
          <h3 className="text-base font-bold text-gray-900 dark:text-white">Gamified Skill Tracking</h3>
          <p className="text-xs text-gray-400 leading-relaxed">
            Dynamic scoring radar charts, unlocked achievement badges, and targeted weak-area learning recommendations motivate continuous learning.
          </p>
        </div>
      </div>

      {/* Technology Architecture Section */}
      <div className="glass-card p-6 space-y-6">
        <h2 className="text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2 border-b border-gray-200 dark:border-gray-800 pb-3">
          <Code2 className="w-5 h-5 text-cyan-400" />
          <span>Technology Architecture & Stack</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {techStack.map((tech, idx) => (
            <div key={idx} className="p-4 rounded-xl bg-gray-900 border border-gray-800 space-y-1 text-xs">
              <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-wider block">{tech.category}</span>
              <h4 className="font-bold text-gray-100">{tech.name}</h4>
              <p className="text-gray-400 leading-relaxed">{tech.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* System Architecture Flow */}
      <div className="glass-card p-6 space-y-4">
        <h3 className="text-sm font-bold text-gray-900 dark:text-white flex items-center gap-2">
          <Globe className="w-4 h-4 text-cyan-400" />
          <span>Dual Execution Architecture</span>
        </h3>
        <p className="text-xs text-gray-400 leading-relaxed">
          CyberShield operates seamlessly in <strong>Dual Execution Mode</strong>:
        </p>
        <ul className="space-y-2 text-xs text-gray-300">
          <li className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span><strong>Production API Mode:</strong> Connects Node.js Express server to MongoDB for persistent JWT authentication and database progress storage.</span>
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
            <span><strong>Client Demo Mode:</strong> Automatically active if backend server is offline, managing state via <code>localStorage</code> for instant offline college project vivas.</span>
          </li>
        </ul>
      </div>

    </div>
  );
}
