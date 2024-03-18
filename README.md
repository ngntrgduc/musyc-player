# Musyc player

Minimal Music player, crafted with Python

## Features
- Minimal. No genre or liked/starred song feature. Just song name, duration, and player
- Lightweight (hope so)

# Roadmap
- [x] Web
- [ ] database: Schema: id, name, length
    - Maybe doesn't need author because song name on soundcloud often have the author on it
- [ ] sql for storing config? or using different format such as yaml, toml, json, txt?
- [x] Playlist feature?, seperated by folder
    - [ ] one song, multiple playlist?
        - [ ] SQL?
    - [ ] Shuffle feature 
    - [ ] Loop specified in playlist
- [ ] If have lots of songs, implement fuzzy search for searching song, or just show random songs
- [ ] Download Soundcloud song
    - Thanks https://sclouddownloader.net/ <3
    - Crawl all the link of liked songs on Soundcloud, then using Selenium to download songs (not download all of that)
        - Also get song name, and format it when download
- [x] Handling when 2 song is played at the same time
- [ ] Looping feature
- [ ] Random feature
- [x] Change UI
    - [ ] Light/Dark mode switching
- [ ] Keyboard control
- [x] Change title when play song
- [ ] If click on a playing song, stop it
- [ ] Sort feature
    - [ ] Sort by frequency listened time?
- [ ] Recent played song in player?
- [ ] Another way to get duration of song, remove librosa
- [ ] switch to sql for better speed?
    - [ ] Store song duration, for customized player bar, and no more using librosa lib to get duration
- [ ] Refactor html jinja template
- [x] Go to main page when click on header

# Installation
1. Clone this repo
```git
git clone 
```
2. Install Flask, librosa
3. Run
```py
flask run
```
4. Go to http://127.0.0.1:5000/ and chill