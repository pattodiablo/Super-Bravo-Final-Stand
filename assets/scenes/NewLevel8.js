
// You can write more code here

/* START OF COMPILED CODE */

class NewLevel8 extends BaseScene {

	constructor() {
		super("NewLevel8");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	preload() {

		this.load.pack("NewLevel8Pack", "assets/NewLevel8Pack.json");
	}

	/** @returns {void} */
	editorCreate() {

		// mapa
		const mapa = this.add.tilemap("new_level8");
		mapa.addTilesetImage("late_woods_tiles", "late_woods_tiles");

		// new_level8
		const new_level8 = this.add.tilemap("new_level8");
		new_level8.addTilesetImage("late_woods_tiles", "late_woods_tiles");

		// bg1Tile
		const bg1Tile = this.add.image(0, 0, "bg1Tile");
		bg1Tile.setOrigin(0, 0);

		// tilespriteBG
		const tilespriteBG = this.add.tileSprite(0, 0, 64, 64, "newBg2");
		tilespriteBG.setOrigin(0, 1);

		// nocollide2_1
		mapa.createLayer("nocollide2", ["late_woods_tiles"], 0, 0);

		// nocollide
		mapa.createLayer("nocollide", [], 0, 0);

		// sideDoorLocked
		const sideDoorLocked = new SideDoorLocked(this, 670, 705);
		this.add.existing(sideDoorLocked);
		sideDoorLocked.scaleX = 0.9292104734495517;
		sideDoorLocked.scaleY = 0.9292104734495517;

		// sideDoorLocked_1
		const sideDoorLocked_1 = new SideDoorLocked(this, 1207, 705);
		this.add.existing(sideDoorLocked_1);
		sideDoorLocked_1.scaleX = 0.9292104734495517;
		sideDoorLocked_1.scaleY = 0.9292104734495517;

		// activeZoneBoss
		const activeZoneBoss = new ActiveZoneBoss(this, 1478, 552);
		this.add.existing(activeZoneBoss);
		activeZoneBoss.scaleX = 6.455538671532826;
		activeZoneBoss.scaleY = 6.741843698544632;
		activeZoneBoss.setOrigin(0, 0);
		activeZoneBoss.alpha = 0;

		// sideDoor
		const sideDoor = new SideDoor(this, 415, 126);
		this.add.existing(sideDoor);
		sideDoor.scaleX = 0.5910282977920605;
		sideDoor.scaleY = 0.5910282977920605;

		// layer
		const layer = mapa.createLayer("layer", ["late_woods_tiles"], 0, 0);

		// player
		const player = new Player(this, 317, 688);
		this.add.existing(player);

		// upperTile_1
		new_level8.createLayer("upperTile", [], 0, 0);

		// catapulta
		const catapulta = new Catapulta(this, 114, 626);
		this.add.existing(catapulta);

		// drone
		const drone = new Drone(this, 539, 245);
		this.add.existing(drone);

		// drone_1
		const drone_1 = new Drone(this, 2455, 663);
		this.add.existing(drone_1);

		// sampoShooter
		const sampoShooter = new SampoShooter(this, 1121, 302);
		this.add.existing(sampoShooter);

		// sampoShooter_1
		const sampoShooter_1 = new SampoShooter(this, 1649, 162);
		this.add.existing(sampoShooter_1);

		// supaBomb
		const supaBomb = new SupaBomb(this, 969, 340);
		this.add.existing(supaBomb);

		// supaBomb_1
		const supaBomb_1 = new SupaBomb(this, 2184, 314);
		this.add.existing(supaBomb_1);

		// proxySpyke
		const proxySpyke = new ProxySpyke(this, 1399, 110);
		this.add.existing(proxySpyke);

		// proxySpyke_1
		const proxySpyke_1 = new ProxySpyke(this, 1558, 107);
		this.add.existing(proxySpyke_1);

		// proxySpyke_2
		const proxySpyke_2 = new ProxySpyke(this, 1767, 110);
		this.add.existing(proxySpyke_2);

		// misile
		const misile = new Misile(this, 3275, 318);
		this.add.existing(misile);

		// toll
		const toll = new Toll(this, 1621, 753);
		this.add.existing(toll);

		// guardBoss
		const guardBoss = new GuardBoss(this, 1751, 706);
		this.add.existing(guardBoss);

		// heart
		const heart = new Heart(this, 514, 133);
		this.add.existing(heart);

		// heart_1
		const heart_1 = new Heart(this, 1572, 160);
		this.add.existing(heart_1);

		// heart_2
		const heart_2 = new Heart(this, 1351, 624);
		this.add.existing(heart_2);

		// catapulta_1
		const catapulta_1 = new Catapulta(this, 2895, 401);
		this.add.existing(catapulta_1);

		// sampoShooter_2
		const sampoShooter_2 = new SampoShooter(this, 2141, 293);
		this.add.existing(sampoShooter_2);

		// sampoShooter_3
		const sampoShooter_3 = new SampoShooter(this, 3039, 379);
		this.add.existing(sampoShooter_3);

		// enemyCreator
		const enemyCreator = new EnemyCreator(this, 3081, 250);
		this.add.existing(enemyCreator);

		// platform2
		const platform2 = new Platform2(this, 2675, 641);
		this.add.existing(platform2);

		// heart_3
		const heart_3 = new Heart(this, 3090, 591);
		this.add.existing(heart_3);

		// platform1
		const platform1 = new Platform1(this, 1090, 730);
		this.add.existing(platform1);

		// lists
		const doors = [];
		const switches = [];
		const enemies = [sampoShooter, sampoShooter_1, proxySpyke_2, proxySpyke_1, proxySpyke, misile, guardBoss];
		const platforms = [platform2, platform1];
		const coins = [];
		const catapultas = [];
		const revivingPods = [enemyCreator];
		const tutorials = [];

		// tilespriteBG (components)
		new FixedToCamera(tilespriteBG);

		// activeZoneBoss (prefab fields)
		activeZoneBoss.isActive = true;
		activeZoneBoss.activateBoss = true;

		// sideDoor (prefab fields)
		sideDoor.isLocked = true;

		// catapulta (prefab fields)
		catapulta.power = 700;

		// toll (prefab fields)
		toll.tollCost = 20;

		// guardBoss (prefab fields)
		guardBoss.ThingToDrop = "Coin";

		// catapulta_1 (prefab fields)
		catapulta_1.power = 700;

		// platform2 (prefab fields)
		platform2.distance = 400;

		// platform1 (prefab fields)
		platform1.isHorizontal = true;

		this.bg1Tile = bg1Tile;
		this.tilespriteBG = tilespriteBG;
		this.layer = layer;
		this.player = player;
		this.guardBoss = guardBoss;
		this.mapa = mapa;
		this.new_level8 = new_level8;
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
	new_level8;
	/** @type {Array<any>} */
	doors;
	/** @type {Array<any>} */
	switches;
	/** @type {Array<SampoShooter|ProxySpyke|Misile|GuardBoss>} */
	enemies;
	/** @type {Array<Platform2|Platform1>} */
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
