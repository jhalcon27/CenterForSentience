import os
import json
import time
import requests
from google.oauth2 import service_account
from google.auth.transport.requests import Request

KEY_PATH = os.path.expanduser('~/.openclaw/credentials/digitalpsychedelics-gsc.json')
SITE_URL = 'https://centerforsentience.org'

# All pages to index
PAGES = [
    '', '/research', '/donate',
    '/de', '/de/research', '/de/donate',
    '/es', '/es/research', '/es/donate',
    '/fr', '/fr/research', '/fr/donate',
    '/zh', '/zh/research', '/zh/donate',
    '/ja', '/ja/research', '/ja/donate'
]

def index_all():
    # Load credentials with the specific scope
    scopes = ['https://www.googleapis.com/auth/indexing']
    credentials = service_account.Credentials.from_service_account_file(
        KEY_PATH, scopes=scopes
    )
    
    # Refresh to get access token
    credentials.refresh(Request())
    token = credentials.token
    
    endpoint = 'https://indexing.googleapis.com/v1/urlNotifications:publish'

    for page in PAGES:
        url = f"{SITE_URL}{page}"
        print(f"Requesting indexing for: {url}")
        
        body = {
            'url': url,
            'type': 'URL_UPDATED'
        }
        
        headers = {
            'Content-Type': 'application/json',
            'Authorization': f'Bearer {token}'
        }
        
        try:
            response = requests.post(endpoint, headers=headers, data=json.dumps(body))
            if response.status_code == 200:
                print(f"  -> SUCCESS")
            else:
                print(f"  -> ERROR: {response.status_code} - {response.text[:200]}")
        except Exception as e:
            print(f"  -> FAILED: {e}")
        
        time.sleep(1) # Be nice to the API

if __name__ == '__main__':
    index_all()
