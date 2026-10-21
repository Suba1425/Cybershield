const express = require('express');
const router = express.Router();
const { getAdminStats, addQuestion, deleteQuestion } = require('../controllers/adminController');
const { protect, adminOnly } = require('../middleware/auth');

router.use(protect, adminOnly);

router.get('/stats', getAdminStats);
router.post('/question', addQuestion);
router.delete('/question/:id', deleteQuestion);

module.exports = router;
