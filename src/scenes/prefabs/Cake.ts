
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Cake extends Phaser.GameObjects.Container {

	constructor(scene: Phaser.Scene, x?: number, y?: number) {
		super(scene, x ?? 0, y ?? 0);

		// tableCloth
		const tableCloth = scene.add.image(0, 0, "comfy-spritesheet", "tableCloths.png");
		this.add(tableCloth);

		/* START-USER-CTR-CODE */
		scene.add.existing(this);
		for(let i = 0; i < 6 ; i++){
			this.features[i] = undefined;
		}
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	// Write your code here.
	public features:Array<string> = [];
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
