import pandas as pd
import numpy as np

def encode_categorical_features(df, columns):
    """Encode categorical features using one-hot encoding."""
    return pd.get_dummies(df, columns=columns, drop_first=True)

def normalize_data(df):
    """Normalize numerical features."""
    return (df - df.mean()) / df.std()

def validate_data(df, required_columns):
    """Validate that the dataframe contains required columns."""
    for col in required_columns:
        if col not in df.columns:
            raise ValueError(f"Missing required column: {col}")

def process_data(df):
    """Process the data and return features and labels."""
    validate_data(df, ['amount', 'category', 'future_expense'])
    
    # Encode categorical features
    df = encode_categorical_features(df, ['category'])
    
    # Normalize features
    df = normalize_data(df)
    
    # Define features and labels
    X = df.drop(columns=['future_expense'])
    y = df['future_expense']
    
    return X, y
