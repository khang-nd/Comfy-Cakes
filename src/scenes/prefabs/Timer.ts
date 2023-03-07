
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Timer extends Phaser.GameObjects.Container {

	constructor(scene: Phaser.Scene, x?: number, y?: number) {
		super(scene, x ?? 0, y ?? 0);

		// bg
		const bg = scene.add.image(0, 0, "comfy-spritesheet", "bg_timer.png");
		bg.setOrigin(0, 0);
		this.add(bg);

		// seeker
		const seeker = scene.add.image(10, 24, "comfy-spritesheet", "seek.png");
		seeker.setOrigin(0.5, 1);
		this.add(seeker);

		this.seeker = seeker;

		/* START-USER-CTR-CODE */
		// Write your code here.
		
		/* END-USER-CTR-CODE */
	}

	private seeker: Phaser.GameObjects.Image;

	/* START-USER-CODE */
	private timedEvent: any;
	private isStart: boolean = false;
	// Write your code here.
	start(){
		this.timedEvent = this.scene.time.addEvent({ delay: 20, callback: this.onEvent, callbackScope: this, loop: true});
		this.isStart = true;
	}
	stop(){
		//this.timedEvent.remove(false);
		this.isStart = false;
		this.seeker.x = 5;
	}

	pause(){
		this.timedEvent.paused = !this.timedEvent.paused;
		this.isStart = false;
	}

	reset(){
		this.seeker.x = 5;
	}

	onEvent(){
		if(!this.isStart) return;
		this.seeker.x += 0.1;
		if(this.seeker.x > 40){
			this.seeker.x = 5;
			this.emit('reset');
		}
	}

	update(){
		/*this.seeker.x += 0.1;
		if(this.seeker.x > 40){
			this.seeker.x = 5;
		}*/
	}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
