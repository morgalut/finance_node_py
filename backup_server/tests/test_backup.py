import unittest
from app import create_app

class BackupTestCase(unittest.TestCase):
    def setUp(self):
        self.app = create_app()
        self.client = self.app.test_client()

    def test_create_backup(self):
        response = self.client.post('/backup/create', json={'file_name': 'test_file.txt'})
        self.assertEqual(response.status_code, 200)

    def test_restore_backup(self):
        response = self.client.post('/backup/restore', json={'file_name': 'test_file.txt'})
        self.assertEqual(response.status_code, 200)

if __name__ == '__main__':
    unittest.main()
