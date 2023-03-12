
// You can write more code here
import { LEVEL } from '../GameConstants';
import GameManager from "../GameManager";
import GameVars from '../GameVars';
/* START OF COMPILED CODE */

import Phaser from "phaser";
import PushOnClick from "../components/PushOnClick";
import AlignCanvas from "../components/AlignCanvas";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class MenuScene extends Phaser.Scene {

	constructor() {
		super("MenuScene");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	editorCreate(): void {

		// easy
		const easy = this.add.text(369, 224, "", {});
		easy.text = "Easy";

		// intermediate
		const intermediate = this.add.text(369, 269, "", {});
		intermediate.text = "Intermediate";

		// advanced
		const advanced = this.add.text(369, 314, "", {});
		advanced.text = "Advanced";

		// CanvasRef
		const canvasRef = this.add.image(0, 0, "canvasIcon");
		canvasRef.visible = false;

		// easy (components)
		new PushOnClick(easy);

		// intermediate (components)
		new PushOnClick(intermediate);

		// advanced (components)
		new PushOnClick(advanced);

		// canvasRef (components)
		new AlignCanvas(canvasRef);

		this.easy = easy;
		this.intermediate = intermediate;
		this.advanced = advanced;
		this.canvasRef = canvasRef;

		this.events.emit("scene-awake");
	}

	private easy!: Phaser.GameObjects.Text;
	private intermediate!: Phaser.GameObjects.Text;
	private advanced!: Phaser.GameObjects.Text;
	private canvasRef!: Phaser.GameObjects.Image;

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();
		GameManager.setCurrentScene(this);
		this.easy.on("pointerdown", () => {
			window.parent.postMessage(LEVEL.EASY, '*');
			GameVars.level = LEVEL.EASY;
			GameManager.enterPlayScene();

		});

		this.intermediate.on("pointerdown", () => {
			window.parent.postMessage(LEVEL.INTERMEDIATE, '*');
			GameVars.level = LEVEL.INTERMEDIATE;
			GameManager.enterPlayScene();

		});

		this.advanced.on("pointerdown", () => {
			window.parent.postMessage(LEVEL.ADVANCED, '*');
			GameVars.level = LEVEL.ADVANCED;
			GameManager.enterPlayScene();
		});

	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
