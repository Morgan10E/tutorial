var game = new Phaser.Game(
    800,
    480,
    Phaser.AUTO,
    'game',
    {
        preload:preload,
        create:create,
        update:update
    }
);