const axios = require('axios');
const ModelTrainingService = require('../services/modelTrainingService');

// Endpoint URLs for your AI model API
const AI_API_BASE_URL = 'http://localhost:5001'; // Adjust this URL if your AI model server is running elsewhere

class AiController {
    // Handle training the AI model
    static async train(req, res) {
        try {
            const response = await axios.post(`${AI_API_BASE_URL}/train`, req.body);
            res.status(200).json(response.data);
        } catch (error) {
            console.error('Error training AI model:', error);
            res.status(500).json({ error: 'Failed to train AI model' });
        }
    }

    // Handle making predictions with the AI model
    static async predict(req, res) {
        try {
            const response = await axios.post(`${AI_API_BASE_URL}/predict`, req.body);
            res.status(200).json(response.data);
        } catch (error) {
            console.error('Error making prediction with AI model:', error);
            res.status(500).json({ error: 'Failed to make prediction' });
        }
    }
}

const processTransaction = async (req, res) => {
    try {
        const transactionData = req.body;

        // Load and process the transaction data with your neural network
        await ModelTrainingService.processTransactionData(transactionData);

        res.status(200).json({ message: 'Transaction processed successfully' });
    } catch (error) {
        console.error('Error processing transaction:', error);
        res.status(500).json({ error: 'Failed to process transaction' });
    }
};

module.exports = {
    AiController,
    processTransaction // Export processTransaction here
};
