import os
import json
from google.oauth2 import service_account
from googleapiclient.discovery import build
from googleapiclient.errors import HttpError

KEY_PATH = os.path.expanduser('~/.openclaw/credentials/digitalpsychedelics-gsc.json')
SITE_URL = 'https://centerforsentience.org'

# All pages to index (EN, DE, ES, FR, ZH, JA)
PAGES = [
    '', '/research', '/donate',
    '/de', '/de/research', '/de/donate',
    '/es', '/es/research', '/es/donate',
    '/fr', '/fr/research', '/fr/donate',
    '/zh', '/zh/research', '/zh/donate',
    '/ja', '/ja/research', '/ja/donate'
]

def index_all():
    credentials = service_account.Credentials.from_service_account_file(
        KEY_PATH, scopes=['https://www.googleapis.com/auth/indexing']
    )
    indexing_service = build('indexing', 'v1', credentials=credentials)

    for page in PAGES:
        url = f"{SITE_URL}{page}"
        body = {
            'url': url,
            'type': 'URL_UPDATED'
        }
        try:
            result = indexing_service.urlNotifications().publish(body=body).execute()
            print(f"Success indexing: {url}")
        except HttpError as e:
            print(f"Error indexing {url}: {e}")

if __name__ == '__main__':
    index_all()
