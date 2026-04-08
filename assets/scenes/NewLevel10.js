
// You can write more code here

/* START OF COMPILED CODE */

class NewLevel10 extends BaseScene {

	constructor() {
		super("NewLevel10");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	preload() {

		this.load.pack("NewLevel10Pack", "assets/NewLevel10Pack.json");
	}

	/** @returns {void} */
	editorCreate() {

		// mapa
		const mapa = this.add.tilemap("new_level10");
		mapa.addTilesetImage("late_woods_tiles", "late_woods_tiles");

		// new_level10
		const new_level10 = this.add.tilemap("new_level10");
		new_level10.addTilesetImage("late_woods_tiles", "late_woods_tiles");

		// bg1Tile
		const bg1Tile = this.add.image(0, 0, "bg1Tile");
		bg1Tile.setOrigin(0, 0);

		// tilespriteBG
		const tilespriteBG = this.add.tileSprite(0, 0, 64, 64, "newBg2");
		tilespriteBG.setOrigin(0, 1);

		// nocollide2
		mapa.createLayer("nocollide2", ["late_woods_tiles"], 0, 0);

		// nocollide
		mapa.createLayer("nocollide", [], 0, 0);

		// stomper
		const stomper = new Stomper(this, 728, 574);
		this.add.existing(stomper);
		stomper.scaleX = 0.8030080110731748;
		stomper.scaleY = 0.8030080110731748;

		// stomper_1
		const stomper_1 = new Stomper(this, 835, 574);
		this.add.existing(stomper_1);
		stomper_1.scaleX = 0.8030080110731748;
		stomper_1.scaleY = 0.8030080110731748;

		// stomper_2
		const stomper_2 = new Stomper(this, 1498, 574);
		this.add.existing(stomper_2);
		stomper_2.scaleX = 0.8030080110731641;
		stomper_2.scaleY = 0.8030080110731641;

		// stomper_4
		const stomper_4 = new Stomper(this, 2658, 579);
		this.add.existing(stomper_4);
		stomper_4.scaleX = 0.8030080110731641;
		stomper_4.scaleY = 0.8030080110731641;

		// stomper_3
		const stomper_3 = new Stomper(this, 1391, 574);
		this.add.existing(stomper_3);
		stomper_3.scaleX = 0.8030080110731641;
		stomper_3.scaleY = 0.8030080110731641;

		// layer
		const layer = mapa.createLayer("layer", ["late_woods_tiles"], 0, 0);

		// player
		const player = new Player(this, 127, 726);
		this.add.existing(player);

		// upperTile
		const upperTile = new_level10.createLayer("upperTile", [], 0, 0);

		// sampoShooter
		const sampoShooter = new SampoShooter(this, 443, 639);
		this.add.existing(sampoShooter);

		// card_instancia_10000
		const card_instancia_10000 = new Card(this, 1766, 453);
		this.add.existing(card_instancia_10000);

		// supaBomb
		const supaBomb = new SupaBomb(this, 148, 451);
		this.add.existing(supaBomb);

		// supaBomb_1
		const supaBomb_1 = new SupaBomb(this, 964, 176);
		this.add.existing(supaBomb_1);

		// enemyCreator
		const enemyCreator = new EnemyCreator(this, 610, 121);
		this.add.existing(enemyCreator);

		// sampoShooter_2
		const sampoShooter_2 = new SampoShooter(this, 2053, 172);
		this.add.existing(sampoShooter_2);

		// angrySpin
		const angrySpin = new AngrySpin(this, 1800, 196);
		this.add.existing(angrySpin);

		// proxySpyke
		const proxySpyke = new ProxySpyke(this, 181, 110);
		this.add.existing(proxySpyke);

		// proxySpyke_1
		const proxySpyke_1 = new ProxySpyke(this, 478, 107);
		this.add.existing(proxySpyke_1);

		// sampoShooter_3
		const sampoShooter_3 = new SampoShooter(this, 1409, 402);
		this.add.existing(sampoShooter_3);

		// catapulta
		const catapulta = new Catapulta(this, 2391, 751);
		this.add.existing(catapulta);

		// guardBoss
		const guardBoss = new GuardBoss(this, 1771, 710);
		this.add.existing(guardBoss);

		// activeZoneBoss
		const activeZoneBoss = new ActiveZoneBoss(this, 1552, 676);
		this.add.existing(activeZoneBoss);
		activeZoneBoss.scaleX = 13.017173287590335;
		activeZoneBoss.scaleY = 2.8755072586778496;
		activeZoneBoss.alpha = 0;

		// sideDoorLocked
		const sideDoorLocked = new SideDoorLocked(this, 2802, 458);
		this.add.existing(sideDoorLocked);
		sideDoorLocked.scaleX = 0.6689134216340529;
		sideDoorLocked.scaleY = 0.6689134216340529;

		// toll
		const toll = new Toll(this, 2594, 495);
		this.add.existing(toll);

		// heart
		const heart = new Heart(this, 2390, 159);
		this.add.existing(heart);

		// heart_1
		const heart_1 = new Heart(this, 788, 175);
		this.add.existing(heart_1);

		// sampoShooter_4
		const sampoShooter_4 = new SampoShooter(this, 2996, 552);
		this.add.existing(sampoShooter_4);

		// misile
		const misile = new Misile(this, 3530, 158);
		this.add.existing(misile);

		// sampoShooter_6
		const sampoShooter_6 = new SampoShooter(this, 1216, 711);
		this.add.existing(sampoShooter_6);

		// enemyCreator_1
		const enemyCreator_1 = new EnemyCreator(this, 2091, 600);
		this.add.existing(enemyCreator_1);

		// lightBeam
		const lightBeam = new LightBeam(this, 733, 356);
		this.add.existing(lightBeam);

		// angrySpin_1
		const angrySpin_1 = new AngrySpin(this, 2872, 190);
		this.add.existing(angrySpin_1);

		// lists
		const doors = [];
		const switches = [];
		const enemies = [sampoShooter, sampoShooter_2, angrySpin, sampoShooter_3, guardBoss, sampoShooter_4, sampoShooter_6, angrySpin_1];
		const platforms = [];
		const coins = [];
		const catapultas = [];
		const revivingPods = [enemyCreator];
		const tutorials = [];

		// tilespriteBG (components)
		new FixedToCamera(tilespriteBG);

		// stomper (prefab fields)
		stomper.retardo = 2000;

		// stomper_2 (prefab fields)
		stomper_2.retardo = 2000;

		// stomper_4 (prefab fields)
		stomper_4.retardo = 2000;

		// card_instancia_10000 (prefab fields)
		card_instancia_10000.timeExpires = 8000;

		// catapulta (prefab fields)
		catapulta.power = 900;

		// guardBoss (prefab fields)
		guardBoss.ThingToDrop = "Coin";

		// activeZoneBoss (prefab fields)
		activeZoneBoss.isActive = true;
		activeZoneBoss.activateBoss = true;

		// toll (prefab fields)
		toll.tollCost = 45;

		// sampoShooter_6 (prefab fields)
		sampoShooter_6.RevivingPodID = "pod2";

		// enemyCreator_1 (prefab fields)
		enemyCreator_1.PodID = "pod2";

		this.bg1Tile = bg1Tile;
		this.tilespriteBG = tilespriteBG;
		this.layer = layer;
		this.player = player;
		this.upperTile = upperTile;
		this.guardBoss = guardBoss;
		this.mapa = mapa;
		this.new_level10 = new_level10;
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
	new_level10;
	/** @type {Array<any>} */
	doors;
	/** @type {Array<any>} */
	switches;
	/** @type {Array<SampoShooter|AngrySpin|GuardBoss>} */
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
