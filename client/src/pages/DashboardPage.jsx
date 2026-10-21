import React from 'react';
import { Link } from 'react-router-dom';
import { Award, Shield, BookOpen, CheckCircle, Activity, ArrowUpRight, Zap, Target, Lock, Eye, AlertTriangle } from 'lucide-react';
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';
import { useProgress } from '../context/ProgressContext';
import { badgesData } from '../data/badges';

export default function DashboardPage() {
  const { progress, overallScore } = useProgress();

  const scoresData = [
    { domain: 'Phishing', score: progress.scores.phishing, fullMark: 100 },
    { domain: 'Passwords', score: progress.scores.passwords, fullMark: 100 },
    { domain: 'Browsing', score: progress.scores.browsing, fullMark: 100 },
    { domain: 'Social Eng.', score: progress.scores.social, fullMark: 100 },
    { domain: 'Device Sec.', score: progress.scores.device, fullMark: 100 },
  ];

  // Weak area recommendations engine
  const getWeakAreaRecommendation = () => {
    const s = progress.scores;
    const lowestKey = Object.keys(s).reduce((a, b) => (s[a] < s[b] ? a : b));
    
    switch (lowestKey) {
      case 'phishing':
        return {
          title: 'Phishing Awareness Recommended',
          desc: 'Your phishing detection index is low. Practice identifying fake email senders and urgent links in the Phishing Simulator.',
          link: '/phishing',
          btnText: 'Launch Phishing Simulator'
        };
      case 'passwords':
        return {
          title: 'Password Security Practice Recommended',
          desc: 'Boost your credential security. Test local Shannon entropy and passphrase rules in the Password Analyzer.',
          link: '/passwords',
          btnText: 'Open Password Analyzer'
        };
      case 'browsing':
        return {
          title: 'Safe Web Browsing Recommended',
          desc: 'Learn to spot risky TLDs, raw IP URLs, and missing HTTPS encryption in the URL Inspector.',
          link: '/url-analyzer',
          btnText: 'Run URL Safety Analyzer'
        };
      default:
        return {
          title: 'Branching Scenarios Recommended',
          desc: 'Sharpen your defensive decision making by resolving real-world social engineering and pretexting scenarios.',
          link: '/scenarios',
          btnText: 'Play Security Scenarios'
        };
    }
  };

  const rec = getWeakAreaRecommendation();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Top Banner Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 glass-panel p-6 rounded-2xl">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-500 text-xs font-semibold mb-2">
            <Shield className="w-3.5 h-3.5" />
            <span>Cybersecurity Learner Profile</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
            Security Awareness Dashboard
          </h1>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
            Real-time track of your defensive skills, quiz domain scores, and unlockable achievement badges.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Link to="/quizzes" className="btn-primary text-xs font-semibold py-2 px-4">
            <Zap className="w-4 h-4 text-amber-400" />
            <span>Take a Quiz</span>
          </Link>
        </div>
      </div>

      {/* Main Grid: Awareness Score Gauge & Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Score Gauge Card */}
        <div className="glass-card p-6 flex flex-col justify-between items-center text-center">
          <div className="w-full text-left flex items-center justify-between">
            <span className="text-xs font-semibold uppercase tracking-wider text-gray-400">
              Awareness Score
            </span>
            <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
              Educational Index
            </span>
          </div>

          <div className="relative my-6 flex items-center justify-center">
            {/* Circle Ring Gauge */}
            <svg className="w-44 h-44 transform -rotate-90">
              <circle
                cx="88"
                cy="88"
                r="70"
                stroke="currentColor"
                strokeWidth="12"
                className="text-gray-200 dark:text-gray-800"
                fill="transparent"
              />
              <circle
                cx="88"
                cy="88"
                r="70"
                stroke="currentColor"
                strokeWidth="12"
                strokeDasharray={440}
                strokeDashoffset={440 - (440 * overallScore) / 100}
                strokeLinecap="round"
                className="text-cyan-500 transition-all duration-1000 ease-out"
                fill="transparent"
              />
            </svg>
            <div className="absolute flex flex-col items-center">
              <span className="text-4xl font-extrabold text-gray-900 dark:text-white">
                {overallScore}
              </span>
              <span className="text-xs text-gray-500 dark:text-gray-400">/ 100</span>
            </div>
          </div>

          <div className="w-full space-y-2">
            <div className="flex justify-between text-xs text-gray-400">
              <span>Cyber Resilience Level</span>
              <span className="font-semibold text-emerald-400">
                {overallScore >= 80 ? 'Advanced Defender' : overallScore >= 60 ? 'Intermediate' : 'Novice'}
              </span>
            </div>
            <p className="text-[11px] text-gray-500 dark:text-gray-400 text-left">
              Calculated dynamically across 5 key cybersecurity domains. Complete more quizzes and scenarios to increase your score!
            </p>
          </div>
        </div>

        {/* Radar Performance Chart */}
        <div className="lg:col-span-2 glass-card p-6 flex flex-col justify-between">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-bold text-gray-900 dark:text-white flex items-center gap-2">
              <Target className="w-4 h-4 text-cyan-500" />
              <span>Domain Performance Radar</span>
            </h3>
            <span className="text-xs text-gray-400">Target: 100% Mastery</span>
          </div>

          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="75%" data={scoresData}>
                <PolarGrid stroke="#374151" />
                <PolarAngleAxis dataKey="domain" stroke="#9CA3AF" tick={{ fontSize: 12 }} />
                <PolarRadiusAxis angle={30} domain={[0, 100]} stroke="#4B5563" />
                <Radar
                  name="Awareness Score"
                  dataKey="score"
                  stroke="#06B6D4"
                  fill="#06B6D4"
                  fillOpacity={0.4}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>

          <div className="grid grid-cols-5 gap-2 pt-4 border-t border-gray-100 dark:border-gray-800 text-center text-xs">
            {scoresData.map((d, i) => (
              <div key={i}>
                <span className="text-gray-400 block text-[10px]">{d.domain}</span>
                <span className="font-bold text-gray-900 dark:text-white">{d.score}%</span>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="glass-card p-4 flex items-center gap-3">
          <div className="p-3 rounded-lg bg-cyan-500/10 text-cyan-400">
            <BookOpen className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xs text-gray-400 block">Modules Done</span>
            <span className="text-xl font-bold text-gray-900 dark:text-white">
              {progress.completedModules.length} / 11
            </span>
          </div>
        </div>

        <div className="glass-card p-4 flex items-center gap-3">
          <div className="p-3 rounded-lg bg-amber-500/10 text-amber-400">
            <Zap className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xs text-gray-400 block">Quizzes Taken</span>
            <span className="text-xl font-bold text-gray-900 dark:text-white">
              {progress.quizResults.length}
            </span>
          </div>
        </div>

        <div className="glass-card p-4 flex items-center gap-3">
          <div className="p-3 rounded-lg bg-emerald-500/10 text-emerald-400">
            <Shield className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xs text-gray-400 block">Scenarios Solved</span>
            <span className="text-xl font-bold text-gray-900 dark:text-white">
              {progress.completedScenarios.length} / 10
            </span>
          </div>
        </div>

        <div className="glass-card p-4 flex items-center gap-3">
          <div className="p-3 rounded-lg bg-rose-500/10 text-rose-400">
            <Award className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xs text-gray-400 block">Badges Earned</span>
            <span className="text-xl font-bold text-gray-900 dark:text-white">
              {progress.badges.length} / {badgesData.length}
            </span>
          </div>
        </div>
      </div>

      {/* Weak Area Recommendation Card */}
      <div className="glass-panel p-6 rounded-2xl border-l-4 border-l-amber-500 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-amber-500 text-xs font-bold uppercase tracking-wider">
            <AlertTriangle className="w-4 h-4" />
            <span>Recommended Learning Focus</span>
          </div>
          <h3 className="text-lg font-bold text-gray-900 dark:text-white">
            {rec.title}
          </h3>
          <p className="text-xs text-gray-600 dark:text-gray-300">
            {rec.desc}
          </p>
        </div>
        <Link to={rec.link} className="btn-primary text-xs font-semibold whitespace-nowrap">
          <span>{rec.btnText}</span>
          <ArrowUpRight className="w-4 h-4" />
        </Link>
      </div>

      {/* Badges & Achievements Section */}
      <div className="glass-card p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2">
              <Award className="w-5 h-5 text-amber-400" />
              <span>Achievement Badges</span>
            </h3>
            <p className="text-xs text-gray-400">Unlock badges by proving your cybersecurity skills across modules.</p>
          </div>
          <span className="text-xs font-mono text-cyan-400 font-bold">
            {progress.badges.length} / {badgesData.length} Unlocked
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {badgesData.map(badge => {
            const unlocked = progress.badges.includes(badge.id);
            return (
              <div
                key={badge.id}
                className={`p-4 rounded-xl border text-center transition-all ${
                  unlocked
                    ? 'bg-cyan-500/10 border-cyan-500/40 text-gray-900 dark:text-white shadow-glow-cyan'
                    : 'bg-gray-100 dark:bg-gray-900/40 border-gray-200 dark:border-gray-800 text-gray-400 opacity-60 grayscale'
                }`}
              >
                <div className="text-3xl mb-2">{badge.icon}</div>
                <h4 className="text-xs font-bold mb-1 truncate">{badge.title}</h4>
                <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded ${unlocked ? 'bg-emerald-500/20 text-emerald-400' : 'bg-gray-800 text-gray-500'}`}>
                  {unlocked ? 'Unlocked' : 'Locked'}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Recent Activity Stream */}
      <div className="glass-card p-6">
        <h3 className="text-sm font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
          <Activity className="w-4 h-4 text-cyan-400" />
          <span>Recent Activity Stream</span>
        </h3>
        <div className="space-y-3">
          {progress.recentActivity.map(act => (
            <div key={act.id} className="flex items-center justify-between p-3 rounded-lg bg-gray-50 dark:bg-gray-900/60 border border-gray-200 dark:border-gray-800 text-xs">
              <div className="flex items-center gap-3">
                <span className="text-lg">{act.icon}</span>
                <span className="font-medium text-gray-800 dark:text-gray-200">{act.title}</span>
              </div>
              <span className="text-[11px] font-mono text-gray-400">{act.time}</span>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
