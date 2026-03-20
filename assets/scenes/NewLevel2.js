
// You can write more code here

/* START OF COMPILED CODE */

class NewLevel2 extends BaseScene {

	constructor() {
		super("NewLevel2");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	preload() {

		this.load.pack("NewLevel2Pack", "assets/NewLevel2Pack.json");
	}

	/** @returns {void} */
	editorCreate() {

		// mapa
		const mapa = this.add.tilemap("new_level2");
		mapa.addTilesetImage("new_ciudad_tiles", "new_ciudad_tiles");

		// new_level2
		const new_level2 = this.add.tilemap("new_level2");
		new_level2.addTilesetImage("new_ciudad_tiles", "new_ciudad_tiles");

		// bg1Tile
		const bg1Tile = this.add.image(0, 0, "bg1Tile");
		bg1Tile.setOrigin(0, 0);

		// tilespriteBG
		const tilespriteBG = this.add.tileSprite(0, 0, 64, 64, "newBg1");
		tilespriteBG.setOrigin(0, 1);

		// nocollide_1
		mapa.createLayer("nocollide", ["new_ciudad_tiles"], 0, 0);

		// nocollide
		mapa.createLayer("nocollide2", [], 0, 0);

		// layer
		const layer = mapa.createLayer("layer", ["new_ciudad_tiles"], 0, 0);

		// player
		const player = new Player(this, 108, 755);
		this.add.existing(player);

		// catapulta
		const catapulta = new Catapulta(this, 399, 787);
		this.add.existing(catapulta);

		// handPointer
		const handPointer = new HandPointer(this, 400, 708);
		this.add.existing(handPointer);
		handPointer.angle = 91;

		// sampoShooter
		const sampoShooter = new SampoShooter(this, 815, 275);
		this.add.existing(sampoShooter);

		// sampoShooter_1
		const sampoShooter_1 = new SampoShooter(this, 217, 265);
		this.add.existing(sampoShooter_1);

		// catapulta_1
		const catapulta_1 = new Catapulta(this, 1072, 787);
		this.add.existing(catapulta_1);

		// enemyCreator
		const enemyCreator = new EnemyCreator(this, 701, 125);
		this.add.existing(enemyCreator);

		// lists
		const doors = [];
		const switches = [];
		const enemies = [sampoShooter, sampoShooter_1];
		const platforms = [];
		const coins = [];
		const catapultas = [];
		const revivingPods = [enemyCreator];
		const tutorials = [];

		// tilespriteBG (components)
		new FixedToCamera(tilespriteBG);

		// catapulta (prefab fields)
		catapulta.power = 800;

		// catapulta_1 (prefab fields)
		catapulta_1.power = 800;

		this.bg1Tile = bg1Tile;
		this.tilespriteBG = tilespriteBG;
		this.layer = layer;
		this.player = player;
		this.mapa = mapa;
		this.new_level2 = new_level2;
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
	/** @type {Phaser.Tilemaps.Tilemap} */
	mapa;
	/** @type {Phaser.Tilemaps.Tilemap} */
	new_level2;
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
	/** @type {EnemyCreator[]} */
	revivingPods;
	/** @type {Array<any>} */
	tutorials;

	/* START-USER-CODE */






	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
