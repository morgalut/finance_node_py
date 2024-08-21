from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Backup(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    file_name = db.Column(db.String(100), nullable=False)
    backup_date = db.Column(db.DateTime, nullable=False)
    status = db.Column(db.String(50), nullable=False)
