
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class CenterLeftCarousel extends Phaser.GameObjects.Container {

	constructor(scene: Phaser.Scene, x?: number, y?: number) {
		super(scene, x ?? 0, y ?? 0);

		// sprite_1
		const sprite_1 = scene.add.sprite(0, 0, "machine", "center_l_carousel_01.png");
		sprite_1.setOrigin(0, 0);
		this.add(sprite_1);

		// sprite_2
		const sprite_2 = scene.add.sprite(206, 0, "machine", "center_l_carousel_01.png");
		sprite_2.setOrigin(0, 0);
		this.add(sprite_2);

		// sprite_3
		const sprite_3 = scene.add.sprite(412, 0, "machine", "center_l_carousel_01.png");
		sprite_3.setOrigin(0, 0);
		this.add(sprite_3);

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
