import React, { createContext, useContext, useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { badgesData } from '../data/badges';

const ProgressContext = createContext();

export function ProgressProvider({ children }) {
  const [progress, setProgress] = useState(() => {
    const saved = localStorage.getItem('cybershield_progress');
    if (saved) {
      try { return JSON.parse(saved); } catch (e) { /* fallback */ }
    }
    return {
      completedModules: ['mod-1', 'mod-2'],
      completedScenarios: ['scenario-1', 'scenario-2'],
      quizResults: [
        { quizId: 1, score: 90, total: 100, category: 'phishing', date: new Date().toISOString() },
        { quizId: 2, score: 80, total: 100, category: 'passwords', date: new Date().toISOString() }
      ],
      analyzedUrlsCount: 2,
      evaluatedPasswordsCount: 3,
      badges: ['badge-beginner', 'badge-password'],
      scores: {
        phishing: 80,
        passwords: 75,
        browsing: 70,
        social: 65,
        device: 70
      },
      recentActivity: [
        { id: 'act-1', type: 'module', title: 'Cybersecurity Basics Completed', time: '2 hours ago', icon: '📖' },
        { id: 'act-2', type: 'quiz', title: 'Phishing Basics Quiz - Scored 90%', time: 'Yesterday', icon: '🎯' },
        { id: 'act-3', type: 'badge', title: 'Unlocked Badge: Password Protector', time: '2 days ago', icon: '🔐' }
      ]
    };
  });

  const [newlyUnlockedBadge, setNewlyUnlockedBadge] = useState(null);

  useEffect(() => {
    localStorage.setItem('cybershield_progress', JSON.stringify(progress));
  }, [progress]);

  // Compute Overall Educational Awareness Score
  const calculateOverallScore = () => {
    const { phishing, passwords, browsing, social, device } = progress.scores;
    const avg = Math.round((phishing + passwords + browsing + social + device) / 5);
    return Math.min(100, Math.max(0, avg));
  };

  const triggerConfetti = () => {
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (e) {
      /* fallback if canvas is unavailable */
    }
  };

  const unlockBadge = (badgeId) => {
    if (!progress.badges.includes(badgeId)) {
      const badgeObj = badgesData.find(b => b.id === badgeId);
      setProgress(prev => ({
        ...prev,
        badges: [...prev.badges, badgeId],
        recentActivity: [
          {
            id: 'act-' + Date.now(),
            type: 'badge',
            title: `Unlocked Badge: ${badgeObj?.title || 'Achievement'}`,
            time: 'Just now',
            icon: badgeObj?.icon || '🏆'
          },
          ...prev.recentActivity
        ]
      }));
      if (badgeObj) {
        setNewlyUnlockedBadge(badgeObj);
        triggerConfetti();
      }
    }
  };

  const markModuleCompleted = (moduleId) => {
    if (!progress.completedModules.includes(moduleId)) {
      setProgress(prev => {
        const nextModules = [...prev.completedModules, moduleId];
        const nextScores = {
          ...prev.scores,
          phishing: Math.min(100, prev.scores.phishing + 5),
          browsing: Math.min(100, prev.scores.browsing + 5)
        };
        return {
          ...prev,
          completedModules: nextModules,
          scores: nextScores,
          recentActivity: [
            {
              id: 'act-' + Date.now(),
              type: 'module',
              title: `Module Completed: ${moduleId}`,
              time: 'Just now',
              icon: '✅'
            },
            ...prev.recentActivity
          ]
        };
      });
      unlockBadge('badge-beginner');
    }
  };

  const recordScenarioCompletion = (scenarioId, wasCorrect) => {
    if (!progress.completedScenarios.includes(scenarioId)) {
      setProgress(prev => ({
        ...prev,
        completedScenarios: [...prev.completedScenarios, scenarioId],
        scores: {
          ...prev.scores,
          social: Math.min(100, prev.scores.social + (wasCorrect ? 8 : 2))
        },
        recentActivity: [
          {
            id: 'act-' + Date.now(),
            type: 'scenario',
            title: `Attempted Scenario Challenge`,
            time: 'Just now',
            icon: '⚔️'
          },
          ...prev.recentActivity
        ]
      }));
    }
  };

  const recordQuizResult = (category, scorePercentage) => {
    setProgress(prev => {
      const catKey = category && prev.scores[category] ? category : 'phishing';
      const newCatScore = Math.round((prev.scores[catKey] + scorePercentage) / 2);
      return {
        ...prev,
        quizResults: [
          { quizId: Date.now(), score: scorePercentage, total: 100, category: catKey, date: new Date().toISOString() },
          ...prev.quizResults
        ],
        scores: {
          ...prev.scores,
          [catKey]: Math.min(100, newCatScore)
        },
        recentActivity: [
          {
            id: 'act-' + Date.now(),
            type: 'quiz',
            title: `Quiz Completed — ${scorePercentage}%`,
            time: 'Just now',
            icon: '🎯'
          },
          ...prev.recentActivity
        ]
      };
    });

    if (scorePercentage >= 80) {
      unlockBadge('badge-quizmaster');
    }
    if (calculateOverallScore() >= 85) {
      unlockBadge('badge-champion');
    }
  };

  const recordUrlAnalyzed = () => {
    setProgress(prev => {
      const count = prev.analyzedUrlsCount + 1;
      if (count >= 3) {
        setTimeout(() => unlockBadge('badge-browser'), 100);
      }
      return {
        ...prev,
        analyzedUrlsCount: count,
        scores: {
          ...prev.scores,
          browsing: Math.min(100, prev.scores.browsing + 3)
        }
      };
    });
  };

  const recordPasswordEvaluated = (isVeryStrong) => {
    setProgress(prev => {
      const count = prev.evaluatedPasswordsCount + 1;
      return {
        ...prev,
        evaluatedPasswordsCount: count,
        scores: {
          ...prev.scores,
          passwords: Math.min(100, prev.scores.passwords + 4)
        }
      };
    });
    if (isVeryStrong) {
      unlockBadge('badge-password');
    }
  };

  return (
    <ProgressContext.Provider
      value={{
        progress,
        overallScore: calculateOverallScore(),
        markModuleCompleted,
        recordScenarioCompletion,
        recordQuizResult,
        recordUrlAnalyzed,
        recordPasswordEvaluated,
        unlockBadge,
        newlyUnlockedBadge,
        dismissBadgeModal: () => setNewlyUnlockedBadge(null)
      }}
    >
      {children}
    </ProgressContext.Provider>
  );
}

export const useProgress = () => useContext(ProgressContext);
