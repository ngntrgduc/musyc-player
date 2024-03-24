let currentSongIndex = 0;
let loop = false;
let songs;

function changeTitle(name) {
    document.title = name;
}

function updateSongs() {
    // Update new index and play functionality
    songs = document.querySelectorAll('.song-name');
    songs.forEach((song, index) => {
        song.addEventListener('click', function() {
            playSong(index);
        });
    });
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

function nextSong() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    playSong(currentSongIndex);
}

function togglePlayPause(player) {
    if (player.paused) {
        player.play();
    } else {
        player.pause();
    }
    document.getElementById('player').blur();
}

function seek(player, seconds) {
    player.currentTime += seconds;
}

function adjustVolume(player, delta) {
    player.volume = Math.min(Math.max(player.volume + delta, 0), 1);
}


function getCurrentSongIndex() {
    const src = document.getElementById('player').getAttribute('src')
    for (let i = 0; i < songs.length; i++) {
        if (src === songs[i].getAttribute('data-src')) return i;
    }
}

function loopSong() {
    const loopClass = 'fa-solid fa-arrows-rotate';
    const button = document.getElementById('loopButton');
    loop = !loop;
    player.loop = loop;
    button.className = loop ? loopClass + ' toggled' : loopClass;
}

function shuffleSongs() {
    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i+1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    const songList = document.getElementById('song-list');
    const shuffledSongs = shuffle(Array.from(songList.children));
    songList.innerHTML = ''; // Clear existing song list
    shuffledSongs.forEach(song => songList.appendChild(song));

    // Update after shuffled songs
    updateSongs();
    currentSongIndex = getCurrentSongIndex();
}


document.getElementById('loopButton').addEventListener('click', loopSong);

document.getElementById('shuffleButton').addEventListener('click', shuffleSongs);

document.addEventListener('DOMContentLoaded', function() {
    const player = document.getElementById('player');
    player.addEventListener('ended', () => {
        if (!loop) nextSong();
    });

    updateSongs();

    function handleKeyDown(e) {
        if (e.key === ' ') {
            togglePlayPause(player);
        } else if (e.key === 'ArrowRight') {
            seek(player, 5);
        } else if (e.key === 'ArrowLeft') {
            seek(player, -5);
        } else if (e.key === '+') {
            adjustVolume(player, 0.1);
        } else if (e.key === '-') {
            adjustVolume(player, -0.1);
        }
    }

    document.addEventListener('keydown', handleKeyDown);
});