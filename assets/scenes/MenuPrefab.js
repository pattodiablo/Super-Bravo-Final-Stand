
// You can write more code here

/* START OF COMPILED CODE */

class MenuPrefab extends Phaser.GameObjects.Container {

	constructor(scene, x, y) {
		super(scene, x ?? -82, y ?? 0);

		// menuBtn
		const menuBtn = scene.add.image(82, 0, "menuBtn");
		this.add(menuBtn);

		// menuPanel
		const menuPanel = scene.add.image(-181, 203, "MenuPanel");
		this.add(menuPanel);

		// menuOpt4
		const menuOpt4 = scene.add.image(-187, 301, "MenuOpt");
		this.add(menuOpt4);

		// menuOpt3
		const menuOpt3 = scene.add.image(-187, 237, "MenuOpt");
		this.add(menuOpt3);

		// menuOpt2
		const menuOpt2 = scene.add.image(-188, 174, "MenuOpt");
		this.add(menuOpt2);

		// menuOpt1
		const menuOpt1 = scene.add.image(-189, 111, "MenuOpt");
		this.add(menuOpt1);

		// menuPanel2
		const menuPanel2 = scene.add.image(-178, 203, "MenuPanel");
		this.add(menuPanel2);

		// SubOpt2
		const subOpt2 = scene.add.image(-182, 233, "MenuOpt");
		this.add(subOpt2);

		// SubOpt1
		const subOpt1 = scene.add.image(-182, 169, "MenuOpt");
		this.add(subOpt1);

		// AreYouSure
		const areYouSure = scene.add.bitmapText(-179, 110, "bmpfont", "Are you sure?");
		areYouSure.setOrigin(0.5, 0.5);
		areYouSure.tintFill = true;
		areYouSure.text = "Are you sure?";
		areYouSure.fontSize = 45;
		this.add(areYouSure);

		// Yes
		const yes = scene.add.bitmapText(-186, 171, "bmpfont", "Yes");
		yes.setOrigin(0.5, 0.5);
		yes.text = "Yes";
		yes.fontSize = 35;
		this.add(yes);

		// No
		const no = scene.add.bitmapText(-185, 234, "bmpfont", "No");
		no.setOrigin(0.5, 0.5);
		no.text = "No";
		no.fontSize = 35;
		this.add(no);

		this.menuBtn = menuBtn;
		this.menuPanel = menuPanel;
		this.menuOpt4 = menuOpt4;
		this.menuOpt3 = menuOpt3;
		this.menuOpt2 = menuOpt2;
		this.menuOpt1 = menuOpt1;
		this.menuPanel2 = menuPanel2;
		this.subOpt2 = subOpt2;
		this.subOpt1 = subOpt1;
		this.areYouSure = areYouSure;
		this.yes = yes;
		this.no = no;

		/* START-USER-CTR-CODE */
				this.createEvent = this.scene.events.once(Phaser.Scenes.Events.UPDATE, this.create, this);
		/* END-USER-CTR-CODE */
	}

	/** @type {Phaser.GameObjects.Image} */
	menuBtn;
	/** @type {Phaser.GameObjects.Image} */
	menuPanel;
	/** @type {Phaser.GameObjects.Image} */
	menuOpt4;
	/** @type {Phaser.GameObjects.Image} */
	menuOpt3;
	/** @type {Phaser.GameObjects.Image} */
	menuOpt2;
	/** @type {Phaser.GameObjects.Image} */
	menuOpt1;
	/** @type {Phaser.GameObjects.BitmapText} */
	fxText;
	/** @type {Phaser.GameObjects.Image} */
	menuOpt2;
	/** @type {Phaser.GameObjects.BitmapText} */
	musicText;
	/** @type {Phaser.GameObjects.Image} */
	menuOpt3;
	/** @type {Phaser.GameObjects.BitmapText} */
	exitToMapText;
	/** @type {Phaser.GameObjects.Image} */
	menuOpt4;
	/** @type {Phaser.GameObjects.BitmapText} */
	resetGameText;
	/** @type {Phaser.GameObjects.Image} */
	menuPanel2;
	/** @type {Phaser.GameObjects.Image} */
	subOpt2;
	/** @type {Phaser.GameObjects.Image} */
	subOpt1;
	/** @type {Phaser.GameObjects.BitmapText} */
	areYouSure;
	/** @type {Phaser.GameObjects.BitmapText} */
	yes;
	/** @type {Phaser.GameObjects.BitmapText} */
	no;

	/* START-USER-CODE */

	create(){





		this.x = this.scene.cameras.main.width - 30 - 82;
		this.y = 30;
		this.setScrollFactor(0);
		this.setDepth(10000);

		// Create texts in create() to avoid them being deleted on update
		this.fxText = this.scene.add.bitmapText(0, 0, "bmpfont", "FX");
		this.fxText.setOrigin(0.5, 0.5);
		this.fxText.text = "FX";
		this.fxText.fontSize = 35;
		this.add(this.fxText);

		this.musicText = this.scene.add.bitmapText(0, 0, "bmpfont", "Music");
		this.musicText.setOrigin(0.5, 0.5);
		this.musicText.text = "Music";
		this.musicText.fontSize = 35;
		this.add(this.musicText);

		this.exitToMapText = this.scene.add.bitmapText(0, 0, "bmpfont", "Exit to map");
		this.exitToMapText.setOrigin(0.5, 0.5);
		this.exitToMapText.text = "Exit to map";
		this.exitToMapText.fontSize = 35;
		this.add(this.exitToMapText);

		this.resetGameText = this.scene.add.bitmapText(0, 0, "bmpfont", "Reset Game");
		this.resetGameText.setOrigin(0.5, 0.5);
		this.resetGameText.text = "Reset Game";
		this.resetGameText.fontSize = 35;
		this.add(this.resetGameText);

	
		// Create groups in create() to include all elements
		this.menuPanel2Group = this.scene.add.group([this.menuPanel2, this.subOpt1, this.subOpt2, this.areYouSure, this.yes, this.no]);
		this.mainMenuGroup = this.scene.add.group([this.menuPanel, this.menuOpt1, this.fxText, this.menuOpt2, this.musicText, this.menuOpt3, this.exitToMapText, this.menuOpt4, this.resetGameText]);

		this.menuPanel.setPosition(
			this.scene.cameras.main.centerX - this.x,
			this.scene.cameras.main.centerY - this.y
		);

		this.menuPanel2.setPosition(
			this.scene.cameras.main.centerX - this.x,
			this.scene.cameras.main.centerY - this.y
		);

		this.menuPanel.setOrigin(0.5, 0.5);
		this.menuPanel2.setOrigin(0.5, 0.5);

		// Position menuOpt evenly in the center of the screen
		const centerX = this.scene.cameras.main.centerX;
		const centerY = this.scene.cameras.main.centerY;
		const spacing = 65; // Vertical spacing between options

		this.menuOpt1.setPosition(centerX - this.x, centerY - this.y - 1.5 * spacing);
		this.menuOpt1.setOrigin(0.5, 0.5);

		this.fxText.setPosition(centerX - this.x, centerY - this.y - 1.5 * spacing);
		this.fxText.setOrigin(0.5, 0.5);

		this.menuOpt2.setPosition(centerX - this.x, centerY - this.y - 0.5 * spacing);
		this.menuOpt2.setOrigin(0.5, 0.5);

		this.musicText.setPosition(centerX - this.x, centerY - this.y - 0.5 * spacing);
		this.musicText.setOrigin(0.5, 0.5);

		this.menuOpt3.setPosition(centerX - this.x, centerY - this.y + 0.5 * spacing);
		this.menuOpt3.setOrigin(0.5, 0.5);

		this.exitToMapText.setPosition(centerX - this.x, centerY - this.y + 0.5 * spacing);
		this.exitToMapText.setOrigin(0.5, 0.5);

		this.menuOpt4.setPosition(centerX - this.x, centerY - this.y + 1.5 * spacing);
		this.menuOpt4.setOrigin(0.5, 0.5);

		this.resetGameText.setPosition(centerX - this.x, centerY - this.y + 1.5 * spacing);
		this.resetGameText.setOrigin(0.5, 0.5);

		const baseScene = this.scene.sourceSceneKey ? this.scene.scene.get(this.scene.sourceSceneKey) : null;
		const syncFxTint = () => {
			const muted = !!this.scene.game.playerData.isFxMuted;
			const tint = muted ? 0x6d6d6d : 0xffffff;
			this.menuOpt1.setTint(tint);
			this.fxText.setTint(tint);
		};
		const syncMusicTint = () => {
			const muted = !!this.scene.game.playerData.isMusicMuted;
			const tint = muted ? 0x6d6d6d : 0xffffff;
			this.menuOpt2.setTint(tint);
			this.musicText.setTint(tint);
		};
		syncFxTint();
		syncMusicTint();

		// Make menu options interactive
		this.menuOpt1.setInteractive().on('pointerdown', () => {
			this.scene.game.playerData.isFxMuted = !this.scene.game.playerData.isFxMuted;
			if (baseScene) {
				if (this.scene.game.playerData.isFxMuted && baseScene.disableFx) {
					baseScene.disableFx();
				} else if (!this.scene.game.playerData.isFxMuted && baseScene.enableFx) {
					baseScene.enableFx();
				}
			}
			syncFxTint();
		}).on('pointerover', () => {
			this.scene.tweens.add({ targets: this.menuOpt1, scaleX: 1.12, scaleY: 1.12, duration: 120, yoyo: true, ease: 'Back.Out' });
		}).on('pointerout', () => {
			this.menuOpt1.setScale(1);
		});
		this.menuOpt2.setInteractive().on('pointerdown', () => {
			this.scene.game.playerData.isMusicMuted = !this.scene.game.playerData.isMusicMuted;
			if (baseScene) {
				if (this.scene.game.playerData.isMusicMuted && baseScene.disableMusic) {
					baseScene.disableMusic();
				} else if (!this.scene.game.playerData.isMusicMuted && baseScene.enableMusic) {
					baseScene.enableMusic();
				}
			}
			syncMusicTint();
		}).on('pointerover', () => {
			this.scene.tweens.add({ targets: this.menuOpt2, scaleX: 1.12, scaleY: 1.12, duration: 120, yoyo: true, ease: 'Back.Out' });
		}).on('pointerout', () => {
			this.menuOpt2.setScale(1);
		});
		this.menuOpt3.setInteractive().on('pointerdown', () => console.log('Exit to map clicked')).on('pointerover', () => {
			this.scene.tweens.add({ targets: this.menuOpt3, scaleX: 1.12, scaleY: 1.12, duration: 120, yoyo: true, ease: 'Back.Out' });
		}).on('pointerout', () => {
			this.menuOpt3.setScale(1);
		});
		this.menuOpt4.setInteractive().on('pointerdown', () => console.log('Reset Game clicked')).on('pointerover', () => {
			this.scene.tweens.add({ targets: this.menuOpt4, scaleX: 1.12, scaleY: 1.12, duration: 120, yoyo: true, ease: 'Back.Out' });
		}).on('pointerout', () => {
			this.menuOpt4.setScale(1);
		});

		// Position subOpt evenly in the center of menuPanel2
		const subSpacing = 70; // Vertical spacing for sub options

		this.subOpt1.setPosition(centerX - this.x, centerY - this.y - 0.2 * subSpacing);
		this.subOpt1.setOrigin(0.5, 0.5);

		this.subOpt2.setPosition(centerX - this.x, centerY - this.y + 0.8 * subSpacing);
		this.subOpt2.setOrigin(0.5, 0.5);

		// Position texts to fit within MenuPanel2 and over SubOpt
		this.areYouSure.setPosition(centerX - this.x, centerY - this.y - 90);
		this.areYouSure.setOrigin(0.5, 0.5);

		this.yes.setPosition(centerX - this.x, centerY - this.y - 0.2 * subSpacing);
		this.yes.setOrigin(0.5, 0.5);

		this.no.setPosition(centerX - this.x, centerY - this.y + 0.8 * subSpacing);
		this.no.setOrigin(0.5, 0.5);

		this.menuPanel2Group.setVisible(false);

		this.mainMenuGroup.setVisible(false);	

		this.menuBtn.setInteractive().on('pointerdown', function(pointer, localX, localY, event){
			console.log("Menu button clicked");
			this.scene.IsPaused = !this.scene.IsPaused;

			if (this.scene.IsPaused) {
				this.scene.scene.manager.scenes.forEach((sceneInstance) => {
					if (sceneInstance && sceneInstance.scene && sceneInstance.scene.key !== "SettingsOverlay" && sceneInstance.scene.isActive()) {
						sceneInstance.scene.pause();
					}
				});
				this.mainMenuGroup.setVisible(true);
			} else {
				this.scene.scene.manager.scenes.forEach((sceneInstance) => {
					if (sceneInstance && sceneInstance.scene && sceneInstance.scene.key !== "SettingsOverlay" && sceneInstance.scene.isPaused()) {
						sceneInstance.scene.resume();
					}
				});
				this.mainMenuGroup.setVisible(false);
			}
		}, this);

	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
