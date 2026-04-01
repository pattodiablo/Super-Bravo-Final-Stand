
// You can write more code here

/* START OF COMPILED CODE */

class NewLevel4 extends BaseScene {

	constructor() {
		super("NewLevel4");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	preload() {

		this.load.pack("NewLevel4Pack", "assets/NewLevel4Pack.json");
	}

	/** @returns {void} */
	editorCreate() {

		// mapa
		const mapa = this.add.tilemap("new_level4");
		mapa.addTilesetImage("new_ciudad_tiles", "new_ciudad_tiles");

		// new_level4
		const new_level4 = this.add.tilemap("new_level4");
		new_level4.addTilesetImage("new_ciudad_tiles", "new_ciudad_tiles");

		// bg1Tile
		const bg1Tile = this.add.image(0, 0, "bg2Tile");
		bg1Tile.setOrigin(0, 0);

		// tilespriteBG
		const tilespriteBG = this.add.tileSprite(0, 0, 64, 64, "newBg1");
		tilespriteBG.setOrigin(0, 1);

		// nocollide2_1
		mapa.createLayer("nocollide2", [], 0, 0);

		// nocollide
		mapa.createLayer("nocollide", [], 0, 0);

		// layer
		const layer = mapa.createLayer("layer", ["new_ciudad_tiles"], 0, 0);

		// player
		const player = new Player(this, 80, 383);
		this.add.existing(player);

		// upperTile
		const upperTile = new_level4.createLayer("upperTile", ["new_ciudad_tiles"], 0, 1);

		// drone
		const drone = new Drone(this, 990, 245);
		this.add.existing(drone);

		// portalCannon
		const portalCannon = new PortalCannon(this, 1489, 374);
		this.add.existing(portalCannon);
		portalCannon.angle = -180;

		// portalCannon_1
		const portalCannon_1 = new PortalCannon(this, 286, 34);
		this.add.existing(portalCannon_1);
		portalCannon_1.angle = -123;

		// portalCannon_1_1
		const portalCannon_1_1 = new PortalCannon(this, 287, 743);
		this.add.existing(portalCannon_1_1);
		portalCannon_1_1.angle = 0;

		// portalCannon_2
		const portalCannon_2 = new PortalCannon(this, 1490, 743);
		this.add.existing(portalCannon_2);
		portalCannon_2.angle = -90;

		// upgradeHalo
		const upgradeHalo = new UpgradeHalo(this, 896, 368);
		this.add.existing(upgradeHalo);

		// heart_1
		const heart_1 = new Heart(this, 545, 45);
		this.add.existing(heart_1);

		// sampoShooter
		const sampoShooter = new SampoShooter(this, 1198, 443);
		this.add.existing(sampoShooter);

		// enemyCreator
		const enemyCreator = new EnemyCreator(this, 611, 251);
		this.add.existing(enemyCreator);

		// sampoShooter_1
		const sampoShooter_1 = new SampoShooter(this, 504, 87);
		this.add.existing(sampoShooter_1);

		// sampoShooter_2
		const sampoShooter_2 = new SampoShooter(this, 1256, 75);
		this.add.existing(sampoShooter_2);

		// energyStation_instance_10000
		const energyStation_instance_10000 = this.add.image(897, 382, "props", "energyStation instance 10000");
		energyStation_instance_10000.scaleX = 0.5;
		energyStation_instance_10000.scaleY = 0.5;

		// lists
		const doors = [];
		const switches = [];
		const enemies = [sampoShooter, sampoShooter_1, sampoShooter_2];
		const platforms = [];
		const coins = [];
		const catapultas = [];
		const revivingPods = [enemyCreator];
		const tutorials = [];

		// tilespriteBG (components)
		new FixedToCamera(tilespriteBG);

		// portalCannon (prefab fields)
		portalCannon.IsFirstCannon = true;

		// portalCannon_1 (prefab fields)
		portalCannon_1.IsFirstCannon = false;

		// portalCannon_1_1 (prefab fields)
		portalCannon_1_1.IsFirstCannon = false;

		// portalCannon_2 (prefab fields)
		portalCannon_2.IsFirstCannon = false;

		// upgradeHalo (prefab fields)
		upgradeHalo.isCannonStrike = true;

		this.bg1Tile = bg1Tile;
		this.tilespriteBG = tilespriteBG;
		this.layer = layer;
		this.player = player;
		this.upperTile = upperTile;
		this.mapa = mapa;
		this.new_level4 = new_level4;
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
	new_level4;
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
