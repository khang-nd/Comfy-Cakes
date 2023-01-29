
// You can write more code here
import GameManager from "../GameManager";
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
import CenterLeftCarousel from "./prefabs/CenterLeftCarousel";
import FinalSpot from "./prefabs/FinalSpot";
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
		const flourSpot = new FlourSpot(this, 235, 0);
		this.add.existing(flourSpot);

		// ribbonSpot
		const ribbonSpot = new RibbonSpot(this, 343, 0);
		this.add.existing(ribbonSpot);

		// creamSpot
		const creamSpot = new CreamSpot(this, 447, 0);
		this.add.existing(creamSpot);

		// iconSpot
		const iconSpot = new IconSpot(this, 547, 0);
		this.add.existing(iconSpot);

		// leftBtn
		const leftBtn = this.add.image(203, 433, "cakes", "left_normal.png");

		// rightBtn
		const rightBtn = this.add.image(278, 433, "cakes", "right_normal.png");

		// trash
		const trash = new Trash(this, 728, 161);
		this.add.existing(trash);

		// rightCarousel
		const rightCarousel = new RightCarousel(this, 698, 44);
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
		const desk = new Desk(this, 658, 233);
		this.add.existing(desk);

		// circleFrame
		const circleFrame = this.add.image(113, 347, "material", "cirle_frame_normal.png");

		// squareFrame
		const squareFrame = this.add.image(89, 368, "material", "square_frame_normal.png");
		squareFrame.setOrigin(0, 0);

		// heartFrame
		const heartFrame = this.add.image(89, 294, "material", "heart_frame_normal.png");
		heartFrame.setOrigin(0, 0);

		// centerLeftCarousel
		const centerLeftCarousel = new CenterLeftCarousel(this, 0, 220);
		this.add.existing(centerLeftCarousel);

		// brownFlour
		const brownFlour = this.add.image(212, 310, "material", "brown_bin_normal.png");

		// pinkFlour
		const pinkFlour = this.add.image(212, 347, "material", "pink_bin_normal.png");

		// yellowFlour
		const yellowFlour = this.add.image(212, 384, "material", "yellow_bin_normal.png");

		// redRibbon
		const redRibbon = this.add.image(313, 316, "material", "red_ribbon_normal.png");

		// greenRibbon
		const greenRibbon = this.add.image(314, 388, "material", "green_ribbon_normal.png");

		// whiteRibbon
		const whiteRibbon = this.add.image(314, 354, "material", "white_ribbon_noraml.png");

		// brownCream
		const brownCream = this.add.image(414, 314, "material", "brown_cream_normal.png");

		// pinkCream
		const pinkCream = this.add.image(414, 351, "material", "pink_frame_normal.png");

		// yellowCream
		const yellowCream = this.add.image(414, 388, "material", "yellow_cream_normal.png");

		// threeIcon
		const threeIcon = this.add.image(499, 340, "material", "three_icons_normal.png");

		// heartIcon
		const heartIcon = this.add.image(536, 340, "material", "heart_icon_normal.png");

		// emoticon
		const emoticon = this.add.image(538, 375, "material", "emoticon_normal.png");

		// leaf
		const leaf = this.add.image(500, 375, "material", "leaf_normal.png");

		// burn
		const burn = this.add.image(613, 326, "material", "burn_normal.png");

		// spice
		const spice = this.add.image(614, 380, "material", "spice_normal.png");

		// finalSpot
		const finalSpot = new FinalSpot(this, 641, 0);
		this.add.existing(finalSpot);

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

		// squareFrame (components)
		const squareFrameButtonComponent = new ButtonComponent(squareFrame);
		squareFrameButtonComponent.normFrame = {"key":"material","frame":"square_frame_normal.png"};
		squareFrameButtonComponent.overFrame = {"key":"material","frame":"square_frame_up.png"};
		squareFrameButtonComponent.downFrame = {"key":"material","frame":"square_frame_down.png"};
		squareFrameButtonComponent.callback = this.square;

		// heartFrame (components)
		const heartFrameButtonComponent = new ButtonComponent(heartFrame);
		heartFrameButtonComponent.normFrame = {"key":"material","frame":"heart_frame_normal.png"};
		heartFrameButtonComponent.overFrame = {"key":"material","frame":"heart_frame_up.png"};
		heartFrameButtonComponent.downFrame = {"key":"material","frame":"heart_frame_down.png"};
		heartFrameButtonComponent.callback = this.heart;

		// brownFlour (components)
		const brownFlourButtonComponent = new ButtonComponent(brownFlour);
		brownFlourButtonComponent.normFrame = {"key":"material","frame":"brown_bin_normal.png"};
		brownFlourButtonComponent.overFrame = {"key":"material","frame":"brown_bin_up.png"};
		brownFlourButtonComponent.downFrame = {"key":"material","frame":"brown_bin_down.png"};
		brownFlourButtonComponent.callback = this.doBrownFlour;

		// pinkFlour (components)
		const pinkFlourButtonComponent = new ButtonComponent(pinkFlour);
		pinkFlourButtonComponent.normFrame = {"key":"material","frame":"pink_bin_normal.png"};
		pinkFlourButtonComponent.overFrame = {"key":"material","frame":"pink_bin_up.png"};
		pinkFlourButtonComponent.downFrame = {"key":"material","frame":"pink_bin_down.png"};
		pinkFlourButtonComponent.callback = this.doPinkFlour;

		// yellowFlour (components)
		const yellowFlourButtonComponent = new ButtonComponent(yellowFlour);
		yellowFlourButtonComponent.normFrame = {"key":"material","frame":"yellow_bin_normal.png"};
		yellowFlourButtonComponent.overFrame = {"key":"material","frame":"yellow_bin_up.png"};
		yellowFlourButtonComponent.downFrame = {"key":"material","frame":"yellow_bin_down.png"};
		yellowFlourButtonComponent.callback = this.doYellowFlour;

		// redRibbon (components)
		const redRibbonButtonComponent = new ButtonComponent(redRibbon);
		redRibbonButtonComponent.normFrame = {"key":"material","frame":"red_ribbon_normal.png"};
		redRibbonButtonComponent.overFrame = {"key":"material","frame":"red_ribbon_up.png"};
		redRibbonButtonComponent.downFrame = {"key":"material","frame":"red_ribbon_down.png"};
		redRibbonButtonComponent.callback = this.doRedRibbon;

		// greenRibbon (components)
		const greenRibbonButtonComponent = new ButtonComponent(greenRibbon);
		greenRibbonButtonComponent.normFrame = {"key":"material","frame":"green_ribbon_normal.png"};
		greenRibbonButtonComponent.overFrame = {"key":"material","frame":"green_ribbon_over.png"};
		greenRibbonButtonComponent.downFrame = {"key":"material","frame":"green_ribbon_down.png"};
		greenRibbonButtonComponent.callback = this.doGreenRibbon;

		// whiteRibbon (components)
		const whiteRibbonButtonComponent = new ButtonComponent(whiteRibbon);
		whiteRibbonButtonComponent.normFrame = {"key":"material","frame":"white_ribbon_noraml.png"};
		whiteRibbonButtonComponent.overFrame = {"key":"material","frame":"white_ribbon_up.png"};
		whiteRibbonButtonComponent.downFrame = {"key":"material","frame":"white_ribbon_noraml.png"};
		whiteRibbonButtonComponent.callback = this.doWhiteRibbon;

		// brownCream (components)
		const brownCreamButtonComponent = new ButtonComponent(brownCream);
		brownCreamButtonComponent.normFrame = {"key":"material","frame":"brown_cream_normal.png"};
		brownCreamButtonComponent.overFrame = {"key":"material","frame":"brown_cream_up.png"};
		brownCreamButtonComponent.downFrame = {"key":"material","frame":"brown_cream_down.png"};
		brownCreamButtonComponent.callback = this.doBrownCream;

		// pinkCream (components)
		const pinkCreamButtonComponent = new ButtonComponent(pinkCream);
		pinkCreamButtonComponent.normFrame = {"key":"material","frame":"pink_frame_normal.png"};
		pinkCreamButtonComponent.overFrame = {"key":"material","frame":"pink_frame_up.png"};
		pinkCreamButtonComponent.downFrame = {"key":"material","frame":"pink_frame_down.png"};
		pinkCreamButtonComponent.callback = this.doPinkCream;

		// yellowCream (components)
		const yellowCreamButtonComponent = new ButtonComponent(yellowCream);
		yellowCreamButtonComponent.normFrame = {"key":"material","frame":"yellow_cream_normal.png"};
		yellowCreamButtonComponent.overFrame = {"key":"material","frame":"yellow_cream_up.png"};
		yellowCreamButtonComponent.downFrame = {"key":"material","frame":"yellow_cream_down.png"};
		yellowCreamButtonComponent.callback = this.doYellowCream;

		// threeIcon (components)
		const threeIconButtonComponent = new ButtonComponent(threeIcon);
		threeIconButtonComponent.normFrame = {"key":"material","frame":"three_icons_normal.png"};
		threeIconButtonComponent.overFrame = {"key":"material","frame":"three_icons_up.png"};
		threeIconButtonComponent.downFrame = {"key":"material","frame":"three_icons_down.png"};
		threeIconButtonComponent.callback = this.doThreeIcon;

		// heartIcon (components)
		const heartIconButtonComponent = new ButtonComponent(heartIcon);
		heartIconButtonComponent.normFrame = {"key":"material","frame":"heart_icon_normal.png"};
		heartIconButtonComponent.overFrame = {"key":"material","frame":"heart_icon_up.png"};
		heartIconButtonComponent.downFrame = {"key":"material","frame":"heart_icon_down.png"};
		heartIconButtonComponent.callback = this.doHeartIcon;

		// emoticon (components)
		const emoticonButtonComponent = new ButtonComponent(emoticon);
		emoticonButtonComponent.normFrame = {"key":"material","frame":"emoticon_normal.png"};
		emoticonButtonComponent.overFrame = {"key":"material","frame":"emoticon_up.png"};
		emoticonButtonComponent.downFrame = {"key":"material","frame":"emoticon_down.png"};
		emoticonButtonComponent.callback = this.doEmoticon;

		// leaf (components)
		const leafButtonComponent = new ButtonComponent(leaf);
		leafButtonComponent.normFrame = {"key":"material","frame":"emoticon_normal.png"};
		leafButtonComponent.overFrame = {"key":"material","frame":"emoticon_up.png"};
		leafButtonComponent.downFrame = {"key":"material","frame":"emoticon_down.png"};
		leafButtonComponent.callback = this.doLeaf;

		// burn (components)
		const burnButtonComponent = new ButtonComponent(burn);
		burnButtonComponent.normFrame = {"key":"material","frame":"burn_normal.png"};
		burnButtonComponent.overFrame = {"key":"material","frame":"burn_up.png"};
		burnButtonComponent.downFrame = {"key":"material","frame":"burn_down.png"};
		burnButtonComponent.callback = this.doBurn;

		// spice (components)
		const spiceButtonComponent = new ButtonComponent(spice);
		spiceButtonComponent.normFrame = {"key":"material","frame":"spice_normal.png"};
		spiceButtonComponent.overFrame = {"key":"material","frame":"spice_up.png"};
		spiceButtonComponent.downFrame = {"key":"material","frame":"spice_down.png"};
		spiceButtonComponent.callback = this.doSpice;

		this.leftBtn = leftBtn;
		this.rightBtn = rightBtn;
		this.circleFrame = circleFrame;
		this.squareFrame = squareFrame;
		this.heartFrame = heartFrame;
		this.brownFlour = brownFlour;
		this.pinkFlour = pinkFlour;
		this.yellowFlour = yellowFlour;
		this.redRibbon = redRibbon;
		this.greenRibbon = greenRibbon;
		this.whiteRibbon = whiteRibbon;
		this.brownCream = brownCream;
		this.pinkCream = pinkCream;
		this.yellowCream = yellowCream;
		this.threeIcon = threeIcon;
		this.heartIcon = heartIcon;
		this.emoticon = emoticon;
		this.leaf = leaf;
		this.burn = burn;
		this.spice = spice;

		this.events.emit("scene-awake");
	}

	private leftBtn!: Phaser.GameObjects.Image;
	private rightBtn!: Phaser.GameObjects.Image;
	private circleFrame!: Phaser.GameObjects.Image;
	private squareFrame!: Phaser.GameObjects.Image;
	private heartFrame!: Phaser.GameObjects.Image;
	private brownFlour!: Phaser.GameObjects.Image;
	private pinkFlour!: Phaser.GameObjects.Image;
	private yellowFlour!: Phaser.GameObjects.Image;
	private redRibbon!: Phaser.GameObjects.Image;
	private greenRibbon!: Phaser.GameObjects.Image;
	private whiteRibbon!: Phaser.GameObjects.Image;
	private brownCream!: Phaser.GameObjects.Image;
	private pinkCream!: Phaser.GameObjects.Image;
	private yellowCream!: Phaser.GameObjects.Image;
	private threeIcon!: Phaser.GameObjects.Image;
	private heartIcon!: Phaser.GameObjects.Image;
	private emoticon!: Phaser.GameObjects.Image;
	private leaf!: Phaser.GameObjects.Image;
	private burn!: Phaser.GameObjects.Image;
	private spice!: Phaser.GameObjects.Image;

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();
		GameManager.setCurrentScene(this);
	}

	left(){
	}

	right(){
	}



circle(){}
square(){}
heart(){}
doBrownFlour(){}
doPinkFlour(){}
doYellowFlour(){}
doEmoticon(){}
doLeaf(){}
doBurn(){}
doSpice(){}
doRedRibbon(){}
doWhiteRibbon(){}
doGreenRibbon(){}
doBrownCream(){}
doPinkCream(){}
doYellowCream(){}
doThreeIcon(){}
doHeartIcon(){}


	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
