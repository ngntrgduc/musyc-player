"""Song utils"""

import pathlib
from librosa import get_duration  # librosa is faster than pydub

def format(duration: float):
    """Format length of audio"""

    minute = int(duration // 60)
    second = int(duration - minute*60)
    return f'{minute}:{second}'

def duration(path: str):
    """Return duration of audio"""
    return format(get_duration(path=path))

def name(song):
    """Reformat name song"""
    return song.replace('.mp3', '').split('/')[-1].replace('_', ' ')

def get_songs():
    """Get all songs in music folder"""
    songs = {}
    
    for song in pathlib.Path('static/music').glob("*"):
        if song.suffix == '.mp3':
            songs[name(song.name)] = str(song)

    print(songs)
    return songs

if __name__ == '__main__':
    # print(duration('static/music/Vexento_Tevo.mp3'))
    get_songs()