
// You can write more code here

/* START OF COMPILED CODE */

class NewLevel14 extends BaseScene {

	constructor() {
		super("NewLevel14");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	preload() {

		this.load.pack("NewLevel14Pack", "assets/NewLevel14Pack.json");
	}

	/** @returns {void} */
	editorCreate() {

		// mapa
		const mapa = this.add.tilemap("new_level14");
		mapa.addTilesetImage("dark_city_tiles", "dark_city_tiles");

		// new_level14
		const new_level14 = this.add.tilemap("new_level14");
		new_level14.addTilesetImage("dark_city_tiles", "dark_city_tiles");

		// bg1Tile
		const bg1Tile = this.add.image(0, 0, "bg2Tile");
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
		const player = new Player(this, 125, 627);
		this.add.existing(player);

		// upperTile_1
		new_level14.createLayer("upperTile", [], 0, 0);

		// supaBomb_1
		const supaBomb_1 = new SupaBomb(this, 749, 261);
		this.add.existing(supaBomb_1);

		// sampoShooter
		const sampoShooter = new SampoShooter(this, 425, 724);
		this.add.existing(sampoShooter);

		// sampoShooter_1
		const sampoShooter_1 = new SampoShooter(this, 1782, 658);
		this.add.existing(sampoShooter_1);

		// enemyCreator
		const enemyCreator = new EnemyCreator(this, 631, 541);
		this.add.existing(enemyCreator);

		// card
		const card = new Card(this, 226, 219);
		this.add.existing(card);

		// powerPodium
		this.add.image(2017, 619, "PowerPodium");

		// upgradeHalo
		const upgradeHalo = new UpgradeHalo(this, 2018, 635);
		this.add.existing(upgradeHalo);

		// activeZoneBoss
		const activeZoneBoss = new ActiveZoneBoss(this, 824, 540);
		this.add.existing(activeZoneBoss);
		activeZoneBoss.scaleX = 5.914072889592503;
		activeZoneBoss.scaleY = 5.070510206408815;
		activeZoneBoss.alpha = 0;

		// card_1
		const card_1 = new Card(this, 2158, 669);
		this.add.existing(card_1);

		// portalCannon
		const portalCannon = new PortalCannon(this, 983, 573);
		this.add.existing(portalCannon);
		portalCannon.angle = 0;

		// portalCannon_7
		const portalCannon_7 = new PortalCannon(this, 977, 169);
		this.add.existing(portalCannon_7);
		portalCannon_7.angle = -90;

		// drone_1
		const drone_1 = new Drone(this, 1701, 113);
		this.add.existing(drone_1);

		// guardBoss
		const guardBoss = new GuardBoss(this, 1072, 568);
		this.add.existing(guardBoss);

		// drone_2
		const drone_2 = new Drone(this, 370, 459);
		this.add.existing(drone_2);

		// card_3
		const card_3 = new Card(this, 2010, 146);
		this.add.existing(card_3);

		// portalCannon_8
		const portalCannon_8 = new PortalCannon(this, 1882, 573);
		this.add.existing(portalCannon_8);
		portalCannon_8.angle = -90;

		// misile_1
		const misile_1 = new Misile(this, 2366, 408);
		this.add.existing(misile_1);

		// blobber
		const blobber = new Blobber(this, 1847, 107);
		this.add.existing(blobber);

		// heart
		const heart = new Heart(this, 2156, 146);
		this.add.existing(heart);

		// heart_2
		const heart_2 = new Heart(this, 1439, 223);
		this.add.existing(heart_2);

		// portalCannon_1
		const portalCannon_1 = new PortalCannon(this, 1574, 573);
		this.add.existing(portalCannon_1);
		portalCannon_1.angle = 0;

		// portalCannon_2
		const portalCannon_2 = new PortalCannon(this, 1574, 131);
		this.add.existing(portalCannon_2);
		portalCannon_2.angle = -126;

		// portalCannon_3
		const portalCannon_3 = new PortalCannon(this, 131, 169);
		this.add.existing(portalCannon_3);
		portalCannon_3.angle = -180;

		// lists
		const doors = [];
		const switches = [];
		const enemies = [sampoShooter, sampoShooter_1, guardBoss, blobber];
		const platforms = [];
		const coins = [];
		const catapultas = [];
		const revivingPods = [enemyCreator];
		const tutorials = [];

		// tilespriteBG (components)
		new FixedToCamera(tilespriteBG);

		// card (prefab fields)
		card.timeExpires = 12000;

		// upgradeHalo (prefab fields)
		upgradeHalo.isCannonStrike = true;

		// activeZoneBoss (prefab fields)
		activeZoneBoss.isActive = true;
		activeZoneBoss.activateBoss = true;

		// card_1 (prefab fields)
		card_1.timeExpires = 12000;

		// portalCannon (prefab fields)
		portalCannon.IsFirstCannon = false;

		// portalCannon_7 (prefab fields)
		portalCannon_7.IsFirstCannon = false;

		// guardBoss (prefab fields)
		guardBoss.ThingToDrop = "Coin";

		// card_3 (prefab fields)
		card_3.timeExpires = 12000;

		// portalCannon_8 (prefab fields)
		portalCannon_8.IsFirstCannon = true;

		// blobber (prefab fields)
		blobber.travelDistance = 120;

		// portalCannon_1 (prefab fields)
		portalCannon_1.IsFirstCannon = false;

		// portalCannon_2 (prefab fields)
		portalCannon_2.IsFirstCannon = false;

		// portalCannon_3 (prefab fields)
		portalCannon_3.IsFirstCannon = false;

		this.bg1Tile = bg1Tile;
		this.tilespriteBG = tilespriteBG;
		this.layer = layer;
		this.player = player;
		this.guardBoss = guardBoss;
		this.mapa = mapa;
		this.new_level14 = new_level14;
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
	new_level14;
	/** @type {Array<any>} */
	doors;
	/** @type {Array<any>} */
	switches;
	/** @type {Array<SampoShooter|GuardBoss|Blobber>} */
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
