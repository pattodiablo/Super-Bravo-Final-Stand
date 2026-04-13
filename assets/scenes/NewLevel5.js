
// You can write more code here

/* START OF COMPILED CODE */

class NewLevel5 extends BaseScene {

	constructor() {
		super("NewLevel5");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	preload() {

		this.load.pack("NewLevel5Pack", "assets/NewLevel5Pack.json");
	}

	/** @returns {void} */
	editorCreate() {

		// mapa
		const mapa = this.add.tilemap("new_level5");
		mapa.addTilesetImage("new_ciudad_tiles", "new_ciudad_tiles");

		// new_level5
		const new_level5 = this.add.tilemap("new_level5");
		new_level5.addTilesetImage("new_ciudad_tiles", "new_ciudad_tiles");

		// new_level5_1
		const new_level5_1 = this.add.tilemap("new_level5");
		new_level5_1.addTilesetImage("new_ciudad_tiles", "new_ciudad_tiles");

		// bg1Tile
		const bg1Tile = this.add.image(0, 0, "bg1Tile");
		bg1Tile.setOrigin(0, 0);

		// tilespriteBG
		const tilespriteBG = this.add.tileSprite(0, 0, 64, 64, "newBg1");
		tilespriteBG.setOrigin(0, 1);

		// nocollide2_1
		mapa.createLayer("nocollide2", ["new_ciudad_tiles"], 0, 0);

		// nocollide
		mapa.createLayer("nocollide", ["new_ciudad_tiles"], 0, 0);

		// layer
		const layer = mapa.createLayer("layer", ["new_ciudad_tiles"], 0, 0);

		// player
		const player = new Player(this, 879, 623);
		this.add.existing(player);

		// platform2
		const platform2 = new Platform2(this, 1406, 610);
		this.add.existing(platform2);
		platform2.scaleX = 0.9297357828236776;
		platform2.scaleY = 0.9297357828236776;

		// sampoShooter
		const sampoShooter = new SampoShooter(this, 402, 612);
		this.add.existing(sampoShooter);

		// sampoShooter_1
		const sampoShooter_1 = new SampoShooter(this, 1084, 641);
		this.add.existing(sampoShooter_1);

		// enemyCreator
		const enemyCreator = new EnemyCreator(this, 406, 541);
		this.add.existing(enemyCreator);

		// misile
		const misile = new Misile(this, 1675, 391);
		this.add.existing(misile);

		// upperTile
		const upperTile = new_level5_1.createLayer("upperTile", [], 0, 0);

		// platform2_1
		const platform2_1 = new Platform2(this, 111, 436);
		this.add.existing(platform2_1);
		platform2_1.scaleX = 0.9297357828236776;
		platform2_1.scaleY = 0.9297357828236776;

		// sampoShooter_2
		const sampoShooter_2 = new SampoShooter(this, 439, 329);
		this.add.existing(sampoShooter_2);

		// misile_1
		const misile_1 = new Misile(this, 1704, 182);
		this.add.existing(misile_1);
		misile_1.flipX = false;
		misile_1.flipY = false;

		// blobber
		const blobber = new Blobber(this, 168, 532);
		this.add.existing(blobber);

		// angrySpin_1
		const angrySpin_1 = new AngrySpin(this, 882, 318);
		this.add.existing(angrySpin_1);

		// drone_1
		const drone_1 = new Drone(this, 87, 154);
		this.add.existing(drone_1);

		// enemyCreator_1
		const enemyCreator_1 = new EnemyCreator(this, 1047, 158);
		this.add.existing(enemyCreator_1);

		// heart
		const heart = new Heart(this, 1351, 171);
		this.add.existing(heart);

		// heart_1
		const heart_1 = new Heart(this, 717, 166);
		this.add.existing(heart_1);

		// sideDoor
		const sideDoor = new SideDoor(this, 281, 596);
		this.add.existing(sideDoor);

		// lists
		const doors = [];
		const switches = [];
		const enemies = [sampoShooter_2, angrySpin_1, drone_1, blobber, sampoShooter_1, sampoShooter];
		const platforms = [platform2, platform2_1];
		const coins = [];
		const catapultas = [];
		const revivingPods = [enemyCreator, enemyCreator_1];
		const tutorials = [];

		// tilespriteBG (components)
		new FixedToCamera(tilespriteBG);

		// platform2 (prefab fields)
		platform2.distance = 160;
		platform2.timeTravel = 3000;

		// platform2_1 (prefab fields)
		platform2_1.distance = 160;
		platform2_1.timeTravel = 3000;

		// enemyCreator_1 (prefab fields)
		enemyCreator_1.PodID = "pod2";

		this.bg1Tile = bg1Tile;
		this.tilespriteBG = tilespriteBG;
		this.layer = layer;
		this.player = player;
		this.upperTile = upperTile;
		this.mapa = mapa;
		this.new_level5 = new_level5;
		this.new_level5_1 = new_level5_1;
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
	new_level5;
	/** @type {Phaser.Tilemaps.Tilemap} */
	new_level5_1;
	/** @type {Array<any>} */
	doors;
	/** @type {Array<any>} */
	switches;
	/** @type {Array<SampoShooter|AngrySpin|Drone|Blobber>} */
	enemies;
	/** @type {Platform2[]} */
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
