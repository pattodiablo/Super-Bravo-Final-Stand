
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
		const player = new Player(this, 106, 680);
		this.add.existing(player);

		// heart
		const heart = new Heart(this, 1507, 690);
		this.add.existing(heart);

		// sampoShooter
		const sampoShooter = new SampoShooter(this, 318, 574);
		this.add.existing(sampoShooter);

		// sampoShooter_1
		const sampoShooter_1 = new SampoShooter(this, 1427, 569);
		this.add.existing(sampoShooter_1);

		// wallLight
		this.add.image(962, 716, "wallLight");

		// lightBean
		this.add.image(962, 715, "lightBean");

		// upperTile
		const upperTile = new_level1.createLayer("upperTile", [], 0, 0);

		// tutiSupa1
		const tutiSupa1 = this.add.image(136, 545, "tutiSupa1");
		tutiSupa1.scaleX = 0.5;
		tutiSupa1.scaleY = 0.5;

		// tutiSupa2
		const tutiSupa2 = this.add.image(1261, 235, "tutiSupa2");
		tutiSupa2.scaleX = 0.5;
		tutiSupa2.scaleY = 0.5;

		// tutiSupa3
		const tutiSupa3 = this.add.image(1628, 238, "tutiSupa3");
		tutiSupa3.scaleX = 0.5;
		tutiSupa3.scaleY = 0.5;

		// tutiSupa4
		const tutiSupa4 = this.add.image(1633, -129, "tutiSupa4");
		tutiSupa4.scaleX = 0.5;
		tutiSupa4.scaleY = 0.5;

		// tutiSupa5
		const tutiSupa5 = this.add.image(539, 548, "tutiSupa5");
		tutiSupa5.scaleX = 0.5;
		tutiSupa5.scaleY = 0.5;

		// tutiSupa6
		const tutiSupa6 = this.add.image(332, 691, "tutiSupa6");
		tutiSupa6.scaleX = 0.5;
		tutiSupa6.scaleY = 0.5;

		// card
		const card = new Card(this, 720, 682);
		this.add.existing(card);

		// supaBomb
		const supaBomb = new SupaBomb(this, 829, 690);
		this.add.existing(supaBomb);

		// sideDoor
		const sideDoor = new SideDoor(this, 930, 650);
		this.add.existing(sideDoor);

		// portalCannon
		const portalCannon = new PortalCannon(this, 214, 228);
		this.add.existing(portalCannon);
		portalCannon.angle = 90;

		// portalCannon_1
		const portalCannon_1 = new PortalCannon(this, 447, 225);
		this.add.existing(portalCannon_1);
		portalCannon_1.angle = -180;

		// misile
		const misile = new Misile(this, 560, 352);
		this.add.existing(misile);

		// guardBoss
		const guardBoss = new GuardBoss(this, 665, 246);
		this.add.existing(guardBoss);

		// energyStationPreview
		const energyStationPreview = new EnergyStationPreview(this, 284, 277);
		this.add.existing(energyStationPreview);

		// upgradeHalo
		const upgradeHalo = new UpgradeHalo(this, 456, 387);
		this.add.existing(upgradeHalo);

		// catapulta
		const catapulta = new Catapulta(this, 1038, 721);
		this.add.existing(catapulta);

		// drone
		const drone = new Drone(this, 713, 504);
		this.add.existing(drone);

		// activeZoneBoss
		const activeZoneBoss = new ActiveZoneBoss(this, 424, 700);
		this.add.existing(activeZoneBoss);

		// enemyBarrel
		const enemyBarrel = new EnemyBarrel(this, 498, 693);
		this.add.existing(enemyBarrel);

		// lists
		const doors = [];
		const switches = [];
		const enemies = [sampoShooter_1, sampoShooter];
		const platforms = [];
		const coins = [];
		const catapultas = [];
		const revivingPods = [];
		const tutorials = [];

		// tilespriteBG (components)
		new FixedToCamera(tilespriteBG);

		// portalCannon (prefab fields)
		portalCannon.IsFirstCannon = true;

		// upgradeHalo (prefab fields)
		upgradeHalo.isCannonStrike = true;

		// activeZoneBoss (prefab fields)
		activeZoneBoss.activateBoss = true;

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
