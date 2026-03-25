
// You can write more code here

/* START OF COMPILED CODE */

class SettingsOverlay extends Phaser.Scene {

	constructor() {
		super("SettingsOverlay");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	init(data) {
		this.sourceSceneKey = data?.sourceSceneKey;
	}

	/** @returns {void} */
	editorCreate() {

		// menuPrefab
		const menuPrefab = new MenuPrefab(this, 291, 68);
		this.add.existing(menuPrefab);

		this.events.emit("scene-awake");
	}

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
