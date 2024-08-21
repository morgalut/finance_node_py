const Transaction = require('../models/transaction');

/**
 * Create a new transaction.
 * @param {Object} transactionData - The data for the new transaction.
 * @returns {Promise<Object>} - The created transaction.
 */
const createTransaction = async (transactionData) => {
    try {
        const transaction = new Transaction(transactionData);
        return await transaction.save();
    } catch (error) {
        console.error('Error creating transaction:', error);
        throw new Error('Failed to create transaction');
    }
};

/**
 * Get all transactions for a specific user.
 * @param {String} userId - The ID of the user.
 * @returns {Promise<Array>} - The list of transactions.
 */
const getTransactionsByUserId = async (userId) => {
    try {
        return await Transaction.find({ userId }).exec();
    } catch (error) {
        console.error('Error fetching transactions:', error);
        throw new Error('Failed to fetch transactions');
    }
};

/**
 * Update a transaction by its ID.
 * @param {String} transactionId - The ID of the transaction.
 * @param {Object} updateData - The data to update the transaction with.
 * @returns {Promise<Object>} - The updated transaction.
 */
const updateTransaction = async (transactionId, updateData) => {
    try {
        return await Transaction.findByIdAndUpdate(transactionId, updateData, { new: true }).exec();
    } catch (error) {
        console.error('Error updating transaction:', error);
        throw new Error('Failed to update transaction');
    }
};

/**
 * Delete a transaction by its ID.
 * @param {String} transactionId - The ID of the transaction.
 * @returns {Promise<Object>} - The result of the delete operation.
 */
const deleteTransaction = async (transactionId) => {
    try {
        return await Transaction.findByIdAndDelete(transactionId).exec();
    } catch (error) {
        console.error('Error deleting transaction:', error);
        throw new Error('Failed to delete transaction');
    }
};

module.exports = {
    createTransaction,
    getTransactionsByUserId,
    updateTransaction,
    deleteTransaction,
};
