
// You can write more code here

/* START OF COMPILED CODE */

class TutorialPrefab extends Phaser.GameObjects.Image {

	constructor(scene, x, y, texture, frame) {
		const baseTexture = texture || "newTuto1";
		super(scene, x ?? 0, y ?? 0, baseTexture, frame);

		this.baseTextureKey = baseTexture;
		this.currentTextureKey = baseTexture;

		/* START-USER-CTR-CODE */
		this.scene.events.on("update", () => this.update());
		/* END-USER-CTR-CODE */
	}

	/** @type {boolean} */
	IsMovil = false;

	/* START-USER-CODE */

	static isMobileDevice(scene) {
		const device = scene?.game?.device || scene?.sys?.game?.device;
		return Boolean(device?.os?.android || device?.os?.iOS || device?.os?.iPhone || device?.os?.iPad);
	}

	static resolveTexture(scene, baseTexture) {
		const mobileTexture = `${baseTexture}Movil`;
		if (scene?.textures?.exists(mobileTexture)) {
			return mobileTexture;
		}

		return baseTexture;
	}

	applyTextureForPlatform() {
		const isMobile = TutorialPrefab.isMobileDevice(this.scene);
		const nextTextureKey = isMobile ? TutorialPrefab.resolveTexture(this.scene, this.baseTextureKey) : this.baseTextureKey;
		if (nextTextureKey !== this.currentTextureKey && this.scene?.textures?.exists(nextTextureKey)) {
			this.setTexture(nextTextureKey);
			this.currentTextureKey = nextTextureKey;
		}
	}

	initProximity(revealDistance = 230) {
		this.revealDistance = revealDistance;
		this.originalScaleX = this.scaleX;
		this.originalScaleY = this.scaleY;
		this.isVisibleByProximity = false;
		this.setAlpha(0);
		this.setVisible(false);
		this.setScale(this.originalScaleX * 0.85, this.originalScaleY * 0.85);
	}

	update() {
		if (!this.scene) {
			return;
		}

		this.applyTextureForPlatform();

		const isMobile = TutorialPrefab.isMobileDevice(this.scene);
		if (this.IsMovil && !isMobile) {
			this.scene.tweens.killTweensOf(this);
			this.isVisibleByProximity = false;
			this.setAlpha(0);
			this.setVisible(false);
			return;
		}

		if (this.revealDistance === undefined) {
			this.initProximity();
		}

		if (!this.scene.player) {
			return;
		}

		const distanceToPlayer = Phaser.Math.Distance.Between(this.scene.player.x, this.scene.player.y, this.x, this.y);
		const shouldBeVisible = distanceToPlayer <= this.revealDistance;

		if (shouldBeVisible && !this.isVisibleByProximity) {
			this.isVisibleByProximity = true;
			this.scene.tweens.killTweensOf(this);
			this.setVisible(true);
			this.setAlpha(0);
			this.setScale(this.originalScaleX * 0.85, this.originalScaleY * 0.85);

			this.scene.tweens.add({
				targets: this,
				alpha: 1,
				scaleX: this.originalScaleX,
				scaleY: this.originalScaleY,
				duration: 220,
				ease: "Sine.easeOut"
			});
		} else if (!shouldBeVisible && this.isVisibleByProximity) {
			this.isVisibleByProximity = false;
			this.scene.tweens.killTweensOf(this);

			this.scene.tweens.add({
				targets: this,
				alpha: 0,
				scaleX: this.originalScaleX * 0.85,
				scaleY: this.originalScaleY * 0.85,
				duration: 180,
				ease: "Sine.easeIn",
				onComplete: () => {
					this.setVisible(false);
				}
			});
		}
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
