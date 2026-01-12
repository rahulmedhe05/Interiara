#!/usr/bin/env python3
"""
Generate space-planning page.tsx files for all 60 Dubai areas.
This script creates a page.tsx file for each area following the template pattern.
"""

import os
import json
from pathlib import Path
from typing import List, Dict

# Configuration
APP_DIR = Path("/Applications/Interiara/app")
TEMPLATE_PATH = APP_DIR / "space-planning-dubai" / "page.tsx"
SERVICE_TYPE = "space-planning"
SERVICE_NAME = "Space Planning"

# All 60 areas derived from the services JSON files
AREAS = [
    # High-intent (20)
    "business-bay",
    "dubai-marina",
    "jumeirah",
    "jbr",
    "jlt",
    "dubai-hills-estate",
    "palm-jumeirah",
    "arabian-ranches",
    "al-barsha",
    "al-safa",
    "dubai-design-district",
    "dubai-creek-harbour",
    "dubai-silicon-oasis",
    "mirdif",
    "dubai-festival-city",
    "dubai-international-city",
    "town-square-dubai",
    "dubai-investment-park",
    "al-wasl",
    "downtown-dubai",
    # Medium-intent (20)
    "discovery-gardens",
    "meadows",
    "springs",
    "lakes",
    "greens",
    "jvc",
    "jvt",
    "al-khawaneej",
    "al-mizhar",
    "muhaisnah",
    "al-warqaa",
    "nad-al-sheba",
    "dubai-south",
    "dubai-sports-city",
    "dubai-silicon-park",
    "al-quoz",
    "umm-suqeim",
    "al-barsha-south",
    "dubai-land",
    "the-villa",
    # Secondary (20)
    "dubai-harbour",
    "culture-village",
    "al-safouh",
    "discovery-hills",
    "dubai-marina-heights",
    "silicon-oasis-villas",
    "the-sustainable-city",
    "al-furjan",
    "dubai-marina-promenade",
    "city-walk",
    "jebel-ali",
    "dubai-waterfront",
    "dubai-marina-residences",
    "al-satwa",
    "al-karama",
    "al-jaddaf",
    "business-bay-south",
    "al-hamriya",
    "bur-dubai",
    "deira",
]


def format_area_name(area_id: str) -> str:
    """Convert area-id to Area Name format.
    
    Examples:
        business-bay -> Business Bay
        dubai-hills-estate -> Dubai Hills Estate
        al-wasl -> Al Wasl
    """
    words = area_id.split("-")
    formatted = []
    
    for word in words:
        if word in ["al", "jlt", "jbr", "jvc", "jvt"]:
            # Special handling for certain abbreviations
            if word == "al":
                formatted.append("Al")
            else:
                formatted.append(word.upper())
        else:
            formatted.append(word.capitalize())
    
    return " ".join(formatted)


def get_title_keyword(area_id: str, service_name: str) -> str:
    """Create SEO title keywords.
    
    Example: Space Planning Business Bay Dubai -> Space Planning Business Bay Dubai
    """
    area_name = format_area_name(area_id)
    return f"{service_name} {area_name} Dubai"


def generate_page_tsx(template_content: str, area_id: str) -> str:
    """Generate page.tsx content for a specific area by replacing variables in template.
    
    Variables to replace:
    - Service name variations (Space Planning Dubai -> Space Planning Business Bay Dubai)
    - Component function name (SpacePlanningDubai -> SpacePlanningBusinessBayDubai)
    - SEO keywords and descriptions
    - WhatsApp messages with area name
    """
    area_name = format_area_name(area_id)
    title_keyword = get_title_keyword(SERVICE_NAME, area_id)
    
    # Create proper function name (CamelCase)
    function_name = "".join(word.capitalize() for word in area_id.split("-"))
    function_name = f"{SERVICE_NAME.replace(' ', '')}{function_name}"
    
    # Replace content
    content = template_content
    
    # 1. Replace function name
    content = content.replace("SpacePlanningDubai", function_name)
    
    # 2. Replace service name variations
    # "Space Planning Dubai" -> "Space Planning {Area} Dubai"
    content = content.replace(
        "Space Planning Dubai",
        f"{SERVICE_NAME} {area_name} Dubai"
    )
    
    # 3. Replace SEO keywords in comment
    # Update the SEO keywords comment
    old_keywords = f"// SEO Keywords: space planning dubai, space planning dubai dubai, best space planning dubai company dubai, luxury space planning dubai dubai, modern space planning dubai dubai"
    area_slug = area_id.replace(" ", "-").lower()
    new_keywords = f"// SEO Keywords: space planning {area_slug}, space planning {area_slug} dubai, best space planning {area_slug} company dubai, luxury space planning {area_slug} dubai, modern space planning {area_slug} dubai"
    content = content.replace(old_keywords, new_keywords)
    
    # 4. Update WhatsApp messages
    old_whatsapp_msg = "encodeURIComponent(\"Hi Interiara! I'm interested in Space Planning Dubai services in Dubai. Please share more details.\")"
    new_whatsapp_msg = f"encodeURIComponent(\"Hi Interiara! I'm interested in Space Planning services in {area_name}, Dubai. Please share more details.\")"
    content = content.replace(old_whatsapp_msg, new_whatsapp_msg)
    
    # 5. Update serviceName in form
    old_form_name = 'serviceName="Space Planning Dubai"'
    new_form_name = f'serviceName="{SERVICE_NAME} {area_name} Dubai"'
    content = content.replace(old_form_name, new_form_name)
    
    return content


def create_directory(dir_path: Path) -> None:
    """Create directory if it doesn't exist."""
    dir_path.mkdir(parents=True, exist_ok=True)
    print(f"✓ Directory created: {dir_path}")


def save_page_file(file_path: Path, content: str) -> None:
    """Save page.tsx file."""
    file_path.write_text(content, encoding="utf-8")
    print(f"✓ File created: {file_path}")


def main():
    """Main function to generate all page.tsx files."""
    
    # Read template
    if not TEMPLATE_PATH.exists():
        print(f"❌ Template not found: {TEMPLATE_PATH}")
        return False
    
    print(f"📖 Reading template from: {TEMPLATE_PATH}")
    template_content = TEMPLATE_PATH.read_text(encoding="utf-8")
    print(f"✓ Template loaded ({len(template_content)} bytes)\n")
    
    # Generate pages for all areas
    print(f"🚀 Generating {len(AREAS)} page.tsx files...\n")
    
    created_count = 0
    failed_areas = []
    
    for area_id in AREAS:
        try:
            # Generate page content
            page_content = generate_page_tsx(template_content, area_id)
            
            # Create directory
            page_dir = APP_DIR / f"{SERVICE_TYPE}-{area_id}-dubai"
            create_directory(page_dir)
            
            # Save file
            page_file = page_dir / "page.tsx"
            save_page_file(page_file, page_content)
            
            created_count += 1
            
        except Exception as e:
            print(f"❌ Error processing {area_id}: {str(e)}")
            failed_areas.append(area_id)
    
    # Print summary
    print(f"\n{'='*60}")
    print(f"📊 Generation Summary")
    print(f"{'='*60}")
    print(f"✓ Successfully created: {created_count}/{len(AREAS)} files")
    
    if failed_areas:
        print(f"❌ Failed areas ({len(failed_areas)}):")
        for area in failed_areas:
            print(f"   - {area}")
        return False
    
    print(f"\n✅ All {created_count} space-planning page.tsx files generated successfully!")
    print(f"\nGenerated files are located at:")
    print(f"  /Applications/Interiara/app/space-planning-{{area}}-dubai/page.tsx")
    
    return True


if __name__ == "__main__":
    success = main()
    exit(0 if success else 1)
