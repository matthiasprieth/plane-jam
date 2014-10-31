"use strict";
window.test.state.play = {
	preload: function(){
		this.game.load.spritesheet('planes', 'assets/planes.png', 87, 73);
		this.game.load.image('textGameOver', 'assets/textGameOver.png');
		//this.game.load.spritesheet('sheet')
	},
	
	create: function(){
		console.log("started play state");
		
		this.bg = mt.create("bg");
		
    	this.plane = mt.create("plane");
		this.plane.animations.add('fly', [0, 2, 10], 10, true);
		this.plane.animations.play('fly');
		
		this.enemies = this.game.add.group();
		this.enemies.enableBody = true;
    	this.enemies.physicsBodyType = Phaser.Physics.ARCADE;
		
		//this.pointer = this.game.input.addPointer();
		this.cursors = this.game.input.keyboard.createCursorKeys();
		
		this.timer = this.game.time.events.loop(1800, this.addEnemy, this);
		
		this.popup = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'textGameOver');
		this.popup.anchor.set(0.5);
		this.popup.inputEnabled = true;
		this.popup.input.enableDrag();
		this.popup.scale.set(0);
		this.popup.events.onInputDown.add(this.closeWindow, this);
	},
	
	addEnemy: function(){
		var newEnemy = this.enemies.create(Math.round(Math.random())*this.game.world.width, Math.random() * 500, 'planes', this.game.rnd.integerInRange(0, 36));
		
		if (newEnemy.x > this.game.world.x){
			newEnemy.animations.add('fly', [3, 5, 7], 10, true);
			newEnemy.scale.x = -1;
			newEnemy.anchor.x = 0.5;
			newEnemy.body.velocity.x = (Math.random() * 150) -150;
		}else{
			newEnemy.animations.add('fly', [4, 6, 8], 10, true);
			newEnemy.body.velocity.x = Math.random() * 80;
		}
		newEnemy.animations.play('fly');
		newEnemy.body.velocity.y = (Math.random() * 50) -25;
		newEnemy.checkWorldBounds = true;
		//this.enemies.outOfBoundsKill = true;
		newEnemy.events.onOutOfBounds.add(this.resetEnemy, this);    		
	},
	
	collisionHandler: function(plane, enemy){
		console.log("collision");
		enemy.kill();
		this.openWindow();
		//this.game.state.start("play");
	},
	
	resetEnemy: function(enemy){
		console.log("outOfBounce");
		enemy.kill();
	},
	
	openWindow: function() {
		console.log("twwen??");

		if ((tween && tween.isRunning) || this.popup.scale.x === 1)
		{
			return;
		}

		//  Create a tween that will pop-open the window, but only if it's not already tweening or open
		var tween = this.game.add.tween(this.popup.scale).to( { x: 1, y: 1 }, 1000, Phaser.Easing.Elastic.Out, true);

	},
	
	closeWindow: function() {
		this.game.state.start("play");
	},
		
	update: function(){
		/*
		if (this.cursors.left.isDown) {
			this.plane.body.velocity.x = -100;
			this.plane.animations.play('fly');
			this.plane.scale.x = -1;
		} else if (this.cursors.right.isDown) {
			this.plane.body.velocity.x = 100;
			this.plane.animations.play('fly');
			this.plane.scale.x = 1;
		} else {
			this.plane.body.velocity.x = 0;
			this.plane.animations.play('fly');
		} if (this.cursors.up.isDown) {
			this.plane.body.velocity.y = -75;
			this.plane.animations.play('fly');
		}
		*/
		if (this.game.input.mousePointer.isDown){
			this.plane.body.velocity.y = -75;
			this.plane.animations.play('fly')
		}	
		
		this.game.physics.arcade.overlap(this.plane, this.enemies, this.collisionHandler, null, this);
	}
	
};