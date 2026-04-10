
// You can write more code here

/* START OF COMPILED CODE */

class NewLevel13 extends BaseScene {

	constructor() {
		super("NewLevel13");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	preload() {

		this.load.pack("NewLevel13Pack", "assets/NewLevel13Pack.json");
	}

	/** @returns {void} */
	editorCreate() {

		// mapa
		const mapa = this.add.tilemap("new_level13");
		mapa.addTilesetImage("dark_city_tiles", "dark_city_tiles");

		// new_level13
		const new_level13 = this.add.tilemap("new_level13");
		new_level13.addTilesetImage("dark_city_tiles", "dark_city_tiles");

		// bg1Tile
		const bg1Tile = this.add.image(0, 0, "bg1Tile");
		bg1Tile.setOrigin(0, 0);

		// tilespriteBG
		const tilespriteBG = this.add.tileSprite(0, 0, 64, 64, "newBg3");
		tilespriteBG.setOrigin(0, 1);

		// nocollide2_1
		mapa.createLayer("nocollide2", ["dark_city_tiles"], 0, 0);

		// nocollide
		mapa.createLayer("nocollide", [], 0, 0);

		// layer
		const layer = mapa.createLayer("layer", ["dark_city_tiles"], 0, 0);

		// player
		const player = new Player(this, 70, 442);
		this.add.existing(player);

		// upperTile_1
		new_level13.createLayer("upperTile", [], 0, 0);

		// card
		const card = new Card(this, 1521, 253);
		this.add.existing(card);

		// upgradeHalo
		const upgradeHalo = new UpgradeHalo(this, 1450, 161);
		this.add.existing(upgradeHalo);

		// portalCannon
		const portalCannon = new PortalCannon(this, 1197, 72);
		this.add.existing(portalCannon);
		portalCannon.angle = -90;

		// portalCannon_1
		const portalCannon_1 = new PortalCannon(this, 93, 64);
		this.add.existing(portalCannon_1);
		portalCannon_1.angle = -180;

		// alert_instance_10000
		this.add.image(741, 384, "misile", "alert instance 10000");

		// cyberPigeon
		const cyberPigeon = new CyberPigeon(this, 1320, 70);
		this.add.existing(cyberPigeon);

		// drone
		const drone = new Drone(this, 1075, 508);
		this.add.existing(drone);

		// heart
		const heart = new Heart(this, 1351, 611);
		this.add.existing(heart);

		// heart_1
		const heart_1 = new Heart(this, 413, 296);
		this.add.existing(heart_1);

		// supaBomb
		const supaBomb = new SupaBomb(this, 415, 184);
		this.add.existing(supaBomb);

		// supaBomb_2
		const supaBomb_2 = new SupaBomb(this, 398, 661);
		this.add.existing(supaBomb_2);

		// portalCannon_2
		const portalCannon_2 = new PortalCannon(this, 93, 692);
		this.add.existing(portalCannon_2);
		portalCannon_2.angle = 90;

		// portalCannon_4
		const portalCannon_4 = new PortalCannon(this, 736, 692);
		this.add.existing(portalCannon_4);
		portalCannon_4.angle = 0;

		// portalCannon_5
		const portalCannon_5 = new PortalCannon(this, 736, 153);
		this.add.existing(portalCannon_5);
		portalCannon_5.angle = -34;

		// misile
		const misile = new Misile(this, 1757, 365);
		this.add.existing(misile);

		// lists
		const doors = [];
		const switches = [];
		const enemies = [cyberPigeon];
		const platforms = [];
		const coins = [];
		const catapultas = [];
		const revivingPods = [];
		const tutorials = [];

		// tilespriteBG (components)
		new FixedToCamera(tilespriteBG);

		// card (prefab fields)
		card.timeExpires = 12000;

		// upgradeHalo (prefab fields)
		upgradeHalo.isCannonStrike = true;

		// portalCannon (prefab fields)
		portalCannon.IsFirstCannon = true;

		// cyberPigeon (prefab fields)
		cyberPigeon.distance = 150;

		this.bg1Tile = bg1Tile;
		this.tilespriteBG = tilespriteBG;
		this.layer = layer;
		this.player = player;
		this.mapa = mapa;
		this.new_level13 = new_level13;
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
	new_level13;
	/** @type {Array<any>} */
	doors;
	/** @type {Array<any>} */
	switches;
	/** @type {CyberPigeon[]} */
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
