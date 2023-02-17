
// You can write more code here
import GameManager from "../GameManager";
import GameVars from "../GameVars";
import Model from "./prefabs/Model";
import Feature from "./prefabs/Feature";
import { CREAM, DECORATE, FEATURES, FLOUR, FRAME, LEVEL, RIBBON } from "../GameConstants";
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
		const leftCarousel = new LeftCarousel(this, 0, 19);
		this.add.existing(leftCarousel);

		// targetScreen
		const targetScreen = new TargetScreen(this, 0, 0);
		this.add.existing(targetScreen);

		// frameSpot
		const frameSpot = new FrameSpot(this, 123, 0);
		this.add.existing(frameSpot);
		frameSpot.visible = true;

		// flourSpot
		const flourSpot = new FlourSpot(this, 235, 0);
		this.add.existing(flourSpot);

		// ribbonSpot
		const ribbonSpot = new RibbonSpot(this, 331, 0);
		this.add.existing(ribbonSpot);

		// creamSpot
		const creamSpot = new CreamSpot(this, 433, 0);
		this.add.existing(creamSpot);

		// decorateSpot
		const decorateSpot = new IconSpot(this, 538, 0);
		this.add.existing(decorateSpot);

		// leftBtn
		const leftBtn = this.add.image(203, 433, "comfy-spritesheet", "left_normal.png");

		// rightBtn
		const rightBtn = this.add.image(278, 433, "comfy-spritesheet", "right_normal.png");

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
		const circleFrame = this.add.image(89, 333, "comfy-spritesheet", "cirle_frame_normal.png");
		circleFrame.setOrigin(0, 0);

		// squareFrame
		const squareFrame = this.add.image(89, 370, "comfy-spritesheet", "square_frame_normal.png");
		squareFrame.setOrigin(0, 0);

		// heartFrame
		const heartFrame = this.add.image(89, 296, "comfy-spritesheet", "heart_frame_normal.png");
		heartFrame.setOrigin(0, 0);

		// centerLeftCarousel
		const centerLeftCarousel = new CenterLeftCarousel(this, 0, 220);
		this.add.existing(centerLeftCarousel);

		// brownFlour
		const brownFlour = this.add.image(188, 297, "comfy-spritesheet", "brown_bin_normal.png");
		brownFlour.setOrigin(0, 0);

		// pinkFlour
		const pinkFlour = this.add.image(188, 334, "comfy-spritesheet", "pink_bin_normal.png");
		pinkFlour.setOrigin(0, 0);

		// yellowFlour
		const yellowFlour = this.add.image(188, 371, "comfy-spritesheet", "yellow_bin_normal.png");
		yellowFlour.setOrigin(0, 0);

		// redRibbon
		const redRibbon = this.add.image(290.6666666666667, 297, "comfy-spritesheet", "red_ribbon_normal.png");
		redRibbon.setOrigin(0, 0);

		// greenRibbon
		const greenRibbon = this.add.image(290.6666666666667, 371, "comfy-spritesheet", "green_ribbon_normal.png");
		greenRibbon.setOrigin(0, 0);

		// whiteRibbon
		const whiteRibbon = this.add.image(290.6666666666667, 334, "comfy-spritesheet", "white_ribbon_noraml.png");
		whiteRibbon.setOrigin(0, 0);

		// brownCream
		const brownCream = this.add.image(388, 297, "comfy-spritesheet", "brown_cream_normal.png");
		brownCream.setOrigin(0, 0);

		// pinkCream
		const pinkCream = this.add.image(388, 334, "comfy-spritesheet", "pink_frame_normal.png");
		pinkCream.setOrigin(0, 0);

		// yellowCream
		const yellowCream = this.add.image(388, 371, "comfy-spritesheet", "yellow_cream_normal.png");
		yellowCream.setOrigin(0, 0);

		// buttonsIcon
		const buttonsIcon = this.add.image(499, 340, "comfy-spritesheet", "three_icons_normal.png");

		// heartIcon
		const heartIcon = this.add.image(536, 340, "comfy-spritesheet", "heart_icon_normal.png");

		// emoticon
		const emoticon = this.add.image(538, 375, "comfy-spritesheet", "emoticon_normal.png");

		// leafIcon
		const leafIcon = this.add.image(500, 375, "comfy-spritesheet", "leaf_normal.png");

		// burn
		const burn = this.add.image(613, 326, "comfy-spritesheet", "burn_normal.png");

		// spice
		const spice = this.add.image(614, 380, "comfy-spritesheet", "spice_normal.png");

		// tasteSpot
		const tasteSpot = new FinalSpot(this, 641, 0);
		this.add.existing(tasteSpot);

		// myCake
		const myCake = this.add.container(117, 246);

		// tableCloth
		const tableCloth = this.add.image(-45, -21, "comfy-spritesheet", "tableCloths.png");
		tableCloth.setOrigin(0, 0);
		myCake.add(tableCloth);

		// canvasRef (components)
		new AlignCanvas(canvasRef);

		// leftBtn (components)
		const leftBtnButtonComponent = new ButtonComponent(leftBtn);
		leftBtnButtonComponent.normFrame = {"key":"comfy-spritesheet","frame":"left_normal.png"};
		leftBtnButtonComponent.overFrame = {"key":"comfy-spritesheet","frame":"left_over.png"};
		leftBtnButtonComponent.downFrame = {"key":"comfy-spritesheet","frame":"left_down.png"};
		leftBtnButtonComponent.callback = this.playPrev;
		leftBtnButtonComponent.context = this;

		// rightBtn (components)
		const rightBtnButtonComponent = new ButtonComponent(rightBtn);
		rightBtnButtonComponent.normFrame = {"key":"comfy-spritesheet","frame":"right_normal.png"};
		rightBtnButtonComponent.overFrame = {"key":"comfy-spritesheet","frame":"right_over.png"};
		rightBtnButtonComponent.downFrame = {"key":"comfy-spritesheet","frame":"right_down.png"};
		rightBtnButtonComponent.callback = this.playNext;
		rightBtnButtonComponent.context = this;

		// circleFrame (components)
		const circleFrameButtonComponent = new ButtonComponent(circleFrame);
		circleFrameButtonComponent.normFrame = {"key":"comfy-spritesheet","frame":"cirle_frame_normal.png"};
		circleFrameButtonComponent.overFrame = {"key":"comfy-spritesheet","frame":"cirle_frame_up.png"};
		circleFrameButtonComponent.downFrame = {"key":"comfy-spritesheet","frame":"cirle_frame_down.png"};
		circleFrameButtonComponent.callback = this.circle;
		circleFrameButtonComponent.context = this;

		// squareFrame (components)
		const squareFrameButtonComponent = new ButtonComponent(squareFrame);
		squareFrameButtonComponent.normFrame = {"key":"comfy-spritesheet","frame":"square_frame_normal.png"};
		squareFrameButtonComponent.overFrame = {"key":"comfy-spritesheet","frame":"square_frame_up.png"};
		squareFrameButtonComponent.downFrame = {"key":"comfy-spritesheet","frame":"square_frame_down.png"};
		squareFrameButtonComponent.callback = this.square;
		squareFrameButtonComponent.context = this;

		// heartFrame (components)
		const heartFrameButtonComponent = new ButtonComponent(heartFrame);
		heartFrameButtonComponent.normFrame = {"key":"comfy-spritesheet","frame":"heart_frame_normal.png"};
		heartFrameButtonComponent.overFrame = {"key":"comfy-spritesheet","frame":"heart_frame_up.png"};
		heartFrameButtonComponent.downFrame = {"key":"comfy-spritesheet","frame":"heart_frame_down.png"};
		heartFrameButtonComponent.callback = this.heart;
		heartFrameButtonComponent.context = this;

		// brownFlour (components)
		const brownFlourButtonComponent = new ButtonComponent(brownFlour);
		brownFlourButtonComponent.normFrame = {"key":"comfy-spritesheet","frame":"brown_bin_normal.png"};
		brownFlourButtonComponent.overFrame = {"key":"comfy-spritesheet","frame":"brown_bin_up.png"};
		brownFlourButtonComponent.downFrame = {"key":"comfy-spritesheet","frame":"brown_bin_down.png"};
		brownFlourButtonComponent.callback = this.doBrownFlour;
		brownFlourButtonComponent.context = this;

		// pinkFlour (components)
		const pinkFlourButtonComponent = new ButtonComponent(pinkFlour);
		pinkFlourButtonComponent.normFrame = {"key":"comfy-spritesheet","frame":"pink_bin_normal.png"};
		pinkFlourButtonComponent.overFrame = {"key":"comfy-spritesheet","frame":"pink_bin_up.png"};
		pinkFlourButtonComponent.downFrame = {"key":"comfy-spritesheet","frame":"pink_bin_down.png"};
		pinkFlourButtonComponent.callback = this.doPinkFlour;
		pinkFlourButtonComponent.context = this;

		// yellowFlour (components)
		const yellowFlourButtonComponent = new ButtonComponent(yellowFlour);
		yellowFlourButtonComponent.normFrame = {"key":"comfy-spritesheet","frame":"yellow_bin_normal.png"};
		yellowFlourButtonComponent.overFrame = {"key":"comfy-spritesheet","frame":"yellow_bin_up.png"};
		yellowFlourButtonComponent.downFrame = {"key":"comfy-spritesheet","frame":"yellow_bin_down.png"};
		yellowFlourButtonComponent.callback = this.doYellowFlour;
		yellowFlourButtonComponent.context = this;

		// redRibbon (components)
		const redRibbonButtonComponent = new ButtonComponent(redRibbon);
		redRibbonButtonComponent.normFrame = {"key":"comfy-spritesheet","frame":"red_ribbon_normal.png"};
		redRibbonButtonComponent.overFrame = {"key":"comfy-spritesheet","frame":"red_ribbon_up.png"};
		redRibbonButtonComponent.downFrame = {"key":"comfy-spritesheet","frame":"red_ribbon_down.png"};
		redRibbonButtonComponent.callback = this.doRedRibbon;
		redRibbonButtonComponent.context = this;

		// greenRibbon (components)
		const greenRibbonButtonComponent = new ButtonComponent(greenRibbon);
		greenRibbonButtonComponent.normFrame = {"key":"comfy-spritesheet","frame":"green_ribbon_normal.png"};
		greenRibbonButtonComponent.overFrame = {"key":"comfy-spritesheet","frame":"green_ribbon_over.png"};
		greenRibbonButtonComponent.downFrame = {"key":"comfy-spritesheet","frame":"green_ribbon_down.png"};
		greenRibbonButtonComponent.callback = this.doGreenRibbon;
		greenRibbonButtonComponent.context = this;

		// whiteRibbon (components)
		const whiteRibbonButtonComponent = new ButtonComponent(whiteRibbon);
		whiteRibbonButtonComponent.normFrame = {"key":"comfy-spritesheet","frame":"white_ribbon_noraml.png"};
		whiteRibbonButtonComponent.overFrame = {"key":"comfy-spritesheet","frame":"white_ribbon_up.png"};
		whiteRibbonButtonComponent.downFrame = {"key":"comfy-spritesheet","frame":"white_ribbon_down.png"};
		whiteRibbonButtonComponent.callback = this.doWhiteRibbon;
		whiteRibbonButtonComponent.context = this;

		// brownCream (components)
		const brownCreamButtonComponent = new ButtonComponent(brownCream);
		brownCreamButtonComponent.normFrame = {"key":"comfy-spritesheet","frame":"brown_cream_normal.png"};
		brownCreamButtonComponent.overFrame = {"key":"comfy-spritesheet","frame":"brown_cream_up.png"};
		brownCreamButtonComponent.downFrame = {"key":"comfy-spritesheet","frame":"brown_cream_down.png"};
		brownCreamButtonComponent.callback = this.doBrownCream;
		brownCreamButtonComponent.context = this;

		// pinkCream (components)
		const pinkCreamButtonComponent = new ButtonComponent(pinkCream);
		pinkCreamButtonComponent.normFrame = {"key":"comfy-spritesheet","frame":"pink_frame_normal.png"};
		pinkCreamButtonComponent.overFrame = {"key":"comfy-spritesheet","frame":"pink_frame_up.png"};
		pinkCreamButtonComponent.downFrame = {"key":"comfy-spritesheet","frame":"pink_frame_down.png"};
		pinkCreamButtonComponent.callback = this.doPinkCream;
		pinkCreamButtonComponent.context = this;

		// yellowCream (components)
		const yellowCreamButtonComponent = new ButtonComponent(yellowCream);
		yellowCreamButtonComponent.normFrame = {"key":"comfy-spritesheet","frame":"yellow_cream_normal.png"};
		yellowCreamButtonComponent.overFrame = {"key":"comfy-spritesheet","frame":"yellow_cream_up.png"};
		yellowCreamButtonComponent.downFrame = {"key":"comfy-spritesheet","frame":"yellow_cream_down.png"};
		yellowCreamButtonComponent.callback = this.doYellowCream;
		yellowCreamButtonComponent.context = this;

		// buttonsIcon (components)
		const buttonsIconButtonComponent = new ButtonComponent(buttonsIcon);
		buttonsIconButtonComponent.normFrame = {"key":"comfy-spritesheet","frame":"three_icons_normal.png"};
		buttonsIconButtonComponent.overFrame = {"key":"comfy-spritesheet","frame":"three_icons_up.png"};
		buttonsIconButtonComponent.downFrame = {"key":"comfy-spritesheet","frame":"three_icons_down.png"};
		buttonsIconButtonComponent.callback = this.doButtonsIcon;
		buttonsIconButtonComponent.context = this;

		// heartIcon (components)
		const heartIconButtonComponent = new ButtonComponent(heartIcon);
		heartIconButtonComponent.normFrame = {"key":"comfy-spritesheet","frame":"heart_icon_normal.png"};
		heartIconButtonComponent.overFrame = {"key":"comfy-spritesheet","frame":"heart_icon_up.png"};
		heartIconButtonComponent.downFrame = {"key":"comfy-spritesheet","frame":"heart_icon_down.png"};
		heartIconButtonComponent.callback = this.doHeartIcon;
		heartIconButtonComponent.context = this;

		// emoticon (components)
		const emoticonButtonComponent = new ButtonComponent(emoticon);
		emoticonButtonComponent.normFrame = {"key":"comfy-spritesheet","frame":"emoticon_normal.png"};
		emoticonButtonComponent.overFrame = {"key":"comfy-spritesheet","frame":"emoticon_up.png"};
		emoticonButtonComponent.downFrame = {"key":"comfy-spritesheet","frame":"emoticon_down.png"};
		emoticonButtonComponent.callback = this.doEmoticon;
		emoticonButtonComponent.context = this;

		// leafIcon (components)
		const leafIconButtonComponent = new ButtonComponent(leafIcon);
		leafIconButtonComponent.normFrame = {"key":"comfy-spritesheet","frame":"leaf_normal.png"};
		leafIconButtonComponent.overFrame = {"key":"comfy-spritesheet","frame":"leaf_up.png"};
		leafIconButtonComponent.downFrame = {"key":"comfy-spritesheet","frame":"leaf_down.png"};
		leafIconButtonComponent.callback = this.doLeafIcon;
		leafIconButtonComponent.context = this;

		// burn (components)
		const burnButtonComponent = new ButtonComponent(burn);
		burnButtonComponent.normFrame = {"key":"comfy-spritesheet","frame":"burn_normal.png"};
		burnButtonComponent.overFrame = {"key":"comfy-spritesheet","frame":"burn_up.png"};
		burnButtonComponent.downFrame = {"key":"comfy-spritesheet","frame":"burn_down.png"};
		burnButtonComponent.callback = this.doBurn;
		burnButtonComponent.context = this;

		// spice (components)
		const spiceButtonComponent = new ButtonComponent(spice);
		spiceButtonComponent.normFrame = {"key":"comfy-spritesheet","frame":"spice_normal.png"};
		spiceButtonComponent.overFrame = {"key":"comfy-spritesheet","frame":"spice_up.png"};
		spiceButtonComponent.downFrame = {"key":"comfy-spritesheet","frame":"spice_down.png"};
		spiceButtonComponent.callback = this.doSpice;
		spiceButtonComponent.context = this;

		this.leftCarousel = leftCarousel;
		this.targetScreen = targetScreen;
		this.frameSpot = frameSpot;
		this.flourSpot = flourSpot;
		this.ribbonSpot = ribbonSpot;
		this.creamSpot = creamSpot;
		this.decorateSpot = decorateSpot;
		this.leftBtn = leftBtn;
		this.rightBtn = rightBtn;
		this.trash = trash;
		this.timer = timer;
		this.alarmLight = alarmLight;
		this.resultScreen = resultScreen;
		this.circleFrame = circleFrame;
		this.squareFrame = squareFrame;
		this.heartFrame = heartFrame;
		this.centerLeftCarousel = centerLeftCarousel;
		this.brownFlour = brownFlour;
		this.pinkFlour = pinkFlour;
		this.yellowFlour = yellowFlour;
		this.redRibbon = redRibbon;
		this.greenRibbon = greenRibbon;
		this.whiteRibbon = whiteRibbon;
		this.brownCream = brownCream;
		this.pinkCream = pinkCream;
		this.yellowCream = yellowCream;
		this.buttonsIcon = buttonsIcon;
		this.heartIcon = heartIcon;
		this.emoticon = emoticon;
		this.leafIcon = leafIcon;
		this.burn = burn;
		this.spice = spice;
		this.tasteSpot = tasteSpot;
		this.myCake = myCake;

		this.events.emit("scene-awake");
	}

	private leftCarousel!: LeftCarousel;
	private targetScreen!: TargetScreen;
	private frameSpot!: FrameSpot;
	private flourSpot!: FlourSpot;
	private ribbonSpot!: RibbonSpot;
	private creamSpot!: CreamSpot;
	private decorateSpot!: IconSpot;
	private leftBtn!: Phaser.GameObjects.Image;
	private rightBtn!: Phaser.GameObjects.Image;
	private trash!: Trash;
	private timer!: Timer;
	private alarmLight!: AlarmLight;
	private resultScreen!: ResultScreen;
	private circleFrame!: Phaser.GameObjects.Image;
	private squareFrame!: Phaser.GameObjects.Image;
	private heartFrame!: Phaser.GameObjects.Image;
	private centerLeftCarousel!: CenterLeftCarousel;
	private brownFlour!: Phaser.GameObjects.Image;
	private pinkFlour!: Phaser.GameObjects.Image;
	private yellowFlour!: Phaser.GameObjects.Image;
	private redRibbon!: Phaser.GameObjects.Image;
	private greenRibbon!: Phaser.GameObjects.Image;
	private whiteRibbon!: Phaser.GameObjects.Image;
	private brownCream!: Phaser.GameObjects.Image;
	private pinkCream!: Phaser.GameObjects.Image;
	private yellowCream!: Phaser.GameObjects.Image;
	private buttonsIcon!: Phaser.GameObjects.Image;
	private heartIcon!: Phaser.GameObjects.Image;
	private emoticon!: Phaser.GameObjects.Image;
	private leafIcon!: Phaser.GameObjects.Image;
	private burn!: Phaser.GameObjects.Image;
	private spice!: Phaser.GameObjects.Image;
	private tasteSpot!: FinalSpot;
	private myCake!: Phaser.GameObjects.Container;

	/* START-USER-CODE */

	// Write your code here
	private model: Model;
	private useFeature: Feature;
	private modelImage: Phaser.GameObjects.Container;
	private currentFrame: FRAME;
	//private frameSprite:Phaser.GameObjects.Sprite;
	//private ribbonSprite: Phaser.GameObjects.Image;
	create() {

		this.editorCreate();
		GameManager.setCurrentScene(this);
		this.model = new Model(GameVars.level);
		this.useFeature = new Feature();
		this.createModelImage();
		this.createControl();
	}

	playPrev() {
		this.leftCarousel.playReverse('left-next', true);
		this.centerLeftCarousel.playPrev();

		this.add.tween({
			targets: this.myCake,
			x: "-=100",
			duration: 200,
		});
	}

	playNext() {
		this.leftCarousel.play('left-next', true);
		this.centerLeftCarousel.playNext();

		this.add.tween({
			targets: this.myCake,
			x: "+=100",
			duration: 200,
		});
	}

	createControl() {
		switch (GameVars.level) {
			case LEVEL.EASY:
				this.frameSpot.x = this.flourSpot.x;
				this.heartFrame.x = this.brownFlour.x;
				this.circleFrame.x = this.pinkFlour.x;
				this.squareFrame.x = this.yellowFlour.x;

				this.flourSpot.x = this.ribbonSpot.x;
				this.brownFlour.x = this.redRibbon.x;
				this.pinkFlour.x = this.whiteRibbon.x;
				this.yellowFlour.x = this.greenRibbon.x;

				this.hideRibbonControl();
				this.hideTasteControl();
				this.hideTimerControl();
				this.myCake.x = this.frameSpot.x;

				break;
			case LEVEL.INTERMEDIATE:
				this.hideTasteControl();
				break;
			case LEVEL.ADVANCED:
				break;
		}
	}

	createModelImage() {
		let frame, flour, ribbon, cream, decorate, taste;
		/*for(let i = 0; i < this.model.features.length; i++){
			if(this.model.features[i].frame){
				console.log('create frame...');
			}
			if(this.model.features[i].flour){
				//console.log('create flour...');

			}
			if(this.model.features[i].ribbon){
				console.log('create ribbon...');
			}
			if(this.model.features[i].cream){
				console.log('create cream...');
			}
			if(this.model.features[i].decorate){
				console.log('create decorate...');
			}
			if(this.model.features[i].taste){
				console.log('create taste...');
			}
		}*/
		this.targetScreen.createImage(this.model);
	}

	showTimerControl() {
		this.alarmLight.visible = true;
		this.timer.visible = true;
	}

	hideTimerControl() {
		this.alarmLight.visible = false;
		this.timer.visible = false;
	}

	showFrameControl() {
		this.frameSpot.visible = true;
		this.heartFrame.visible = true;
		this.circleFrame.visible = true;
		this.squareFrame.visible = true;
	}

	hideFrameControl() {
		this.frameSpot.visible = false;
		this.heartFrame.visible = false;
		this.circleFrame.visible = false;
		this.squareFrame.visible = false;
	}

	showFlourControl() {
		this.flourSpot.visible = true;
		this.brownFlour.visible = true;
		this.pinkFlour.visible = true;
		this.yellowFlour.visible = true;
	}

	hideFlourControl() {
		this.flourSpot.visible = false;
		this.brownFlour.visible = false;
		this.pinkFlour.visible = false;
		this.yellowFlour.visible = false;
	}

	showRibbonControl() {
		this.ribbonSpot.visible = true;
		this.redRibbon.visible = true;
		this.whiteRibbon.visible = true;
		this.greenRibbon.visible = true;
	}

	hideRibbonControl() {
		this.ribbonSpot.visible = false;
		this.redRibbon.visible = false;
		this.whiteRibbon.visible = false;
		this.greenRibbon.visible = false;
	}

	showCreamControl() {
		this.creamSpot.visible = true;
		this.brownCream.visible = true;
		this.pinkCream.visible = true;
		this.yellowCream.visible = true;
	}

	hideCreamControl() {
		this.creamSpot.visible = false;
		this.brownCream.visible = false;
		this.pinkCream.visible = false;
		this.yellowCream.visible = false;
	}

	showDecorateControl() {
		this.decorateSpot.visible = true;
		this.buttonsIcon.visible = true;
		this.leafIcon.visible = true;
		this.heartIcon.visible = true;
		this.emoticon.visible = true;
	}

	hideDecorateControl() {
		this.decorateSpot.visible = false;
		this.buttonsIcon.visible = false;
		this.leafIcon.visible = false;
		this.heartIcon.visible = false;
		this.emoticon.visible = false;
	}

	showTasteControl() {
		this.tasteSpot.visible = true;
		this.burn.visible = true;
		this.spice.visible = true;
	}

	hideTasteControl() {
		this.tasteSpot.visible = false;
		this.burn.visible = false;
		this.spice.visible = false;
	}



	createFlour(x: number, y: number, container: Phaser.GameObjects.Container) {

	}

	createRibbon(x: number, y: number, container: Phaser.GameObjects.Container) {

	}

	createCream(x: number, y: number, container: Phaser.GameObjects.Container) {

	}

	createDecorate(x: number, y: number, container: Phaser.GameObjects.Container) {

	}

	createTaste(x: number, y: number, container: Phaser.GameObjects.Container) {

	}


	circle() {
		this.useFeature.frame = FRAME.CIRCLE;
		if (this.myCake.length == 1) {
			let frame = this.add.sprite(this.frameSpot.x, this.frameSpot.y + this.frameSpot.displayHeight, 'comfy-spritesheet', 'circle_00.png');
			frame.scaleX = frame.scaleY = 0.4;

			this.add.tween({
				targets: frame,
				y: this.myCake.y,
				scaleX: 1,
				scaleY: 1,
				duration: 200,
				onComplete: () => {
					frame.play('circle-frame-animation', true);
					frame.on('animationcomplete', () => {
						this.myCake.add(frame);
						frame.x = 0;
						frame.y = 0;

					});
				},
				callbackScope: this
			});

		} else {
			let frame = (this.myCake.last as Phaser.GameObjects.Sprite);
			this.add.tween({
				targets: frame,
				y: -this.frameSpot.y - this.frameSpot.displayHeight,
				scaleX: 0.4,
				scaleY: 0.4,
				duration: 200,
				onComplete: () => {
					this.myCake.remove(frame);
					frame.removedFromScene();
					//this.myCake.removeAll();
					frame.destroy();
					frame = null;

					frame = this.add.sprite(this.frameSpot.x, this.frameSpot.y + this.frameSpot.displayHeight, 'comfy-spritesheet', 'circle_00.png');
					frame.scaleX = frame.scaleY = 0.4;

					this.add.tween({
						targets: frame,
						y: this.myCake.y,
						scaleX: 1,
						scaleY: 1,
						duration: 200,
						onComplete: () => {
							frame.play('circle-frame-animation', true);

							frame.on('animationcomplete', () => {
								this.myCake.add(frame);
								frame.x = 0;
								frame.y = 0;
							});

						},
						callbackScope: this
					});

				}
			});

		}

	}
	square() {
		this.useFeature.frame = FRAME.SQUARE;
		if (this.myCake.length == 1) {
			let frame = this.add.sprite(this.frameSpot.x, this.frameSpot.y + this.frameSpot.displayHeight, 'comfy-spritesheet', 'square_00.png');
			frame.scaleX = frame.scaleY = 0.4;

			this.add.tween({
				targets: frame,
				y: this.myCake.y,
				scaleX: 1,
				scaleY: 1,
				duration: 200,
				onComplete: () => {
					frame.play('square-frame-animation', true);
					frame.on('animationcomplete', () => {
						this.myCake.add(frame);
						frame.x = 0;
						frame.y = 0;
					});
				},
				callbackScope: this
			});

		} else {
			let frame = (this.myCake.last as Phaser.GameObjects.Sprite);
			this.add.tween({
				targets: frame,
				y: -this.frameSpot.y - this.frameSpot.displayHeight,
				scaleX: 0.4,
				scaleY: 0.4,
				duration: 200,
				onComplete: () => {
					this.myCake.remove(frame);
					frame.removedFromScene();
					//this.myCake.removeAll();
					frame.destroy();
					frame = null;

					frame = this.add.sprite(this.frameSpot.x, this.frameSpot.y + this.frameSpot.displayHeight, 'comfy-spritesheet', 'square_00.png');
					frame.scaleX = frame.scaleY = 0.4;

					this.add.tween({
						targets: frame,
						y: this.myCake.y,
						scaleX: 1,
						scaleY: 1,
						duration: 200,
						onComplete: () => {
							frame.play('square-frame-animation', true);
							frame.on('animationcomplete', () => {
								this.myCake.add(frame);
								frame.x = 0;
								frame.y = 0;
							});
						},
						callbackScope: this
					});

				}
			});

		}


	}
	heart() {
		this.useFeature.frame = FRAME.HEART;

		if (this.myCake.length == 1) {

			let frame = this.add.sprite(this.frameSpot.x, this.frameSpot.y + this.frameSpot.displayHeight, 'comfy-spritesheet', 'heart_00.png');
			frame.scaleX = frame.scaleY = 0.4;
			this.add.tween({
				targets: frame,
				y: this.myCake.y,
				scaleX: 1,
				scaleY: 1,
				duration: 200,
				onComplete: () => {
					frame.play('heart-frame-animation', true);

					frame.on('animationcomplete', () => {
						this.myCake.add(frame);
						frame.x = 0;
						frame.y = 0;
					});


				},
				callbackScope: this
			});

		} else {
			let frame = (this.myCake.last as Phaser.GameObjects.Sprite);
			this.add.tween({
				targets: frame,
				y: -this.frameSpot.y - this.frameSpot.displayHeight,
				scaleX: 0.4,
				scaleY: 0.4,
				duration: 200,
				onComplete: () => {
					this.myCake.remove(frame);
					frame.removedFromScene();
					//this.myCake.removeAll();
					frame.destroy();
					frame = null;

					frame = this.add.sprite(this.frameSpot.x, this.frameSpot.y + this.frameSpot.displayHeight, 'comfy-spritesheet', 'heart_00.png');
					frame.scaleX = frame.scaleY = 0.4;

					this.add.tween({
						targets: frame,
						y: this.myCake.y,
						scaleX: 1,
						scaleY: 1,
						duration: 200,
						onComplete: () => {
							frame.play('heart-frame-animation', true);
							frame.on('animationcomplete', () => {
								this.myCake.add(frame);
								frame.x = 0;
								frame.y = 0;
							});
						},
						callbackScope: this
					});

				}
			});

		}

	}


	doBrownFlour() {
		this.useFeature.flour = FLOUR.BROWN;
		let flour = this.add.sprite(this.flourSpot.x, this.flourSpot.y + this.flourSpot.displayHeight, 'comfy-spritesheet', 'brown_flour_00.png').setOrigin(0.5, 0);
		flour.play('brown-flour-animation', true);
		flour.on('animationcomplete', () => {
			flour.removedFromScene();
			flour.destroy();
		});
		let frame = (this.myCake.last as Phaser.GameObjects.Sprite);
		switch (this.useFeature.frame) {
			case FRAME.CIRCLE:
				frame.play('brown-circle-animation', true);
				break;
			case FRAME.HEART:
				frame.play('brown-heart-animation', true);
				break;
			case FRAME.SQUARE:
				frame.play('brown-square-animation', true);
				break;
		}

	}
	doPinkFlour() {
		this.useFeature.flour = FLOUR.PINK;
		let flour = this.add.sprite(this.flourSpot.x, this.flourSpot.y + this.flourSpot.displayHeight, 'comfy-spritesheet', 'pink_flour_00.png').setOrigin(0.5, 0);
		flour.play('pink-flour-animation', true);
		flour.on('animationcomplete', () => {
			flour.removedFromScene();
			flour.destroy();


		});
		let frame = (this.myCake.last as Phaser.GameObjects.Sprite);
		switch (this.useFeature.frame) {
			case FRAME.CIRCLE:
				frame.play('pink-circle-animation');
				break;
			case FRAME.HEART:
				frame.play('pink-heart-animation');
				break;
			case FRAME.SQUARE:
				frame.play('pink-square-animation');
				break;
		}
	}
	doYellowFlour() {
		this.useFeature.flour = FLOUR.YELLOW;
		let flour = this.add.sprite(this.flourSpot.x, this.flourSpot.y + this.flourSpot.displayHeight, 'comfy-spritesheet', 'yellow_flour_00.png').setOrigin(0.5, 0);
		flour.play('yellow-flour-animation', true);
		flour.on('animationcomplete', () => {
			flour.removedFromScene();
			flour.destroy();


		});
		let frame = (this.myCake.last as Phaser.GameObjects.Sprite);
		switch (this.useFeature.frame) {
			case FRAME.CIRCLE:
				frame.play('yellow-circle-animation');
				break;
			case FRAME.HEART:
				frame.play('yellow-heart-animation');
				break;
			case FRAME.SQUARE:
				frame.play('yellow-square-animation');
				break;
		}
	}


	doBurn() { }
	doSpice() { }
	doRedRibbon() {
		this.useFeature.ribbon = RIBBON.RED;
		let ribbon = this.add.sprite(this.ribbonSpot.x, this.ribbonSpot.y + this.ribbonSpot.displayHeight, 'comfy-spritesheet', 'red_ribbon_00.png').setOrigin(0.5);
		ribbon.play('red-ribbon-animation');
		ribbon.on('animationcomplete', () => {
			ribbon.removedFromScene();
			ribbon.destroy();


		});
	}
	doWhiteRibbon() {
		this.useFeature.ribbon = RIBBON.RED;
		let ribbon = this.add.sprite(this.ribbonSpot.x, this.ribbonSpot.y + this.ribbonSpot.displayHeight, 'comfy-spritesheet', 'white_ribbon_00.png').setOrigin(0.5);
		ribbon.play('white-ribbon-animation');
		ribbon.on('animationcomplete', () => {
			ribbon.removedFromScene();
			ribbon.destroy();


		});
	}
	doGreenRibbon() {
		this.useFeature.ribbon = RIBBON.RED;
		let ribbon = this.add.sprite(this.ribbonSpot.x, this.ribbonSpot.y + this.ribbonSpot.displayHeight, 'comfy-spritesheet', 'green_ribbon_00.png').setOrigin(0.5);
		ribbon.play('green-ribbon-animation');
		ribbon.on('animationcomplete', () => {
			ribbon.removedFromScene();
			ribbon.destroy();


		});
	}
	doBrownCream() {
		this.useFeature.cream = CREAM.BROWN;
		this.creamSpot.play('brown-spot-animation');
		this.creamSpot.on('animationcomplete', () => {
			let cream = this.add.sprite(this.creamSpot.x, this.creamSpot.y + this.creamSpot.displayHeight + 50, 'comfy-spritesheet', 'brown_line_00.png').setOrigin(0.5);
			cream.play('brown-cream-animation');
			cream.on('animationcomplete', () => {
				cream.removedFromScene();
				cream.destroy();
			});
			let last = (this.myCake.last as Phaser.GameObjects.Sprite);
			let creamSprite;
			switch(this.useFeature.frame){
				case FRAME.CIRCLE:
					creamSprite = this.add.sprite(0, -5 + this.myCake.length-1 * -45, 'comfy-spritesheet',  'brown_cream_circle.png');
					break;
				case FRAME.HEART:
					creamSprite = this.add.sprite(0, -5 + this.myCake.length-1 * -45, 'comfy-spritesheet',  'brown_cream_heart.png');
					break;
				case FRAME.SQUARE:
					creamSprite = this.add.sprite(0, -5 + this.myCake.length-1 * -45, 'comfy-spritesheet',  'brown_cream_square.png');
					break;
			}
			this.myCake.add(creamSprite);
			creamSprite.x = -1;
			creamSprite.y = -10;

		});

	}
	doPinkCream() {
		this.useFeature.cream = CREAM.PINK;
		this.creamSpot.play('pink-spot-animation');
		this.creamSpot.on('animationcomplete', () => {
			let cream = this.add.sprite(this.creamSpot.x, this.creamSpot.y + this.creamSpot.displayHeight + 50, 'comfy-spritesheet', 'pink_line_00.png').setOrigin(0.5);
			cream.play('pink-cream-animation');
			cream.on('animationcomplete', () => {
				cream.removedFromScene();
				cream.destroy();
			});
			let last = (this.myCake.last as Phaser.GameObjects.Sprite);
			let creamSprite;
			switch(this.useFeature.frame){
				case FRAME.CIRCLE:
					creamSprite = this.add.sprite(last.x, -5 + this.myCake.length-1 * -45, 'comfy-spritesheet',  'pink_cream_circle.png');
					break;
				case FRAME.HEART:
					creamSprite = this.add.sprite(last.x, -5 + this.myCake.length-1 * -45, 'comfy-spritesheet',  'pink_cream_heart.png');
					break;
				case FRAME.SQUARE:
					creamSprite = this.add.sprite(last.x, -5 + this.myCake.length-1 * -45, 'comfy-spritesheet',  'pink_cream_square.png');
					break;
			}
			this.myCake.add(creamSprite);
			creamSprite.x = -1;
			creamSprite.y = -10;
		});

	}
	doYellowCream() {
		this.useFeature.cream = CREAM.YELLOW;
		this.creamSpot.play('yellow-spot-animation');
		this.creamSpot.on('animationcomplete', () => {
			let cream = this.add.sprite(this.creamSpot.x, this.creamSpot.y + this.creamSpot.displayHeight + 50, 'comfy-spritesheet', 'yellow_line_00.png').setOrigin(0.5);
			cream.play('yellow-cream-animation');
			cream.on('animationcomplete', () => {
				cream.removedFromScene();
				cream.destroy();
			});
			let last = (this.myCake.last as Phaser.GameObjects.Sprite);
			let creamSprite;
			switch(this.useFeature.frame){
				case FRAME.CIRCLE:
					creamSprite = this.add.sprite(last.x, -5 + this.myCake.length-1 * -45, 'comfy-spritesheet',  'yellow_cream_circle.png');
					break;
				case FRAME.HEART:
					creamSprite = this.add.sprite(last.x, -5 + this.myCake.length-1 * -45, 'comfy-spritesheet',  'yellow_cream_heart.png');
					break;
				case FRAME.SQUARE:
					creamSprite = this.add.sprite(last.x, -5 + this.myCake.length-1 * -45, 'comfy-spritesheet',  'yellow_cream_square.png');
					break;
			}
			this.myCake.add(creamSprite);
			creamSprite.x = -1;
			creamSprite.y = -10;
		});

	}
	doButtonsIcon() { 
		this.useFeature.decorate = DECORATE.BUTTONS;
		let buttons = this.add.sprite(this.decorateSpot.x, this.decorateSpot.y + this.decorateSpot.displayHeight, 'comfy-spritesheet', 'buttons_00.png').setOrigin(0, 0.5);
		buttons.play('buttons-animation');
		this.add.tween({
			targets: buttons,
			y: this.myCake.y,
			duration: 200,
			onComplete: () => {
				
			},
			callbackScope: this
		});
		buttons.on('animationcomplete', () => {
			buttons.removedFromScene();
			buttons.destroy();
			let buttonsSprite = this.add.sprite(this.decorateSpot.x, this.decorateSpot.y, 'comfy-spritesheet', 'buttons_icon.png').setOrigin(0.5);
				this.myCake.add(buttonsSprite);
				buttonsSprite.x = buttonsSprite.y = 0;
		});
	}
	doHeartIcon() { 
		this.useFeature.decorate = DECORATE.HEART;
		let buttons = this.add.sprite(this.decorateSpot.x, this.decorateSpot.y + this.decorateSpot.displayHeight, 'comfy-spritesheet', 'heart_icon_00.png').setOrigin(0, 0.5);
		buttons.play('heart-animation');
		this.add.tween({
			targets: buttons,
			y: this.myCake.y,
			duration: 200,
			onComplete: () => {
				
			},
			callbackScope: this
		});
		buttons.on('animationcomplete', () => {
			buttons.removedFromScene();
			buttons.destroy();
			let buttonsSprite = this.add.sprite(this.decorateSpot.x, this.decorateSpot.y, 'comfy-spritesheet', 'heart_icon.png').setOrigin(0.5);
				this.myCake.add(buttonsSprite);
				buttonsSprite.x = buttonsSprite.y = 0;
		});
	}
	doEmoticon() { 
		this.useFeature.decorate = DECORATE.EMOTICON;
		let buttons = this.add.sprite(this.decorateSpot.x, this.decorateSpot.y + this.decorateSpot.displayHeight, 'comfy-spritesheet', 'emoticon_00.png').setOrigin(0, 0.5);
		buttons.play('emoticon-animation');
		this.add.tween({
			targets: buttons,
			y: this.myCake.y,
			duration: 200,
			onComplete: () => {
				
			},
			callbackScope: this
		});
		buttons.on('animationcomplete', () => {
			buttons.removedFromScene();
			buttons.destroy();
			let buttonsSprite = this.add.sprite(this.decorateSpot.x, this.decorateSpot.y, 'comfy-spritesheet', 'emoticon_icon.png').setOrigin(0.5);
				this.myCake.add(buttonsSprite);
				buttonsSprite.x = buttonsSprite.y = 0;
		});
	}
	doLeafIcon() { 
		this.useFeature.decorate = DECORATE.LEAF;
		let buttons = this.add.sprite(this.decorateSpot.x, this.decorateSpot.y + this.decorateSpot.displayHeight, 'comfy-spritesheet', 'leaf_00.png').setOrigin(0, 0.5);
		buttons.play('leaf-animation');
		this.add.tween({
			targets: buttons,
			y: this.myCake.y,
			duration: 200,
			onComplete: () => {
				
			},
			callbackScope: this
		});
		buttons.on('animationcomplete', () => {
			buttons.removedFromScene();
			buttons.destroy();
			let buttonsSprite = this.add.sprite(this.decorateSpot.x, this.decorateSpot.y, 'comfy-spritesheet', 'leaf_icon.png').setOrigin(0.5);
				this.myCake.add(buttonsSprite);
				buttonsSprite.x = buttonsSprite.y = 0;
		});
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
