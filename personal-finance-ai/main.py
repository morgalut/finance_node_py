from flask import Flask, request, jsonify
from services.model_training_service import ModelTrainingService
from services.financial_advice_service import FinancialAdviceService
import pandas as pd

app = Flask(__name__)

training_service = ModelTrainingService()
advice_service = FinancialAdviceService()

@app.route('/train', methods=['POST'])
def train():
    data = request.get_json()
    df = pd.DataFrame(data)
    training_service.train_model(df)
    return jsonify({'message': 'Model trained and saved successfully'})

@app.route('/improve', methods=['POST'])
def improve():
    articles = request.get_json().get('articles')
    training_service.improve_model(articles)
    return jsonify({'message': 'Model improved and saved successfully'})

@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json()
    df = pd.DataFrame(data)
    predictions = advice_service.predict_expenses(df)
    return jsonify(predictions.tolist())

@app.route('/load_model', methods=['POST'])
def load_model():
    training_service.load_model()
    return jsonify({'message': 'Model loaded successfully'})

@app.route('/upload_test_data', methods=['POST'])
def upload_test_data():
    data = request.get_json()
    df = pd.DataFrame(data)
    training_service.save_test_data(df)
    return jsonify({'message': 'Test data uploaded successfully'})

@app.route('/evaluate', methods=['POST'])
def evaluate():
    data = request.get_json()
    df = pd.DataFrame(data)
    mse = training_service.evaluate_model(df)
    return jsonify({'mse': mse})

if __name__ == '__main__':
    app.run(port=5001, debug=True)
