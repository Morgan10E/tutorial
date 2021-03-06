var platforms;
var player;
var score = 0;
var scoreText;

function create() {
	
	game.physics.startSystem(Phaser.Physics.ARCADE);
	game.add.sprite(0, 0, 'sky');

	platforms = game.add.group();
	platforms.enableBody = true;

	var ground = platforms.create(0, game.world.height - '64', 'ground');
	ground.scale.setTo(2, 2);
	ground.body.immovable = true;

	var ledge = platforms.create(400, 400, 'ground');
	ledge.body.immovable = true;
	ledge = platforms.create(-150, 250, 'ground');
	ledge.body.immovable = true;

	player = game.add.sprite(32, game.world.height - 150, 'dude');

	game.physics.arcade.enable(player);

	player.body.bounce.y = 0.2;
	player.body.gravity.y = 300;
	player.body.collideWorldBounds = true;

	player.animations.add('left', [0, 1, 2, 3], 10, true);
	player.animations.add('right', [5, 6, 7, 8], 10, true);

	stars = game.add.group();
	stars.enableBody = true;

	for (var i = 0; i < 12; i++) {
		var star = stars.create(i*70, 0, 'star');
		star.body.gravity.y = 6;
		star.body.bounce.y = 0.7 + Math.random() * 0.2;
	}


	scoreText = game.add.text(16, 16, 'score: 0', {fontSize: '32px', fill: '#000'});
}