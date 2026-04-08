
// You can write more code here

/* START OF COMPILED CODE */

class NewLevel6 extends BaseScene {

	constructor() {
		super("NewLevel6");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	preload() {

		this.load.pack("NewLevel6Pack", "assets/NewLevel6Pack.json");
	}

	/** @returns {void} */
	editorCreate() {

		// mapa
		const mapa = this.add.tilemap("new_level6");
		mapa.addTilesetImage("late_woods_tiles", "late_woods_tiles");

		// noCollide
		const noCollide = this.add.tilemap("new_level6");
		noCollide.addTilesetImage("late_woods_tiles", "late_woods_tiles");

		// nocollide2
		const nocollide2 = this.add.tilemap("new_level16");
		nocollide2.addTilesetImage("new_ciudad_tiles", "new_ciudad_tiles");

		// UpperTile
		const upperTile = this.add.tilemap("new_level6");
		upperTile.addTilesetImage("late_woods_tiles", "late_woods_tiles");

		// bg1Tile
		const bg1Tile = this.add.image(0, 0, "bg2Tile");
		bg1Tile.setOrigin(0, 0);

		// tilespriteBG
		const tilespriteBG = this.add.tileSprite(0, 0, 64, 64, "newBg2");
		tilespriteBG.setOrigin(0, 1);

		// nocollide
		nocollide2.createLayer("nocollide2", ["new_ciudad_tiles"], 0, 0);

		// nocollide_1
		const nocollide_1 = noCollide.createLayer("nocollide", ["late_woods_tiles"], 0, 0);

		// powerPodium
		this.add.image(1760, 447, "PowerPodium");

		// sideDoorLocked
		const sideDoorLocked = new SideDoorLocked(this, 1666, 445);
		this.add.existing(sideDoorLocked);

		// sideDoorLocked_1
		const sideDoorLocked_1 = new SideDoorLocked(this, 1859, 445);
		this.add.existing(sideDoorLocked_1);

		// layer
		const layer = mapa.createLayer("layer", ["late_woods_tiles"], 0, 0);

		// Uppertile
		upperTile.createLayer("upperTile", [], 0, 0);

		// player
		const player = new Player(this, 144, 707);
		this.add.existing(player);

		// catapulta
		const catapulta = new Catapulta(this, 257, 495);
		this.add.existing(catapulta);

		// alert_instance_10000_1_1_1_1_1
		this.add.image(2842, 542, "misile", "alert instance 10000");

		// toll
		const toll = new Toll(this, 1282, 499);
		this.add.existing(toll);

		// supaBomb
		const supaBomb = new SupaBomb(this, 737, 682);
		this.add.existing(supaBomb);

		// supaBomb_1
		const supaBomb_1 = new SupaBomb(this, 535, 687);
		this.add.existing(supaBomb_1);

		// supaBomb_1_1
		const supaBomb_1_1 = new SupaBomb(this, 2848, 685);
		this.add.existing(supaBomb_1_1);

		// sampoShooter
		const sampoShooter = new SampoShooter(this, 1476, 687);
		this.add.existing(sampoShooter);

		// proxySpyke
		const proxySpyke = new ProxySpyke(this, 1183, 651);
		this.add.existing(proxySpyke);

		// proxySpyke_1_1
		const proxySpyke_1_1 = new ProxySpyke(this, 1759, 653);
		this.add.existing(proxySpyke_1_1);

		// supaBomb_1_1_1
		const supaBomb_1_1_1 = new SupaBomb(this, 2239, 688);
		this.add.existing(supaBomb_1_1_1);

		// sampoShooter_1
		const sampoShooter_1 = new SampoShooter(this, 1041, 695);
		this.add.existing(sampoShooter_1);

		// sampoShooter_1_1
		const sampoShooter_1_1 = new SampoShooter(this, 1982, 705);
		this.add.existing(sampoShooter_1_1);

		// drone
		const drone = new Drone(this, 963, 279);
		this.add.existing(drone);

		// activeZoneBoss
		const activeZoneBoss = new ActiveZoneBoss(this, 2826, 316);
		this.add.existing(activeZoneBoss);
		activeZoneBoss.scaleX = 9.656250296739685;
		activeZoneBoss.scaleY = 6.064623131946276;
		activeZoneBoss.alpha = 0;

		// guardBoss
		const guardBoss = new GuardBoss(this, 3047, 432);
		this.add.existing(guardBoss);

		// drone_1
		const drone_1 = new Drone(this, 3063, 55);
		this.add.existing(drone_1);

		// upgradeHalo
		const upgradeHalo = new UpgradeHalo(this, 1759, 463);
		this.add.existing(upgradeHalo);

		// portalCannon
		const portalCannon = new PortalCannon(this, 420, 693);
		this.add.existing(portalCannon);

		// portalCannon_1
		const portalCannon_1 = new PortalCannon(this, 420, 90);
		this.add.existing(portalCannon_1);
		portalCannon_1.angle = -90;

		// portalCannon_2
		const portalCannon_2 = new PortalCannon(this, 3103, 693);
		this.add.existing(portalCannon_2);
		portalCannon_2.angle = -90;

		// lists
		const doors = [sideDoorLocked];
		const switches = [toll];
		const enemies = [supaBomb_1_1, supaBomb_1, supaBomb, sampoShooter, sampoShooter_1_1, sampoShooter_1, guardBoss];
		const platforms = [];
		const coins = [];
		const catapultas = [];
		const revivingPods = [];
		const tutorials = [];

		// tilespriteBG (components)
		new FixedToCamera(tilespriteBG);

		// catapulta (prefab fields)
		catapulta.power = 500;

		// toll (prefab fields)
		toll.tollCost = 12;

		// sampoShooter (prefab fields)
		sampoShooter.bulletEnable = false;
		sampoShooter.travelDistance = 100;

		// sampoShooter_1_1 (prefab fields)
		sampoShooter_1_1.travelDistance = 120;

		// activeZoneBoss (prefab fields)
		activeZoneBoss.isActive = true;
		activeZoneBoss.activateBoss = true;

		// guardBoss (prefab fields)
		guardBoss.ThingToDrop = "Coin";

		// upgradeHalo (prefab fields)
		upgradeHalo.isCannonStrike = true;

		// portalCannon_2 (prefab fields)
		portalCannon_2.IsFirstCannon = true;

		this.bg1Tile = bg1Tile;
		this.tilespriteBG = tilespriteBG;
		this.nocollide_1 = nocollide_1;
		this.layer = layer;
		this.player = player;
		this.guardBoss = guardBoss;
		this.mapa = mapa;
		this.noCollide = noCollide;
		this.nocollide2 = nocollide2;
		this.upperTile = upperTile;
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
	nocollide_1;
	/** @type {Phaser.Tilemaps.TilemapLayer} */
	layer;
	/** @type {Player} */
	player;
	/** @type {GuardBoss} */
	guardBoss;
	/** @type {Phaser.Tilemaps.Tilemap} */
	mapa;
	/** @type {Phaser.Tilemaps.Tilemap} */
	noCollide;
	/** @type {Phaser.Tilemaps.Tilemap} */
	nocollide2;
	/** @type {Phaser.Tilemaps.Tilemap} */
	upperTile;
	/** @type {SideDoorLocked[]} */
	doors;
	/** @type {Toll[]} */
	switches;
	/** @type {Array<SupaBomb|SampoShooter|GuardBoss>} */
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
