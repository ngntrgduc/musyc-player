from flask import Flask, render_template
from song import get_songs, get_playlists

app = Flask(__name__)

songs = get_songs()
# TODO: Add parameter: all=False, to load all songs in music folder,
# if not, no need to load all songs in playlists

@app.route("/")
def main():
    return render_template('index.html', songs=songs)

@app.route("/all")
def all():
    songs = get_songs(all=True)
    return render_template('index.html', songs=songs)

@app.route("/playlist")
def playlist():
    playlists = get_playlists()
    return render_template('playlist.html', playlists=playlists)
    #  if playlist selected, call main(songs=get_songs(folder))