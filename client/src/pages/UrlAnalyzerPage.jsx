import React, { useState } from 'react';
import { Terminal, Shield, AlertTriangle, Search, ExternalLink, CheckCircle2, AlertCircle, Info, RefreshCw } from 'lucide-react';
import { analyzeUrl } from '../utils/urlAnalyzer';
import { useProgress } from '../context/ProgressContext';

export default function UrlAnalyzerPage() {
  const { recordUrlAnalyzed } = useProgress();
  const [inputUrl, setInputUrl] = useState('');
  const [analysisResult, setAnalysisResult] = useState(null);

  const sampleDemoUrls = [
    'https://github.com/settings/profile',
    'http://192.168.1.45/login?user=admin',
    'http://paypal-verify-account.biz/login.php',
    'https://xn--e1afmkfd.xn--p1ai/bank',
    'http://free-bonus-claim.xyz/update-account'
  ];

  const handleAnalyze = (urlToTest) => {
    const target = urlToTest || inputUrl;
    if (!target) return;
    const res = analyzeUrl(target);
    setAnalysisResult(res);
    recordUrlAnalyzed();
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Banner Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 glass-panel p-6 rounded-2xl">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-semibold mb-2">
            <Terminal className="w-4 h-4" />
            <span>Educational Tool</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
            URL Safety Heuristic Analyzer
          </h1>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
            Inspect demo URLs against 10+ risk heuristics including protocol encryption, IP hostnames, TLD risk, and punycode.
          </p>
        </div>

        <div className="px-3 py-1.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono">
          Educational Heuristic Rules Engine
        </div>
      </div>

      {/* Mandatory Safety Disclaimer Banner */}
      <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/40 text-amber-400 text-xs flex items-start gap-2">
        <AlertTriangle className="w-5 h-5 shrink-0 mt-0.5" />
        <div>
          <span className="font-bold block mb-0.5">EDUCATIONAL DISCLAIMER:</span>
          <span>
            This tool evaluates educational URL structural metrics only. It does <strong>NOT</strong> perform live active scanning or guarantee that a website is 100% safe or malicious. Never click unverified URLs on real devices.
          </span>
        </div>
      </div>

      {/* Main Input Box & Quick Samples */}
      <div className="glass-card p-6 space-y-4">
        <label className="text-xs font-bold uppercase tracking-wider text-gray-400 block">
          Enter a Demo URL to Analyze
        </label>
        
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-grow">
            <input
              type="text"
              value={inputUrl}
              onChange={(e) => setInputUrl(e.target.value)}
              placeholder="e.g. http://paypal-verify-account.biz/login.php"
              className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-950 border border-gray-300 dark:border-gray-800 text-gray-900 dark:text-white font-mono text-xs sm:text-sm focus:outline-none focus:border-cyan-500 transition-colors pl-10"
            />
            <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
          </div>
          <button
            onClick={() => handleAnalyze(inputUrl)}
            className="btn-primary whitespace-nowrap text-xs font-semibold py-3 px-6"
          >
            <span>Analyze Indicators</span>
            <Terminal className="w-4 h-4" />
          </button>
        </div>

        {/* Quick Sample Chips */}
        <div className="pt-2">
          <span className="text-[11px] text-gray-400 block mb-2 font-mono">Try sample demo URLs:</span>
          <div className="flex flex-wrap gap-2">
            {sampleDemoUrls.map((s, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setInputUrl(s);
                  handleAnalyze(s);
                }}
                className="px-2.5 py-1 rounded-lg bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-[11px] font-mono text-cyan-600 dark:text-cyan-400 hover:border-cyan-500 transition-colors"
              >
                {s}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Analysis Output Section */}
      {analysisResult && (
        <div className="glass-card p-6 space-y-6 animate-fade-in">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gray-200 dark:border-gray-800 pb-4">
            <div>
              <span className="text-xs text-gray-400 block font-mono">Target Hostname:</span>
              <span className="text-lg font-mono font-bold text-gray-900 dark:text-white">
                {analysisResult.hostname}
              </span>
            </div>

            <div className={`px-4 py-2 rounded-xl border text-xs font-bold font-mono ${
              analysisResult.color === 'emerald' ? 'bg-emerald-500/10 border-emerald-500/40 text-emerald-400' :
              analysisResult.color === 'amber' ? 'bg-amber-500/10 border-amber-500/40 text-amber-400' :
              'bg-rose-500/10 border-rose-500/40 text-rose-400'
            }`}>
              {analysisResult.riskLevel} (Risk Index: {analysisResult.riskScore}/100)
            </div>
          </div>

          {/* Indicator Breakdowns */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-1.5">
              <Shield className="w-4 h-4" />
              <span>Educational Indicators Detected ({analysisResult.indicators.length})</span>
            </h3>

            <div className="space-y-2">
              {analysisResult.indicators.map((ind, i) => (
                <div key={i} className="p-4 rounded-xl bg-gray-900 border border-gray-800 space-y-1 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-gray-100 flex items-center gap-2">
                      {ind.risk === 'High' && <AlertCircle className="w-4 h-4 text-rose-400" />}
                      {ind.risk === 'Medium' && <AlertTriangle className="w-4 h-4 text-amber-400" />}
                      {ind.risk === 'Low' && <CheckCircle2 className="w-4 h-4 text-emerald-400" />}
                      <span>{ind.title}</span>
                    </span>
                    <span className={`px-2 py-0.5 rounded text-[10px] font-mono border ${
                      ind.risk === 'High' ? 'bg-rose-500/20 text-rose-400 border-rose-500/30' :
                      ind.risk === 'Medium' ? 'bg-amber-500/20 text-amber-400 border-amber-500/30' :
                      'bg-emerald-500/20 text-emerald-400 border-emerald-500/30'
                    }`}>
                      {ind.risk} Risk Weight
                    </span>
                  </div>
                  <p className="text-gray-300 leading-relaxed pt-1">
                    {ind.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="p-3 rounded-lg bg-gray-950 border border-gray-800 text-[11px] font-mono text-gray-400">
            {analysisResult.disclaimer}
          </div>

        </div>
      )}

    </div>
  );
}
