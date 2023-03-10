
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
import Desk from "./Desk";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class CenterLeftCarousel extends Phaser.GameObjects.Container {

	constructor(scene: Phaser.Scene, x?: number, y?: number) {
		super(scene, x ?? 0, y ?? 0);

		// carouselOne
		const carouselOne = scene.add.sprite(0, 0, "comfy-spritesheet", "center_l_carousel_00.png");
		carouselOne.setOrigin(0, 0);
		this.add(carouselOne);

		// carouselTwo
		const carouselTwo = scene.add.sprite(100, 0, "comfy-spritesheet", "center_l_carousel_00.png");
		carouselTwo.setOrigin(0, 0);
		this.add(carouselTwo);

		// carouselThree
		const carouselThree = scene.add.sprite(200, 0, "comfy-spritesheet", "center_l_carousel_00.png");
		carouselThree.setOrigin(0, 0);
		this.add(carouselThree);

		// carouselFour
		const carouselFour = scene.add.sprite(300, 0, "comfy-spritesheet", "center_l_carousel_00.png");
		carouselFour.setOrigin(0, 0);
		this.add(carouselFour);

		// carouselFive
		const carouselFive = scene.add.sprite(400, 0, "comfy-spritesheet", "center_l_carousel_00.png");
		carouselFive.setOrigin(0, 0);
		this.add(carouselFive);

		// carouselSix
		const carouselSix = scene.add.sprite(500, 0, "comfy-spritesheet", "center_l_carousel_00.png");
		carouselSix.setOrigin(0, 0);
		this.add(carouselSix);

		// desk
		const desk = new Desk(scene, 663, 7);
		this.add(desk);

		// carouselCenterRight
		const carouselCenterRight = scene.add.sprite(600, 0, "comfy-spritesheet", "center_r_carousel_00.png");
		carouselCenterRight.setOrigin(0, 0);
		this.add(carouselCenterRight);

		this.carouselOne = carouselOne;
		this.carouselTwo = carouselTwo;
		this.carouselThree = carouselThree;
		this.carouselFour = carouselFour;
		this.carouselFive = carouselFive;
		this.carouselSix = carouselSix;
		this.desk = desk;
		this.carouselCenterRight = carouselCenterRight;

		/* START-USER-CTR-CODE */
		// Write your code here.
		this.carouselCenterLeft.push(this.carouselOne);
		this.carouselCenterLeft.push(this.carouselTwo);
		this.carouselCenterLeft.push(this.carouselThree);
		this.carouselCenterLeft.push(this.carouselFour);
		this.carouselCenterLeft.push(this.carouselFive);
		this.carouselCenterLeft.push(this.carouselSix);
		this.scene.events.once(Phaser.Scenes.Events.UPDATE, this.start, this);
		this.scene.events.on(Phaser.Scenes.Events.UPDATE, this.update, this);

		/* END-USER-CTR-CODE */
	}

	private carouselOne: Phaser.GameObjects.Sprite;
	private carouselTwo: Phaser.GameObjects.Sprite;
	private carouselThree: Phaser.GameObjects.Sprite;
	private carouselFour: Phaser.GameObjects.Sprite;
	private carouselFive: Phaser.GameObjects.Sprite;
	private carouselSix: Phaser.GameObjects.Sprite;
	public desk: Desk;
	private carouselCenterRight: Phaser.GameObjects.Sprite;

	/* START-USER-CODE */
	private carouselCenterLeft:Array<Phaser.GameObjects.Sprite> = [];
	// Write your code here.
	start() {

	}

	update(time: number, delta: number) {
	}

	playNext(){
		this.carouselCenterRight.play('center-right-animation', true);
		for(let i = 0; i < this.carouselCenterLeft.length; i++){
			this.carouselCenterLeft[i].play('center-left-animation', true);
		}
	}

	playPrev(){
		this.carouselCenterRight.playReverse('center-right-animation', true);
		for(let i = 0; i < this.carouselCenterLeft.length; i++){
			this.carouselCenterLeft[i].playReverse('center-left-animation', true);
		}
	}

	openDesk(){
		this.scene.add.tween({
			targets: this.desk,
			x: "-=124",
			duration: 200,
			yoyo: true,
		});
	}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
