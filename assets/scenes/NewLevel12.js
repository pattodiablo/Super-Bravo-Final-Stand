
// You can write more code here

/* START OF COMPILED CODE */

class NewLevel12 extends BaseScene {

	constructor() {
		super("NewLevel12");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	preload() {

		this.load.pack("NewLevel12Pack", "assets/NewLevel12Pack.json");
	}

	/** @returns {void} */
	editorCreate() {

		// mapa
		const mapa = this.add.tilemap("new_level12");
		mapa.addTilesetImage("dark_city_tiles", "dark_city_tiles");

		// new_level12
		const new_level12 = this.add.tilemap("new_level12");
		new_level12.addTilesetImage("dark_city_tiles", "dark_city_tiles");

		// bg1Tile
		const bg1Tile = this.add.image(0, 0, "bg2Tile");
		bg1Tile.setOrigin(0, 0);

		// tilespriteBG
		const tilespriteBG = this.add.tileSprite(0, 756.2792796524731, 64, 64, "newBg3");
		tilespriteBG.setOrigin(0, 1);

		// nocollide2_1
		mapa.createLayer("nocollide2", ["dark_city_tiles"], 0, 0);

		// nocollide
		mapa.createLayer("nocollide", [], 0, 0);

		// layer
		const layer = mapa.createLayer("layer", ["dark_city_tiles"], 0, 0);

		// player
		const player = new Player(this, 164, 617);
		this.add.existing(player);

		// upperTile_1
		new_level12.createLayer("upperTile", [], 0, 0);

		// alert_instance_10000
		this.add.image(805, 638, "misile", "alert instance 10000");

		// supaBomb
		const supaBomb = new SupaBomb(this, 418, 614);
		this.add.existing(supaBomb);

		// supaBomb_1
		const supaBomb_1 = new SupaBomb(this, 1146, 607);
		this.add.existing(supaBomb_1);

		// sampoShooter
		const sampoShooter = new SampoShooter(this, 1139, 761);
		this.add.existing(sampoShooter);

		// sampoShooter_1
		const sampoShooter_1 = new SampoShooter(this, 1195, 438);
		this.add.existing(sampoShooter_1);

		// drone
		const drone = new Drone(this, 396, 87);
		this.add.existing(drone);

		// misile
		const misile = new Misile(this, 1659, 639);
		this.add.existing(misile);

		// proxySpyke
		const proxySpyke = new ProxySpyke(this, 1374, 526);
		this.add.existing(proxySpyke);

		// sampoShooter_2
		const sampoShooter_2 = new SampoShooter(this, 671, 93);
		this.add.existing(sampoShooter_2);

		// enemyCreator_2
		const enemyCreator_2 = new EnemyCreator(this, 796, 14);
		this.add.existing(enemyCreator_2);

		// card
		const card = new Card(this, 797, 86);
		this.add.existing(card);

		// sampoShooter_3
		const sampoShooter_3 = new SampoShooter(this, 188, 192);
		this.add.existing(sampoShooter_3);

		// heart
		const heart = new Heart(this, 807, 483);
		this.add.existing(heart);

		// card_1
		const card_1 = new Card(this, 1475, 427);
		this.add.existing(card_1);

		// lists
		const doors = [];
		const switches = [];
		const enemies = [sampoShooter, sampoShooter_1, sampoShooter_2, sampoShooter_3];
		const platforms = [];
		const coins = [];
		const catapultas = [];
		const revivingPods = [enemyCreator_2];
		const tutorials = [];

		// tilespriteBG (components)
		new FixedToCamera(tilespriteBG);

		// sampoShooter_2 (prefab fields)
		sampoShooter_2.RevivingPodID = "pod2";

		// enemyCreator_2 (prefab fields)
		enemyCreator_2.PodID = "pod2";

		// card (prefab fields)
		card.timeExpires = 4000;

		// sampoShooter_3 (prefab fields)
		sampoShooter_3.RevivingPodID = "pod3";

		// card_1 (prefab fields)
		card_1.timeExpires = 15000;

		this.bg1Tile = bg1Tile;
		this.tilespriteBG = tilespriteBG;
		this.layer = layer;
		this.player = player;
		this.mapa = mapa;
		this.new_level12 = new_level12;
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
	new_level12;
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
