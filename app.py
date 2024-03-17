import pathlib
from flask import Flask, render_template
from song import get_songs

app = Flask(__name__)

songs = get_songs()

@app.route("/")
def main(songs=songs):
    return render_template('index.html', songs=songs)
