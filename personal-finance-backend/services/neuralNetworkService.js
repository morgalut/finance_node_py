const axios = require('axios');
const path = require('path');

const NeuralNetworkService = {
    processTransaction: async (transaction) => {
        try {
            // Prepare data for the neural network
            const data = {
                userId: transaction.userId,
                amount: transaction.amount,
                category: transaction.category,
                date: transaction.date
            };

            // Send data to the neural network model
            const response = await axios.post('http://localhost:5000/api/ai/process-transaction', data);

            console.log('Transaction processed by neural network:', response.data);
        } catch (error) {
            console.error('Error processing transaction with neural network:', error);
            // Handle error appropriately
        }
    }
};

module.exports = NeuralNetworkService;
