from ai_model.financial_model import FinancialModel
from ai_model.data_processing import DataProcessor

class FinancialAdviceService:
    def __init__(self):
        self.model = FinancialModel()
        self.data_processor = DataProcessor()

    def predict_expenses(self, df):
        X, _ = self.data_processor.process_data(df)
        return self.model.predict(X)
