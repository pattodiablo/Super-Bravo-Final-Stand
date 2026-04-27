
// You can write more code here

/* START OF COMPILED CODE */

class NewLevel1 extends BaseScene {

	constructor() {
		super("NewLevel1");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	preload() {

		this.load.pack("NewLevel1Pack", "assets/NewLevel1Pack.json");
	}

	/** @returns {void} */
	editorCreate() {

		// mapa
		const mapa = this.add.tilemap("new_level1");
		mapa.addTilesetImage("new_ciudad_tiles", "new_ciudad_tiles");

		// new_level1
		const new_level1 = this.add.tilemap("new_level1");
		new_level1.addTilesetImage("new_ciudad_tiles", "new_ciudad_tiles");

		// bg1Tile
		const bg1Tile = this.add.image(0, 0, "bg1Tile");
		bg1Tile.setOrigin(0, 0);

		// tilespriteBG
		const tilespriteBG = this.add.tileSprite(0, 0, 64, 64, "newBg1");
		tilespriteBG.setOrigin(0, 1);

		// nocollide
		mapa.createLayer("nocollide2", ["new_ciudad_tiles"], 0, 0);

		// nocollide_1
		mapa.createLayer("nocollide", ["new_ciudad_tiles"], 0, 0);

		// layer
		const layer = mapa.createLayer("layer", ["new_ciudad_tiles"], 0, 0);

		// player
		const player = new Player(this, 149, 690);
		this.add.existing(player);

		// wallLight
		this.add.image(930, 640, "wallLight");

		// upperTile
		const upperTile = new_level1.createLayer("upperTile", [], 0, 0);

		// handPointer
		const handPointer = new HandPointer(this, 84, 693);
		this.add.existing(handPointer);

		// sampoShooter
		const sampoShooter = new SampoShooter(this, 93, 366);
		this.add.existing(sampoShooter);

		// hand
		const hand = this.add.image(1059, 701, "hand");
		hand.scaleY = -1;
		hand.angle = -124;

		// lightBeam
		const lightBeam = new LightBeam(this, 930, 640);
		this.add.existing(lightBeam);

		// newTuto1
		const newTuto1 = new TutorialPrefab(this, 170, 543, "newTuto2");
		this.add.existing(newTuto1);

		// newTuto
		const newTuto = new TutorialPrefab(this, 427, 588, "newTuto4");
		this.add.existing(newTuto);

		// newTuto_1
		const newTuto_1 = new TutorialPrefab(this, 649, 500, "newTuto3");
		this.add.existing(newTuto_1);

		// newTuto_2
		const newTuto_2 = new TutorialPrefab(this, 787, 547, "newTuto5");
		this.add.existing(newTuto_2);
		newTuto_2.scaleX = 0.6402950021699765;
		newTuto_2.scaleY = 0.6402950021699765;

		// newTuto_3
		const newTuto_3 = new TutorialPrefab(this, 890, 193, "newTuto6");
		this.add.existing(newTuto_3);

		// lists
		const doors = [];
		const switches = [];
		const enemies = [sampoShooter];
		const platforms = [];
		const coins = [];
		const catapultas = [];
		const revivingPods = [];
		const tutorials = [];

		// tilespriteBG (components)
		new FixedToCamera(tilespriteBG);

		// newTuto_3 (prefab fields)
		newTuto_3.IsMovil = true;

		this.bg1Tile = bg1Tile;
		this.tilespriteBG = tilespriteBG;
		this.layer = layer;
		this.player = player;
		this.upperTile = upperTile;
		this.mapa = mapa;
		this.new_level1 = new_level1;
		this.doors = doors;
		this.switches = switches;
		this.enemies = enemies;
		this.platforms = platforms;
		this.coins = coins;
		this.catapultas = catapultas;
		this.revivingPods = revivingPods;
		this.tutorials = tutorials;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Image} */
	bg1Tile;
	/** @type {Phaser.GameObjects.TileSprite} */
	tilespriteBG;
	/** @type {Phaser.Tilemaps.TilemapLayer} */
	layer;
	/** @type {Player} */
	player;
	/** @type {Phaser.Tilemaps.TilemapLayer} */
	upperTile;
	/** @type {Phaser.Tilemaps.Tilemap} */
	mapa;
	/** @type {Phaser.Tilemaps.Tilemap} */
	new_level1;
	/** @type {Array<any>} */
	doors;
	/** @type {Array<any>} */
	switches;
	/** @type {SampoShooter[]} */
	enemies;
	/** @type {Array<any>} */
	platforms;
	/** @type {Array<any>} */
	coins;
	/** @type {Array<any>} */
	catapultas;
	/** @type {Array<any>} */
	revivingPods;
	/** @type {Array<any>} */
	tutorials;

	/* START-USER-CODE */






	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
