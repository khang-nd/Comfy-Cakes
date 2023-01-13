
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Timer extends Phaser.GameObjects.Container {

	constructor(scene: Phaser.Scene, x?: number, y?: number) {
		super(scene, x ?? 0, y ?? 0);

		// bg
		const bg = scene.add.image(0, 0, "cakes", "bg_timer.png");
		bg.setOrigin(0, 0);
		this.add(bg);

		// seeker
		const seeker = scene.add.image(10, 24, "cakes", "seek.png");
		seeker.setOrigin(0.5, 1);
		this.add(seeker);

		this.seeker = seeker;

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	private seeker: Phaser.GameObjects.Image;

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
