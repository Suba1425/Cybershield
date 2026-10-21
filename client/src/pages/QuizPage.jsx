import React, { useState } from 'react';
import { Award, Zap, HelpCircle, CheckCircle2, XCircle, RefreshCw, BookOpen, ChevronRight, BarChart2, Filter } from 'lucide-react';
import { quizQuestions, quizCategories, quizLevels } from '../data/quizzes';
import { useProgress } from '../context/ProgressContext';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';

export default function QuizPage() {
  const { recordQuizResult } = useProgress();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedLevel, setSelectedLevel] = useState('all');

  const [quizState, setQuizState] = useState('idle'); // 'idle', 'active', 'submitted'
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});

  // Filter questions based on category & difficulty level
  const filteredQuestions = quizQuestions.filter(q => {
    const matchCat = selectedCategory === 'all' || q.category === selectedCategory;
    const matchLvl = selectedLevel === 'all' || q.difficulty === selectedLevel;
    return matchCat && matchLvl;
  });

  const handleStartQuiz = () => {
    setQuizState('active');
    setCurrentIndex(0);
    setUserAnswers({});
  };

  const handleSelectAnswer = (optionIdx) => {
    setUserAnswers(prev => ({
      ...prev,
      [currentIndex]: optionIdx
    }));
  };

  const handleSubmitQuiz = () => {
    setQuizState('submitted');
    
    // Calculate Score
    let correctCount = 0;
    filteredQuestions.forEach((q, idx) => {
      if (userAnswers[idx] === q.correctAnswer) {
        correctCount += 1;
      }
    });

    const percent = Math.round((correctCount / filteredQuestions.length) * 100);
    recordQuizResult(selectedCategory !== 'all' ? selectedCategory : 'phishing', percent);
  };

  const getScorePercentage = () => {
    let correctCount = 0;
    filteredQuestions.forEach((q, idx) => {
      if (userAnswers[idx] === q.correctAnswer) correctCount += 1;
    });
    return Math.round((correctCount / filteredQuestions.length) * 100);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Banner Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 glass-panel p-6 rounded-2xl">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-semibold mb-2">
            <Award className="w-4 h-4" />
            <span>Categorized Assessment Engine</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
            Cybersecurity Awareness Quiz System
          </h1>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
            Test your knowledge across 8 cybersecurity domains and receive detailed explanations and retake recommendations.
          </p>
        </div>

        <div className="flex items-center gap-3">
          {quizState === 'active' && (
            <span className="px-3 py-1.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono">
              Question {currentIndex + 1} of {filteredQuestions.length}
            </span>
          )}
        </div>
      </div>

      {/* State 1: Quiz Configuration & Setup */}
      {quizState === 'idle' && (
        <div className="glass-card p-6 space-y-6">
          <h3 className="text-sm font-bold text-gray-900 dark:text-white flex items-center gap-2">
            <Filter className="w-4 h-4 text-cyan-400" />
            <span>Select Quiz Filters</span>
          </h3>

          {/* Level Filter Chips */}
          <div className="space-y-2">
            <label className="text-xs font-semibold text-gray-400 block">Difficulty Tier:</label>
            <div className="flex flex-wrap gap-2">
              {quizLevels.map(lvl => (
                <button
                  key={lvl.id}
                  onClick={() => setSelectedLevel(lvl.id)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all border ${
                    selectedLevel === lvl.id
                      ? 'bg-cyan-500/20 border-cyan-500 text-cyan-400'
                      : 'bg-gray-100 dark:bg-gray-900 border-gray-200 dark:border-gray-800 text-gray-400 hover:border-gray-700'
                  }`}
                >
                  {lvl.name}
                </button>
              ))}
            </div>
          </div>

          {/* Category Filter Chips */}
          <div className="space-y-2">
            <label className="text-xs font-semibold text-gray-400 block">Security Category:</label>
            <div className="flex flex-wrap gap-2">
              {quizCategories.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all border ${
                    selectedCategory === cat.id
                      ? 'bg-cyan-500/20 border-cyan-500 text-cyan-400'
                      : 'bg-gray-100 dark:bg-gray-900 border-gray-200 dark:border-gray-800 text-gray-400 hover:border-gray-700'
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>

          <div className="p-4 rounded-xl bg-gray-900 border border-gray-800 flex items-center justify-between text-xs">
            <span className="text-gray-300">
              Ready to begin: <strong>{filteredQuestions.length} Questions Selected</strong>
            </span>
            <button
              onClick={handleStartQuiz}
              disabled={filteredQuestions.length === 0}
              className="btn-primary text-xs font-semibold py-2.5 px-6"
            >
              <Zap className="w-4 h-4 text-amber-400" />
              <span>Start Quiz Challenge</span>
            </button>
          </div>
        </div>
      )}

      {/* State 2: Active Quiz Stepper */}
      {quizState === 'active' && filteredQuestions.length > 0 && (
        <div className="glass-card p-6 space-y-6">
          {/* Progress Bar */}
          <div className="w-full bg-gray-800 h-2 rounded-full overflow-hidden">
            <div
              className="bg-cyan-500 h-full transition-all duration-300"
              style={{ width: `${((currentIndex + 1) / filteredQuestions.length) * 100}%` }}
            />
          </div>

          {/* Active Question */}
          <div className="space-y-4">
            <div className="flex items-center justify-between text-xs font-mono text-gray-400">
              <span className="px-2 py-0.5 rounded bg-gray-800 text-cyan-400">
                {filteredQuestions[currentIndex].category.toUpperCase()} • {filteredQuestions[currentIndex].difficulty}
              </span>
              <span>Question {currentIndex + 1} of {filteredQuestions.length}</span>
            </div>

            <h2 className="text-lg font-bold text-gray-900 dark:text-white leading-relaxed">
              {filteredQuestions[currentIndex].question}
            </h2>

            {/* Options */}
            <div className="space-y-3 pt-2">
              {filteredQuestions[currentIndex].options.map((opt, optionIdx) => {
                const isSelected = userAnswers[currentIndex] === optionIdx;
                return (
                  <button
                    key={optionIdx}
                    onClick={() => handleSelectAnswer(optionIdx)}
                    className={`w-full text-left p-4 rounded-xl text-xs sm:text-sm transition-all border flex items-center gap-3 ${
                      isSelected
                        ? 'bg-cyan-500/20 border-cyan-500 text-cyan-300 font-semibold shadow-glow-cyan'
                        : 'bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800 text-gray-800 dark:text-gray-200 hover:border-cyan-500/40'
                    }`}
                  >
                    <span className="w-6 h-6 rounded-full bg-gray-800 border border-gray-700 text-gray-300 flex items-center justify-center font-mono text-xs shrink-0">
                      {String.fromCharCode(65 + optionIdx)}
                    </span>
                    <span>{opt}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Stepper Navigation */}
          <div className="flex justify-between items-center pt-4 border-t border-gray-100 dark:border-gray-800">
            <button
              onClick={() => setCurrentIndex(prev => Math.max(0, prev - 1))}
              disabled={currentIndex === 0}
              className="btn-secondary text-xs"
            >
              Previous
            </button>

            {currentIndex < filteredQuestions.length - 1 ? (
              <button
                onClick={() => setCurrentIndex(prev => prev + 1)}
                className="btn-primary text-xs"
              >
                Next Question
              </button>
            ) : (
              <button
                onClick={handleSubmitQuiz}
                className="btn-primary bg-emerald-600 hover:bg-emerald-500 text-xs font-bold py-2.5 px-6"
              >
                Submit Quiz Answers
              </button>
            )}
          </div>
        </div>
      )}

      {/* State 3: Quiz Submitted Results & Explanation Review */}
      {quizState === 'submitted' && (
        <div className="space-y-6 animate-fade-in">
          
          {/* Score Header Card */}
          <div className="glass-card p-6 text-center space-y-4 border-cyan-500/40">
            <div className="w-16 h-16 mx-auto rounded-full bg-cyan-500/20 border border-cyan-400 flex items-center justify-center text-cyan-400 text-2xl font-bold">
              {getScorePercentage()}%
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                {getScorePercentage() >= 80 ? 'Excellent Cybersecurity Awareness!' : 'Good Effort! Room for Improvement.'}
              </h2>
              <p className="text-xs text-gray-400 mt-1">
                You scored {filteredQuestions.filter((q, idx) => userAnswers[idx] === q.correctAnswer).length} out of {filteredQuestions.length} questions correctly.
              </p>
            </div>

            <div className="flex justify-center gap-3 pt-2">
              <button
                onClick={handleStartQuiz}
                className="btn-secondary text-xs"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Retake Quiz</span>
              </button>
              <button
                onClick={() => setQuizState('idle')}
                className="btn-primary text-xs"
              >
                <span>Try Another Category</span>
              </button>
            </div>
          </div>

          {/* Answer Breakdown & Explanations */}
          <div className="glass-card p-6 space-y-4">
            <h3 className="text-sm font-bold text-gray-900 dark:text-white flex items-center gap-2 border-b border-gray-200 dark:border-gray-800 pb-3">
              <BookOpen className="w-4 h-4 text-cyan-400" />
              <span>Question-by-Question Explanation Review</span>
            </h3>

            <div className="space-y-4">
              {filteredQuestions.map((q, idx) => {
                const userChoice = userAnswers[idx];
                const isCorrect = userChoice === q.correctAnswer;
                return (
                  <div key={q.id} className="p-4 rounded-xl bg-gray-900 border border-gray-800 space-y-2 text-xs">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-gray-100 flex items-center gap-2">
                        {isCorrect ? <CheckCircle2 className="w-4 h-4 text-emerald-400" /> : <XCircle className="w-4 h-4 text-rose-400" />}
                        <span>Q{idx + 1}: {q.question}</span>
                      </span>
                      <span className={`px-2 py-0.5 rounded text-[10px] font-mono border ${isCorrect ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30' : 'bg-rose-500/20 text-rose-400 border-rose-500/30'}`}>
                        {isCorrect ? 'Correct' : 'Incorrect'}
                      </span>
                    </div>

                    <div className="pl-6 space-y-1 text-gray-300">
                      <p><strong>Your Answer:</strong> {q.options[userChoice] || 'No Answer'}</p>
                      {!isCorrect && <p className="text-emerald-400"><strong>Correct Answer:</strong> {q.options[q.correctAnswer]}</p>}
                      <p className="text-gray-400 pt-1 border-t border-gray-800 leading-relaxed">
                        <strong>Explanation:</strong> {q.explanation}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      )}

    </div>
  );
}
