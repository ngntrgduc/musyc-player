function changeTitle(name) {
    document.title = name;
}

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

    function handleKeyDown(e) {
        if (e.key === ' ') {
            togglePlayPause();
        } else if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
            seek(e);
        }
    }
    document.addEventListener('keydown', handleKeyDown);

    songs.forEach((song) => {
        song.addEventListener('click', function(e) {
            e.preventDefault();
            const src = this.getAttribute('data-src');
            player.src = src;
            player.play();
            changeTitle('Musyc | ' + song.innerHTML);

            songs.forEach(song => song.classList.remove('playing'));
            this.classList.add('playing');
        });
    });

    // player.addEventListener('ended', () => {
    //     nextSong();
    // });

    // function getCurrentSongIndex() {
    //     console.log(player.src);
    //     console.log(songs[0].getAttribute('data-src'));
    //     console.log(songs[1].getAttribute('data-src'));
    //     for (let i = 0; i < songs.length; i++) {
    //         if (player.src === songs[i].getAttribute('data-src')) {
    //             return i;
    //         }
    //     }
    //     return -1;
    // }

    // function nextSong() {
    //     let currentSongIndex = getCurrentSongIndex();
    //     alert(currentSongIndex);
    //     currentSongIndex = (currentSongIndex + 1) % songs.length;
    //     playSongAtIndex(currentSongIndex);
    // }

    // // Function to play a song at a given index
    // function playSongAtIndex(index) {
    //     const song = songs[index];
    //     const src = song.getAttribute('data-src');
    //     player.src = src;
    //     player.play();
    //     // isPlaying = true;
    // }

    // function initPlayer() {
    //     playSongAtIndex(0);
    // }
});