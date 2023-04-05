
// You can write more code here
import GameManager from "../GameManager";
import GameVars from "../GameVars";
import { LEVEL } from "../GameConstants";
/* START OF COMPILED CODE */

import Phaser from "phaser";
import PreloadText from "../components/PreloadText";
import AlignCanvas from "../components/AlignCanvas";
/* START-USER-IMPORTS */
import assetPackUrl from "../../static/assets/asset-pack.json";


/* END-USER-IMPORTS */

export default class Preload extends Phaser.Scene {

	constructor() {
		super("Preload");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	editorCreate(): void {

		// guapen
		const guapen = this.add.image(400, 219, "guapen");
		guapen.scaleX = 0.5915891440784282;
		guapen.scaleY = 0.5915891440784282;

		// progress
		const progress = this.add.text(400, 349, "", {});
		progress.setOrigin(0.5, 0.5);
		progress.text = "0%";
		progress.setStyle({ "fontSize": "30px" });

		// CanvasRef
		const canvasRef = this.add.image(0, 0, "canvasIcon");
		canvasRef.visible = false;

		// progress (components)
		new PreloadText(progress);

		// canvasRef (components)
		new AlignCanvas(canvasRef);

		this.events.emit("scene-awake");
	}

	/* START-USER-CODE */

	// Write your code here

	preload() {

		this.editorCreate();
		GameManager.setCurrentScene(this);
		this.load.pack("asset-pack", assetPackUrl);
		this.load.on(Phaser.Loader.Events.COMPLETE, () => {
			window.parent.postMessage('loadDone', '*');
			/*if(!this.game.device.os.desktop){
				window.addEventListener("message", (e) => {

					GameVars.level = e.data ? e.data: LEVEL.EASY;
					GameManager.enterPlayScene();
				});
			}else{
				//GameVars.level = LEVEL.ADVANCED;
				//GameManager.enterPlayScene();
				//GameManager.enterMenuScene();
			}*/
			window.addEventListener("message", (e) => {

				GameVars.level = e.data ? e.data: LEVEL.EASY;
				GameManager.enterPlayScene();
			});
		});
	}

	create() {

		//this.scene.start("PlayScene");
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
