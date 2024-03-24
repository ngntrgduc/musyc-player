# Musyc player

Minimal Music player, built with Python + Flask.

## Features
- Minimal. No genre or liked/starred song feature. Just song name, duration, and player
- The player can be easily controlled through keyboard shortcuts:
    - **Space bar**: Toggles play/pause
    - **+/- keys**: Increase (+) or decrease (-) the volume
    - **Arrow keys**: Seek forward (right arrow) or backward (left arrow)
- Loop, Shuffle 
- Playlists. Made when created a folder in `music` folder
- Updates the browser tab title with the currently playing song information
- Progresses automatically when the current one ends


## Roadmap
- [x] Web
- [x] Playlist feature?, seperated by folder
    - [x] Shuffle feature 
- [x] Handling when 2 song is played at the same time
- [x] Looping feature
- [x] Random feature
- [x] Change UI
- [x] Keyboard control
- [x] Change title when play song
- [ ] ~~If click on a playing song, stop it~~. Keep it simple, also reload the song is not bad feature
- [x] Go to main page when click on header
- [x] Bug: after seeking by mouse, cannot stop or play the song, maybe there a bug with the focus
- [x] sort songs in alphabetical order of All songs route
- [ ] ~~Keep song playing when change route~~
- [ ] Download Soundcloud song
    - Thanks https://sclouddownloader.net/ <3, or maybe yt-dlp
    - Crawl all the link of liked songs on Soundcloud, then using Selenium to download songs (not download all of that)
        - Also get song name, and format it when download
    - [ ] Download songs with yt-dlp? or keep it simple?, add a route for downloading song?
- [ ] If have lots of songs, implement fuzzy search for searching song, or just show random songs
- [ ] song in multiple playlist? SQL?
- [ ] Another way to get duration of song, remove librosa
- [ ] Maybe delete current approach for playlist, using database instead for better speed?
    - [ ] database: Schema: id, name, length, path
    - [ ] Store song duration, for customized player bar, and no more using librosa lib to get duration

## Installation
1. Clone this repo
```git
git clone 
```
2. Install Flask, librosa
3. Run
```py
flask run
```
4. Go to http://127.0.0.1:5000/ and relax