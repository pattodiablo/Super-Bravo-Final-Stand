
// You can write more code here

/* START OF COMPILED CODE */

class NewLevel7 extends BaseScene {

	constructor() {
		super("NewLevel7");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	preload() {

		this.load.pack("NewLevel7Pack", "assets/NewLevel7Pack.json");
	}

	/** @returns {void} */
	editorCreate() {

		// mapa
		const mapa = this.add.tilemap("new_level7");
		mapa.addTilesetImage("late_woods_tiles", "late_woods_tiles");

		// new_level7
		const new_level7 = this.add.tilemap("new_level7");
		new_level7.addTilesetImage("late_woods_tiles", "late_woods_tiles");

		// bg1Tile
		const bg1Tile = this.add.image(0, 0, "bg2Tile");
		bg1Tile.setOrigin(0, 0);

		// tilespriteBG
		const tilespriteBG = this.add.tileSprite(0, 0, 64, 64, "newBg2");
		tilespriteBG.setOrigin(0, 1);

		// nocollide2_1
		mapa.createLayer("nocollide2", ["late_woods_tiles"], 0, 0);

		// nocollide
		mapa.createLayer("nocollide", [], 0, 0);

		// layer
		const layer = mapa.createLayer("layer", ["late_woods_tiles"], 0, 0);

		// player
		const player = new Player(this, 443, 687);
		this.add.existing(player);

		// upperTile_1
		new_level7.createLayer("upperTile", [], 0, 0);

		// sampoShooter
		const sampoShooter = new SampoShooter(this, 876, 696);
		this.add.existing(sampoShooter);

		// sampoShooter_1
		const sampoShooter_1 = new SampoShooter(this, 1237, 721);
		this.add.existing(sampoShooter_1);

		// sampoShooter_1_1
		const sampoShooter_1_1 = new SampoShooter(this, 2499, 401);
		this.add.existing(sampoShooter_1_1);

		// sampoShooter_1_1_1
		const sampoShooter_1_1_1 = new SampoShooter(this, 2406, 696);
		this.add.existing(sampoShooter_1_1_1);

		// enemyCreator
		const enemyCreator = new EnemyCreator(this, 628, 186);
		this.add.existing(enemyCreator);

		// enemyCreator_1
		const enemyCreator_1 = new EnemyCreator(this, 1058, 346);
		this.add.existing(enemyCreator_1);

		// enemyCreator_1_1
		const enemyCreator_1_1 = new EnemyCreator(this, 2497, 603);
		this.add.existing(enemyCreator_1_1);

		// platform1_1
		const platform1_1 = new Platform1(this, 913, 334);
		this.add.existing(platform1_1);

		// portalCannon
		const portalCannon = new PortalCannon(this, 1745, 603);
		this.add.existing(portalCannon);

		// powerPodium
		this.add.image(1744, 377, "PowerPodium");

		// upgradeHalo
		const upgradeHalo = new UpgradeHalo(this, 1745, 389);
		this.add.existing(upgradeHalo);

		// portalCannon_1
		const portalCannon_1 = new PortalCannon(this, 1747, 205);
		this.add.existing(portalCannon_1);
		portalCannon_1.angle = 90;

		// portalCannon_2
		const portalCannon_2 = new PortalCannon(this, 2149, 205);
		this.add.existing(portalCannon_2);
		portalCannon_2.angle = -180;

		// portalCannon_3
		const portalCannon_3 = new PortalCannon(this, 2156, 385);
		this.add.existing(portalCannon_3);
		portalCannon_3.angle = 90;

		// catapulta
		const catapulta = new Catapulta(this, 1743, 757);
		this.add.existing(catapulta);

		// platform2
		const platform2 = new Platform2(this, 2879, 677);
		this.add.existing(platform2);

		// catapulta_1
		const catapulta_1 = new Catapulta(this, 1631, 492);
		this.add.existing(catapulta_1);

		// catapulta_2
		const catapulta_2 = new Catapulta(this, 1856, 492);
		this.add.existing(catapulta_2);

		// catapulta_3
		const catapulta_3 = new Catapulta(this, 1404, 757);
		this.add.existing(catapulta_3);

		// catapulta_4
		const catapulta_4 = new Catapulta(this, 2015, 757);
		this.add.existing(catapulta_4);

		// supaBomb
		const supaBomb = new SupaBomb(this, 138, 279);
		this.add.existing(supaBomb);

		// lists
		const doors = [];
		const switches = [];
		const enemies = [sampoShooter, sampoShooter_1_1, sampoShooter_1, sampoShooter_1_1_1];
		const platforms = [platform1_1, platform2];
		const coins = [];
		const catapultas = [];
		const revivingPods = [enemyCreator_1_1, enemyCreator_1, enemyCreator];
		const tutorials = [];

		// tilespriteBG (components)
		new FixedToCamera(tilespriteBG);

		// sampoShooter_1 (prefab fields)
		sampoShooter_1.RevivingPodID = "pod2";

		// sampoShooter_1_1 (prefab fields)
		sampoShooter_1_1.RevivingPodID = "pod3";

		// sampoShooter_1_1_1 (prefab fields)
		sampoShooter_1_1_1.RevivingPodID = "pod2";

		// enemyCreator (prefab fields)
		enemyCreator.creationTime = 3000;

		// enemyCreator_1 (prefab fields)
		enemyCreator_1.creationTime = 3000;
		enemyCreator_1.PodID = "pod2";

		// enemyCreator_1_1 (prefab fields)
		enemyCreator_1_1.creationTime = 3000;
		enemyCreator_1_1.PodID = "pod3";

		// platform1_1 (prefab fields)
		platform1_1.distance = 210;
		platform1_1.timeTravel = 4000;
		platform1_1.isHorizontal = true;

		// portalCannon (prefab fields)
		portalCannon.IsFirstCannon = true;

		// upgradeHalo (prefab fields)
		upgradeHalo.isCannonStrike = true;

		// portalCannon_1 (prefab fields)
		portalCannon_1.IsFirstCannon = false;

		// portalCannon_2 (prefab fields)
		portalCannon_2.IsFirstCannon = false;

		// portalCannon_3 (prefab fields)
		portalCannon_3.IsFirstCannon = false;

		// catapulta (prefab fields)
		catapulta.power = 800;

		// platform2 (prefab fields)
		platform2.distance = 400;
		platform2.timeTravel = 5000;

		// catapulta_1 (prefab fields)
		catapulta_1.power = 600;

		// catapulta_2 (prefab fields)
		catapulta_2.power = 600;

		// catapulta_3 (prefab fields)
		catapulta_3.power = 900;

		// catapulta_4 (prefab fields)
		catapulta_4.power = 900;

		this.bg1Tile = bg1Tile;
		this.tilespriteBG = tilespriteBG;
		this.layer = layer;
		this.player = player;
		this.mapa = mapa;
		this.new_level7 = new_level7;
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
	new_level7;
	/** @type {Array<any>} */
	doors;
	/** @type {Array<any>} */
	switches;
	/** @type {SampoShooter[]} */
	enemies;
	/** @type {Array<Platform1|Platform2>} */
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
