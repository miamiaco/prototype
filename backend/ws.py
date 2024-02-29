import requests
from bs4 import BeautifulSoup
import json

# List of recipe URLs
recipe_urls = [
    "https://www.bellatable.fi/reseptit/romescoa-ja-paahdettua-purjoa",
    "https://www.bellatable.fi/reseptit/savulohikiusaus",
    "https://www.bellatable.fi/reseptit/paahdettua-graavilohta-amp-beurre-blancia",
    "https://www.bellatable.fi/reseptit/sitruunamuffinsit",
    "https://www.bellatable.fi/reseptit/ihanat-aamiaismuffinssit",
    "https://www.bellatable.fi/reseptit/kantarellirisotto",
    "https://www.bellatable.fi/reseptit/hernepasta",
    "https://www.bellatable.fi/reseptit/antiboise-kastike-ja-siikaa",
    "https://www.bellatable.fi/reseptit/chocolate-chip-cookies",
    "https://www.bellatable.fi/reseptit/kukkakaaligrattiini",
    "https://www.bellatable.fi/reseptit/kirsikka-suklaahippujtel",
    "https://www.bellatable.fi/reseptit/bellan-babybel-sampylat",
    "https://www.bellatable.fi/reseptit/linssikeitto",
    "https://www.bellatable.fi/reseptit/mansikka-raparperigalette",
    "https://www.bellatable.fi/reseptit/gnocchivuoka",
    "https://www.bellatable.fi/reseptit/butterchickpea",
    "https://www.bellatable.fi/reseptit/mansikka-raparperiviinerit",
]


def scrape_recipe(url):
    response = requests.get(url)
    soup = BeautifulSoup(response.content, 'html.parser')
    
    # Scrape the title of the recipe
    title_tag = soup.find('h1', class_='entry-title entry-title--large p-name')
    title = title_tag.get_text(strip=True) if title_tag else 'No Title Found'
    
    # Scrape the content paragraphs
    content_paragraphs = soup.find_all('p', style="white-space:pre-wrap;")
    all_content_text = "\n\n".join(p.get_text(separator='\n', strip=True) for p in content_paragraphs)
    
    # Scrape the image URLs, excluding a specific image if found
    excluded_image_filename = "bellatable_red.png"
    image_blocks = soup.find_all('div', class_='image-block-wrapper')
    image_urls = [img['src'] for block in image_blocks for img in block.find_all('img', src=True) if excluded_image_filename not in img['src']]
    
    return {
        'url': url,
        'title': title,
        'content': all_content_text.strip(),
        'images': image_urls  # Direct URLs of the images, excluding the specified one
    }

# List to store the content of each recipe
recipes_content = []

# Iterate through URLs and scrape content, title, and images for each, excluding specific images
for url in recipe_urls:
    print(f"Scraping content from {url}")
    recipe_data = scrape_recipe(url)
    recipes_content.append(recipe_data)

# Convert the list of recipe data to JSON
json_content = json.dumps(recipes_content, indent=4, ensure_ascii=False)

# Optionally, save the JSON to a file
with open('recipes_content.json', 'w', encoding='utf-8') as f:
    f.write(json_content)
