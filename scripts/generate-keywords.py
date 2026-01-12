#!/usr/bin/env python3
"""Generate 15-20 SEO keywords for each service-location page"""

import json
from pathlib import Path
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

def generate_keywords(service, location):
    """Generate 15-20 SEO keywords for a service in a location"""
    service_text = format_text(service)
    location_text = format_text(location)
    
    keywords = [
        f"{service_text} {location_text}",
        f"{service_text} in {location_text}",
        f"Best {service_text.lower()} {location_text}",
        f"Professional {service_text.lower()} {location_text}",
        f"Luxury {service_text.lower()} {location_text}",
        f"{service_text} {location_text} Dubai",
        f"{service_text} designer {location_text}",
        f"{service_text} company {location_text}",
        f"{service_text} contractor {location_text}",
        f"Affordable {service_text.lower()} {location_text}",
        f"Modern {service_text.lower()} {location_text}",
        f"{service_text} consultation {location_text}",
        f"{service_text} cost {location_text}",
        f"{service_text} price {location_text}",
        f"Top {service_text.lower()} {location_text}",
        f"Expert {service_text.lower()} {location_text}",
        f"{service_text} renovation {location_text}",
        f"Premium {service_text.lower()} {location_text}",
        f"{service_text} near me {location_text}",
        f"Interiara {service_text.lower()} {location_text}",
    ]
    
    return keywords[:20]  # Return exactly 20 keywords

def main():
    app_dir = Path('/Applications/Interiara/app')
    
    # Get all directories
    all_dirs = sorted([d.name for d in app_dir.iterdir() if d.is_dir() and (d / 'page.tsx').exists()])
    
    print(f"🚀 Generating keywords for {len(all_dirs)} pages")
    print("=" * 60)
    
    keywords_data = {}
    
    for idx, dir_name in enumerate(all_dirs, 1):
        service, location = get_service_and_location_from_dir(dir_name)
        keywords = generate_keywords(service, location)
        
        keywords_data[dir_name] = {
            "service": service,
            "location": location,
            "service_formatted": format_text(service),
            "location_formatted": format_text(location),
            "keywords": keywords,
            "url": f"/{dir_name}"
        }
        
        if idx % 500 == 0:
            print(f"✅ Progress: {idx}/{len(all_dirs)} pages")
    
    # Save to JSON file
    output_file = Path('/Applications/Interiara/keywords-all-pages.json')
    with open(output_file, 'w', encoding='utf-8') as f:
        json.dump(keywords_data, f, indent=2, ensure_ascii=False)
    
    print("=" * 60)
    print(f"🎉 Complete!")
    print(f"✅ Generated keywords for: {len(keywords_data)} pages")
    print(f"📁 Saved to: {output_file}")
    
    # Also create a human-readable markdown version
    md_file = Path('/Applications/Interiara/keywords-all-pages.md')
    with open(md_file, 'w', encoding='utf-8') as f:
        f.write("# Keywords for All Interiara Pages\n\n")
        f.write(f"Generated for {len(keywords_data)} pages\n\n")
        f.write("---\n\n")
        
        for idx, (dir_name, data) in enumerate(keywords_data.items(), 1):
            f.write(f"## {idx}. {data['service_formatted']} in {data['location_formatted']}\n\n")
            f.write(f"**URL:** {data['url']}\n\n")
            f.write("**Keywords:**\n")
            for kw_idx, keyword in enumerate(data['keywords'], 1):
                f.write(f"{kw_idx}. {keyword}\n")
            f.write("\n---\n\n")
    
    print(f"📄 Also saved markdown to: {md_file}")
    print(f"\n📊 Sample Keywords (First Page):")
    first_data = list(keywords_data.values())[0]
    print(f"Service: {first_data['service_formatted']}")
    print(f"Location: {first_data['location_formatted']}")
    for kw in first_data['keywords'][:5]:
        print(f"  - {kw}")

if __name__ == "__main__":
    main()
