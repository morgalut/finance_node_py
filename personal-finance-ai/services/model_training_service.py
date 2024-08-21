import os
import pandas as pd
import joblib
import docx
from ai_model.data_processing import DataProcessor
from ai_model.financial_model import FinancialModel

class ModelTrainingService:
    def __init__(self):
        self.model = FinancialModel()
        self.data_processor = DataProcessor()
        self.data_dir = "C:\\Users\\Mor\\Desktop\\fananice\\personal-finance-ai\\data"

        # Automatically load model if it exists
        self.model.load()

    def load_data(self, file_path):
        file_extension = os.path.splitext(file_path)[1].lower()

        if file_extension == '.csv':
            return pd.read_csv(file_path)
        elif file_extension == '.pkl':
            return joblib.load(file_path)
        elif file_extension == '.doc' or file_extension == '.docx':
            return self._load_doc_file(file_path)
        else:
            raise ValueError(f"Unsupported file extension: {file_extension}")

    def _load_doc_file(self, file_path):
        """Load data from a DOC or DOCX file."""
        doc = docx.Document(file_path)
        full_text = []
        for para in doc.paragraphs:
            full_text.append(para.text)
        text = '\n'.join(full_text)

        # Example processing: Convert DOC text into a DataFrame (customize as needed)
        # Assuming the document contains tabular data in a plain text format
        lines = text.split('\n')
        data = [line.split() for line in lines if line.strip()]  # Split by spaces
        df = pd.DataFrame(data[1:], columns=data[0])  # Assume first line as header

        return df

    def train_model(self, df):
        X, y = self.data_processor.process_data(df)
        self.model.train(X, y)
        self.model.save()
        
        # Save training data for future reference
        df.to_csv(os.path.join(self.data_dir, 'training', 'training_data.csv'), index=False)

    def improve_model(self, articles):
        self.model.improve_model(articles)
        self.model.save()

    def load_model(self):
        self.model.load()

    def save_test_data(self, df):
        df.to_csv(os.path.join(self.data_dir, 'testing', 'test_data.csv'), index=False)
        
    def evaluate_model(self, df):
        X, y = self.data_processor.process_data(df)
        mse = self.model.evaluate(X, y)
        return mse
