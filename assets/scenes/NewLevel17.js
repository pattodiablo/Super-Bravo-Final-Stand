
// You can write more code here

/* START OF COMPILED CODE */

class NewLevel17 extends BaseScene {

	constructor() {
		super("NewLevel17");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	preload() {

		this.load.pack("NewLevel17Pack", "assets/NewLevel17Pack.json");
	}

	/** @returns {void} */
	editorCreate() {

		// mapa
		const mapa = this.add.tilemap("new_level17");
		mapa.addTilesetImage("lab_building_tiles", "lab_building_tiles");

		// new_level17
		const new_level17 = this.add.tilemap("new_level17");
		new_level17.addTilesetImage("lab_building_tiles", "lab_building_tiles");

		// bg1Tile
		const bg1Tile = this.add.image(0, 0, "bg2Tile");
		bg1Tile.setOrigin(0, 0);

		// tilespriteBG
		const tilespriteBG = this.add.tileSprite(0, 0, 64, 64, "newBg4");
		tilespriteBG.setOrigin(0, 1);

		// nocollide2_1
		mapa.createLayer("nocollide2", [], 0, 0);

		// nocollide
		mapa.createLayer("nocollide", ["lab_building_tiles"], 0, 0);

		// powerPodium
		const powerPodium = this.add.image(806, 470, "PowerPodium");
		powerPodium.scaleX = 0.7483910058805061;
		powerPodium.scaleY = 0.7483910058805061;

		// layer
		const layer = mapa.createLayer("layer", ["lab_building_tiles"], 0, 0);

		// player
		const player = new Player(this, 108, 633);
		this.add.existing(player);

		// upperTile_1
		new_level17.createLayer("upperTile", ["lab_building_tiles"], 0, 0);

		// card
		const card = new Card(this, 235, 69);
		this.add.existing(card);

		// platform2
		const platform2 = new Platform2(this, 103, 434);
		this.add.existing(platform2);

		// upgradeHalo
		const upgradeHalo = new UpgradeHalo(this, 806, 502);
		this.add.existing(upgradeHalo);

		// portalCannon
		const portalCannon = new PortalCannon(this, 1378, 656);
		this.add.existing(portalCannon);

		// portalCannon_1
		const portalCannon_1 = new PortalCannon(this, 626, 66);
		this.add.existing(portalCannon_1);
		portalCannon_1.angle = -90;

		// portalCannon_2
		const portalCannon_2 = new PortalCannon(this, 450, 294);
		this.add.existing(portalCannon_2);
		portalCannon_2.angle = 40;

		// card_1
		const card_1 = new Card(this, 1520, 609);
		this.add.existing(card_1);

		// drone
		const drone = new Drone(this, 807, 281);
		this.add.existing(drone);

		// heart
		const heart = new Heart(this, 1523, 63);
		this.add.existing(heart);

		// heart_1
		const heart_1 = new Heart(this, 79, 68);
		this.add.existing(heart_1);

		// sampoShooter
		const sampoShooter = new SampoShooter(this, 493, 460);
		this.add.existing(sampoShooter);

		// sampoShooter_1
		const sampoShooter_1 = new SampoShooter(this, 1140, 489);
		this.add.existing(sampoShooter_1);

		// misile
		const misile = new Misile(this, 1689, 238);
		this.add.existing(misile);

		// enemyCreator
		const enemyCreator = new EnemyCreator(this, 236, 216);
		this.add.existing(enemyCreator);

		// sampoShooter_2
		const sampoShooter_2 = new SampoShooter(this, 260, 615);
		this.add.existing(sampoShooter_2);

		// sampoShooter_3
		const sampoShooter_3 = new SampoShooter(this, 700, 325);
		this.add.existing(sampoShooter_3);

		// portalCannon_3
		const portalCannon_3 = new PortalCannon(this, 1364, 290);
		this.add.existing(portalCannon_3);
		portalCannon_3.angle = -90;

		// lists
		const doors = [];
		const switches = [];
		const enemies = [sampoShooter, sampoShooter_2, sampoShooter_3, sampoShooter_1];
		const platforms = [platform2];
		const coins = [];
		const catapultas = [];
		const revivingPods = [enemyCreator];
		const tutorials = [];

		// tilespriteBG (components)
		new FixedToCamera(tilespriteBG);

		// card (prefab fields)
		card.timeExpires = 5000;

		// platform2 (prefab fields)
		platform2.distance = 100;
		platform2.timeTravel = 4000;

		// upgradeHalo (prefab fields)
		upgradeHalo.isCannonStrike = true;

		// portalCannon (prefab fields)
		portalCannon.IsFirstCannon = true;

		// portalCannon_1 (prefab fields)
		portalCannon_1.IsFirstCannon = false;

		// portalCannon_2 (prefab fields)
		portalCannon_2.IsFirstCannon = false;

		// card_1 (prefab fields)
		card_1.timeExpires = 6000;

		// portalCannon_3 (prefab fields)
		portalCannon_3.IsFirstCannon = false;

		this.bg1Tile = bg1Tile;
		this.tilespriteBG = tilespriteBG;
		this.layer = layer;
		this.player = player;
		this.mapa = mapa;
		this.new_level17 = new_level17;
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
	new_level17;
	/** @type {Array<any>} */
	doors;
	/** @type {Array<any>} */
	switches;
	/** @type {SampoShooter[]} */
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
