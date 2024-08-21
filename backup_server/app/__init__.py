from flask import Flask
from app.backup import backup_bp
from app.main import main_bp

def create_app():
    app = Flask(__name__)

    # Configuration
    app.config.from_object('app.config.Config')

    # Register Blueprints
    app.register_blueprint(main_bp)
    app.register_blueprint(backup_bp, url_prefix='/backup')

    return app
