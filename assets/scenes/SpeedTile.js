
// You can write more code here

/* START OF COMPILED CODE */

class SpeedTile extends Phaser.GameObjects.Image {

	constructor(scene, x, y, texture, frame) {
		super(scene, x ?? 0, y ?? 0, texture || "SpeedTile", frame);

		this.setOrigin(0, 0);

		/* START-USER-CTR-CODE */
		new Physics(this);
		this.initBlink();
		this.createEvent =	this.scene.events.once(Phaser.Scenes.Events.UPDATE, this.create, this);

		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	create(){
		this.keepBodyStatic();
		this.initColliders();
	}
		initColliders(){

		this.scene.physics.add.collider(this.scene.player, this, this.executeSpeedBoost, null, this);	

	}

	keepBodyStatic(){
		if(!this.body){
			return;
		}

		this.body.setImmovable(true);
		this.body.setAllowGravity(false);
		this.body.setVelocity(0,0);
		this.body.moves = false;
	}
	
	executeSpeedBoost(player, tile){
		player.wallCollision();
	}
	initBlink(){

		if(!this.scene || !this.scene.tweens){
			return;
		}

		const baseAlpha = 0.55;
		this.setAlpha(baseAlpha);

		if(this.blinkTween){
			this.blinkTween.stop();
		}

		this.blinkTween = this.scene.tweens.add({
			targets: this,
			alpha: { from: baseAlpha, to: 1 },
			duration: 400,
			ease: "Sine.easeInOut",
			yoyo: true,
			repeat: -1,
			delay: Phaser.Math.Between(0, 250)
		});

		this.once(Phaser.GameObjects.Events.DESTROY, () => {
			if(this.blinkTween){
				this.blinkTween.stop();
			}
		});
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
