import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Lock, Eye, Terminal, Award, ChevronRight, Zap, CheckCircle, ArrowRight, Activity, BookOpen, AlertCircle, Cpu, Users } from 'lucide-react';
import { useProgress } from '../context/ProgressContext';

export default function LandingPage() {
  const { overallScore } = useProgress();

  const stats = [
    { label: 'Interactive Scenarios', value: '10+', icon: Activity },
    { label: 'Security Domains', value: '8 Tiers', icon: Shield },
    { label: 'Quiz Questions', value: '100% Custom', icon: BookOpen },
    { label: 'Zero-Trust Analytics', value: 'Local Only', icon: Lock }
  ];

  const features = [
    {
      title: 'Phishing & Smishing Simulator',
      desc: 'Inspect simulated emails, SMS, and QR codes for subtle sender spoofing, fake urgency, and malicious payload links.',
      icon: Eye,
      link: '/phishing',
      badge: 'Interactive'
    },
    {
      title: 'Local Password Analyzer',
      desc: 'Calculate local Shannon entropy, estimate crack times, check common breach patterns, and generate unhackable passphrases.',
      icon: Lock,
      link: '/passwords',
      badge: 'Zero-Trust'
    },
    {
      title: 'URL Safety Heuristic Inspector',
      desc: 'Analyze web link indicators such as raw IP addresses, suspicious TLDs, punycode, and subdomain depth with educational disclaimers.',
      icon: Terminal,
      link: '/url-analyzer',
      badge: 'Heuristics'
    },
    {
      title: 'Branching Security Scenarios',
      desc: 'Face 10 realistic corporate and personal threat situations (Vishing, USB baiting, BEC, Quishing) and choose defensive outcomes.',
      icon: Shield,
      link: '/scenarios',
      badge: 'Real-world'
    },
    {
      title: 'Categorized Quiz Engine',
      desc: 'Test your cyber resilience across Beginner, Intermediate, and Advanced tiers with instant explanation feedback.',
      icon: Award,
      link: '/quizzes',
      badge: 'Gamified'
    },
    {
      title: 'Educational Awareness Score',
      desc: 'Track your real-time learning progress radar charts, unlock achievement badges, and receive targeted weak-area recommendations.',
      icon: Cpu,
      link: '/dashboard',
      badge: 'Analytics'
    }
  ];

  return (
    <div className="space-y-16 pb-16">
      
      {/* Hero Section */}
      <section className="relative pt-12 lg:pt-20 overflow-hidden">
        {/* Futuristic Background Grid Effect */}
        <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-500 text-xs font-semibold mb-6">
            <Shield className="w-4 h-4" />
            <span>Final-Year Cybersecurity Capstone Project</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold text-gray-900 dark:text-white tracking-tight max-w-4xl mx-auto leading-tight">
            Cybersecurity Awareness Portal
          </h1>

          <p className="mt-4 text-xl sm:text-2xl font-mono text-cyan-600 dark:text-cyan-400 font-medium">
            "Learn. Detect. Protect."
          </p>

          <p className="mt-6 text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Learn to identify threats. Build secure digital habits. Protect your identity through safe, interactive simulations rather than passive reading.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/learn" className="btn-primary w-full sm:w-auto text-base py-3 px-8">
              <span>Start Learning</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link to="/quizzes" className="btn-secondary w-full sm:w-auto text-base py-3 px-8">
              <span>Test Your Knowledge</span>
              <Zap className="w-5 h-5 text-amber-500" />
            </Link>
          </div>

          {/* SOC Dashboard Visual Preview Card */}
          <div className="mt-14 max-w-5xl mx-auto glass-card p-6 shadow-2xl relative border-cyan-500/30">
            <div className="flex items-center justify-between pb-4 border-b border-gray-200 dark:border-gray-800 text-xs font-mono text-gray-400">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-500" />
                <span className="w-3 h-3 rounded-full bg-amber-500" />
                <span className="w-3 h-3 rounded-full bg-emerald-500" />
                <span className="ml-2 text-cyan-400 font-bold">CyberShield Operating Console v1.0</span>
              </div>
              <div className="hidden sm:flex items-center gap-3">
                <span className="text-emerald-400">● LIVE MONITORING</span>
                <span>User: Alex Student</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6 text-left">
              <div className="p-4 rounded-lg bg-gray-100 dark:bg-gray-900/90 border border-gray-200 dark:border-gray-800">
                <span className="text-xs text-gray-400 block mb-1">Educational Awareness Score</span>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold text-emerald-400">{overallScore}</span>
                  <span className="text-xs text-gray-400">/ 100</span>
                </div>
                <div className="mt-2 w-full bg-gray-700 h-2 rounded-full overflow-hidden">
                  <div className="bg-emerald-400 h-full" style={{ width: `${overallScore}%` }} />
                </div>
              </div>

              <div className="p-4 rounded-lg bg-gray-100 dark:bg-gray-900/90 border border-gray-200 dark:border-gray-800">
                <span className="text-xs text-gray-400 block mb-1">Phishing Defense Index</span>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold text-cyan-400">82%</span>
                  <span className="text-xs text-emerald-400">● Optimal</span>
                </div>
                <span className="text-[11px] text-gray-400 block mt-2">6 Phishing Scenarios Audited</span>
              </div>

              <div className="p-4 rounded-lg bg-gray-100 dark:bg-gray-900/90 border border-gray-200 dark:border-gray-800">
                <span className="text-xs text-gray-400 block mb-1">Password Entropy Rate</span>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold text-amber-400">75 bits</span>
                  <span className="text-xs text-gray-400">Strong</span>
                </div>
                <span className="text-[11px] text-gray-400 block mt-2">0 Server Network Calls</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Metrics & Statistics Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div key={idx} className="glass-card p-5 text-center">
                <Icon className="w-6 h-6 text-cyan-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</div>
                <div className="text-xs text-gray-500 dark:text-gray-400 font-medium">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Interactive Feature Grid Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Interactive Learning Modules
          </h2>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
            Practical defensive tools designed to build muscular cyber awareness habits.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="glass-card p-6 flex flex-col justify-between group">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-lg bg-cyan-500/10 text-cyan-500 group-hover:bg-cyan-500 group-hover:text-white transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-[10px] font-mono text-cyan-600 dark:text-cyan-400 font-semibold border border-cyan-500/20">
                      {item.badge}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                    {item.desc}
                  </p>
                </div>
                <Link
                  to={item.link}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-600 dark:text-cyan-400 hover:text-cyan-300 transition-colors pt-2 border-t border-gray-100 dark:border-gray-800"
                >
                  <span>Launch Module</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            );
          })}
        </div>
      </section>

      {/* Why Cybersecurity Awareness Matters */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-panel rounded-2xl p-8 lg:p-12 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 text-rose-500 text-xs font-semibold border border-rose-500/20">
                <AlertCircle className="w-4 h-4" />
                <span>Why Awareness Matters</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
                Over 85% of Cybersecurity Breaches Involve Human Elements
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                Technical firewalls and anti-virus software are essential, but attackers frequently bypass them by targeting people directly through phishing emails, social engineering, stolen passwords, and malicious links.
              </p>
              <ul className="space-y-2 text-xs text-gray-600 dark:text-gray-300 pt-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Defends personal banking, email, and social media from account takeover.</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Protects organizational networks from Business Email Compromise (BEC).</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Builds zero-trust evaluation habits for every email, call, and web link.</span>
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-xl bg-gray-900 border border-gray-800 space-y-4 font-mono text-xs">
              <div className="text-cyan-400 font-bold flex items-center gap-2 border-b border-gray-800 pb-2">
                <Terminal className="w-4 h-4" />
                <span>THREAT_DEFENSE_LOG.SH</span>
              </div>
              <div className="space-y-2 text-gray-300">
                <p className="text-emerald-400">[PASS] 100% Client-side Password Entropy verification</p>
                <p className="text-emerald-400">[PASS] Educational Heuristic inspection on untrusted links</p>
                <p className="text-amber-400">[WARN] 1 Phishing indicator detected in simulated email #4</p>
                <p className="text-cyan-400">[INFO] Educational Awareness Score computed: {overallScore} / 100</p>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
