import React, { useState } from 'react';
import { Shield, Users, BarChart2, BookOpen, AlertTriangle, Settings, Plus, Trash2, Edit } from 'lucide-react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, PieChart, Pie, Cell } from 'recharts';
import { useAuth } from '../context/AuthContext';
import { quizQuestions } from '../data/quizzes';
import { tipsData } from '../data/tips';

export default function AdminDashboardPage() {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('analytics');

  // Simulated Admin Analytics Data
  const analyticsStats = [
    { title: 'Total Registered Learners', value: '1,428', change: '+12% this week', color: 'cyan' },
    { title: 'Average Awareness Score', value: '74 / 100', change: 'Target: 80', color: 'emerald' },
    { title: 'Quizzes Completed', value: '3,892', change: '89% pass rate', color: 'amber' },
    { title: 'Most Missed Topic', value: 'Spear Phishing', change: 'Requires review', color: 'rose' },
  ];

  const quizTopicData = [
    { topic: 'Phishing', completed: 1240 },
    { topic: 'Passwords', completed: 980 },
    { topic: 'Browsing', completed: 750 },
    { topic: 'Social Eng.', completed: 620 },
    { topic: 'Device Sec.', completed: 300 },
  ];

  if (user?.role !== 'admin') {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 text-center space-y-4">
        <AlertTriangle className="w-12 h-12 text-rose-500 mx-auto" />
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">403 — Unauthorized Access</h1>
        <p className="text-xs text-gray-400">
          The Admin Console requires administrator privileges. Use the navbar top-right role switcher to toggle to Admin Mode.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 glass-panel p-6 rounded-2xl border-cyan-500/30">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-semibold mb-2">
            <Shield className="w-4 h-4" />
            <span>Administrator Control Console</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
            CyberShield Admin Analytics & Content Manager
          </h1>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
            Monitor organizational cyber readiness metrics and manage quiz/tip content.
          </p>
        </div>

        <div className="flex items-center gap-2 font-mono text-xs text-cyan-400 bg-gray-900 px-3.5 py-2 rounded-xl border border-gray-800">
          <span>Logged in as: {user.name}</span>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-gray-200 dark:border-gray-800 space-x-4 text-xs font-semibold">
        <button
          onClick={() => setActiveTab('analytics')}
          className={`pb-3 transition-colors border-b-2 ${
            activeTab === 'analytics'
              ? 'border-cyan-500 text-cyan-400 font-bold'
              : 'border-transparent text-gray-400 hover:text-white'
          }`}
        >
          Analytics & Metrics
        </button>
        <button
          onClick={() => setActiveTab('quizzes')}
          className={`pb-3 transition-colors border-b-2 ${
            activeTab === 'quizzes'
              ? 'border-cyan-500 text-cyan-400 font-bold'
              : 'border-transparent text-gray-400 hover:text-white'
          }`}
        >
          Manage Quiz Questions ({quizQuestions.length})
        </button>
        <button
          onClick={() => setActiveTab('tips')}
          className={`pb-3 transition-colors border-b-2 ${
            activeTab === 'tips'
              ? 'border-cyan-500 text-cyan-400 font-bold'
              : 'border-transparent text-gray-400 hover:text-white'
          }`}
        >
          Manage Tips Repository ({tipsData.length})
        </button>
      </div>

      {/* Tab 1: Analytics */}
      {activeTab === 'analytics' && (
        <div className="space-y-8 animate-fade-in">
          
          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {analyticsStats.map((st, idx) => (
              <div key={idx} className="glass-card p-5 space-y-2">
                <span className="text-xs text-gray-400 block font-mono">{st.title}</span>
                <span className="text-2xl font-bold text-gray-900 dark:text-white block">{st.value}</span>
                <span className="text-[10px] text-cyan-400 font-mono block">{st.change}</span>
              </div>
            ))}
          </div>

          {/* Chart Section */}
          <div className="glass-card p-6 space-y-4">
            <h3 className="text-sm font-bold text-gray-900 dark:text-white flex items-center gap-2">
              <BarChart2 className="w-4 h-4 text-cyan-400" />
              <span>Quiz Attempts Distribution by Security Domain</span>
            </h3>

            <div className="h-64 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={quizTopicData}>
                  <XAxis dataKey="topic" stroke="#9CA3AF" tick={{ fontSize: 12 }} />
                  <YAxis stroke="#9CA3AF" />
                  <Tooltip contentStyle={{ backgroundColor: '#111827', borderColor: '#374151', color: '#fff' }} />
                  <Bar dataKey="completed" fill="#06B6D4" radius={[6, 6, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

        </div>
      )}

      {/* Tab 2: Quizzes Content Manager */}
      {activeTab === 'quizzes' && (
        <div className="glass-card p-6 space-y-4 animate-fade-in">
          <div className="flex justify-between items-center border-b border-gray-200 dark:border-gray-800 pb-3">
            <h3 className="text-sm font-bold text-gray-900 dark:text-white">Active Quiz Database</h3>
            <button className="btn-primary text-xs py-1.5 px-3">
              <Plus className="w-4 h-4" />
              <span>Add New Question</span>
            </button>
          </div>

          <div className="space-y-3">
            {quizQuestions.map((q, idx) => (
              <div key={q.id} className="p-4 rounded-xl bg-gray-900 border border-gray-800 text-xs space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-cyan-400 font-semibold">
                    Q{idx + 1} [{q.category.toUpperCase()}] • {q.difficulty}
                  </span>
                  <div className="flex gap-2">
                    <button className="text-gray-400 hover:text-white"><Edit className="w-3.5 h-3.5" /></button>
                    <button className="text-gray-400 hover:text-rose-400"><Trash2 className="w-3.5 h-3.5" /></button>
                  </div>
                </div>
                <p className="text-gray-200 font-medium">{q.question}</p>
                <span className="text-emerald-400 block text-[11px]">Correct Option: {q.options[q.correctAnswer]}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab 3: Tips Manager */}
      {activeTab === 'tips' && (
        <div className="glass-card p-6 space-y-4 animate-fade-in">
          <div className="flex justify-between items-center border-b border-gray-200 dark:border-gray-800 pb-3">
            <h3 className="text-sm font-bold text-gray-900 dark:text-white">Security Tips Repository</h3>
            <button className="btn-primary text-xs py-1.5 px-3">
              <Plus className="w-4 h-4" />
              <span>Add New Tip</span>
            </button>
          </div>

          <div className="space-y-3">
            {tipsData.map((tip) => (
              <div key={tip.id} className="p-4 rounded-xl bg-gray-900 border border-gray-800 text-xs space-y-1">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-cyan-400 font-semibold">
                    [{tip.category}] {tip.title}
                  </span>
                  <div className="flex gap-2">
                    <button className="text-gray-400 hover:text-white"><Edit className="w-3.5 h-3.5" /></button>
                    <button className="text-gray-400 hover:text-rose-400"><Trash2 className="w-3.5 h-3.5" /></button>
                  </div>
                </div>
                <p className="text-gray-400">{tip.summary}</p>
              </div>
            ))}
          </div>
        </div>
      )}

    </div>
  );
}
