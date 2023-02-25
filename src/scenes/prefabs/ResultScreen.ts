
// You can write more code here
import { LEVEL } from "../../GameConstants";
import GameVars from "../../GameVars";
/* START OF COMPILED CODE */

import Phaser from "phaser";

import Bullet from "./Bullet";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class ResultScreen extends Phaser.GameObjects.Container {

	constructor(scene: Phaser.Scene, x?: number, y?: number) {
		super(scene, x ?? 0, y ?? 0);

		// resutlFrame
		const resutlFrame = scene.add.image(0, 0, "comfy-spritesheet", "result_tv.png");
		resutlFrame.setOrigin(0, 0);
		this.add(resutlFrame);

		// bulletOne
		const bulletOne = new Bullet(scene, 14, 22);
		bulletOne.visible = false;
		this.add(bulletOne);

		// bulletTwo
		const bulletTwo = new Bullet(scene, 35, 22);
		bulletTwo.visible = false;
		this.add(bulletTwo);

		// bulletThree
		const bulletThree = new Bullet(scene, 56, 22);
		bulletThree.visible = false;
		this.add(bulletThree);

		// bulletFour
		const bulletFour = new Bullet(scene, 77, 22);
		bulletFour.visible = false;
		this.add(bulletFour);

		// bulletFive
		const bulletFive = new Bullet(scene, 14, 42.5);
		bulletFive.visible = false;
		this.add(bulletFive);

		// bulletSix
		const bulletSix = new Bullet(scene, 35, 42.5);
		bulletSix.visible = false;
		this.add(bulletSix);

		this.bulletOne = bulletOne;
		this.bulletTwo = bulletTwo;
		this.bulletThree = bulletThree;
		this.bulletFour = bulletFour;
		this.bulletFive = bulletFive;
		this.bulletSix = bulletSix;

		/* START-USER-CTR-CODE */
		// Write your code here.
		this.bullets.push(this.bulletOne);
		this.bullets.push(this.bulletTwo);
		this.bullets.push(this.bulletThree);
		this.bullets.push(this.bulletFour);
		this.bullets.push(this.bulletFive);
		this.bullets.push(this.bulletSix);
		//if(GameVars.level == LEVEL.INTERMEDIATE || GameVars.level == LEVEL.ADVANCED) this.bullets.push(this.bulletSix);
		//this.scene.events.once(Phaser.Scenes.Events.UPDATE, this.start, this);
		//this.scene.events.on(Phaser.Scenes.Events.UPDATE, this.update, this);
		/* END-USER-CTR-CODE */
	}

	private bulletOne: Bullet;
	private bulletTwo: Bullet;
	private bulletThree: Bullet;
	private bulletFour: Bullet;
	private bulletFive: Bullet;
	private bulletSix: Bullet;

	/* START-USER-CODE */

	// Write your code here.
	private current: number = 0;
	private bullets:Array<Bullet> = [];
	start() {
		for(let i = 0; i < this.bullets.length; i++){
			this.bullets[i].visible = false;
			this.bullets[i].setFrame('bullet_icon.png');
		}
	}

	cakeNum(value: number){
		if(value > this.bullets.length) return;
		for(let i = 0; i < value; i++){
			this.bullets[i].visible = true;
		}
	}

	setStatusAt(id: number, status:boolean){
		let string = status ? "pass_icon.png" : "x_icon.png";
		this.bullets[id].setFrame(string);
		
		if(!status){
			this.bullets[id].alpha = 0;
			this.scene.add.tween({
				targets: this.bullets[id],
				alpha: 1,
				repeat: 2,
				duration: 200,
				onComplete: ()=>{
					this.bullets[id].setFrame('bullet_icon.png');
				}
			});
		}
		
	}

	

	update(time: number, delta: number) {
	}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
