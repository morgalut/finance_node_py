const express = require('express');
const TransactionController = require('../controllers/transactionController');

const router = express.Router();

router.post('/', TransactionController.create);
router.get('/:userId', TransactionController.getByUserId);
router.put('/:transactionId', TransactionController.update);
router.delete('/:transactionId', TransactionController.delete);

module.exports = router;
