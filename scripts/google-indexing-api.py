#!/usr/bin/env python3
"""
Google Indexing API - Bulk Request Indexing for All Pages
Requires: Google Service Account JSON credentials
"""
import json
import requests
from google.auth.transport.requests import Request
from google.oauth2.service_account import Credentials

# Step 1: Download credentials from Google Cloud Console
# - Go to: https://console.cloud.google.com/
# - Create Service Account
# - Download JSON key
# - Save as: google-credentials.json in root directory

SCOPES = ['https://www.googleapis.com/auth/indexing']
PRIVATE_KEY_ID = "YOUR_PRIVATE_KEY_ID"  # From credentials JSON

def get_access_token():
    """Get OAuth token from Service Account"""
    try:
        credentials = Credentials.from_service_account_file(
            'google-credentials.json',
            scopes=SCOPES
        )
        credentials.refresh(Request())
        return credentials.token
    except Exception as e:
        print(f"❌ Error getting credentials: {e}")
        print("📝 Steps to set up:")
        print("1. Create Service Account: https://console.cloud.google.com/")
        print("2. Download JSON key file")
        print("3. Save as: google-credentials.json")
        print("4. Enable Indexing API")
        return None

def submit_url_for_indexing(url, access_token):
    """Submit single URL to Google Indexing API"""
    endpoint = 'https://indexing.googleapis.com/v3/urlNotifications:publish'
    
    headers = {
        'Content-Type': 'application/json',
        'Authorization': f'Bearer {access_token}'
    }
    
    body = {
        'url': url,
        'type': 'URL_UPDATED'
    }
    
    try:
        response = requests.post(endpoint, json=body, headers=headers)
        return response.status_code == 200
    except Exception as e:
        print(f"Error submitting {url}: {e}")
        return False

def main():
    print("📊 Google Indexing API - Bulk Submission")
    print("=" * 60)
    
    # Load keywords data with all page URLs
    with open('keywords-all-pages.json', 'r') as f:
        pages_data = json.load(f)
    
    # Get access token
    access_token = get_access_token()
    if not access_token:
        print("⚠️  Cannot proceed without credentials")
        return
    
    print(f"✅ Authentication successful")
    print(f"📄 Total pages to submit: {len(pages_data)}")
    print("=" * 60)
    
    # Submit all URLs
    submitted = 0
    failed = 0
    
    base_url = 'https://interiara.com'
    
    for page_key in list(pages_data.keys())[:10]:  # Start with 10 pages for testing
        url = f"{base_url}/{page_key}"
        if submit_url_for_indexing(url, access_token):
            submitted += 1
            if submitted % 10 == 0:
                print(f"✅ Progress: {submitted} pages submitted")
        else:
            failed += 1
    
    print(f"\n🎉 Complete!")
    print(f"✅ Submitted: {submitted} pages")
    print(f"❌ Failed: {failed} pages")
    print(f"\n💡 Note: Google Indexing API has rate limits (~200 URLs/day)")
    print(f"📅 For bulk indexing, use GSC sitemap submission instead")

if __name__ == "__main__":
    main()
