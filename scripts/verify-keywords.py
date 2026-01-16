#!/usr/bin/env python3
"""Verify that all 736 generated pages have keywords properly placed."""

import os
import json
import re
from pathlib import Path
from collections import defaultdict

# Load keywords database
with open('lib/seo-keywords.json', 'r') as f:
    keywords_data = json.load(f)

# Get list of generated pages
app_dir = Path('app')
pages_to_check = [d for d in app_dir.iterdir() 
                  if d.is_dir() and d.name not in ['[slug]'] and (d / 'page.tsx').exists()]

print(f"🔍 Verifying Keywords in {len(pages_to_check)} pages...\n")

issues = []
success_count = 0
keyword_stats = defaultdict(list)

for page_dir in sorted(pages_to_check):
    page_file = page_dir / 'page.tsx'
    service_location = page_dir.name
    
    # Read page content
    try:
        with open(page_file, 'r') as f:
            content = f.read()
    except Exception as e:
        issues.append({
            'page': service_location,
            'error': f'Failed to read file: {str(e)}'
        })
        continue
    
    # Extract keywords from comment block
    keyword_match = re.search(r'// SEO Keywords.*?\n// (.*?)\n// (.*?)\n// (.*?)\n', content)
    if not keyword_match:
        issues.append({
            'page': service_location,
            'error': 'No keyword comment block found'
        })
        continue
    
    keywords_line = keyword_match.group(1) + ', ' + keyword_match.group(2) + ', ' + keyword_match.group(3)
    # Extract individual keywords
    keywords = [k.strip() for k in keywords_line.split(',')]
    
    # Check each keyword appears in content
    page_issues = []
    keyword_count = 0
    
    for keyword in keywords:
        # Count occurrences in actual content (not comments)
        # Remove comments from content for counting
        content_no_comments = re.sub(r'//.*?(?=\n)', '', content)
        content_no_comments = re.sub(r'/\*.*?\*/', '', content_no_comments, flags=re.DOTALL)
        
        count = content_no_comments.count(keyword)
        keyword_count += count
        
        if count == 0:
            page_issues.append({
                'keyword': keyword,
                'count': count,
                'expected': 3
            })
    
    # Check if page has substantial content (should be 2000+ words)
    word_count = len(content.split())
    
    if page_issues:
        issues.append({
            'page': service_location,
            'missing_keywords': page_issues,
            'total_keywords': len(keywords),
            'keywords_found': len(keywords) - len(page_issues),
            'word_count': word_count
        })
    else:
        success_count += 1
        keyword_stats['all_keywords_present'].append(service_location)
    
    # Progress indicator
    progress = (len(keyword_stats['all_keywords_present']) + len(issues)) / len(pages_to_check) * 100
    if int(progress) % 10 == 0 and int(progress) % 10 != int((int(progress) - 1) % 10):
        print(f"⏳ Progress: {int(progress)}%")

print("\n" + "="*70)
print("📊 VERIFICATION REPORT")
print("="*70)

print(f"\n✅ Pages with all keywords present: {success_count}/{len(pages_to_check)}")
print(f"❌ Pages with issues: {len(issues)}/{len(pages_to_check)}")

if issues:
    print(f"\n⚠️  ISSUES FOUND:\n")
    for i, issue in enumerate(issues[:20], 1):  # Show first 20 issues
        print(f"{i}. {issue['page']}")
        if 'error' in issue:
            print(f"   Error: {issue['error']}")
        elif 'missing_keywords' in issue:
            print(f"   Keywords found: {issue['keywords_found']}/{issue['total_keywords']}")
            print(f"   Word count: {issue['word_count']}")
            for missing in issue['missing_keywords'][:3]:  # Show first 3 missing
                print(f"   ❌ Missing: {missing['keyword']}")
        print()
    
    if len(issues) > 20:
        print(f"... and {len(issues) - 20} more issues\n")
else:
    print("\n🎉 All pages verified successfully!")

print(f"\n📈 Summary:")
print(f"  • Total Pages Checked: {len(pages_to_check)}")
print(f"  • Pages OK: {success_count}")
print(f"  • Pages with Issues: {len(issues)}")
print(f"  • Success Rate: {success_count/len(pages_to_check)*100:.1f}%")
