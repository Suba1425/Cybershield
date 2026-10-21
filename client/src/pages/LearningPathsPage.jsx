import React, { useState } from 'react';
import { BookOpen, CheckCircle2, Lock, Clock, ArrowRight, Shield, Award } from 'lucide-react';
import { learningPaths, modulesData } from '../data/modules';
import { useProgress } from '../context/ProgressContext';

export default function LearningPathsPage() {
  const { progress, markModuleCompleted } = useProgress();
  const [activeModuleModal, setActiveModuleModal] = useState(null);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 glass-panel p-6 rounded-2xl">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-semibold mb-2">
            <BookOpen className="w-4 h-4" />
            <span>Structured Curriculum</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
            Structured Cybersecurity Learning Tracks
          </h1>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
            Progress through Beginner, Intermediate, and Advanced tracks designed for step-by-step cyber resilience.
          </p>
        </div>

        <div className="flex items-center gap-2 font-mono text-xs text-emerald-400 bg-gray-100 dark:bg-gray-900 px-3.5 py-2 rounded-xl border border-gray-200 dark:border-gray-800">
          <CheckCircle2 className="w-4 h-4" />
          <span>{progress.completedModules.length} Modules Mastered</span>
        </div>
      </div>

      {/* Learning Paths List */}
      <div className="space-y-8">
        {learningPaths.map(path => (
          <div key={path.id} className="glass-card p-6 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-gray-200 dark:border-gray-800 pb-4">
              <div>
                <span className={`px-2.5 py-0.5 rounded text-[10px] font-mono font-bold uppercase border ${
                  path.level === 'Beginner' ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30' :
                  path.level === 'Intermediate' ? 'bg-amber-500/20 text-amber-400 border-amber-500/30' :
                  'bg-rose-500/20 text-rose-400 border-rose-500/30'
                }`}>
                  {path.level} Track
                </span>
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mt-1">
                  {path.title}
                </h2>
                <p className="text-xs text-gray-400 mt-0.5">{path.description}</p>
              </div>

              <div className="flex items-center gap-3 text-xs font-mono text-gray-400">
                <span className="flex items-center gap-1"><Clock className="w-4 h-4 text-cyan-400" /> {path.estimatedHours}</span>
                <span>• {path.modules.length} Modules</span>
              </div>
            </div>

            {/* Modules Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {path.modules.map(modId => {
                const mod = modulesData.find(m => m.id === modId);
                if (!mod) return null;
                const isCompleted = progress.completedModules.includes(mod.id);
                return (
                  <div
                    key={mod.id}
                    onClick={() => setActiveModuleModal(mod)}
                    className="p-4 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:border-cyan-500/50 cursor-pointer transition-all flex flex-col justify-between space-y-3"
                  >
                    <div className="space-y-1">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-cyan-400 font-mono font-semibold">{mod.category}</span>
                        <span className="text-gray-500 font-mono text-[10px]">{mod.duration}</span>
                      </div>
                      <h3 className="text-sm font-bold text-gray-900 dark:text-white">{mod.title}</h3>
                      <p className="text-xs text-gray-400 line-clamp-2">{mod.summary}</p>
                    </div>

                    <div className="flex items-center justify-between pt-2 border-t border-gray-200 dark:border-gray-800/60 text-xs">
                      <span className={`font-mono text-[11px] flex items-center gap-1 ${isCompleted ? 'text-emerald-400' : 'text-gray-400'}`}>
                        {isCompleted ? <><CheckCircle2 className="w-3.5 h-3.5" /> Completed</> : '● Not Started'}
                      </span>
                      <span className="text-cyan-400 font-semibold flex items-center gap-1">
                        Open Module <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Module Reader Modal */}
      {activeModuleModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in">
          <div className="bg-white dark:bg-[#111827] border border-cyan-500/40 rounded-2xl p-6 max-w-2xl w-full max-h-[85vh] overflow-y-auto space-y-6 shadow-2xl relative">
            
            <div className="flex items-center justify-between border-b border-gray-200 dark:border-gray-800 pb-3">
              <span className="px-2.5 py-1 rounded bg-cyan-500/10 text-cyan-400 text-xs font-mono font-semibold">
                {activeModuleModal.category} • {activeModuleModal.level}
              </span>
              <button
                onClick={() => setActiveModuleModal(null)}
                className="text-gray-400 hover:text-white text-xs font-semibold"
              >
                Close ✕
              </button>
            </div>

            <div className="space-y-2">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                {activeModuleModal.title}
              </h2>
              <p className="text-xs text-gray-400 leading-relaxed">
                {activeModuleModal.summary}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-gray-900 border border-gray-800 text-xs text-gray-200 leading-relaxed space-y-3 whitespace-pre-line font-sans">
              {activeModuleModal.content}
            </div>

            <div className="flex justify-between items-center pt-2">
              <button
                onClick={() => {
                  markModuleCompleted(activeModuleModal.id);
                  setActiveModuleModal(null);
                }}
                className="btn-primary text-xs font-semibold py-2.5 px-6"
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>Mark Module as Completed (+5 Score)</span>
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
