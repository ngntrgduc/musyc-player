# Soundcloud API is down, so using another method like selenium maybe better

import requests
import random
from time import sleep

# Everytime, get different Signature value
url = 'https://cf-media.sndcdn.com/aP1AVm8uMspX.128.mp3?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiKjovL2NmLW1lZGlhLnNuZGNkbi5jb20vYVAxQVZtOHVNc3BYLjEyOC5tcDMqIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzEwNjcxMzk3fX19XX0_&Signature=LURB05kfemAhmuGUUA5XaU5ZrVDW8RcN9OFqKblpIkHljLQSmOc4qKIEaPRkuUeCQActA0mMDC6euhI-x6k5Xnwu0S8GbPQswYEsUUgpD8ord1yEPbxozEPZ~FkmyiEFwGfP7QvO4~ctXsjpJHP87ZkmD3Eb9gZ7QDR~CjifUGaMz8hfRSLiNjZW6z3e1MuPB2c2sWvJt1RGxsS~hiY2ZTzlcOvPPBXWhxI3IWiP17wv24QNMRNC~179pQC598Fc8c9siVzPeZHBmGxxj211Z~r-pnAni~GRTctXvU4CA7~zTcBnbag8QtJlZFG8OwSOk-qPRd8Eozj7YBdrRV5uUg__&Key-Pair-Id=APKAI6TU7MMXM5DG6EPQ'

response = requests.get(url)

with open("test_full.mp3", "wb") as f:
    f.write(response.content)
