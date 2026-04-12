
// You can write more code here

/* START OF COMPILED CODE */

class NewLevel18 extends BaseScene {

	constructor() {
		super("NewLevel18");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	preload() {

		this.load.pack("NewLevel18Pack", "assets/NewLevel18Pack.json");
	}

	/** @returns {void} */
	editorCreate() {

		// mapa
		const mapa = this.add.tilemap("new_level18");
		mapa.addTilesetImage("lab_building_tiles", "lab_building_tiles");
		mapa.addTilesetImage("dark_city_tiles");

		// new_level18
		const new_level18 = this.add.tilemap("new_level18");
		new_level18.addTilesetImage("lab_building_tiles", "lab_building_tiles");
		new_level18.addTilesetImage("dark_city_tiles");

		// bg1Tile
		const bg1Tile = this.add.image(0, 0, "bg2Tile");
		bg1Tile.setOrigin(0, 0);

		// tilespriteBG
		const tilespriteBG = this.add.tileSprite(0, 0, 64, 64, "newBg4");
		tilespriteBG.setOrigin(0, 1);

		// nocollide2_1
		mapa.createLayer("nocollide2", ["lab_building_tiles"], 0, 0);

		// nocollide
		mapa.createLayer("nocollide", [], 0, 0);

		// layer
		const layer = mapa.createLayer("layer", ["lab_building_tiles"], 0, 0);

		// player
		const player = new Player(this, 130, 597);
		this.add.existing(player);

		// stomper
		const stomper = new Stomper(this, 715, -60);
		this.add.existing(stomper);

		// stomper_1
		const stomper_1 = new Stomper(this, 850, -60);
		this.add.existing(stomper_1);

		// stomper_2
		const stomper_2 = new Stomper(this, 992, -60);
		this.add.existing(stomper_2);

		// upperTile
		const upperTile = new_level18.createLayer("upperTile", [], 0, 0);

		// card
		const card = new Card(this, 258, 799);
		this.add.existing(card);

		// guardBoss
		const guardBoss = new GuardBoss(this, 1328, 545);
		this.add.existing(guardBoss);

		// activeZoneBoss
		const activeZoneBoss = new ActiveZoneBoss(this, 1102, 443);
		this.add.existing(activeZoneBoss);
		activeZoneBoss.scaleX = 3.5106386183856517;
		activeZoneBoss.scaleY = 6.246401802220836;
		activeZoneBoss.alpha = 0;

		// card_1
		const card_1 = new Card(this, 1471, 579);
		this.add.existing(card_1);

		// drone
		const drone = new Drone(this, 1337, 56);
		this.add.existing(drone);

		// sampoShooter
		const sampoShooter = new SampoShooter(this, 153, 337);
		this.add.existing(sampoShooter);

		// sampoShooter_1
		const sampoShooter_1 = new SampoShooter(this, 927, 608);
		this.add.existing(sampoShooter_1);

		// heart
		const heart = new Heart(this, 315, 312);
		this.add.existing(heart);

		// heart_1
		const heart_1 = new Heart(this, 978, 765);
		this.add.existing(heart_1);

		// enemyCreator
		const enemyCreator = new EnemyCreator(this, 516, 191);
		this.add.existing(enemyCreator);

		// drone_1
		const drone_1 = new Drone(this, 217, 59);
		this.add.existing(drone_1);

		// supaBomb
		const supaBomb = new SupaBomb(this, 596, 598);
		this.add.existing(supaBomb);

		// spike
		const spike = new Spike(this, 565, 485);
		this.add.existing(spike);

		// blobber
		const blobber = new Blobber(this, 563, 751);
		this.add.existing(blobber);

		// heart_2
		const heart_2 = new Heart(this, 1326, 181);
		this.add.existing(heart_2);

		// supaBomb_1
		const supaBomb_1 = new SupaBomb(this, 334, 810);
		this.add.existing(supaBomb_1);

		// supaBomb_2
		const supaBomb_2 = new SupaBomb(this, 1219, 808);
		this.add.existing(supaBomb_2);

		// platform1
		const platform1 = new Platform1(this, 1201, 335);
		this.add.existing(platform1);

		// lists
		const doors = [];
		const switches = [];
		const enemies = [sampoShooter, sampoShooter_1, guardBoss];
		const platforms = [platform1];
		const coins = [];
		const catapultas = [];
		const revivingPods = [enemyCreator];
		const tutorials = [];

		// tilespriteBG (components)
		new FixedToCamera(tilespriteBG);

		// stomper (prefab fields)
		stomper.retardo = 500;

		// stomper_1 (prefab fields)
		stomper_1.retardo = 2000;

		// stomper_2 (prefab fields)
		stomper_2.retardo = 3000;

		// card (prefab fields)
		card.timeExpires = 6000;

		// guardBoss (prefab fields)
		guardBoss.ThingToDrop = "Heart";

		// activeZoneBoss (prefab fields)
		activeZoneBoss.isActive = true;
		activeZoneBoss.activateBoss = true;

		// card_1 (prefab fields)
		card_1.timeExpires = 8000;

		// platform1 (prefab fields)
		platform1.distance = 400;
		platform1.isHorizontal = true;

		this.bg1Tile = bg1Tile;
		this.tilespriteBG = tilespriteBG;
		this.layer = layer;
		this.player = player;
		this.upperTile = upperTile;
		this.guardBoss = guardBoss;
		this.mapa = mapa;
		this.new_level18 = new_level18;
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
	/** @type {GuardBoss} */
	guardBoss;
	/** @type {Phaser.Tilemaps.Tilemap} */
	mapa;
	/** @type {Phaser.Tilemaps.Tilemap} */
	new_level18;
	/** @type {Array<any>} */
	doors;
	/** @type {Array<any>} */
	switches;
	/** @type {Array<SampoShooter|GuardBoss>} */
	enemies;
	/** @type {Platform1[]} */
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
