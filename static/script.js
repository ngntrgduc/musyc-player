function changeTitle(name) {
    document.title = name;
}

let currentSongIndex = 0;
let loop = false;

document.getElementById('loopButton').addEventListener('click', () => {
    const loopClass = 'fa-solid fa-arrow-rotate-left';
    if (loop) {
        loop = player.loop = false;
        document.getElementById('loopButton').className = loopClass;
    } else {
        loop = player.loop = true;
        document.getElementById('loopButton').className = loopClass + ' toggled';
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const player = document.getElementById('player');
    const songs = document.querySelectorAll('.song-name');

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

    // function getCurrentSongIndex(src) {
    //     for (let i = 0; i < songs.length; i++) {
    //         if (src === songs[i].getAttribute('data-src')) {
    //             return i;
    //         }
    //     }
    // }

    songs.forEach((song, index) => {
        song.addEventListener('click', function() {
            playSong(index);
        });
    });

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

    // function initPlayer() {
    //     playSongAtIndex(0);
    // }
});