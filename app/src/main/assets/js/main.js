on(window, 'load', function () {
    var view = new View();
    var game = new Game();
    game.init(view);
    event(game);

    // Play bgm with user interaction fallback
    const bgm = document.getElementById('bgm');

    // Try play immediately (might get blocked)
    bgm.play().catch(() => {
        // If blocked, wait for user click to start music
        const startMusic = () => {
            bgm.play();
            window.removeEventListener('click', startMusic);
            window.removeEventListener('keydown', startMusic);
        };

        window.addEventListener('click', startMusic);
        window.addEventListener('keydown', startMusic);
    });
});
