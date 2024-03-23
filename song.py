"""Song utils"""

import pathlib
from librosa import get_duration  # librosa is faster than pydub

def format(duration: float) -> str:
    """Format duration of song"""
    if duration > 3600:
        hour = int(duration // 3600)
        minute = int((duration - hour*3600) // 60)
        second = int(duration - (hour*3600 + minute*60));
        return f'{hour}:{minute:0>2}:{second:0>2}'
    
    minute = int(duration // 60)
    second = int(duration - minute*60)
    return f'{minute}:{second:0>2}'

def duration(path: str) -> str:
    """Return duration from song's path"""
    
    return format(get_duration(path=path))

def name(path: str) -> str:
    """Format song's name from path"""
    
    return path.replace('.mp3', '')\
                    .split('/')[-1]\
                    .replace('_', ' ')

def get_songs(folder: str = '', all: bool = False) -> dict:
    """Get songs in music folder"""
    
    songs = {}
    pattern = '**/*.mp3' if all else '*.mp3'
    static_path = pathlib.Path('static')
    
    for path in pathlib.Path(f'static/music/{folder}').glob(pattern):
        # Convert path to posix to work with url_for format (/) in Flask
        relative_path = str(path.relative_to(static_path).as_posix())
        songs[f'{name(path.name)}_{duration(path)}'] = relative_path

    # Sorted for all songs
    if all:
        return dict(sorted(songs.items(), key=lambda x: x[0].lower()))

    return songs

def get_playlists() -> list:
    """Get all playlists"""

    playlists = []
    for folder in pathlib.Path('static/music/').glob('*'):
        if folder.is_dir():
            # print(folder.stem)
            playlists.append(folder.stem)

    return playlists

if __name__ == '__main__':
    # print(duration('static/music/Vexento_Tevo.mp3'))
    # get_songs()
    print(get_playlists())