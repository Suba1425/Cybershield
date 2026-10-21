const mongoose = require('mongoose');

const scenarioOptionSchema = new mongoose.Schema({
  id: String,
  text: String,
  isCorrect: Boolean,
  feedback: String
});

const scenarioSchema = new mongoose.Schema({
  scenarioId: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  category: { type: String, required: true },
  difficulty: { type: String, required: true },
  context: { type: String, required: true },
  options: [scenarioOptionSchema],
  takeaway: { type: String, required: true }
});

module.exports = mongoose.model('Scenario', scenarioSchema);
