# Soundcloud API is down, so using another method like selenium maybe better

import requests
# import random
# from time import sleep
from utils import clear_file

# Everytime, get different Signature value in song url

with open('url.txt') as f:
    lines = [line.strip() for line in f.read().splitlines() if line]

clear_file('url.txt')

session = requests.Session()

for line in lines:
    name, url = line.split('  |  ')
    response = session.get(url)
    with open(f"static/music/{name}.mp3", "wb") as f:
        f.write(response.content)

    # sleep(0.5 + random.random())
