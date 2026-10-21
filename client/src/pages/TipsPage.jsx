import React, { useState } from 'react';
import { BookOpen, Search, Bookmark, Shield, CheckCircle2, ChevronRight, Filter } from 'lucide-react';
import { tipsData, tipCategories } from '../data/tips';

export default function TipsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [bookmarks, setBookmarks] = useState(() => {
    const saved = localStorage.getItem('cybershield_bookmarks');
    return saved ? JSON.parse(saved) : [];
  });
  const [activeTipModal, setActiveTipModal] = useState(null);

  const toggleBookmark = (tipId, e) => {
    e.stopPropagation();
    setBookmarks(prev => {
      const next = prev.includes(tipId)
        ? prev.filter(id => id !== tipId)
        : [...prev, tipId];
      localStorage.setItem('cybershield_bookmarks', JSON.stringify(next));
      return next;
    });
  };

  const filteredTips = tipsData.filter(tip => {
    const matchesSearch = tip.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          tip.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          tip.explanation.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || tip.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Banner Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 glass-panel p-6 rounded-2xl">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-semibold mb-2">
            <BookOpen className="w-4 h-4" />
            <span>Searchable Security Repository</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
            Cybersecurity Tips & Best Practices
          </h1>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
            Browse actionable cyber hygiene guidelines across 10 security categories.
          </p>
        </div>

        <div className="flex items-center gap-2 font-mono text-xs text-cyan-400 bg-gray-100 dark:bg-gray-900 px-3.5 py-2 rounded-xl border border-gray-200 dark:border-gray-800">
          <Bookmark className="w-4 h-4 fill-cyan-400/20" />
          <span>{bookmarks.length} Bookmarked Tips</span>
        </div>
      </div>

      {/* Search & Filter Bar */}
      <div className="glass-card p-6 space-y-4">
        <div className="relative">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search security tips by keyword (e.g., VPN, MFA, Passphrase, Wi-Fi)..."
            className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-950 border border-gray-300 dark:border-gray-800 text-gray-900 dark:text-white font-sans text-xs sm:text-sm focus:outline-none focus:border-cyan-500 transition-colors pl-10"
          />
          <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
        </div>

        {/* Category Chips */}
        <div className="flex flex-wrap gap-2 pt-2">
          {tipCategories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all border ${
                selectedCategory === cat
                  ? 'bg-cyan-500/20 border-cyan-500 text-cyan-400 font-semibold'
                  : 'bg-gray-100 dark:bg-gray-900 border-gray-200 dark:border-gray-800 text-gray-400 hover:border-gray-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Tips Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTips.map(tip => {
          const isBookmarked = bookmarks.includes(tip.id);
          return (
            <div
              key={tip.id}
              onClick={() => setActiveTipModal(tip)}
              className="glass-card p-6 flex flex-col justify-between cursor-pointer group hover:border-cyan-500/50 transition-all"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-0.5 rounded text-[10px] font-mono bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                    {tip.category}
                  </span>
                  <button
                    onClick={(e) => toggleBookmark(tip.id, e)}
                    className="p-1 text-gray-400 hover:text-cyan-400 transition-colors"
                    title={isBookmarked ? 'Remove bookmark' : 'Bookmark tip'}
                  >
                    <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-cyan-400 text-cyan-400' : ''}`} />
                  </button>
                </div>

                <h3 className="text-base font-bold text-gray-900 dark:text-white group-hover:text-cyan-400 transition-colors leading-snug">
                  {tip.title}
                </h3>

                <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed line-clamp-2">
                  {tip.summary}
                </p>
              </div>

              <div className="pt-4 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between text-xs text-cyan-400 font-semibold">
                <span>Read Full Tip</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          );
        })}
      </div>

      {/* Tip Detail Modal */}
      {activeTipModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in">
          <div className="bg-white dark:bg-[#111827] border border-cyan-500/40 rounded-2xl p-6 max-w-lg w-full space-y-4 shadow-2xl relative">
            
            <div className="flex items-center justify-between border-b border-gray-200 dark:border-gray-800 pb-3">
              <span className="px-2.5 py-1 rounded bg-cyan-500/10 text-cyan-400 text-xs font-mono font-semibold">
                {activeTipModal.category}
              </span>
              <button
                onClick={() => setActiveTipModal(null)}
                className="text-gray-400 hover:text-white text-xs font-semibold"
              >
                Close ✕
              </button>
            </div>

            <h2 className="text-lg font-bold text-gray-900 dark:text-white">
              {activeTipModal.title}
            </h2>

            <div className="space-y-3 text-xs text-gray-300 leading-relaxed">
              <div className="p-3 rounded-lg bg-gray-900 border border-gray-800 space-y-1">
                <span className="text-cyan-400 font-bold block font-mono">EXPLANATION:</span>
                <p>{activeTipModal.explanation}</p>
              </div>

              <div className="p-3 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-300 space-y-1">
                <span className="font-bold block font-mono">WHY IT MATTERS:</span>
                <p>{activeTipModal.whyItMatters}</p>
              </div>

              <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 space-y-1">
                <span className="font-bold block font-mono flex items-center gap-1">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>RECOMMENDED DEFENSIVE ACTION:</span>
                </span>
                <p>{activeTipModal.action}</p>
              </div>
            </div>

            <button
              onClick={() => setActiveTipModal(null)}
              className="btn-primary w-full text-xs font-semibold py-2.5"
            >
              Done Reading
            </button>

          </div>
        </div>
      )}

    </div>
  );
}
