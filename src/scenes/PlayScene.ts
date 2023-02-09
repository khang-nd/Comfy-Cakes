
// You can write more code here
import GameManager from "../GameManager";
import GameVars from "../GameVars";
import Model from "./prefabs/Model";
import { LEVEL } from "../GameConstants";
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
		const circleFrame = this.add.image(89, 333, "material", "cirle_frame_normal.png");
		circleFrame.setOrigin(0, 0);

		// squareFrame
		const squareFrame = this.add.image(89, 370, "material", "square_frame_normal.png");
		squareFrame.setOrigin(0, 0);

		// heartFrame
		const heartFrame = this.add.image(89, 296, "material", "heart_frame_normal.png");
		heartFrame.setOrigin(0, 0);

		// centerLeftCarousel
		const centerLeftCarousel = new CenterLeftCarousel(this, 0, 220);
		this.add.existing(centerLeftCarousel);

		// brownFlour
		const brownFlour = this.add.image(188, 297, "material", "brown_bin_normal.png");
		brownFlour.setOrigin(0, 0);

		// pinkFlour
		const pinkFlour = this.add.image(188, 334, "material", "pink_bin_normal.png");
		pinkFlour.setOrigin(0, 0);

		// yellowFlour
		const yellowFlour = this.add.image(188, 371, "material", "yellow_bin_normal.png");
		yellowFlour.setOrigin(0, 0);

		// redRibbon
		const redRibbon = this.add.image(290, 297, "material", "red_ribbon_normal.png");
		redRibbon.setOrigin(0, 0);

		// greenRibbon
		const greenRibbon = this.add.image(291, 369, "material", "green_ribbon_normal.png");
		greenRibbon.setOrigin(0, 0);

		// whiteRibbon
		const whiteRibbon = this.add.image(291, 335, "material", "white_ribbon_noraml.png");
		whiteRibbon.setOrigin(0, 0);

		// brownCream
		const brownCream = this.add.image(388, 297, "material", "brown_cream_normal.png");
		brownCream.setOrigin(0, 0);

		// pinkCream
		const pinkCream = this.add.image(388, 334, "material", "pink_frame_normal.png");
		pinkCream.setOrigin(0, 0);

		// yellowCream
		const yellowCream = this.add.image(388, 371, "material", "yellow_cream_normal.png");
		yellowCream.setOrigin(0, 0);

		// buttonsIcon
		const buttonsIcon = this.add.image(499, 340, "material", "three_icons_normal.png");

		// heartIcon
		const heartIcon = this.add.image(536, 340, "material", "heart_icon_normal.png");

		// emoticon
		const emoticon = this.add.image(538, 375, "material", "emoticon_normal.png");

		// leafIcon
		const leafIcon = this.add.image(500, 375, "material", "leaf_normal.png");

		// burn
		const burn = this.add.image(613, 326, "material", "burn_normal.png");

		// spice
		const spice = this.add.image(614, 380, "material", "spice_normal.png");

		// tasteSpot
		const tasteSpot = new FinalSpot(this, 641, 0);
		this.add.existing(tasteSpot);

		// currentBegin
		const currentBegin = this.add.container(132, 246);
		currentBegin.scaleX = 0.8;
		currentBegin.scaleY = 0.8;

		// frameBegin
		const frameBegin = this.add.image(-3, 4, "cakes", "brown_heart_06.png");
		currentBegin.add(frameBegin);

		// creamBegin
		const creamBegin = this.add.image(-4, -3, "cakes", "brown_cream_heart.png");
		currentBegin.add(creamBegin);

		// decorateBegin
		const decorateBegin = this.add.image(-8, -14, "material", "leaf_icon.png");
		currentBegin.add(decorateBegin);

		// currentInter
		const currentInter = this.add.container(132, 246);
		currentInter.scaleX = 0.8;
		currentInter.scaleY = 0.8;

		// frameOneInter
		const frameOneInter = this.add.image(-3, 4, "cakes", "brown_heart_06.png");
		currentInter.add(frameOneInter);

		// ribbonInter
		const ribbonInter = this.add.image(-2, -7, "cakes", "green_ribbon_heart.png");
		currentInter.add(ribbonInter);

		// frameTwoInter
		const frameTwoInter = this.add.image(-3, -18, "cakes", "brown_heart_06.png");
		currentInter.add(frameTwoInter);

		// creamInter
		const creamInter = this.add.image(-3, -26, "cakes", "brown_cream_heart.png");
		currentInter.add(creamInter);

		// decorateInter
		const decorateInter = this.add.image(-6, -33, "material", "leaf_icon.png");
		currentInter.add(decorateInter);

		// currentAdvanced
		const currentAdvanced = this.add.container(132, 246);
		currentAdvanced.scaleX = 0.8;
		currentAdvanced.scaleY = 0.8;

		// frameOneAdvanced
		const frameOneAdvanced = this.add.image(-3, 4, "cakes", "brown_heart_06.png");
		currentAdvanced.add(frameOneAdvanced);

		// ribbonOneAdvanced
		const ribbonOneAdvanced = this.add.image(-3, -6, "cakes", "green_ribbon_heart.png");
		currentAdvanced.add(ribbonOneAdvanced);

		// frameTwoAdvanced
		const frameTwoAdvanced = this.add.image(-3, -18, "cakes", "brown_heart_06.png");
		currentAdvanced.add(frameTwoAdvanced);

		// ribbonTwoAdvanced
		const ribbonTwoAdvanced = this.add.image(-3, -23, "cakes", "green_ribbon_heart.png");
		currentAdvanced.add(ribbonTwoAdvanced);

		// frameThreeAdvanced
		const frameThreeAdvanced = this.add.image(-3, -32, "cakes", "brown_heart_06.png");
		currentAdvanced.add(frameThreeAdvanced);

		// creamAdvanced
		const creamAdvanced = this.add.image(-4, -39, "cakes", "brown_cream_heart.png");
		currentAdvanced.add(creamAdvanced);

		// decorateAdvanced
		const decorateAdvanced = this.add.image(-8, -46, "material", "leaf_icon.png");
		currentAdvanced.add(decorateAdvanced);

		// canvasRef (components)
		new AlignCanvas(canvasRef);

		// leftBtn (components)
		const leftBtnButtonComponent = new ButtonComponent(leftBtn);
		leftBtnButtonComponent.normFrame = {"key":"cakes","frame":"left_normal.png"};
		leftBtnButtonComponent.overFrame = {"key":"cakes","frame":"left_over.png"};
		leftBtnButtonComponent.downFrame = {"key":"cakes","frame":"left_down.png"};
		leftBtnButtonComponent.callback = this.playPrev;
		leftBtnButtonComponent.context = this;

		// rightBtn (components)
		const rightBtnButtonComponent = new ButtonComponent(rightBtn);
		rightBtnButtonComponent.normFrame = {"key":"cakes","frame":"right_normal.png"};
		rightBtnButtonComponent.overFrame = {"key":"cakes","frame":"right_over.png"};
		rightBtnButtonComponent.downFrame = {"key":"cakes","frame":"right_down.png"};
		rightBtnButtonComponent.callback = this.playNext;
		rightBtnButtonComponent.context = this;

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

		// buttonsIcon (components)
		const buttonsIconButtonComponent = new ButtonComponent(buttonsIcon);
		buttonsIconButtonComponent.normFrame = {"key":"material","frame":"three_icons_normal.png"};
		buttonsIconButtonComponent.overFrame = {"key":"material","frame":"three_icons_up.png"};
		buttonsIconButtonComponent.downFrame = {"key":"material","frame":"three_icons_down.png"};
		buttonsIconButtonComponent.callback = this.doThreeIcon;

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

		// leafIcon (components)
		const leafIconButtonComponent = new ButtonComponent(leafIcon);
		leafIconButtonComponent.normFrame = {"key":"material","frame":"emoticon_normal.png"};
		leafIconButtonComponent.overFrame = {"key":"material","frame":"emoticon_up.png"};
		leafIconButtonComponent.downFrame = {"key":"material","frame":"emoticon_down.png"};
		leafIconButtonComponent.callback = this.doLeaf;

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
		this.currentBegin = currentBegin;
		this.frameBegin = frameBegin;
		this.creamBegin = creamBegin;
		this.decorateBegin = decorateBegin;
		this.currentInter = currentInter;
		this.frameOneInter = frameOneInter;
		this.ribbonInter = ribbonInter;
		this.frameTwoInter = frameTwoInter;
		this.creamInter = creamInter;
		this.decorateInter = decorateInter;
		this.currentAdvanced = currentAdvanced;
		this.frameOneAdvanced = frameOneAdvanced;
		this.ribbonOneAdvanced = ribbonOneAdvanced;
		this.frameTwoAdvanced = frameTwoAdvanced;
		this.ribbonTwoAdvanced = ribbonTwoAdvanced;
		this.frameThreeAdvanced = frameThreeAdvanced;
		this.creamAdvanced = creamAdvanced;
		this.decorateAdvanced = decorateAdvanced;

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
	private currentBegin!: Phaser.GameObjects.Container;
	private frameBegin!: Phaser.GameObjects.Image;
	private creamBegin!: Phaser.GameObjects.Image;
	private decorateBegin!: Phaser.GameObjects.Image;
	private currentInter!: Phaser.GameObjects.Container;
	private frameOneInter!: Phaser.GameObjects.Image;
	private ribbonInter!: Phaser.GameObjects.Image;
	private frameTwoInter!: Phaser.GameObjects.Image;
	private creamInter!: Phaser.GameObjects.Image;
	private decorateInter!: Phaser.GameObjects.Image;
	private currentAdvanced!: Phaser.GameObjects.Container;
	private frameOneAdvanced!: Phaser.GameObjects.Image;
	private ribbonOneAdvanced!: Phaser.GameObjects.Image;
	private frameTwoAdvanced!: Phaser.GameObjects.Image;
	private ribbonTwoAdvanced!: Phaser.GameObjects.Image;
	private frameThreeAdvanced!: Phaser.GameObjects.Image;
	private creamAdvanced!: Phaser.GameObjects.Image;
	private decorateAdvanced!: Phaser.GameObjects.Image;

	/* START-USER-CODE */

	// Write your code here
	private model: Model;
	private modelImage: Phaser.GameObjects.Container;
	create() {

		this.editorCreate();
		GameManager.setCurrentScene(this);
		this.model = new Model(GameVars.level);
		this.createModelImage();
		this.createControl();
	}

	playPrev() {
		this.leftCarousel.play('left-prev',true);
		this.centerLeftCarousel.playPrev();
	}

	playNext() {
		this.leftCarousel.play('left-next',true);
		this.centerLeftCarousel.playNext();
	}

	createControl(){
		switch(GameVars.level){
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

			break;
			case LEVEL.INTERMEDIATE:
				this.hideTasteControl();
			break;
			case LEVEL.ADVANCED:
			break;
		}
	}

	createModelImage(){
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

	showTimerControl(){
		this.alarmLight.visible = true;
		this.timer.visible = true;
	}

	hideTimerControl(){
		this.alarmLight.visible = false;
		this.timer.visible = false;
	}

	showFrameControl(){
		this.frameSpot.visible = true;
		this.heartFrame.visible = true;
		this.circleFrame.visible = true;
		this.squareFrame.visible = true;
	}

	hideFrameControl(){
		this.frameSpot.visible = false;
		this.heartFrame.visible = false;
		this.circleFrame.visible = false;
		this.squareFrame.visible = false;
	}

	showFlourControl(){
		this.flourSpot.visible = true;
		this.brownFlour.visible = true;
		this.pinkFlour.visible = true;
		this.yellowFlour.visible = true;
	}

	hideFlourControl(){
		this.flourSpot.visible = false;
		this.brownFlour.visible = false;
		this.pinkFlour.visible = false;
		this.yellowFlour.visible = false;
	}

	showRibbonControl(){
		this.ribbonSpot.visible = true;
		this.redRibbon.visible = true;
		this.whiteRibbon.visible = true;
		this.greenRibbon.visible = true;
	}

	hideRibbonControl(){
		this.ribbonSpot.visible = false;
		this.redRibbon.visible = false;
		this.whiteRibbon.visible = false;
		this.greenRibbon.visible = false;
	}

	showCreamControl(){
		this.creamSpot.visible = true;
		this.brownCream.visible = true;
		this.pinkCream.visible = true;
		this.yellowCream.visible = true;
	}

	hideCreamControl(){
		this.creamSpot.visible = false;
		this.brownCream.visible = false;
		this.pinkCream.visible = false;
		this.yellowCream.visible = false;
	}

	showDecorateControl(){
		this.decorateSpot.visible = true;
		this.buttonsIcon.visible = true;
		this.leafIcon.visible = true;
		this.heartIcon.visible = true;
		this.emoticon.visible = true;
	}

	hideDecorateControl(){
		this.decorateSpot.visible = false;
		this.buttonsIcon.visible = false;
		this.leafIcon.visible = false;
		this.heartIcon.visible = false;
		this.emoticon.visible = false;
	}

	showTasteControl(){
		this.tasteSpot.visible = true;
		this.burn.visible = true;
		this.spice.visible = true;
	}

	hideTasteControl(){
		this.tasteSpot.visible = false;
		this.burn.visible = false;
		this.spice.visible = false;
	}

	createFrame(x: number, y: number, container:Phaser.GameObjects.Container){

	}

	createFlour(x: number, y: number, container:Phaser.GameObjects.Container){

	}

	createRibbon(x: number, y: number, container:Phaser.GameObjects.Container){

	}

	createCream(x: number, y: number, container:Phaser.GameObjects.Container){

	}

	createDecorate(x: number, y: number, container:Phaser.GameObjects.Container){

	}

	createTaste(x: number, y: number, container:Phaser.GameObjects.Container){

	}

	circle() { }
	square() { }
	heart() { }
	doBrownFlour() { }
	doPinkFlour() { }
	doYellowFlour() { }
	doEmoticon() { }
	doLeaf() { }
	doBurn() { }
	doSpice() { }
	doRedRibbon() { }
	doWhiteRibbon() { }
	doGreenRibbon() { }
	doBrownCream() { }
	doPinkCream() { }
	doYellowCream() { }
	doThreeIcon() { }
	doHeartIcon() { }


	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
