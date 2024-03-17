function changeTitle(name) {
    document.title = name;
}

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
        } else if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
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
});