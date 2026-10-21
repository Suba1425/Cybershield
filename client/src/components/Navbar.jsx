import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Shield, Sun, Moon, Menu, X, Award, User, LayoutDashboard, Compass, Lock, Link as LinkIcon, HelpCircle, BookOpen, AlertTriangle } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useAuth } from '../context/AuthContext';
import { useProgress } from '../context/ProgressContext';

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const { user, toggleRole } = useAuth();
  const { overallScore } = useProgress();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Dashboard', path: '/dashboard' },
    { name: 'Phishing Sim', path: '/phishing' },
    { name: 'Password Check', path: '/passwords' },
    { name: 'URL Inspector', path: '/url-analyzer' },
    { name: 'Scenarios', path: '/scenarios' },
    { name: 'Quizzes', path: '/quizzes' },
    { name: 'Tips', path: '/tips' },
    { name: 'Learn Paths', path: '/learn' },
    { name: 'About', path: '/about' },
  ];

  if (user?.role === 'admin') {
    navLinks.push({ name: 'Admin Console', path: '/admin' });
  }

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-white/90 dark:bg-[#0B0F19]/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-800/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Brand Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="p-2 rounded-lg bg-cyan-500/10 dark:bg-cyan-500/20 text-cyan-500 group-hover:scale-105 transition-transform">
              <Shield className="w-6 h-6 text-cyan-500 dark:text-cyan-400" />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-lg tracking-wider text-gray-900 dark:text-white flex items-center gap-1">
                CYBER<span className="text-cyan-500">SHIELD</span>
              </span>
              <span className="text-[10px] text-gray-500 dark:text-gray-400 -mt-1 tracking-widest font-mono">
                AWARENESS PORTAL
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden xl:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                  isActive(link.path)
                    ? 'bg-cyan-500/15 text-cyan-600 dark:text-cyan-400 font-semibold border border-cyan-500/30'
                    : 'text-gray-600 dark:text-gray-300 hover:text-cyan-500 dark:hover:text-cyan-400 hover:bg-gray-100 dark:hover:bg-gray-800/50'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right Actions & Utilities */}
          <div className="hidden lg:flex items-center space-x-3">
            {/* Awareness Score Badge */}
            <Link
              to="/dashboard"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30 text-xs font-semibold"
              title="Your Educational Awareness Score"
            >
              <Award className="w-4 h-4" />
              <span>Score: {overallScore}/100</span>
            </Link>

            {/* Admin / Student Role Switcher Toggle */}
            <button
              onClick={toggleRole}
              className="px-2.5 py-1 text-xs font-mono rounded-md border border-cyan-500/40 text-cyan-600 dark:text-cyan-400 hover:bg-cyan-500/10 transition-colors flex items-center gap-1"
              title="Click to toggle Demo Admin vs Student view"
            >
              <User className="w-3.5 h-3.5" />
              <span>{user?.role === 'admin' ? 'Role: ADMIN' : 'Role: STUDENT'}</span>
            </button>

            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle Theme"
              title="Toggle Dark / Light Theme"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5 text-gray-700" />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center space-x-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5" />}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white dark:bg-[#111827] border-b border-gray-200 dark:border-gray-800 px-4 pt-2 pb-4 space-y-1 shadow-2xl">
          <div className="flex items-center justify-between py-2 border-b border-gray-100 dark:border-gray-800 mb-2">
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-emerald-400" />
              <span className="text-xs font-bold text-emerald-400">Score: {overallScore}/100</span>
            </div>
            <button
              onClick={toggleRole}
              className="px-2 py-1 text-xs font-mono rounded border border-cyan-500/40 text-cyan-400"
            >
              {user?.role === 'admin' ? 'Mode: ADMIN' : 'Mode: STUDENT'}
            </button>
          </div>

          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                isActive(link.path)
                  ? 'bg-cyan-500/10 text-cyan-500 font-semibold'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
