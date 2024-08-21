from datetime import datetime
from app.models import db, Backup

class BackupService:
    @staticmethod
    def create_backup(file_name):
        # Logic to create backup
        backup = Backup(file_name=file_name, backup_date=datetime.utcnow(), status='Created')
        db.session.add(backup)
        db.session.commit()
        return 'Backup created successfully'

    @staticmethod
    def restore_backup(file_name):
        # Logic to restore backup
        backup = Backup.query.filter_by(file_name=file_name).first()
        if backup:
            backup.status = 'Restored'
            db.session.commit()
            return 'Backup restored successfully'
        return 'Backup not found'
