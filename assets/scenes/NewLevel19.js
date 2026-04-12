
// You can write more code here

/* START OF COMPILED CODE */

class NewLevel19 extends BaseScene {

	constructor() {
		super("NewLevel19");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	preload() {

		this.load.pack("NewLevel19Pack", "assets/NewLevel19Pack.json");
	}

	/** @returns {void} */
	editorCreate() {

		// mapa
		const mapa = this.add.tilemap("new_level19");
		mapa.addTilesetImage("lab_building_tiles", "lab_building_tiles");

		// new_level19
		const new_level19 = this.add.tilemap("new_level19");
		new_level19.addTilesetImage("lab_building_tiles", "lab_building_tiles");

		// bg1Tile
		const bg1Tile = this.add.image(0, 0, "bg2Tile");
		bg1Tile.setOrigin(0, 0);

		// tilespriteBG
		const tilespriteBG = this.add.tileSprite(0, 0, 64, 64, "newBg4");
		tilespriteBG.setOrigin(0, 1);

		// nocollide2
		mapa.createLayer("nocollide2", ["lab_building_tiles"], 0, 0);

		// nocollide
		mapa.createLayer("nocollide", ["lab_building_tiles"], 0, 0);

		// BigBoss
		const bigBoss = new EnemyBody(this, 783, 570);
		this.add.existing(bigBoss);

		// layer
		const layer = mapa.createLayer("layer", ["lab_building_tiles"], 0, 0);

		// platform2
		const platform2 = new Platform2(this, 89, 665);
		this.add.existing(platform2);

		// player
		const player = new Player(this, 262, 631);
		this.add.existing(player);

		// upperTile
		const upperTile = new_level19.createLayer("upperTile", [], 0, 0);

		// card
		const card = new Card(this, 331, 62);
		this.add.existing(card);

		// heart
		const heart = new Heart(this, 1299, 255);
		this.add.existing(heart);

		// heart_1
		const heart_1 = new Heart(this, 1297, 331);
		this.add.existing(heart_1);

		// card_1
		const card_1 = new Card(this, 1361, 65);
		this.add.existing(card_1);

		// catapulta
		const catapulta = new Catapulta(this, 1473, 367);
		this.add.existing(catapulta);

		// lists
		const doors = [];
		const switches = [];
		const enemies = [];
		const platforms = [platform2];
		const coins = [];
		const catapultas = [];
		const revivingPods = [];
		const tutorials = [];

		// tilespriteBG (components)
		new FixedToCamera(tilespriteBG);

		// platform2 (prefab fields)
		platform2.distance = 550;

		// catapulta (prefab fields)
		catapulta.power = 700;

		this.bg1Tile = bg1Tile;
		this.tilespriteBG = tilespriteBG;
		this.bigBoss = bigBoss;
		this.layer = layer;
		this.player = player;
		this.upperTile = upperTile;
		this.mapa = mapa;
		this.new_level19 = new_level19;
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
	/** @type {EnemyBody} */
	bigBoss;
	/** @type {Phaser.Tilemaps.TilemapLayer} */
	layer;
	/** @type {Player} */
	player;
	/** @type {Phaser.Tilemaps.TilemapLayer} */
	upperTile;
	/** @type {Phaser.Tilemaps.Tilemap} */
	mapa;
	/** @type {Phaser.Tilemaps.Tilemap} */
	new_level19;
	/** @type {Array<any>} */
	doors;
	/** @type {Array<any>} */
	switches;
	/** @type {Array<any>} */
	enemies;
	/** @type {Platform2[]} */
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
