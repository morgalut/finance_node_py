# financial_model.py
import os

import joblib
from sklearn.linear_model import LinearRegression
from sklearn.metrics import mean_squared_error

class FinancialModel:
    def __init__(self):
        self.model = LinearRegression()
        self.model_dir = "C:\\Users\\Mor\\Desktop\\fananice\\personal-finance-ai\\ai_model\\saved_models"
        os.makedirs(self.model_dir, exist_ok=True)

    def train(self, X, y):
        self.model.fit(X, y)

    def predict(self, X):
        return self.model.predict(X)

    def evaluate(self, X, y):
        predictions = self.model.predict(X)
        mse = mean_squared_error(y, predictions)
        return mse

    def save(self, filename='financial_model.pkl'):
        filepath = os.path.join(self.model_dir, filename)
        joblib.dump(self.model, filepath)

    def load(self, filename='financial_model.pkl'):
        filepath = os.path.join(self.model_dir, filename)
        self.model = joblib.load(filepath)

    def improve_model(self, articles):
        # Placeholder function for learning from external articles
        # Implement custom learning logic here
        pass
