const User = require('../models/User');
const QuizQuestion = require('../models/QuizQuestion');
const Tip = require('../models/Tip');

exports.getAdminStats = async (req, res, next) => {
  try {
    const totalUsers = await User.countDocuments();
    const totalQuestions = await QuizQuestion.countDocuments();
    const totalTips = await Tip.countDocuments();

    res.json({
      success: true,
      stats: {
        totalUsers,
        totalQuestions,
        totalTips,
        avgAwarenessScore: 78
      }
    });
  } catch (error) {
    next(error);
  }
};

exports.addQuestion = async (req, res, next) => {
  try {
    const { question, options, correctAnswer, explanation, category, difficulty } = req.body;
    const newQuestion = await QuizQuestion.create({
      question, options, correctAnswer, explanation, category, difficulty
    });
    res.status(201).json({ success: true, data: newQuestion });
  } catch (error) {
    next(error);
  }
};

exports.deleteQuestion = async (req, res, next) => {
  try {
    await QuizQuestion.findByIdAndDelete(req.params.id);
    res.json({ success: true, message: 'Question deleted successfully' });
  } catch (error) {
    next(error);
  }
};
