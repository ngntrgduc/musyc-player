# Musyc player

Minimal Music player, crafted with Python

## Features
- Minimal. No genre or liked/starred song feature. Just song name, duration, and player
- Lightweight (hope so)

# Roadmap
- [ ] Web
- [ ] database
    - [ ] Schema: id, name, length
        - Maybe doesn't need author because song name on soundcloud often have the author on it
- [ ] Settings page, sql for storing config? or using different format such as yaml, toml, json, txt?
- [ ] Playlist feature?
    - [ ] Shuffle feature 
    - [ ] Loop specified in playlist
- [ ] If have lots of songs, implement fuzzy search for searching song, or just show random songs
- [ ] Download Soundcloud song
    - Thanks https://sclouddownloader.net/ <3
    - Crawl all the link of liked songs on Soundcloud, then using Selenium to download songs (not download all of that)
- [x] Handling when 2 song is played at the same time
- [ ] Looping feature
- [ ] Random feature
- [ ] Change UI
- [ ] Keyboard control
- [x] Change title when play song
- [ ] If click on a playing song, stop it
- [ ] Sort feature
    - [ ] Sort by frequency listened time?
- [ ] Recent played song in player?

# Installation
1. Install Flask, librosa
2. Run
```py
flask run
```
3. Go to http://127.0.0.1:5000/ and chill