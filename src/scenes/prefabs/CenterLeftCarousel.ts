
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class CenterLeftCarousel extends Phaser.GameObjects.Container {

	constructor(scene: Phaser.Scene, x?: number, y?: number) {
		super(scene, x ?? 0, y ?? 0);

		// sprite_1
		const sprite_1 = scene.add.sprite(0, 0, "machine", "center_l_carousel_02.png");
		sprite_1.setOrigin(0, 0);
		this.add(sprite_1);

		// sprite_2
		const sprite_2 = scene.add.sprite(104, 0, "machine", "center_l_carousel_02.png");
		sprite_2.setOrigin(0, 0);
		this.add(sprite_2);

		// sprite_3
		const sprite_3 = scene.add.sprite(101, 0, "machine", "center_l_carousel_02.png");
		sprite_3.setOrigin(0, 0);
		this.add(sprite_3);

		// sprite_4
		const sprite_4 = scene.add.sprite(304, 0, "machine", "center_l_carousel_02.png");
		sprite_4.setOrigin(0.5, 0);
		this.add(sprite_4);

		// sprite_5
		const sprite_5 = scene.add.sprite(403, 0, "machine", "center_l_carousel_02.png");
		sprite_5.setOrigin(0.5, 0);
		this.add(sprite_5);

		// sprite_6
		const sprite_6 = scene.add.sprite(636, 0, "machine", "center_r_carousel_00.png");
		sprite_6.setOrigin(0.5, 0);
		this.add(sprite_6);

		// sprite_7
		const sprite_7 = scene.add.sprite(503, 0, "machine", "center_l_carousel_02.png");
		sprite_7.setOrigin(0.5, 0);
		this.add(sprite_7);

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
