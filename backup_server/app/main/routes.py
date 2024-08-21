from flask import render_template
from app.main import main_bp

@main_bp.route('/')
def index():
    return "Welcome to the Backup Server"
