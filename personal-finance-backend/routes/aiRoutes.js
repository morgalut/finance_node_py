const express = require('express');
const { AiController, processTransaction } = require('../controllers/aiController'); // Destructure processTransaction

const router = express.Router();

router.post('/train', AiController.train);
router.post('/predict', AiController.predict);
router.post('/process-transaction', processTransaction); // Use processTransaction here

module.exports = router;
