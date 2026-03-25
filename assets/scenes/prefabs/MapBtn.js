
// You can write more code here

/* START OF COMPILED CODE */

class MapBtn extends Phaser.GameObjects.Sprite {

	constructor(scene, x, y, texture, frame) {
		super(scene, x ?? 0, y ?? 0, texture || "MapBtn", frame);

		/* START-USER-CTR-CODE */
		this.scene.events.on("create", () => this.create());
	
		/* END-USER-CTR-CODE */
	}

	/** @type {string} */
	LevelToGo = "NewLevel1";

	/* START-USER-CODE */

	create(){

		this.setInteractive().on('pointerdown', function(pointer, localX, localY, event){
			const levelKey = this.LevelToGo;
			const sceneManager = this.scene.scene.manager;
			const isLoaded = sceneManager.scenes.some(s => s.scene.key === levelKey);
			
			if (!isLoaded) {
				this.scene.load.sceneFile(levelKey, 'assets/scenes/' + levelKey + '.js');
				this.scene.load.once('complete', () => {
					this.scene.scene.start(levelKey);
				});
				this.scene.load.start();
			} else {
				this.scene.scene.start(levelKey);
			}
		}, this);

	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
