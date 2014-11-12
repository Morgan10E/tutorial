var cursors;
var jumpedOnce;
var readyForSecondJump;

function update() {
	
	game.physics.arcade.collide(player, platforms);

	cursors = game.input.keyboard.createCursorKeys();

	player.body.velocity.x = 0;

	if (cursors.left.isDown) {
		player.body.velocity.x = -150;
		player.animations.play('left');
	} else if (cursors.right.isDown) {
		player.body.velocity.x = 150;
		player.animations.play('right');
	} else {
		player.animations.stop();
		player.frame = 4;
	}

	if (cursors.up.isDown && player.body.touching.down) {
		player.body.velocity.y = -250;
		jumpedOnce = true;
	} else if (!cursors.up.isDown && !player.body.touching.down && jumpedOnce) {
		readyForSecondJump = true;
	} else if (cursors.up.isDown && readyForSecondJump) {
		player.body.velocity.y = -250;
		readyForSecondJump = false;
		jumpedOnce = false;
	}


	game.physics.arcade.collide(stars, platforms);
	game.physics.arcade.overlap(player, stars, collectStar, null, this);

}

function collectStar(player, star) {
	star.kill();

	score += 10;
	scoreText.text = 'score: ' + score;
}