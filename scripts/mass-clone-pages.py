#!/usr/bin/env python3
"""
Mass Page Cloning Script
Clones terrace-interior-design-dubai template to all 5000+ pages
Updates slugs, titles, and location names
"""

import os
import re
from pathlib import Path
from typing import Tuple

TEMPLATE_PATH = Path("/Applications/Interiara/app/terrace-interior-design-dubai/page.tsx")
APP_PATH = Path("/Applications/Interiara/app")

# Location slug to full name mapping
LOCATION_MAP = {
    "al-barsha": "Al Barsha",
    "al-barsha-south": "Al Barsha South",
    "al-furjan": "Al Furjan",
    "al-hamriya": "Al Hamriya",
    "al-jaddaf": "Al Jaddaf",
    "al-karama": "Al Karama",
    "al-khawaneej": "Al Khawaneej",
    "al-mizhar": "Al Mizhar",
    "al-quoz": "Al Quoz",
    "al-safa": "Al Safa",
    "al-safouh": "Al Safouh",
    "al-satwa": "Al Satwa",
    "al-warqaa": "Al Warqaa",
    "al-wasl": "Al Wasl",
    "arabian-ranches": "Arabian Ranches",
    "bur-dubai": "Bur Dubai",
    "business-bay": "Business Bay",
    "business-bay-south": "Business Bay South",
    "city-walk": "City Walk",
    "creek": "Dubai Creek",
    "culture-village": "Culture Village",
    "deira": "Deira",
    "difc": "DIFC",
    "discovery-gardens": "Discovery Gardens",
    "discovery-hills": "Discovery Hills",
    "downtown-dubai": "Downtown Dubai",
    "dubai-creek-harbour": "Dubai Creek Harbour",
    "dubai-design-district": "Dubai Design District",
    "dubai-festival-city": "Dubai Festival City",
    "dubai-harbour": "Dubai Harbour",
    "dubai-hills": "Dubai Hills",
    "dubai-hills-estate": "Dubai Hills Estate",
    "dubai-international-city": "Dubai International City",
    "dubai-investment-park": "Dubai Investment Park",
    "dubai-land": "Dubai Land",
    "dubai-marina": "Dubai Marina",
    "dubai-marina-heights": "Dubai Marina Heights",
    "dubai-marina-promenade": "Dubai Marina Promenade",
    "dubai-marina-residences": "Dubai Marina Residences",
    "dubai-silicon-oasis": "Dubai Silicon Oasis",
    "dubai-silicon-park": "Dubai Silicon Park",
    "dubai-south": "Dubai South",
    "dubai-sports-city": "Dubai Sports City",
    "dubai-waterfront": "Dubai Waterfront",
    "emirates-hills": "Emirates Hills",
    "greens": "The Greens",
    "jbr": "JBR",
    "jebel-ali": "Jebel Ali",
    "jlt": "JLT",
    "jumeirah": "Jumeirah",
    "jvc": "JVC",
    "jvt": "JVT",
    "lakes": "The Lakes",
    "marina": "Dubai Marina",
    "meadows": "The Meadows",
    "mirdif": "Mirdif",
    "muhaisnah": "Muhaisnah",
    "nad-al-sheba": "Nad Al Sheba",
    "palm": "Palm Jumeirah",
    "palm-jumeirah": "Palm Jumeirah",
    "sheikh-zayed-road": "Sheikh Zayed Road",
    "silicon-oasis-villas": "Silicon Oasis Villas",
    "springs": "The Springs",
    "the-sustainable-city": "The Sustainable City",
    "the-villa": "The Villa",
    "town-square": "Town Square",
    "umm-suqeim": "Umm Suqeim",
}

def extract_location_from_dir(dir_name: str) -> Tuple[str, str]:
    """Extract location slug and service from directory name"""
    # Remove trailing -dubai and clean
    clean = dir_name.rstrip("/").replace("-dubai", "").rstrip("-")
    
    # Try to find location in the name (last component usually)
    parts = clean.split("-")
    
    # Find which part is the location
    for i in range(len(parts)-1, 0, -1):
        potential_location = "-".join(parts[i:])
        if potential_location in LOCATION_MAP:
            service = "-".join(parts[:i])
            return service, potential_location
    
    # Fallback: assume last part is location
    if len(parts) > 1:
        return "-".join(parts[:-1]), parts[-1]
    else:
        return clean, "dubai"

def get_location_name(location_slug: str) -> str:
    """Get full location name from slug"""
    return LOCATION_MAP.get(location_slug, location_slug.replace("-", " ").title())

def clone_page(template_content: str, page_slug: str, service: str, location_slug: str, location_name: str) -> str:
    """Clone and update page content"""
    content = template_content
    
    # Format service name for display
    service_display = service.replace("-", " ").title()
    
    # Replace base slug
    content = content.replace(
        "terrace-interior-design-dubai",
        page_slug
    )
    
    # Replace location references (case-sensitive for property names)
    content = content.replace("terrace interior design", f"{service_display.lower()}")
    content = content.replace("Terrace Interior Design", service_display)
    content = content.replace("terrace", service_display.lower())
    
    # Update location-specific references
    content = content.replace("Dubai", f"{location_name} Dubai")
    
    # Update URLs with new slug
    old_url = "https://interiara.ae/terrace-interior-design-dubai"
    new_url = f"https://interiara.ae/{page_slug}"
    content = content.replace(old_url, new_url)
    
    return content

def main():
    print("🚀 Mass Page Cloning Script")
    print("=" * 70)
    
    # Read template
    if not TEMPLATE_PATH.exists():
        print(f"❌ Template not found: {TEMPLATE_PATH}")
        return
    
    print(f"📄 Using template: {TEMPLATE_PATH.name}")
    with open(TEMPLATE_PATH, 'r', encoding='utf-8') as f:
        template_content = f.read()
    print(f"📦 Template size: {len(template_content)} bytes")
    
    # Get all directories in app
    all_dirs = sorted([d for d in os.listdir(APP_PATH) 
                      if os.path.isdir(APP_PATH / d) and not d.startswith('.')])
    
    print(f"📂 Total directories found: {len(all_dirs)}")
    
    cloned = 0
    skipped = 0
    errors = 0
    
    for idx, page_dir in enumerate(all_dirs, 1):
        try:
            page_path = APP_PATH / page_dir / "page.tsx"
            
            # Skip if already has good content
            if page_path.exists():
                with open(page_path, 'r', encoding='utf-8') as f:
                    existing = f.read()
                # Skip if has real content (>3000 bytes and no placeholders)
                if len(existing) > 3000 and "{" not in existing:
                    skipped += 1
                    continue
            
            # Extract service and location
            service, location_slug = extract_location_from_dir(page_dir)
            location_name = get_location_name(location_slug)
            
            # Clone with updates
            new_content = clone_page(template_content, page_dir, service, location_slug, location_name)
            
            # Write file
            page_path.parent.mkdir(parents=True, exist_ok=True)
            with open(page_path, 'w', encoding='utf-8') as f:
                f.write(new_content)
            
            cloned += 1
            
            # Print progress every 100 pages
            if idx % 100 == 0:
                print(f"✅ Progress: {idx}/{len(all_dirs)} pages processed ({cloned} cloned, {skipped} skipped)")
            
        except Exception as e:
            errors += 1
            if errors <= 5:  # Only print first 5 errors
                print(f"❌ Error on {page_dir}: {str(e)[:50]}")
    
    print("=" * 70)
    print(f"✅ Cloned: {cloned}")
    print(f"⏭️  Skipped: {skipped}")
    print(f"❌ Errors: {errors}")
    print(f"📊 Total: {len(all_dirs)} pages")
    print("🎉 Mass cloning complete!")

if __name__ == "__main__":
    main()
