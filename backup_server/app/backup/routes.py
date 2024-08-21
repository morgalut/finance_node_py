from flask import request, jsonify
from app.backup import backup_bp
from app.backup.services import BackupService

@backup_bp.route('/create', methods=['POST'])
def create_backup():
    file_name = request.json.get('file_name')
    status = BackupService.create_backup(file_name)
    return jsonify({'status': status})

@backup_bp.route('/restore', methods=['POST'])
def restore_backup():
    file_name = request.json.get('file_name')
    status = BackupService.restore_backup(file_name)
    return jsonify({'status': status})
