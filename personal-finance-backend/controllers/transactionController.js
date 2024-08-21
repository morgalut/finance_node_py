const TransactionService = require('../services/transactionService');

class TransactionController {
    // Handle creating a new transaction
    static async create(req, res) {
        try {
            const transaction = await TransactionService.createTransaction(req.body);
            res.status(201).json(transaction);
        } catch (error) {
            console.error('Error in create transaction controller:', error);
            res.status(500).json({ error: 'Failed to create transaction' });
        }
    }

    // Handle getting all transactions for a specific user
    static async getByUserId(req, res) {
        try {
            const userId = req.params.userId;
            const transactions = await TransactionService.getTransactionsByUserId(userId);
            res.status(200).json(transactions);
        } catch (error) {
            console.error('Error in get transactions controller:', error);
            res.status(500).json({ error: 'Failed to fetch transactions' });
        }
    }

    // Handle updating a transaction
    static async update(req, res) {
        try {
            const transactionId = req.params.transactionId;
            const updateData = req.body;
            const updatedTransaction = await TransactionService.updateTransaction(transactionId, updateData);
            res.status(200).json(updatedTransaction);
        } catch (error) {
            console.error('Error in update transaction controller:', error);
            res.status(500).json({ error: 'Failed to update transaction' });
        }
    }

    // Handle deleting a transaction
    static async delete(req, res) {
        try {
            const transactionId = req.params.transactionId;
            const result = await TransactionService.deleteTransaction(transactionId);
            res.status(200).json(result);
        } catch (error) {
            console.error('Error in delete transaction controller:', error);
            res.status(500).json({ error: 'Failed to delete transaction' });
        }
    }
}

module.exports = TransactionController;
