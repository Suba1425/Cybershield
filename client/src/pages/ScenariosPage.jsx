import React, { useState } from 'react';
import { Shield, CheckCircle2, XCircle, AlertTriangle, ArrowRight, ArrowLeft, RefreshCw, HelpCircle, BookOpen } from 'lucide-react';
import { scenariosData } from '../data/scenarios';
import { useProgress } from '../context/ProgressContext';

export default function ScenariosPage() {
  const { recordScenarioCompletion } = useProgress();
  const [activeIdx, setActiveIdx] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [completedMap, setCompletedMap] = useState({});

  const scenario = scenariosData[activeIdx];

  const handleSelectOption = (opt) => {
    setSelectedOption(opt);
    setCompletedMap(prev => ({ ...prev, [scenario.id]: opt }));
    recordScenarioCompletion(scenario.id, opt.isCorrect);
  };

  const handleNext = () => {
    setSelectedOption(null);
    if (activeIdx < scenariosData.length - 1) {
      setActiveIdx(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    setSelectedOption(null);
    if (activeIdx > 0) {
      setActiveIdx(prev => prev - 1);
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Banner Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 glass-panel p-6 rounded-2xl">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-semibold mb-2">
            <Shield className="w-4 h-4" />
            <span>Branching Decision Challenges</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
            Interactive Security Scenarios
          </h1>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
            Evaluate 10 realistic corporate and personal cyber threat situations and practice defensive decision making.
          </p>
        </div>

        <div className="flex items-center gap-3 bg-gray-100 dark:bg-gray-900 px-4 py-2 rounded-xl border border-gray-200 dark:border-gray-800 text-xs font-mono">
          <span className="text-gray-400">Progress:</span>
          <span className="font-bold text-cyan-400">{Object.keys(completedMap).length} / {scenariosData.length} Solved</span>
        </div>
      </div>

      {/* Main Grid: Sidebar Selector & Scenario Canvas */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Sidebar Scenario Selector */}
        <div className="glass-card p-4 space-y-2">
          <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">
            Scenario List (10 Scenarios)
          </h3>

          {scenariosData.map((sc, idx) => {
            const isDone = completedMap[sc.id];
            return (
              <button
                key={sc.id}
                onClick={() => {
                  setActiveIdx(idx);
                  setSelectedOption(completedMap[sc.id] || null);
                }}
                className={`w-full text-left p-3 rounded-xl text-xs transition-all flex items-center justify-between border ${
                  activeIdx === idx
                    ? 'bg-cyan-500/15 border-cyan-500/50 text-gray-900 dark:text-white font-semibold'
                    : 'bg-gray-50 dark:bg-gray-900/50 border-gray-200 dark:border-gray-800 text-gray-600 dark:text-gray-400 hover:border-gray-700'
                }`}
              >
                <div className="space-y-0.5 overflow-hidden">
                  <span className="block font-bold truncate">{idx + 1}. {sc.title}</span>
                  <span className="text-[10px] text-gray-400 block font-mono">{sc.category} • {sc.difficulty}</span>
                </div>
                {isDone && (
                  <CheckCircle2 className={`w-4 h-4 shrink-0 ${isDone.isCorrect ? 'text-emerald-400' : 'text-rose-400'}`} />
                )}
              </button>
            );
          })}
        </div>

        {/* Active Scenario Canvas */}
        <div className="lg:col-span-2 glass-card p-6 space-y-6 flex flex-col justify-between">
          
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-gray-200 dark:border-gray-800 pb-3">
              <span className="px-2.5 py-1 rounded bg-cyan-500/10 text-cyan-400 text-xs font-mono font-semibold">
                Scenario #{activeIdx + 1} — {scenario.category}
              </span>
              <span className="text-xs font-mono text-gray-400">
                Difficulty: {scenario.difficulty}
              </span>
            </div>

            <h2 className="text-xl font-bold text-gray-900 dark:text-white">
              {scenario.title}
            </h2>

            {/* Context Narrative Box */}
            <div className="p-4 rounded-xl bg-gray-50 dark:bg-gray-950 border border-gray-200 dark:border-gray-800 text-xs sm:text-sm leading-relaxed text-gray-800 dark:text-gray-200 font-sans space-y-2">
              <span className="text-xs font-bold text-cyan-400 block font-mono">SITUATION CONTEXT:</span>
              <p>{scenario.context}</p>
            </div>

            {/* Branching Option Cards */}
            <div className="space-y-3 pt-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 flex items-center gap-1.5">
                <HelpCircle className="w-4 h-4 text-cyan-400" />
                <span>What should you do?</span>
              </h4>

              <div className="space-y-2.5">
                {scenario.options.map((opt) => {
                  const isSelected = selectedOption?.id === opt.id;
                  return (
                    <button
                      key={opt.id}
                      onClick={() => handleSelectOption(opt)}
                      className={`w-full text-left p-4 rounded-xl text-xs sm:text-sm transition-all border flex items-start gap-3 ${
                        isSelected
                          ? opt.isCorrect
                            ? 'bg-emerald-500/15 border-emerald-500 text-emerald-300 font-semibold shadow-glow-emerald'
                            : 'bg-rose-500/15 border-rose-500 text-rose-300 font-semibold shadow-glow-red'
                          : 'bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800 text-gray-800 dark:text-gray-200 hover:border-cyan-500/40'
                      }`}
                    >
                      <span className="w-6 h-6 rounded-full bg-gray-800 border border-gray-700 text-gray-300 flex items-center justify-center font-mono text-xs shrink-0 mt-0.5">
                        {opt.id.toUpperCase()}
                      </span>
                      <span className="leading-relaxed">{opt.text}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Result & Takeaway Box */}
            {selectedOption && (
              <div className="space-y-4 pt-2 animate-fade-in">
                <div className={`p-4 rounded-xl border space-y-2 text-xs ${
                  selectedOption.isCorrect
                    ? 'bg-emerald-500/10 border-emerald-500/40 text-emerald-400'
                    : 'bg-rose-500/10 border-rose-500/40 text-rose-400'
                }`}>
                  <div className="flex items-center gap-2 font-bold text-sm">
                    {selectedOption.isCorrect ? <CheckCircle2 className="w-5 h-5" /> : <XCircle className="w-5 h-5" />}
                    <span>{selectedOption.isCorrect ? 'Defensive Action Successful!' : 'Security Vulnerability Triggered!'}</span>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    {selectedOption.feedback}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-gray-900 border border-gray-800 space-y-1 text-xs">
                  <span className="text-cyan-400 font-bold flex items-center gap-1.5 font-mono">
                    <BookOpen className="w-4 h-4" />
                    <span>KEY DEFENSIVE TAKEAWAY</span>
                  </span>
                  <p className="text-gray-300 leading-relaxed">
                    {scenario.takeaway}
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-between items-center pt-4 border-t border-gray-100 dark:border-gray-800">
            <button
              onClick={handlePrev}
              disabled={activeIdx === 0}
              className="btn-secondary text-xs"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Previous Scenario</span>
            </button>

            <button
              onClick={handleNext}
              disabled={activeIdx === scenariosData.length - 1}
              className="btn-primary text-xs"
            >
              <span>Next Scenario</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>

    </div>
  );
}
