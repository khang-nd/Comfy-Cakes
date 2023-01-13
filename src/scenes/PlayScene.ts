
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
import AlignCanvas from "../components/AlignCanvas";
import FrameSpot from "./prefabs/FrameSpot";
import FlourSpot from "./prefabs/FlourSpot";
import RibbonSpot from "./prefabs/RibbonSpot";
import CreamSpot from "./prefabs/CreamSpot";
import IconSpot from "./prefabs/IconSpot";
import ButtonComponent from "../components/button/ButtonComponent";
import Trash from "./prefabs/Trash";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class PlayScene extends Phaser.Scene {

	constructor() {
		super("PlayScene");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	editorCreate(): void {

		// CanvasRef
		const canvasRef = this.add.image(0, 0, "canvasIcon");
		canvasRef.visible = false;

		// bg
		this.add.image(400, 248, "bg");

		// frameSpot
		const frameSpot = new FrameSpot(this, 123, 0);
		this.add.existing(frameSpot);

		// flourSpot
		const flourSpot = new FlourSpot(this, 234, 0);
		this.add.existing(flourSpot);

		// ribbonSpot
		const ribbonSpot = new RibbonSpot(this, 340, 0);
		this.add.existing(ribbonSpot);

		// creamSpot
		const creamSpot = new CreamSpot(this, 438, 0);
		this.add.existing(creamSpot);

		// iconSpot
		const iconSpot = new IconSpot(this, 540, 0);
		this.add.existing(iconSpot);

		// leftBtn
		const leftBtn = this.add.image(203, 433, "cakes", "left_normal.png");

		// rightBtn
		const rightBtn = this.add.image(278, 433, "cakes", "right_normal.png");

		// trash
		const trash = new Trash(this, 728, 161);
		this.add.existing(trash);

		// canvasRef (components)
		new AlignCanvas(canvasRef);

		// leftBtn (components)
		const leftBtnButtonComponent = new ButtonComponent(leftBtn);
		leftBtnButtonComponent.normFrame = {"key":"cakes","frame":"left_normal.png"};
		leftBtnButtonComponent.overFrame = {"key":"cakes","frame":"left_over.png"};
		leftBtnButtonComponent.downFrame = {"key":"cakes","frame":"left_down.png"};
		leftBtnButtonComponent.callback = this.left;

		// rightBtn (components)
		const rightBtnButtonComponent = new ButtonComponent(rightBtn);
		rightBtnButtonComponent.normFrame = {"key":"cakes","frame":"right_normal.png"};
		rightBtnButtonComponent.overFrame = {"key":"cakes","frame":"right_over.png"};
		rightBtnButtonComponent.downFrame = {"key":"cakes","frame":"right_down.png"};
		rightBtnButtonComponent.callback = this.right;

		this.leftBtn = leftBtn;
		this.rightBtn = rightBtn;

		this.events.emit("scene-awake");
	}

	private leftBtn!: Phaser.GameObjects.Image;
	private rightBtn!: Phaser.GameObjects.Image;

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();
	}

	left(){
	}

	right(){
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
