# Musyc player

Minimal Music player, built with Python + Flask.

## Features
- Minimal. No genre or liked/starred song feature. Just song name, duration, and player
- The player can be easily controlled through keyboard shortcuts:
    - **Space bar**: Toggles play/pause
    - **+/- keys**: Increase (+) or decrease (-) the volume
    - **Arrow keys**: Seek forward (right arrow) or backward (left arrow)
- Loop, Shuffle 
- Playlists. Made when creating a folder in the `music` folder
- Updates the browser tab title with the currently playing song information
- Progresses automatically when the current one ends


## Roadmap
- [x] Web
- [x] Playlist feature?, separated by folder
    - [x] Shuffle feature 
- [x] Handling when 2 songs are played at the same time
- [x] Looping feature
- [x] Random feature
- [x] Change UI
- [x] Keyboard control
- [x] Change the title when playing a song
- [ ] ~~If click on a playing song, stop it~~. Keep it simple, reloading the song when clicking on the song name is not a bad feature
- [x] Go to the main page when clicking on the header
- [x] Bug: after seeking by mouse, cannot stop or play the song, maybe there is a bug with the focus
- [x] sort songs in alphabetical order of All songs route
- [ ] ~~Keep song playing when change route~~
- [ ] Download Soundcloud song
    - Thanks https://sclouddownloader.net/ <3, or maybe yt-dlp
    - Crawl all the links of liked songs on Soundcloud, then use Selenium to download songs (not download all of that)
        - Also get the song's name, and format it when downloading
    - [ ] Download songs with yt-dlp? or keep it simple? add a route for downloading songs?
- [ ] If have lots of songs, implement fuzzy search for searching songs, or just show random songs
- [ ] song in multiple playlists? SQL?
- [ ] Another way to get the duration of the song, remove librosa
- [ ] Maybe delete the current approach for playlist, using a database instead for better speed?
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