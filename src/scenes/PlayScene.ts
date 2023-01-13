
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
import AlignCanvas from "../components/AlignCanvas";
import LeftCarousel from "./prefabs/LeftCarousel";
import TargetScreen from "./prefabs/TargetScreen";
import FrameSpot from "./prefabs/FrameSpot";
import FlourSpot from "./prefabs/FlourSpot";
import RibbonSpot from "./prefabs/RibbonSpot";
import CreamSpot from "./prefabs/CreamSpot";
import IconSpot from "./prefabs/IconSpot";
import ButtonComponent from "../components/button/ButtonComponent";
import Trash from "./prefabs/Trash";
import RightCarousel from "./prefabs/RightCarousel";
import Timer from "./prefabs/Timer";
import AlarmLight from "./prefabs/AlarmLight";
import ResultScreen from "./prefabs/ResultScreen";
import Desk from "./prefabs/Desk";
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

		// leftCarousel
		const leftCarousel = new LeftCarousel(this, 0, 25);
		this.add.existing(leftCarousel);

		// targetScreen
		const targetScreen = new TargetScreen(this, 0, 0);
		this.add.existing(targetScreen);

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

		// rightCarousel
		const rightCarousel = new RightCarousel(this, 698, 55);
		this.add.existing(rightCarousel);

		// timer
		const timer = new Timer(this, 7, 339);
		this.add.existing(timer);

		// alarmLight
		const alarmLight = new AlarmLight(this, 17, 304);
		this.add.existing(alarmLight);

		// resultScreen
		const resultScreen = new ResultScreen(this, 685, 6);
		this.add.existing(resultScreen);

		// desk
		const desk = new Desk(this, 658, 245);
		this.add.existing(desk);

		// circleFrame
		const circleFrame = this.add.image(113, 347, "material", "cirle_frame_normal.png");

		// image_1
		const image_1 = this.add.image(89, 368, "material", "square_frame_normal.png");
		image_1.setOrigin(0, 0);

		// image_2
		const image_2 = this.add.image(89, 294, "material", "heart_frame_normal.png");
		image_2.setOrigin(0, 0);

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

		// circleFrame (components)
		const circleFrameButtonComponent = new ButtonComponent(circleFrame);
		circleFrameButtonComponent.normFrame = {"key":"material","frame":"cirle_frame_normal.png"};
		circleFrameButtonComponent.overFrame = {"key":"material","frame":"cirle_frame_up.png"};
		circleFrameButtonComponent.downFrame = {"key":"material","frame":"cirle_frame_down.png"};
		circleFrameButtonComponent.callback = this.circle;

		// image_1 (components)
		const image_1ButtonComponent = new ButtonComponent(image_1);
		image_1ButtonComponent.normFrame = {"key":"material","frame":"square_frame_normal.png"};
		image_1ButtonComponent.overFrame = {"key":"material","frame":"square_frame_up.png"};
		image_1ButtonComponent.downFrame = {"key":"material","frame":"square_frame_down.png"};
		image_1ButtonComponent.callback = this.square;

		// image_2 (components)
		const image_2ButtonComponent = new ButtonComponent(image_2);
		image_2ButtonComponent.normFrame = {"key":"material","frame":"heart_frame_normal.png"};
		image_2ButtonComponent.overFrame = {"key":"material","frame":"heart_frame_up.png"};
		image_2ButtonComponent.downFrame = {"key":"material","frame":"heart_frame_down.png"};
		image_2ButtonComponent.callback = this.heart;

		this.leftBtn = leftBtn;
		this.rightBtn = rightBtn;
		this.circleFrame = circleFrame;

		this.events.emit("scene-awake");
	}

	private leftBtn!: Phaser.GameObjects.Image;
	private rightBtn!: Phaser.GameObjects.Image;
	private circleFrame!: Phaser.GameObjects.Image;

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();
	}

	left(){
	}

	right(){
	}

circle(){}
square(){}
heart(){}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
