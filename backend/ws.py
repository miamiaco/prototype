import requests
from bs4 import BeautifulSoup
import json

# Example recipe URL
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
    "https://www.bellatable.fi/reseptit/naminamastensampylat",
    "https://www.bellatable.fi/reseptit/chevresalaatti",
    "https://www.bellatable.fi/reseptit/Kurpitsagnocchi-cacioepepe",
    "https://www.bellatable.fi/reseptit/maissichowder",
    "https://www.bellatable.fi/reseptit/markun-kreikkalainen-salaatti",
    "https://www.bellatable.fi/reseptit/raejuustopannari",
    "https://www.bellatable.fi/reseptit/suklaakakku-kahvi",
    "https://www.bellatable.fi/reseptit/kesakeitto",
    "https://www.bellatable.fi/reseptit/Spicytunatoast",
    "https://www.bellatable.fi/reseptit/kalaa-en-papilotte",
    "https://www.bellatable.fi/reseptit/kanagyros",
    "https://www.bellatable.fi/reseptit/nelja-reseptia-sailyketomaateista",
    "https://www.bellatable.fi/reseptit/Bagnacauda",
    "https://www.bellatable.fi/reseptit/magnolia-bakeryn-banaanivanukas",
    "https://www.bellatable.fi/reseptit/perunarieskat",
    "https://www.bellatable.fi/reseptit/misomunakoiso",
    "https://www.bellatable.fi/reseptit/aglio-olio-e-peperoncino-1",
    "https://www.bellatable.fi/reseptit/fattoush",
    "https://www.bellatable.fi/reseptit/Crepecomplete",
    "https://www.bellatable.fi/reseptit/annan-shanghai-taco",
    "https://www.bellatable.fi/reseptit/5jvo28mpa04gctiwdobtawrsj2enys-d3ygl-z2fye-6ct54-exe85-azncj-exhy7-k7azf-9pxt9-at884-g2tlw-gkege-2tnt8-xlb5d",
    "https://www.bellatable.fi/reseptit/paasiaisfeast",
    "https://www.bellatable.fi/reseptit/gremolata-voi",
    "https://www.bellatable.fi/reseptit/Tattarikrokantti",
    "https://www.bellatable.fi/reseptit/latket",
]

def scrape_recipe(url):
    response = requests.get(url)
    soup = BeautifulSoup(response.content, 'html.parser')
    content_paragraphs = soup.find_all('p', style="white-space:pre-wrap;")
    
    all_content_text = ""
    for p in content_paragraphs:
        paragraph_text = p.get_text(separator='\n', strip=True)
        all_content_text += paragraph_text + "\n\n"
    
    return all_content_text.strip()

# List to store each recipe's content
recipes_content = []

# Iterate through URLs and scrape content for each
for url in recipe_urls:
    print(f"Scraping content from {url}")
    content = scrape_recipe(url)
    # Append a dictionary for each recipe to the list
    recipes_content.append({
        'url': url,
        'content': content
    })

# Convert the list of dictionaries to JSON
json_content = json.dumps(recipes_content, indent=4, ensure_ascii=False)

# Print the JSON
print(json_content)

# Optionally, save the JSON to a file
with open('recipes_content.json', 'w', encoding='utf-8') as f:
    f.write(json_content)