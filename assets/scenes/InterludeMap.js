
// You can write more code here

/* START OF COMPILED CODE */

class InterludeMap extends Phaser.Scene {

	constructor() {
		super("InterludeMap");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// interludeBg
		const interludeBg = this.add.image(0, 0, "MapBG");
		interludeBg.setOrigin(0, 0);

		// soporteInferior
		this.add.image(540, 505, "soporteInferior");

		// nextBtn
		const nextBtn = this.add.image(540, 500, "NextBtn");

		// mapRoute
		this.add.image(540, 225, "MapRoute");

		// mapBtn_0
		const mapBtn_0 = new MapBtn(this, 67, 190);
		this.add.existing(mapBtn_0);

		// mapBtn_1
		const mapBtn_1 = new MapBtn(this, 99, 295);
		this.add.existing(mapBtn_1);

		// mapBtn_2
		const mapBtn_2 = new MapBtn(this, 149, 199);
		this.add.existing(mapBtn_2);

		// mapBtn_3
		const mapBtn_3 = new MapBtn(this, 202, 296);
		this.add.existing(mapBtn_3);

		// mapBtn_4
		const mapBtn_4 = new MapBtn(this, 234, 169);
		this.add.existing(mapBtn_4);

		// mapBtn_5
		const mapBtn_5 = new MapBtn(this, 322, 273);
		this.add.existing(mapBtn_5);

		// mapBtn_6
		const mapBtn_6 = new MapBtn(this, 373, 206);
		this.add.existing(mapBtn_6);

		// mapBtn_7
		const mapBtn_7 = new MapBtn(this, 399, 342);
		this.add.existing(mapBtn_7);

		// mapBtn_8
		const mapBtn_8 = new MapBtn(this, 441, 241);
		this.add.existing(mapBtn_8);

		// mapBtn_9
		const mapBtn_9 = new MapBtn(this, 494, 339);
		this.add.existing(mapBtn_9);

		// mapBtn_10
		const mapBtn_10 = new MapBtn(this, 601, 298);
		this.add.existing(mapBtn_10);

		// mapBtn_11
		const mapBtn_11 = new MapBtn(this, 592, 198);
		this.add.existing(mapBtn_11);

		// mapBtn_12
		const mapBtn_12 = new MapBtn(this, 678, 194);
		this.add.existing(mapBtn_12);

		// mapBtn_13
		const mapBtn_13 = new MapBtn(this, 700, 315);
		this.add.existing(mapBtn_13);

		// mapBtn_14
		const mapBtn_14 = new MapBtn(this, 748, 238);
		this.add.existing(mapBtn_14);

		// mapBtn_15
		const mapBtn_15 = new MapBtn(this, 848, 373);
		this.add.existing(mapBtn_15);

		// mapBtn_16
		const mapBtn_16 = new MapBtn(this, 916, 314);
		this.add.existing(mapBtn_16);

		// mapBtn_17
		const mapBtn_17 = new MapBtn(this, 919, 227);
		this.add.existing(mapBtn_17);

		// mapBtn_18
		const mapBtn_18 = new MapBtn(this, 989, 152);
		this.add.existing(mapBtn_18);

		// mapBtn_19
		const mapBtn_19 = new MapBtn(this, 1012, 43);
		this.add.existing(mapBtn_19);

		// triangleBtn
		const triangleBtn = this.add.image(232, 108, "TriangleBtn");

		// bitmaptext_1
		const bitmaptext_1 = this.add.bitmapText(60, 166, "bmpfont", "1");
		bitmaptext_1.tintFill = true;
		bitmaptext_1.text = "1";
		bitmaptext_1.fontSize = 40;

		// bitmaptext
		const bitmaptext = this.add.bitmapText(86, 271, "bmpfont", "2");
		bitmaptext.tintFill = true;
		bitmaptext.text = "2";
		bitmaptext.fontSize = 40;

		// bitmaptext_2
		const bitmaptext_2 = this.add.bitmapText(140, 174, "bmpfont", "3");
		bitmaptext_2.tintFill = true;
		bitmaptext_2.text = "3";
		bitmaptext_2.fontSize = 40;

		// bitmaptext_3
		const bitmaptext_3 = this.add.bitmapText(191, 273, "bmpfont", "4");
		bitmaptext_3.tintFill = true;
		bitmaptext_3.text = "4";
		bitmaptext_3.fontSize = 40;

		// bitmaptext_4
		const bitmaptext_4 = this.add.bitmapText(224, 144, "bmpfont", "5");
		bitmaptext_4.tintFill = true;
		bitmaptext_4.text = "5";
		bitmaptext_4.fontSize = 40;

		// bitmaptext_5
		const bitmaptext_5 = this.add.bitmapText(311, 247, "bmpfont", "6");
		bitmaptext_5.tintFill = true;
		bitmaptext_5.text = "6";
		bitmaptext_5.fontSize = 40;

		// bitmaptext_6
		const bitmaptext_6 = this.add.bitmapText(361, 181, "bmpfont", "7");
		bitmaptext_6.tintFill = true;
		bitmaptext_6.text = "7";
		bitmaptext_6.fontSize = 40;

		// bitmaptext_7
		const bitmaptext_7 = this.add.bitmapText(387, 317, "bmpfont", "8");
		bitmaptext_7.tintFill = true;
		bitmaptext_7.text = "8";
		bitmaptext_7.fontSize = 40;

		// bitmaptext_8
		const bitmaptext_8 = this.add.bitmapText(429, 214, "bmpfont", "9");
		bitmaptext_8.tintFill = true;
		bitmaptext_8.text = "9";
		bitmaptext_8.fontSize = 40;

		// bitmaptext_9
		const bitmaptext_9 = this.add.bitmapText(476, 314, "bmpfont", "10");
		bitmaptext_9.tintFill = true;
		bitmaptext_9.text = "10";
		bitmaptext_9.fontSize = 40;

		// bitmaptext_10
		const bitmaptext_10 = this.add.bitmapText(590, 272, "bmpfont", "11");
		bitmaptext_10.tintFill = true;
		bitmaptext_10.text = "11";
		bitmaptext_10.fontSize = 40;

		// bitmaptext_11
		const bitmaptext_11 = this.add.bitmapText(576, 172, "bmpfont", "12");
		bitmaptext_11.tintFill = true;
		bitmaptext_11.text = "12";
		bitmaptext_11.fontSize = 40;

		// bitmaptext_12
		const bitmaptext_12 = this.add.bitmapText(663, 168, "bmpfont", "13");
		bitmaptext_12.tintFill = true;
		bitmaptext_12.text = "13";
		bitmaptext_12.fontSize = 40;

		// bitmaptext_13
		const bitmaptext_13 = this.add.bitmapText(684, 290, "bmpfont", "14");
		bitmaptext_13.tintFill = true;
		bitmaptext_13.text = "14";
		bitmaptext_13.fontSize = 40;

		// bitmaptext_14
		const bitmaptext_14 = this.add.bitmapText(734, 213, "bmpfont", "15");
		bitmaptext_14.tintFill = true;
		bitmaptext_14.text = "15";
		bitmaptext_14.fontSize = 40;

		// bitmaptext_15
		const bitmaptext_15 = this.add.bitmapText(832, 348, "bmpfont", "16");
		bitmaptext_15.tintFill = true;
		bitmaptext_15.text = "16";
		bitmaptext_15.fontSize = 40;

		// bitmaptext_16
		const bitmaptext_16 = this.add.bitmapText(900, 291, "bmpfont", "17");
		bitmaptext_16.tintFill = true;
		bitmaptext_16.text = "17";
		bitmaptext_16.fontSize = 40;

		// bitmaptext_17
		const bitmaptext_17 = this.add.bitmapText(903, 201, "bmpfont", "18");
		bitmaptext_17.tintFill = true;
		bitmaptext_17.text = "18";
		bitmaptext_17.fontSize = 40;

		// bitmaptext_18
		const bitmaptext_18 = this.add.bitmapText(977, 126, "bmpfont", "19");
		bitmaptext_18.tintFill = true;
		bitmaptext_18.text = "19";
		bitmaptext_18.fontSize = 40;

		// bitmaptext_19
		const bitmaptext_19 = this.add.bitmapText(990, 16, "bmpfont", "20");
		bitmaptext_19.tintFill = true;
		bitmaptext_19.text = "20";
		bitmaptext_19.fontSize = 40;

		// mapBtn_0 (prefab fields)
		mapBtn_0.LevelToGo = "NewLevel1";

		// mapBtn_1 (prefab fields)
		mapBtn_1.LevelToGo = "NewLevel2";

		// mapBtn_2 (prefab fields)
		mapBtn_2.LevelToGo = "NewLevel3";

		// mapBtn_3 (prefab fields)
		mapBtn_3.LevelToGo = "NewLevel4";

		// mapBtn_4 (prefab fields)
		mapBtn_4.LevelToGo = "NewLevel5";

		// mapBtn_5 (prefab fields)
		mapBtn_5.LevelToGo = "NewLevel6";

		// mapBtn_6 (prefab fields)
		mapBtn_6.LevelToGo = "NewLevel7";

		// mapBtn_7 (prefab fields)
		mapBtn_7.LevelToGo = "NewLevel8";

		// mapBtn_8 (prefab fields)
		mapBtn_8.LevelToGo = "NewLevel9";

		// mapBtn_9 (prefab fields)
		mapBtn_9.LevelToGo = "NewLevel10";

		// mapBtn_10 (prefab fields)
		mapBtn_10.LevelToGo = "NewLevel11";

		// mapBtn_11 (prefab fields)
		mapBtn_11.LevelToGo = "NewLevel12";

		// mapBtn_12 (prefab fields)
		mapBtn_12.LevelToGo = "NewLevel13";

		// mapBtn_13 (prefab fields)
		mapBtn_13.LevelToGo = "NewLevel14";

		// mapBtn_14 (prefab fields)
		mapBtn_14.LevelToGo = "NewLevel15";

		// mapBtn_15 (prefab fields)
		mapBtn_15.LevelToGo = "NewLevel16";

		// mapBtn_16 (prefab fields)
		mapBtn_16.LevelToGo = "NewLevel17";

		// mapBtn_17 (prefab fields)
		mapBtn_17.LevelToGo = "NewLevel18";

		// mapBtn_18 (prefab fields)
		mapBtn_18.LevelToGo = "NewLevel19";

		// mapBtn_19 (prefab fields)
		mapBtn_19.LevelToGo = "NewLevel20";

		this.interludeBg = interludeBg;
		this.nextBtn = nextBtn;
		this.triangleBtn = triangleBtn;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Image} */
	interludeBg;
	/** @type {Phaser.GameObjects.Image} */
	nextBtn;
	/** @type {Phaser.GameObjects.Image} */
	triangleBtn;

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();


		this.showSupa();


	//	this.calculateStars();
		this.gotoLevel();


		this.getActiveLevels();



		this.nextBtn.setInteractive();
		this.nextBtn.on("pointerdown", () => {
			this.nextBtnAction();
		});
		this.startNextBtnPulse();

	//	this.totalRings.visible=false;
		//this.energyText.visible=false;
	}

	getActiveLevels(){

		const mapButtons = this.children.list.filter(child => child instanceof MapBtn);
		if (!mapButtons.length) {
			return;
		}

		const readLastCompletedLevel = () => {
			if (typeof window === "undefined" || !window.localStorage) {
				return null;
			}
			try {
				return window.localStorage.getItem("lastCompletedLevel");
			} catch (err) {
				return null;
			}
		};

		const extractLevelIndex = (levelKey) => {
			if (typeof levelKey !== "string" || !levelKey.length) {
				return null;
			}
			const match = levelKey.match(/(\d+)(?!.*\d)/);
			if (!match) {
				return null;
			}
			const parsed = parseInt(match[1], 10);
			return Number.isNaN(parsed) ? null : parsed;
		};

		const savedLevelIndex = extractLevelIndex(readLastCompletedLevel());
		console.log("savedLevelIndex " + savedLevelIndex);
		const highestUnlockedIndex = Math.max(
			0,
			Math.min(mapButtons.length - 1, (savedLevelIndex ?? -1))
		);
		const INACTIVE_TINT = 0x5c5c5c;
		console.log("highestUnlockedIndex " + highestUnlockedIndex);
		mapButtons.forEach((btn, index) => {
			if (index <= highestUnlockedIndex) {
				btn.clearTint();
				btn.setAlpha(1);
				btn.setInteractive();
			} else {
				btn.setTint(INACTIVE_TINT);
				btn.setAlpha(0.4);
				btn.disableInteractive();
			}
		});

		const activeBtn = mapButtons[highestUnlockedIndex];
		if (!this.triangleBtn || !activeBtn) {
			return;
		}

		const btnHeight = activeBtn.displayHeight || activeBtn.height || 0;
		const verticalOffset = btnHeight * 0.5 + 40;
		this.triangleBtn.setPosition(activeBtn.x, activeBtn.y - verticalOffset);
		this.triangleBtn.setVisible(true);
		this.children.bringToTop(this.triangleBtn);

		if (this.triangleFloatTween) {
			this.triangleFloatTween.stop();
			this.triangleFloatTween.remove();
		}

		this.triangleFloatTween = this.tweens.add({
			targets: this.triangleBtn,
			y: this.triangleBtn.y - 12,
			duration: 300,
			yoyo: true,
			repeat: -1,
			ease: "Sine.easeInOut"
		});
	}

	startNextBtnPulse(){
		if (!this.nextBtn) {
			return;
		}

		this.nextBtn.setScale(1);
		if (this.nextBtnPulseTween) {
			this.nextBtnPulseTween.stop();
			this.nextBtnPulseTween.remove();
		}

		this.nextBtnPulseTween = this.tweens.add({
			targets: this.nextBtn,
			scale: 1.08,
			duration: 900,
			yoyo: true,
			repeat: -1,
			ease: "Sine.easeInOut"
		});
	}

	nextBtnAction(){
		const lastCompleted = window.localStorage.getItem("lastCompletedLevel");
		const computeNextLevelKey = (levelKey) => {
			if (typeof levelKey !== "string" || levelKey.length === 0) {
				return "NewLevel1";
			}
			const match = levelKey.match(/(\d+)(?!.*\d)/);
			if (!match) {
				return "NewLevel1";
			}
			const currentNumber = parseInt(match[1], 10);
			if (Number.isNaN(currentNumber)) {
				return "NewLevel1";
			}
			let nextNumber = currentNumber + 1;
			if (currentNumber >= 20) {
				nextNumber = 1; // Loop back or handle max level
			} else if (nextNumber < 1) {
				nextNumber = 1;
			}
			return `NewLevel${nextNumber}`;
		};
		const nextLevel = computeNextLevelKey(lastCompleted);
		console.log("nextBtnAction nextLevel " + nextLevel);
		
		this.cameras.main.fadeOut(500);

		this.time.delayedCall(500, () => {
			this.scene.start(nextLevel);
		});
	}

	showSupa(){

		this.cameras.main.fadeIn(0);
	}

	setLevel(level,destino,partida,coinscollected,totalCoins,delayScreen){

		this.levelTogo = level;
		this.pinOnMap = destino;
		this.partida = partida;
		this.coinscollected = coinscollected;
		this.totalCoins = totalCoins;
		this.delayScreen=delayScreen;

	//	console.log("delayScreen " + this.delayScreen);
	}
	preload(){
		var sceneasCargadas = [];

		this.scene.manager.scenes.forEach(scena => {

			sceneasCargadas.push(scena.scene.key)
		});
		var estaLaScena = sceneasCargadas.includes(this.levelTogo);
		if(!estaLaScena){

			if(this.levelTogo!==""){

				this.load.sceneFile(this.levelTogo, 'assets/scenes/'+this.levelTogo+'.js');	
			}else{
				this.load.sceneFile(this.levelTogo, 'assets/scenes/'+"NewLevel0.js");
			}

		}

	}

	PreloadSceneFile(scene){
	this.load.sceneFile(this.levelTogo, 'assets/scenes/'+scene+'.js');	
	}

	gotoLevelBtn(){
		console.log("entro a gotoLevelBtn	");
		console.log("levelTogo " + this.levelTogo);	
		var sceneToGo = this.scene.get(this.levelTogo);
	

		this.cameras.main.fadeOut(500);


			var timer = this.scene.scene.time.addEvent({
					delay: 500,                // ms
					callback: function(){
						this.scene.start(this.levelTogo);
					},
					//args: [],
					callbackScope: this,
					loop: true
				});
	}


	gotoLevel(){
console.log("entro a gotoLevel	");


		var sceneToGo = this.scene.get(this.levelTogo);
	

		if(!this.delayScreen){	



			var timer = this.scene.scene.time.addEvent({
					delay: 500,                // ms
					callback: function(){
						this.scene.start(this.levelTogo);
					},
					//args: [],
					callbackScope: this,
					loop: true
				});
		}
		else{



		}


		var showBg = this.scene.scene.tweens.createTimeline();
		showBg.add({
		targets: this.interludeBg,
		alpha: 1,
		duration: 500,
		callbackScope: this,
		ease: 'Linear',

		});


		showBg.play();


	}




	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
