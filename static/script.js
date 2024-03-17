function changeTitle(name) {
    document.title = name;
}

document.addEventListener('DOMContentLoaded', function() {
    const player = document.getElementById('player');
    const songs = document.querySelectorAll('.song-name');

    function togglePlayPause(e) {
        if (e.key === " ") { // Check if the pressed key is the spacebar
            if (player.paused) {
                player.play();
            } else {
                player.pause();
            }
        }
    }

    document.addEventListener('keydown', togglePlayPause);

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