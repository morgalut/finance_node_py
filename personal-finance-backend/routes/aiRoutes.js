const express = require('express');
const AiController = require('../controllers/aiController');

const router = express.Router();

router.post('/train', AiController.train);
router.post('/predict', AiController.predict);

module.exports = router;
