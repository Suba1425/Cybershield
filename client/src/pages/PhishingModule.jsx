import React, { useState } from 'react';
import { Eye, AlertTriangle, CheckCircle2, XCircle, Shield, Mail, PhoneCall, QrCode, ArrowLeft, ArrowRight, HelpCircle } from 'lucide-react';
import { simulatedPhishingData } from '../data/phishingEmails';
import { useProgress } from '../context/ProgressContext';

export default function PhishingModule() {
  const { unlockBadge } = useProgress();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userChoice, setUserChoice] = useState(null); // 'safe' or 'suspicious'
  const [showIndicators, setShowIndicators] = useState(false);
  const [score, setScore] = useState(0);

  const currentItem = simulatedPhishingData[currentIndex];

  const handleDecision = (choice) => {
    setUserChoice(choice);
    setShowIndicators(true);

    const isCorrect = (choice === 'suspicious' && currentItem.isPhishing) || (choice === 'safe' && !currentItem.isPhishing);
    if (isCorrect) {
      setScore(prev => prev + 1);
    }
  };

  const handleNext = () => {
    setUserChoice(null);
    setShowIndicators(false);
    if (currentIndex < simulatedPhishingData.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else {
      unlockBadge('badge-phishing');
    }
  };

  const handlePrev = () => {
    setUserChoice(null);
    setShowIndicators(false);
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Module Banner Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 glass-panel p-6 rounded-2xl">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-semibold mb-2">
            <Eye className="w-4 h-4" />
            <span>Interactive Simulator</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
            Phishing & Social Engineering Simulator
          </h1>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
            Analyze simulated communications. Identify red flags, header anomalies, and malicious link indicators safely.
          </p>
        </div>

        <div className="flex items-center gap-4 bg-gray-100 dark:bg-gray-900/80 px-4 py-2 rounded-xl border border-gray-200 dark:border-gray-800 text-xs font-mono">
          <div>
            <span className="text-gray-400 block">Scenario Progress</span>
            <span className="font-bold text-cyan-400">{currentIndex + 1} / {simulatedPhishingData.length}</span>
          </div>
          <div className="h-8 w-px bg-gray-700" />
          <div>
            <span className="text-gray-400 block">Accurate Spots</span>
            <span className="font-bold text-emerald-400">{score} Correct</span>
          </div>
        </div>
      </div>

      {/* Safety Notice Banner */}
      <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs flex items-center gap-2">
        <AlertTriangle className="w-4 h-4 shrink-0" />
        <span>
          <strong>Safe Simulation Mode:</strong> All URLs and emails are fictional demo data. This portal never requests or collects real passwords or credentials.
        </span>
      </div>

      {/* Main Inbox & Simulation Workspace */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Inbox Navigation Selector Sidebar */}
        <div className="glass-card p-4 space-y-3">
          <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">
            Simulated Inbox Queue
          </h3>

          {simulatedPhishingData.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => {
                setCurrentIndex(idx);
                setUserChoice(null);
                setShowIndicators(false);
              }}
              className={`w-full text-left p-3 rounded-lg text-xs transition-all flex items-start gap-2 border ${
                currentIndex === idx
                  ? 'bg-cyan-500/15 border-cyan-500/50 text-gray-900 dark:text-white font-semibold'
                  : 'bg-gray-50 dark:bg-gray-900/50 border-gray-200 dark:border-gray-800 text-gray-600 dark:text-gray-400 hover:border-gray-700'
              }`}
            >
              <div className="mt-0.5">
                {item.type === 'Email' && <Mail className="w-4 h-4 text-cyan-400" />}
                {item.type === 'SMS' && <PhoneCall className="w-4 h-4 text-amber-400" />}
                {item.type === 'QR Code' && <QrCode className="w-4 h-4 text-emerald-400" />}
              </div>
              <div className="overflow-hidden">
                <span className="block font-bold truncate">{item.subject}</span>
                <span className="text-[10px] text-gray-400 block truncate">{item.senderName}</span>
              </div>
            </button>
          ))}
        </div>

        {/* Message Viewer Workspace */}
        <div className="lg:col-span-2 glass-card p-6 space-y-6 flex flex-col justify-between">
          
          {/* Message Header */}
          <div className="space-y-3 border-b border-gray-200 dark:border-gray-800 pb-4">
            <div className="flex items-center justify-between text-xs font-mono text-gray-400">
              <span className="px-2 py-0.5 rounded bg-gray-800 text-cyan-400">{currentItem.type} SIMULATION</span>
              <span>{currentItem.date}</span>
            </div>

            <h2 className="text-lg font-bold text-gray-900 dark:text-white">
              {currentItem.subject}
            </h2>

            <div className="p-3 rounded-lg bg-gray-50 dark:bg-gray-900/90 border border-gray-200 dark:border-gray-800 text-xs space-y-1 font-mono">
              <div className="flex items-center gap-2">
                <span className="text-gray-400 w-16">From:</span>
                <span className="text-gray-800 dark:text-gray-200 font-semibold">{currentItem.senderName}</span>
                <span className="text-cyan-400 text-[11px]">&lt;{currentItem.senderEmail}&gt;</span>
              </div>
            </div>
          </div>

          {/* Message Content Body */}
          <div className="p-4 rounded-xl bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 space-y-4 text-xs sm:text-sm leading-relaxed text-gray-800 dark:text-gray-200">
            <div className="whitespace-pre-line font-sans">
              {currentItem.body}
            </div>

            {/* Simulated Action Link/Button */}
            <div className="pt-4 text-center">
              <div
                className="inline-block px-5 py-2.5 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white font-semibold cursor-pointer text-xs shadow-lg transition-all"
                title={`Simulated Link Target: ${currentItem.simulatedLink}`}
              >
                {currentItem.ctaText}
              </div>
              <span className="block text-[10px] font-mono text-gray-400 mt-2">
                Simulated Destination: <code className="text-cyan-400">{currentItem.simulatedLink}</code>
              </span>
            </div>
          </div>

          {/* Interactive Trust Decision Controls */}
          {!showIndicators ? (
            <div className="p-5 rounded-xl bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 space-y-3 text-center">
              <h4 className="text-sm font-bold text-gray-900 dark:text-white flex items-center justify-center gap-2">
                <HelpCircle className="w-4 h-4 text-cyan-400" />
                <span>Would you trust this message?</span>
              </h4>
              <div className="flex justify-center gap-4 pt-1">
                <button
                  onClick={() => handleDecision('safe')}
                  className="btn-secondary px-6 text-xs text-emerald-400 border-emerald-500/40 hover:bg-emerald-500/10"
                >
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Mark as Safe</span>
                </button>
                <button
                  onClick={() => handleDecision('suspicious')}
                  className="btn-secondary px-6 text-xs text-rose-400 border-rose-500/40 hover:bg-rose-500/10"
                >
                  <XCircle className="w-4 h-4" />
                  <span>Mark as Suspicious / Phishing</span>
                </button>
              </div>
            </div>
          ) : (
            /* Educational Feedback & Red Flags Breakdown */
            <div className="space-y-4 animate-fade-in">
              <div className={`p-4 rounded-xl border flex items-center justify-between text-xs font-bold ${
                (userChoice === 'suspicious' && currentItem.isPhishing) || (userChoice === 'safe' && !currentItem.isPhishing)
                  ? 'bg-emerald-500/10 border-emerald-500/40 text-emerald-400'
                  : 'bg-rose-500/10 border-rose-500/40 text-rose-400'
              }`}>
                <div className="flex items-center gap-2">
                  {((userChoice === 'suspicious' && currentItem.isPhishing) || (userChoice === 'safe' && !currentItem.isPhishing))
                    ? <CheckCircle2 className="w-5 h-5" />
                    : <XCircle className="w-5 h-5" />
                  }
                  <span>
                    {((userChoice === 'suspicious' && currentItem.isPhishing) || (userChoice === 'safe' && !currentItem.isPhishing))
                      ? 'Correct Assessment!'
                      : 'Incorrect Assessment!'}
                  </span>
                </div>
                <span className="font-mono text-[11px]">
                  Actual Classification: {currentItem.isPhishing ? 'PHISHING / MALICIOUS' : 'LEGITIMATE'}
                </span>
              </div>

              {/* Indicator Details List */}
              <div className="p-4 rounded-xl bg-gray-900 border border-gray-800 space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-1.5">
                  <Shield className="w-4 h-4" />
                  <span>Key Indicator Breakdown</span>
                </h4>
                <p className="text-xs text-gray-300 leading-relaxed">
                  {currentItem.explanation}
                </p>

                <div className="space-y-2 pt-2">
                  {currentItem.indicators.map((ind, i) => (
                    <div key={i} className="p-2.5 rounded-lg bg-gray-950 border border-gray-800 text-xs flex items-start gap-2">
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-rose-500/20 text-rose-400 border border-rose-500/30 shrink-0">
                        {ind.tag}
                      </span>
                      <span className="text-gray-300">{ind.detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-between items-center pt-2">
                <button
                  onClick={handlePrev}
                  disabled={currentIndex === 0}
                  className="btn-secondary text-xs"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Previous</span>
                </button>
                <button
                  onClick={handleNext}
                  className="btn-primary text-xs"
                >
                  <span>Next Simulation</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

        </div>

      </div>

    </div>
  );
}
