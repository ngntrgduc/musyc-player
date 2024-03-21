from flask import Flask, render_template
from song import get_songs, get_playlists

app = Flask(__name__)

songs = get_songs()

@app.route('/')
def main(songs=songs):
    return render_template('index.html', songs=songs)

@app.route('/all')
def all():
    songs = get_songs(all=True)
    return render_template('index.html', songs=songs)

@app.route('/playlists')
def show_playlists():
    playlists = get_playlists()
    return render_template('index.html', playlists=playlists)

@app.route('/playlists/<playlist_name>')
def show_playlist(playlist_name):
    songs = get_songs(folder=playlist_name)
    return render_template('index.html', songs=songs)
