
// You can write more code here

/* START OF COMPILED CODE */

class NewLevel16 extends BaseScene {

	constructor() {
		super("NewLevel16");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	preload() {

		this.load.pack("NewLevel16Pack", "assets/NewLevel16Pack.json");
	}

	/** @returns {void} */
	editorCreate() {

		// mapa
		const mapa = this.add.tilemap("new_level16");
		mapa.addTilesetImage("lab_building_tiles", "lab_building_tiles");

		// new_level16
		const new_level16 = this.add.tilemap("new_level16");
		new_level16.addTilesetImage("lab_building_tiles", "lab_building_tiles");

		// bg1Tile
		const bg1Tile = this.add.image(0, 0, "bg1Tile");
		bg1Tile.setOrigin(0, 0);

		// tilespriteBG
		const tilespriteBG = this.add.tileSprite(0, 0, 64, 64, "newBg4");
		tilespriteBG.setOrigin(0, 1);

		// nocollide2_1
		mapa.createLayer("nocollide2", [], 0, 0);

		// nocollide
		mapa.createLayer("nocollide", ["lab_building_tiles"], 0, 0);

		// layer
		const layer = mapa.createLayer("layer", ["lab_building_tiles"], 0, 0);

		// player
		const player = new Player(this, 179, 1395);
		this.add.existing(player);

		// upperTile_1
		new_level16.createLayer("upperTile", [], 0, 0);

		// angrySpin
		const angrySpin = new AngrySpin(this, 861, 1374);
		this.add.existing(angrySpin);

		// platform1
		const platform1 = new Platform1(this, 734, 707);
		this.add.existing(platform1);

		// misile
		const misile = new Misile(this, 1181, 343);
		this.add.existing(misile);

		// card_1
		const card_1 = new Card(this, 816, 308);
		this.add.existing(card_1);

		// sampoShooter
		const sampoShooter = new SampoShooter(this, 726, 110);
		this.add.existing(sampoShooter);

		// sampoShooter_1
		const sampoShooter_1 = new SampoShooter(this, 143, 467);
		this.add.existing(sampoShooter_1);

		// drone
		const drone = new Drone(this, 367, 982);
		this.add.existing(drone);

		// drone_1
		const drone_1 = new Drone(this, 654, 982);
		this.add.existing(drone_1);

		// cyberPigeon
		const cyberPigeon = new CyberPigeon(this, 477, 198);
		this.add.existing(cyberPigeon);

		// heart
		const heart = new Heart(this, 100, 790);
		this.add.existing(heart);

		// heart_1
		const heart_1 = new Heart(this, 941, 423);
		this.add.existing(heart_1);

		// heart_2
		const heart_2 = new Heart(this, 299, 158);
		this.add.existing(heart_2);

		// supaBomb
		const supaBomb = new SupaBomb(this, 646, 1222);
		this.add.existing(supaBomb);

		// supaBomb_1
		const supaBomb_1 = new SupaBomb(this, 395, 1219);
		this.add.existing(supaBomb_1);

		// lists
		const doors = [];
		const switches = [];
		const enemies = [angrySpin, sampoShooter, sampoShooter_1, cyberPigeon];
		const platforms = [platform1];
		const coins = [];
		const catapultas = [];
		const revivingPods = [];
		const tutorials = [];

		// tilespriteBG (components)
		new FixedToCamera(tilespriteBG);

		// angrySpin (prefab fields)
		angrySpin.travelDistance = 500;

		// platform1 (prefab fields)
		platform1.distance = 800;
		platform1.timeTravel = 6000;
		platform1.isHorizontal = true;

		// card_1 (prefab fields)
		card_1.timeExpires = 9000;

		this.bg1Tile = bg1Tile;
		this.tilespriteBG = tilespriteBG;
		this.layer = layer;
		this.player = player;
		this.mapa = mapa;
		this.new_level16 = new_level16;
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
	new_level16;
	/** @type {Array<any>} */
	doors;
	/** @type {Array<any>} */
	switches;
	/** @type {Array<AngrySpin|SampoShooter|CyberPigeon>} */
	enemies;
	/** @type {Platform1[]} */
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
