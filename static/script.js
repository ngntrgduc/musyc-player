function changeTitle(name) {
    document.title = name;
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i+1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

let currentSongIndex = 0;
let loop = false;

document.getElementById('loopButton').addEventListener('click', () => {
    const loopClass = 'fa-solid fa-arrow-rotate-left';
    const button = document.getElementById('loopButton');
    if (loop) {
        loop = player.loop = false;
        button.className = loopClass;
    } else {
        loop = player.loop = true;
        button.className = loopClass + ' toggled';
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const player = document.getElementById('player');
    let songs = document.querySelectorAll('.song-name');
    songs.forEach((song, index) => {
        song.addEventListener('click', function() {
            playSong(index);
        });
    });

    function togglePlayPause() {
        if (player.paused) {
            player.play();
        } else {
            player.pause();
        }
    }

    function seek(e) {
        const SEEK_SEC = 5;
        if (e.key === 'ArrowRight') {
            player.currentTime += SEEK_SEC;
        } else if (e.key === 'ArrowLeft') {
            player.currentTime -= SEEK_SEC;
        }
    }

    function increaseVolume() {
        if (player.volume + 0.1 > 1) player.volume = 1;
        else player.volume += 0.1;
    }

    function decreaseVolume() {
        if (player.volume - 0.1 < 0) player.volume = 0;
        else player.volume -= 0.1;
    }

    function handleKeyDown(e) {
        if (e.key === ' ') {
            togglePlayPause();
        } else if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
            seek(e);
        } else if (e.key === '+') {
            increaseVolume();
        } else if (e.key === '-') {
            decreaseVolume();
        }
    }

    document.addEventListener('keydown', handleKeyDown);

    player.addEventListener('ended', () => {
        if (!loop) nextSong();
    });

    function nextSong() {
        currentSongIndex = (currentSongIndex + 1) % songs.length;
        playSong(currentSongIndex);
    }

    function playSong(index) {
        const song = songs[index];
        const src = song.getAttribute('data-src');
        player.src = src;
        player.play();
        changeTitle('Musyc | ' + song.innerHTML);

        // Change color of current playing song
        songs.forEach(song => song.classList.remove('playing'));
        song.classList.add('playing');

        currentSongIndex = index;
    }

    document.getElementById('shuffleButton').addEventListener('click', shuffleSongs);

    function shuffleSongs() {
        const songList = document.getElementById('song-list');
        const shuffledSongs = shuffle(Array.from(songList.children));
        songList.innerHTML = ''; // Clear existing song list
        shuffledSongs.forEach(song => songList.appendChild(song));

        // Update new index for shuffled songs
        songs = document.querySelectorAll('.song-name');
        songs.forEach((song, index) => {
            song.addEventListener('click', function() {
                playSong(index);
            });
        });

        currentSongIndex = getCurrentSongIndex();
    }

    function getCurrentSongIndex() {
        const src = document.getElementById('player').getAttribute('src')
        for (let i = 0; i < songs.length; i++) {
            if (src === songs[i].getAttribute('data-src')) return i;
        }
    }

});