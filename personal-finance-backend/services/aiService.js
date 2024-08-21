const axios = require('axios');

// Endpoint URLs for your AI model API
const AI_API_BASE_URL = 'http://localhost:5001'; // Adjust this URL if your AI model server is running elsewhere

/**
 * Train the AI model with the provided data.
 * @param {Object} data - The data to train the AI model.
 * @returns {Promise<Object>} - The response from the AI model server.
 */
const trainModel = async (data) => {
    try {
        const response = await axios.post(`${AI_API_BASE_URL}/train`, data);
        return response.data;
    } catch (error) {
        console.error('Error training AI model:', error);
        throw new Error('Failed to train AI model');
    }
};

/**
 * Get predictions from the AI model using the provided data.
 * @param {Object} data - The data for which predictions are to be made.
 * @returns {Promise<Object>} - The predictions from the AI model server.
 */
const getPredictions = async (data) => {
    try {
        const response = await axios.post(`${AI_API_BASE_URL}/predict`, data);
        return response.data;
    } catch (error) {
        console.error('Error getting predictions from AI model:', error);
        throw new Error('Failed to get predictions from AI model');
    }
};

module.exports = {
    trainModel,
    getPredictions,
};
