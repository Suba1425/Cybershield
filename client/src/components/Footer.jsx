import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Lock, AlertTriangle, Github, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-[#070A12] border-t border-gray-200 dark:border-gray-800/80 pt-12 pb-8 text-gray-600 dark:text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          
          {/* Brand Info */}
          <div className="md:col-span-1 space-y-3">
            <div className="flex items-center gap-2">
              <Shield className="w-6 h-6 text-cyan-500" />
              <span className="font-extrabold text-lg text-gray-900 dark:text-white tracking-wider">
                CYBER<span className="text-cyan-500">SHIELD</span>
              </span>
            </div>
            <p className="text-xs leading-relaxed text-gray-500 dark:text-gray-400">
              Interactive Cybersecurity Awareness & Training Portal developed as a final-year college cybersecurity project.
            </p>
            <div className="text-xs font-mono text-cyan-600 dark:text-cyan-400 pt-1">
              "Learn. Detect. Protect."
            </div>
          </div>

          {/* Educational Modules */}
          <div>
            <h4 className="text-xs font-semibold text-gray-900 dark:text-gray-200 uppercase tracking-wider mb-3">
              Interactive Tools
            </h4>
            <ul className="space-y-2 text-xs">
              <li><Link to="/phishing" className="hover:text-cyan-500 transition-colors">Phishing Simulator</Link></li>
              <li><Link to="/passwords" className="hover:text-cyan-500 transition-colors">Password Analyzer</Link></li>
              <li><Link to="/url-analyzer" className="hover:text-cyan-500 transition-colors">URL Safety Analyzer</Link></li>
              <li><Link to="/scenarios" className="hover:text-cyan-500 transition-colors">Branching Scenarios</Link></li>
              <li><Link to="/quizzes" className="hover:text-cyan-500 transition-colors">Security Quiz System</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-semibold text-gray-900 dark:text-gray-200 uppercase tracking-wider mb-3">
              Platform & Resources
            </h4>
            <ul className="space-y-2 text-xs">
              <li><Link to="/dashboard" className="hover:text-cyan-500 transition-colors">Awareness Dashboard</Link></li>
              <li><Link to="/learn" className="hover:text-cyan-500 transition-colors">Learning Paths</Link></li>
              <li><Link to="/tips" className="hover:text-cyan-500 transition-colors">Security Tips Library</Link></li>
              <li><Link to="/about" className="hover:text-cyan-500 transition-colors">About & Architecture</Link></li>
              <li><Link to="/admin" className="hover:text-cyan-500 transition-colors">Admin Console</Link></li>
            </ul>
          </div>

          {/* Disclaimer Banner */}
          <div className="p-4 rounded-xl bg-gray-100 dark:bg-gray-900/80 border border-gray-200 dark:border-gray-800 space-y-2">
            <div className="flex items-center gap-1.5 text-amber-500 text-xs font-semibold">
              <AlertTriangle className="w-4 h-4 shrink-0" />
              <span>Educational Disclaimer</span>
            </div>
            <p className="text-[11px] leading-relaxed text-gray-500 dark:text-gray-400">
              CyberShield is strictly for educational & defensive learning. No real credential harvesting or attack tools are implemented.
            </p>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-gray-200 dark:border-gray-800/60 flex flex-col sm:flex-row items-center justify-between text-xs gap-4">
          <p>© {new Date().getFullYear()} CyberShield Project. All Rights Reserved.</p>
          <div className="flex items-center space-x-4">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="flex items-center gap-1 text-gray-500 hover:text-cyan-500 transition-colors">
              <Github className="w-4 h-4" />
              <span>GitHub Repository</span>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
