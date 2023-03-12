
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Character extends Phaser.GameObjects.Container {

	constructor(scene: Phaser.Scene, x?: number, y?: number) {
		super(scene, x ?? -12, y ?? -96);

		// legLeft
		const legLeft = scene.add.sprite(-11, 79, "comfy-spritesheet", "leg_left.png");
		this.add(legLeft);

		// face
		const face = scene.add.sprite(16, -6, "comfy-spritesheet", "face.png");
		this.add(face);

		// hat
		const hat = scene.add.sprite(16, -75, "comfy-spritesheet", "head.png");
		this.add(hat);

		// eyeLeft
		const eyeLeft = scene.add.sprite(-18, -9, "comfy-spritesheet", "eye_left_03.png");
		this.add(eyeLeft);

		// eyeRight
		const eyeRight = scene.add.sprite(42, -9, "comfy-spritesheet", "eye_right_00.png");
		this.add(eyeRight);

		// body
		const body = scene.add.sprite(19, 58, "comfy-spritesheet", "body.png");
		this.add(body);

		// legRight
		const legRight = scene.add.sprite(41, 79, "comfy-spritesheet", "leg_right.png");
		this.add(legRight);

		// handRight
		const handRight = scene.add.sprite(48, 55, "comfy-spritesheet", "hand_right.png");
		this.add(handRight);

		// handLeft
		const handLeft = scene.add.sprite(-17, 44, "comfy-spritesheet", "hand_left.png");
		this.add(handLeft);

		// mouth
		const mouth = scene.add.sprite(15, 25, "comfy-spritesheet", "mouth_00.png");
		this.add(mouth);

		// noice
		const noice = scene.add.sprite(12, -1, "comfy-spritesheet", "noice.png");
		this.add(noice);

		// eyerushLeft
		const eyerushLeft = scene.add.sprite(-13, -28, "comfy-spritesheet", "eyesbrown_left.png");
		this.add(eyerushLeft);

		// eyerushRight
		const eyerushRight = scene.add.sprite(45, -25, "comfy-spritesheet", "eyesbrown_right.png");
		this.add(eyerushRight);

		// mustacheLeft
		const mustacheLeft = scene.add.sprite(-12, 12, "comfy-spritesheet", "mustache_left.png");
		this.add(mustacheLeft);

		// mustacheRight
		const mustacheRight = scene.add.sprite(44, 13, "comfy-spritesheet", "mustache_right.png");
		this.add(mustacheRight);

		this.eyeLeft = eyeLeft;
		this.eyeRight = eyeRight;
		this.mouth = mouth;

		/* START-USER-CTR-CODE */
		// Write your code here.
		setInterval(()=>{
			this.blink(1);
		},3000)
		/* END-USER-CTR-CODE */
	}

	private eyeLeft: Phaser.GameObjects.Sprite;
	private eyeRight: Phaser.GameObjects.Sprite;
	private mouth: Phaser.GameObjects.Sprite;

	/* START-USER-CODE */

	// Write your code here.
	talk(repeat: number){

		this.mouth.play({key: 'talk-animation', repeat: repeat});
		
	}

	blink(repeat: number){
		if(!this.visible) return;
		if(this.eyeLeft)this.eyeLeft.play({key:'eyeleft-animation' , repeat: repeat});
		
		if(this.eyeRight)this.eyeRight.play({key:'eyeright-animation', repeat: repeat});
		

	}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
