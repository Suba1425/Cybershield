import React from 'react';
import { Link } from 'react-router-dom';
import { AlertTriangle, Home, Shield, ArrowLeft } from 'lucide-react';

export default function NotFoundPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-20 text-center space-y-6">
      
      <div className="w-20 h-20 mx-auto rounded-full bg-rose-500/10 border border-rose-500/30 flex items-center justify-center text-rose-500 shadow-glow-red animate-pulse">
        <AlertTriangle className="w-10 h-10" />
      </div>

      <div className="space-y-2">
        <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest font-bold">
          404 ERROR — TARGET ROUTE UNRESOLVED
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-900 dark:text-white">
          Access Gateway 404: Page Not Found
        </h1>
        <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 max-w-md mx-auto leading-relaxed">
          The requested URL path does not match any valid CyberShield learning module or interactive portal gateway.
        </p>
      </div>

      <div className="flex justify-center gap-4 pt-4">
        <Link to="/" className="btn-primary text-xs font-semibold py-2.5 px-6">
          <Home className="w-4 h-4" />
          <span>Return to Portal Home</span>
        </Link>
        <Link to="/dashboard" className="btn-secondary text-xs font-semibold py-2.5 px-6">
          <Shield className="w-4 h-4 text-cyan-400" />
          <span>Open Dashboard</span>
        </Link>
      </div>

    </div>
  );
}
