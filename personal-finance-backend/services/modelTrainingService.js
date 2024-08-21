const ModelTrainingService = {
    async processTransactionData(transactionData) {
        const df = this.convertTransactionToDataFrame(transactionData);
        this.train_model(df);
    },

    convertTransactionToDataFrame(transactionData) {
        const df = pd.DataFrame([transactionData]);
        return df;
    },

    // Other existing methods...
};

module.exports = ModelTrainingService;
