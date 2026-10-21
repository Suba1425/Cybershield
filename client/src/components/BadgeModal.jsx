import React from 'react';
import { Award, X, Sparkles, CheckCircle2 } from 'lucide-react';
import { useProgress } from '../context/ProgressContext';

export default function BadgeModal() {
  const { newlyUnlockedBadge, dismissBadgeModal } = useProgress();

  if (!newlyUnlockedBadge) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in">
      <div className="bg-white dark:bg-[#111827] border border-cyan-500/50 rounded-2xl p-6 max-w-sm w-full text-center shadow-2xl relative shadow-glow-cyan">
        
        <button
          onClick={dismissBadgeModal}
          className="absolute top-3 right-3 text-gray-400 hover:text-white p-1 rounded-lg transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-cyan-500/20 border border-cyan-400 flex items-center justify-center text-4xl shadow-glow-cyan animate-bounce">
          {newlyUnlockedBadge.icon}
        </div>

        <div className="flex items-center justify-center gap-1 text-cyan-500 font-mono text-xs uppercase tracking-widest font-semibold mb-1">
          <Sparkles className="w-4 h-4" />
          <span>Badge Unlocked!</span>
        </div>

        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
          {newlyUnlockedBadge.title}
        </h3>

        <p className="text-xs text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
          {newlyUnlockedBadge.description}
        </p>

        <div className="p-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-medium flex items-center justify-center gap-1.5 mb-5">
          <CheckCircle2 className="w-4 h-4" />
          <span>Added to your CyberShield Profile</span>
        </div>

        <button
          onClick={dismissBadgeModal}
          className="btn-primary w-full text-sm font-semibold"
        >
          Continue Learning
        </button>

      </div>
    </div>
  );
}
