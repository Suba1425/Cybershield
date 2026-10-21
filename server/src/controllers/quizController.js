const QuizQuestion = require('../models/QuizQuestion');

exports.getQuestions = async (req, res, next) => {
  try {
    const { category, difficulty } = req.query;
    const filter = {};
    if (category && category !== 'all') filter.category = category;
    if (difficulty && difficulty !== 'all') filter.difficulty = difficulty;

    const questions = await QuizQuestion.find(filter);
    res.json({ success: true, count: questions.length, data: questions });
  } catch (error) {
    next(error);
  }
};

exports.submitQuiz = async (req, res, next) => {
  try {
    const { userAnswers } = req.body; // Array of { questionId, selectedOption }
    if (!Array.isArray(userAnswers)) {
      return res.status(400).json({ success: false, message: 'Invalid payload' });
    }

    let score = 0;
    const results = [];

    for (const ans of userAnswers) {
      const q = await QuizQuestion.findById(ans.questionId);
      if (q) {
        const isCorrect = q.correctAnswer === ans.selectedOption;
        if (isCorrect) score += 1;
        results.push({
          questionId: q._id,
          question: q.question,
          isCorrect,
          correctAnswer: q.correctAnswer,
          userAnswer: ans.selectedOption,
          explanation: q.explanation
        });
      }
    }

    const percentage = Math.round((score / userAnswers.length) * 100);

    res.json({
      success: true,
      score,
      total: userAnswers.length,
      percentage,
      results
    });
  } catch (error) {
    next(error);
  }
};
