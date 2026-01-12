#!/usr/bin/env python3
"""Verify and check all page footers for correctness"""

import json
from pathlib import Path
import re
from collections import defaultdict

def get_service_and_location_from_dir(dir_name):
    """Extract service and location from directory name"""
    parts = dir_name.rsplit('-dubai', 1)[0]
    components = parts.split('-')
    
    location_prefixes = ['al-', 'dubai-', 'the-', 'um-']
    location_start = 0
    for i, component in enumerate(components):
        if any(component.lower().startswith(prefix) for prefix in location_prefixes):
            location_start = i
            break
    
    service_parts = components[:location_start] if location_start > 0 else components[:-2]
    location_parts = components[location_start:] if location_start > 0 else components[-2:]
    
    service = '-'.join(service_parts) if service_parts else '-'.join(components[:-2])
    location = '-'.join(location_parts) if location_parts else components[-1]
    
    return service, location

def format_text(text):
    """Format hyphenated text to title case"""
    return text.replace('-', ' ').title()

def extract_footer_from_page(page_path):
    """Extract footer section from a page"""
    try:
        content = page_path.read_text(encoding='utf-8')
        
        # Find footer section
        footer_pattern = r'<section className="py-16 bg-muted/50 border-t">.*?<h2 className="text-3xl font-bold text-foreground mb-4">(.*?)</h2>'
        match = re.search(footer_pattern, content, re.DOTALL)
        
        if match:
            header_text = match.group(1).strip()
            return header_text
        return None
    except Exception as e:
        return None

def verify_all_footers():
    """Verify all page footers"""
    app_dir = Path('/Applications/Interiara/app')
    
    all_dirs = sorted([d.name for d in app_dir.iterdir() if d.is_dir() and (d / 'page.tsx').exists()])
    
    print(f"🚀 Verifying footers for all {len(all_dirs)} pages")
    print("=" * 80)
    
    issues = []
    correct = 0
    missing_footer = 0
    
    location_check = defaultdict(set)
    
    for idx, dir_name in enumerate(all_dirs, 1):
        service, location = get_service_and_location_from_dir(dir_name)
        location_formatted = format_text(location)
        
        page_path = app_dir / dir_name / 'page.tsx'
        footer_header = extract_footer_from_page(page_path)
        
        expected_header = f"All {location_formatted} Services"
        
        location_check[location_formatted].add(dir_name)
        
        if footer_header is None:
            missing_footer += 1
            issues.append({
                'type': 'MISSING',
                'page': dir_name,
                'location': location_formatted,
                'expected': expected_header,
                'found': None
            })
        elif footer_header != expected_header:
            issues.append({
                'type': 'MISMATCH',
                'page': dir_name,
                'location': location_formatted,
                'expected': expected_header,
                'found': footer_header
            })
        else:
            correct += 1
        
        if idx % 500 == 0:
            print(f"✅ Progress: {idx}/{len(all_dirs)} pages checked")
    
    print("=" * 80)
    print(f"\n📊 VERIFICATION RESULTS:")
    print(f"✅ Correct Footers: {correct}/{len(all_dirs)}")
    print(f"❌ Missing Footers: {missing_footer}")
    print(f"⚠️  Mismatched Footers: {len([i for i in issues if i['type'] == 'MISMATCH'])}")
    
    if issues:
        print(f"\n⚠️  ISSUES FOUND:")
        print("=" * 80)
        
        # Group issues by type
        missing_issues = [i for i in issues if i['type'] == 'MISSING']
        mismatch_issues = [i for i in issues if i['type'] == 'MISMATCH']
        
        if missing_issues:
            print(f"\n📍 MISSING FOOTERS ({len(missing_issues)} pages):")
            for issue in missing_issues[:10]:
                print(f"   - {issue['page']}")
                print(f"     Expected: {issue['expected']}")
            if len(missing_issues) > 10:
                print(f"   ... and {len(missing_issues) - 10} more")
        
        if mismatch_issues:
            print(f"\n🔄 MISMATCHED FOOTERS ({len(mismatch_issues)} pages):")
            for issue in mismatch_issues[:10]:
                print(f"   - {issue['page']}")
                print(f"     Expected: {issue['expected']}")
                print(f"     Found: {issue['found']}")
            if len(mismatch_issues) > 10:
                print(f"   ... and {len(mismatch_issues) - 10} more")
    
    print(f"\n📍 LOCATIONS COVERAGE:")
    print(f"Total unique locations: {len(location_check)}")
    
    # Check for locations with issues
    for location in sorted(location_check.keys())[:20]:
        location_pages = location_check[location]
        location_issues = [i for i in issues if i['location'] == location]
        
        if location_issues:
            print(f"   ⚠️  {location}: {len(location_pages)} pages, {len(location_issues)} issues")
        else:
            print(f"   ✅ {location}: {len(location_pages)} pages")
    
    print("\n" + "=" * 80)
    
    # Save detailed report
    report_file = Path('/Applications/Interiara/footer-verification-report.json')
    report_data = {
        'total_pages': len(all_dirs),
        'correct': correct,
        'missing_footer': missing_footer,
        'mismatched_footer': len([i for i in issues if i['type'] == 'MISMATCH']),
        'issues': issues[:100],  # Save first 100 issues
        'issues_count': len(issues),
        'locations': {loc: list(pages) for loc, pages in location_check.items()}
    }
    
    with open(report_file, 'w', encoding='utf-8') as f:
        json.dump(report_data, f, indent=2, ensure_ascii=False)
    
    print(f"📄 Detailed report saved to: {report_file}")
    
    return issues

if __name__ == "__main__":
    verify_all_footers()
