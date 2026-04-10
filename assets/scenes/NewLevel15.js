
// You can write more code here

/* START OF COMPILED CODE */

class NewLevel15 extends BaseScene {

	constructor() {
		super("NewLevel15");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	preload() {

		this.load.pack("NewLevel15Pack", "assets/NewLevel15Pack.json");
	}

	/** @returns {void} */
	editorCreate() {

		// mapa
		const mapa = this.add.tilemap("new_level15");
		mapa.addTilesetImage("dark_city_tiles", "dark_city_tiles");

		// new_level15
		const new_level15 = this.add.tilemap("new_level15");
		new_level15.addTilesetImage("dark_city_tiles", "dark_city_tiles");

		// bg1Tile
		const bg1Tile = this.add.image(0, 0, "bg1Tile");
		bg1Tile.setOrigin(0, 0);

		// tilespriteBG
		const tilespriteBG = this.add.tileSprite(0, 0, 64, 64, "newBg3");
		tilespriteBG.setOrigin(0, 1);

		// nocollide2_1
		mapa.createLayer("nocollide2", ["dark_city_tiles"], 0, 0);

		// nocollide
		mapa.createLayer("nocollide", ["dark_city_tiles"], 0, 0);

		// layer
		const layer = mapa.createLayer("layer", ["dark_city_tiles"], 0, 0);

		// player
		const player = new Player(this, 137, 632);
		this.add.existing(player);

		// card
		const card = new Card(this, 898, 284);
		this.add.existing(card);

		// misile
		const misile = new Misile(this, 1770, 447);
		this.add.existing(misile);

		// misile_1
		const misile_1 = new Misile(this, 1733, 174);
		this.add.existing(misile_1);

		// supaBomb
		const supaBomb = new SupaBomb(this, 247, 237);
		this.add.existing(supaBomb);

		// supaBomb_1
		const supaBomb_1 = new SupaBomb(this, 494, 134);
		this.add.existing(supaBomb_1);

		// supaBomb_2
		const supaBomb_2 = new SupaBomb(this, 903, 440);
		this.add.existing(supaBomb_2);

		// supaBomb_3
		const supaBomb_3 = new SupaBomb(this, 1286, 129);
		this.add.existing(supaBomb_3);

		// heart
		const heart = new Heart(this, 895, 108);
		this.add.existing(heart);

		// heart_1
		const heart_1 = new Heart(this, 1383, 457);
		this.add.existing(heart_1);

		// upperTile_1
		new_level15.createLayer("upperTile", ["dark_city_tiles"], 0, 0);

		// guardBoss
		const guardBoss = new GuardBoss(this, 921, 514);
		this.add.existing(guardBoss);

		// activeZoneBoss
		const activeZoneBoss = new ActiveZoneBoss(this, 791, 507);
		this.add.existing(activeZoneBoss);
		activeZoneBoss.scaleX = 5.914072889592503;
		activeZoneBoss.scaleY = 5.070510206408815;
		activeZoneBoss.alpha = 0;

		// drone
		const drone = new Drone(this, 1452, 601);
		this.add.existing(drone);

		// catapulta
		const catapulta = new Catapulta(this, 1536, 658);
		this.add.existing(catapulta);

		// lists
		const doors = [];
		const switches = [];
		const enemies = [guardBoss];
		const platforms = [];
		const coins = [];
		const catapultas = [];
		const revivingPods = [];
		const tutorials = [];

		// tilespriteBG (components)
		new FixedToCamera(tilespriteBG);

		// card (prefab fields)
		card.timeExpires = 10000;

		// guardBoss (prefab fields)
		guardBoss.ThingToDrop = "Coin";

		// activeZoneBoss (prefab fields)
		activeZoneBoss.isActive = true;
		activeZoneBoss.activateBoss = true;

		this.bg1Tile = bg1Tile;
		this.tilespriteBG = tilespriteBG;
		this.layer = layer;
		this.player = player;
		this.guardBoss = guardBoss;
		this.mapa = mapa;
		this.new_level15 = new_level15;
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
	/** @type {GuardBoss} */
	guardBoss;
	/** @type {Phaser.Tilemaps.Tilemap} */
	mapa;
	/** @type {Phaser.Tilemaps.Tilemap} */
	new_level15;
	/** @type {Array<any>} */
	doors;
	/** @type {Array<any>} */
	switches;
	/** @type {GuardBoss[]} */
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
