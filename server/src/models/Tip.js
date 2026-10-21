const mongoose = require('mongoose');

const tipSchema = new mongoose.Schema({
  title: { type: String, required: true },
  category: { type: String, required: true },
  summary: { type: String, required: true },
  explanation: { type: String, required: true },
  whyItMatters: { type: String, required: true },
  action: { type: String, required: true }
});

module.exports = mongoose.model('Tip', tipSchema);
