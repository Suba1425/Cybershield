import React, { useState } from 'react';
import { Lock, Shield, RefreshCw, Copy, Check, Eye, EyeOff, AlertCircle, Info, Sparkles, CheckCircle2 } from 'lucide-react';
import { evaluatePassword, generatePassphrase } from '../utils/passwordEvaluator';
import { useProgress } from '../context/ProgressContext';

export default function PasswordModule() {
  const { recordPasswordEvaluated } = useProgress();
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [copied, setCopied] = useState(false);

  const evaluation = evaluatePassword(password);

  const handlePasswordChange = (e) => {
    const val = e.target.value;
    setPassword(val);
    if (val.length > 8) {
      const isVeryStrong = evaluatePassword(val).label === 'Very Strong';
      recordPasswordEvaluated(isVeryStrong);
    }
  };

  const handleGenerate = () => {
    const gen = generatePassphrase(4);
    setPassword(gen);
    setShowPassword(true);
    const isVeryStrong = evaluatePassword(gen).label === 'Very Strong';
    recordPasswordEvaluated(isVeryStrong);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scoreColors = {
    rose: 'bg-rose-500 text-rose-400 border-rose-500/40',
    amber: 'bg-amber-500 text-amber-400 border-amber-500/40',
    yellow: 'bg-yellow-500 text-yellow-400 border-yellow-500/40',
    teal: 'bg-teal-500 text-teal-400 border-teal-500/40',
    emerald: 'bg-emerald-500 text-emerald-400 border-emerald-500/40',
    gray: 'bg-gray-500 text-gray-400 border-gray-500/40'
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Banner Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 glass-panel p-6 rounded-2xl">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-semibold mb-2">
            <Lock className="w-4 h-4" />
            <span>Local Browser Tool</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
            Client-Side Password Security & Passphrase Generator
          </h1>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
            Test password entropy locally, estimate crack resistance, and generate unhackable passphrases.
          </p>
        </div>

        <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
          <Shield className="w-4 h-4 shrink-0" />
          <span>Zero Network Transmission</span>
        </div>
      </div>

      {/* Zero Server Call Security Guarantee */}
      <div className="p-4 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Info className="w-4 h-4 shrink-0" />
          <span>
            <strong>Zero-Trust Guarantee:</strong> All entropy calculations run entirely inside your web browser. Your inputs are never sent to any server or recorded in logs.
          </span>
        </div>
      </div>

      {/* Main Grid: Input Workspace & Analysis Panel */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Left Column: Password Input & Generator Controls */}
        <div className="glass-card p-6 space-y-6">
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-gray-400 block">
              Enter Password or Passphrase to Test
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={handlePasswordChange}
                placeholder="e.g. purple-dragon-dancing-tacos"
                className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-950 border border-gray-300 dark:border-gray-800 text-gray-900 dark:text-white font-mono text-sm focus:outline-none focus:border-cyan-500 transition-colors pr-24"
              />
              <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1">
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="p-1.5 text-gray-400 hover:text-white rounded-lg transition-colors"
                  title={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
                {password && (
                  <button
                    type="button"
                    onClick={copyToClipboard}
                    className="p-1.5 text-gray-400 hover:text-cyan-400 rounded-lg transition-colors"
                    title="Copy to clipboard"
                  >
                    {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Passphrase Generator Quick Action */}
          <div className="pt-2 border-t border-gray-100 dark:border-gray-800 space-y-3">
            <div className="flex items-center justify-between text-xs">
              <span className="font-semibold text-gray-400 flex items-center gap-1">
                <Sparkles className="w-4 h-4 text-cyan-400" />
                <span>Need a Strong Passphrase?</span>
              </span>
              <button
                type="button"
                onClick={handleGenerate}
                className="btn-secondary py-1.5 px-3 text-xs"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Generate Passphrase</span>
              </button>
            </div>
            <p className="text-[11px] text-gray-500 dark:text-gray-400 leading-relaxed">
              Passphrases combine multiple random words (e.g. <code>glacier-falcon-quantum-78!</code>). They are easier to remember for humans and mathematically virtually impossible for brute-force tools to crack.
            </p>
          </div>

          {/* Character Diversity Metrics Checklist */}
          <div className="space-y-2 pt-2 border-t border-gray-100 dark:border-gray-800">
            <span className="text-xs font-bold text-gray-400 block mb-2">Character Set Diversity Checklist</span>
            <div className="grid grid-cols-2 gap-2 text-xs font-mono">
              <div className={`p-2 rounded-lg border flex items-center gap-2 ${
                evaluation.metrics.length >= 12
                  ? 'bg-emerald-500/10 border-emerald-500/40 text-emerald-400'
                  : 'bg-gray-100 dark:bg-gray-900 border-gray-300 dark:border-gray-800 text-gray-500'
              }`}>
                <CheckCircle2 className="w-4 h-4" />
                <span>Length &gt;= 12 chars ({evaluation.metrics.length})</span>
              </div>

              <div className={`p-2 rounded-lg border flex items-center gap-2 ${
                evaluation.metrics.hasUpper
                  ? 'bg-emerald-500/10 border-emerald-500/40 text-emerald-400'
                  : 'bg-gray-100 dark:bg-gray-900 border-gray-300 dark:border-gray-800 text-gray-500'
              }`}>
                <CheckCircle2 className="w-4 h-4" />
                <span>Uppercase (A-Z)</span>
              </div>

              <div className={`p-2 rounded-lg border flex items-center gap-2 ${
                evaluation.metrics.hasLower
                  ? 'bg-emerald-500/10 border-emerald-500/40 text-emerald-400'
                  : 'bg-gray-100 dark:bg-gray-900 border-gray-300 dark:border-gray-800 text-gray-500'
              }`}>
                <CheckCircle2 className="w-4 h-4" />
                <span>Lowercase (a-z)</span>
              </div>

              <div className={`p-2 rounded-lg border flex items-center gap-2 ${
                evaluation.metrics.hasNumber
                  ? 'bg-emerald-500/10 border-emerald-500/40 text-emerald-400'
                  : 'bg-gray-100 dark:bg-gray-900 border-gray-300 dark:border-gray-800 text-gray-500'
              }`}>
                <CheckCircle2 className="w-4 h-4" />
                <span>Numbers (0-9)</span>
              </div>
            </div>
          </div>

        </div>

        {/* Right Column: Local Entropy Analysis Results */}
        <div className="glass-card p-6 space-y-6 flex flex-col justify-between">
          
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-gray-200 dark:border-gray-800 pb-3">
              <h3 className="text-sm font-bold text-gray-900 dark:text-white flex items-center gap-2">
                <Shield className="w-4 h-4 text-cyan-400" />
                <span>Entropy & Resistance Assessment</span>
              </h3>
              <span className={`px-2.5 py-1 rounded-full text-xs font-mono font-bold border ${scoreColors[evaluation.color]}`}>
                {evaluation.label}
              </span>
            </div>

            {/* Strength Progress Bar */}
            <div className="space-y-1">
              <div className="flex justify-between text-xs text-gray-400">
                <span>Calculated Shannon Entropy</span>
                <span className="font-mono text-cyan-400 font-bold">{evaluation.entropy} bits</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-800 h-3 rounded-full overflow-hidden">
                <div
                  className={`h-full transition-all duration-500 ${
                    evaluation.color === 'emerald' ? 'bg-emerald-400' :
                    evaluation.color === 'teal' ? 'bg-teal-400' :
                    evaluation.color === 'yellow' ? 'bg-yellow-400' :
                    evaluation.color === 'amber' ? 'bg-amber-400' : 'bg-rose-500'
                  }`}
                  style={{ width: `${Math.min(100, (evaluation.entropy / 100) * 100)}%` }}
                />
              </div>
            </div>

            {/* Estimated Crack Time Card */}
            <div className="p-4 rounded-xl bg-gray-900 border border-gray-800 space-y-1 text-xs">
              <span className="text-gray-400 block">Estimated Brute-Force Crack Time (10B guesses/sec)</span>
              <span className="text-xl font-bold text-cyan-400 font-mono block">
                {evaluation.crackTime}
              </span>
            </div>

            {/* Warnings & Suggestions */}
            {evaluation.warnings.length > 0 && (
              <div className="p-3 rounded-lg bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs space-y-1">
                <span className="font-bold flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>Pattern Warnings</span>
                </span>
                {evaluation.warnings.map((w, i) => (
                  <p key={i}>• {w}</p>
                ))}
              </div>
            )}

            <div className="space-y-1 text-xs">
              <span className="font-semibold text-gray-400">Educational Suggestions:</span>
              <ul className="space-y-1 text-gray-300">
                {evaluation.suggestions.map((s, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="text-cyan-400">•</span>
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          <div className="pt-4 border-t border-gray-100 dark:border-gray-800 text-[11px] text-gray-500 dark:text-gray-400">
            Never reuse passwords across accounts. Use a reputable password manager to generate unique 20-character strings for every platform.
          </div>

        </div>

      </div>

    </div>
  );
}
