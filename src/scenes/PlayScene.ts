
// You can write more code here
import GameManager from "../GameManager";
import GameVars from "../GameVars";
import Model from "./prefabs/Model";
import Feature from "./prefabs/Feature";
import { CREAM, DECORATE, FEATURES, FLOUR, FRAME, LEVEL, RIBBON, TASTE } from "../GameConstants";
import Cake from "./prefabs/Cake";
import Utils from "../utils/Utils";
import ShakePosition from "./prefabs/ShakePosition";
/* START OF COMPILED CODE */

import Phaser from "phaser";
import AlignCanvas from "../components/AlignCanvas";
import LeftCarousel from "./prefabs/LeftCarousel";
import ButtonComponent from "../components/button/ButtonComponent";
import RightCarousel from "./prefabs/RightCarousel";
import Timer from "./prefabs/Timer";
import AlarmLight from "./prefabs/AlarmLight";
import CenterLeftCarousel from "./prefabs/CenterLeftCarousel";
import Desk from "./prefabs/Desk";
import Trash from "./prefabs/Trash";
import TargetScreen from "./prefabs/TargetScreen";
import ResultScreen from "./prefabs/ResultScreen";
import Character from "./prefabs/Character";
import FinalSpot from "./prefabs/FinalSpot";
import FlourSpot from "./prefabs/FlourSpot";
import RibbonSpot from "./prefabs/RibbonSpot";
import CreamSpot from "./prefabs/CreamSpot";
import IconSpot from "./prefabs/IconSpot";
import FrameSpot from "./prefabs/FrameSpot";
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

		// buttonHightlight
		const buttonHightlight = this.add.image(278, 433, "comfy-spritesheet", "oval_blur.png");
		buttonHightlight.visible = false;

		// leftBtn
		const leftBtn = this.add.image(203, 433, "comfy-spritesheet", "left_normal.png");

		// rightBtn
		const rightBtn = this.add.image(278, 433, "comfy-spritesheet", "right_normal.png");

		// rightCarousel
		const rightCarousel = new RightCarousel(this, 698, 30);
		this.add.existing(rightCarousel);

		// timer
		const timer = new Timer(this, 7, 339);
		this.add.existing(timer);

		// alarmLight
		const alarmLight = new AlarmLight(this, 17, 304);
		this.add.existing(alarmLight);

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

		// desk
		const desk = new Desk(this, 677, 222);
		this.add.existing(desk);
		desk.visible = false;

		// trash
		const trash = new Trash(this, 726, 164);
		this.add.existing(trash);

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

		// box
		const box = this.add.sprite(729, 215, "comfy-spritesheet", "box_moving_00.png");
		box.visible = false;

		// hand
		const hand = this.add.sprite(737, 138, "comfy-spritesheet", "hand_in_15.png");
		hand.visible = false;

		// targetScreen
		const targetScreen = new TargetScreen(this, 0, 0);
		this.add.existing(targetScreen);

		// resultScreen
		const resultScreen = new ResultScreen(this, 685, 6);
		this.add.existing(resultScreen);

		// character
		const character = new Character(this, 1086, 378);
		this.add.existing(character);

		// controlHightlight
		const controlHightlight = this.add.image(516, 349, "comfy-spritesheet", "rectangle_blur.png");
		controlHightlight.visible = false;

		// targetHightlight
		const targetHightlight = this.add.image(63, 85, "comfy-spritesheet", "square_blur.png");
		targetHightlight.visible = false;

		// tasteSpot
		const tasteSpot = new FinalSpot(this, 624, 0);
		this.add.existing(tasteSpot);

		// flourSpot
		const flourSpot = new FlourSpot(this, 224, 0);
		this.add.existing(flourSpot);

		// ribbonSpot
		const ribbonSpot = new RibbonSpot(this, 324, 0);
		this.add.existing(ribbonSpot);

		// creamSpot
		const creamSpot = new CreamSpot(this, 424, 0);
		this.add.existing(creamSpot);

		// decorateSpot
		const decorateSpot = new IconSpot(this, 524, 0);
		this.add.existing(decorateSpot);

		// frameSpot
		const frameSpot = new FrameSpot(this, 124, 0);
		this.add.existing(frameSpot);
		frameSpot.visible = true;

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
		this.buttonHightlight = buttonHightlight;
		this.leftBtn = leftBtn;
		this.rightBtn = rightBtn;
		this.rightCarousel = rightCarousel;
		this.timer = timer;
		this.alarmLight = alarmLight;
		this.circleFrame = circleFrame;
		this.squareFrame = squareFrame;
		this.heartFrame = heartFrame;
		this.centerLeftCarousel = centerLeftCarousel;
		this.brownFlour = brownFlour;
		this.pinkFlour = pinkFlour;
		this.trash = trash;
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
		this.box = box;
		this.hand = hand;
		this.targetScreen = targetScreen;
		this.resultScreen = resultScreen;
		this.character = character;
		this.controlHightlight = controlHightlight;
		this.targetHightlight = targetHightlight;
		this.tasteSpot = tasteSpot;
		this.flourSpot = flourSpot;
		this.ribbonSpot = ribbonSpot;
		this.creamSpot = creamSpot;
		this.decorateSpot = decorateSpot;
		this.frameSpot = frameSpot;

		this.events.emit("scene-awake");
	}

	private leftCarousel!: LeftCarousel;
	private buttonHightlight!: Phaser.GameObjects.Image;
	private leftBtn!: Phaser.GameObjects.Image;
	private rightBtn!: Phaser.GameObjects.Image;
	private rightCarousel!: RightCarousel;
	private timer!: Timer;
	private alarmLight!: AlarmLight;
	private circleFrame!: Phaser.GameObjects.Image;
	private squareFrame!: Phaser.GameObjects.Image;
	private heartFrame!: Phaser.GameObjects.Image;
	private centerLeftCarousel!: CenterLeftCarousel;
	private brownFlour!: Phaser.GameObjects.Image;
	private pinkFlour!: Phaser.GameObjects.Image;
	private trash!: Trash;
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
	private box!: Phaser.GameObjects.Sprite;
	private hand!: Phaser.GameObjects.Sprite;
	private targetScreen!: TargetScreen;
	private resultScreen!: ResultScreen;
	private character!: Character;
	private controlHightlight!: Phaser.GameObjects.Image;
	private targetHightlight!: Phaser.GameObjects.Image;
	private tasteSpot!: FinalSpot;
	private flourSpot!: FlourSpot;
	private ribbonSpot!: RibbonSpot;
	private creamSpot!: CreamSpot;
	private decorateSpot!: IconSpot;
	private frameSpot!: FrameSpot;

	/* START-USER-CODE */

	// Write your code here
	private model: Model;
	private startPut: boolean = false;
	private cakeNum: number;
	private initX: number;
	private initY: number;
	private cakes: Array<Cake> = [];
	//private isFirst: boolean = false;
	private failedCakeNum: number = 0;
	private prevStepNum: number = 0;
	private charX:number;
	private isMaking:boolean = false;
	//private ribbonSprite: Phaser.GameObjects.Image;
	create() {

		this.editorCreate();
		GameManager.setCurrentScene(this);
		this.cakeNum = 0;
		this.cakes=[];

		this.failedCakeNum = 0;
		this.isMaking = false;
		this.createControl();
		this.createInitCake();
		this.charX = this.character.x;

		this.showChar();

	}

	showChar(){
		this.add.tween({
			targets: this.character,
			x: 700,
			duration: 200,
			ease: Phaser.Math.Easing.Elastic.InOut,
			onComplete: () => {
				this.character.talk(5);
				this.character.blink(3);

				this.hideChar();
			},


		});
	}

	hideChar(){
		this.add.tween({
			targets: this.character,
			x: this.charX,
			duration: 200,
			ease: Phaser.Math.Easing.Elastic.InOut,

			delay: 2000


		});
	}

	playPrev() {

		if(this.isMaking) return;
		if(this.cakes.length == 1 && this.getCakeByPos(this.frameSpot) && !this.isExistMakingCake()){
			this.hightlight(this.targetHightlight);
			this.controlHightlight.x = this.frameSpot.x - 12;
			this.hightlight(this.controlHightlight);
			return;
		}

		/*if(!this.isExistMakingCake()){
			this.hightlight(this.targetHightlight);
			this.controlHightlight.x = this.frameSpot.x - 12;
			this.hightlight(this.controlHightlight);
			return;
		}*/


		for (let i = this.cakes.length-1; i >=0; i--) {
			this.movePrev(this.cakes[i],i);
			//console.log('current index: ' + i);
		}




	}

	moveNext(cake: Cake) {
		if (cake.y < 247/* && cake.x == 60*/) {
			this.add.tween({
				targets: cake,
				x: "-=30",
				y: "+=63",
				duration: 200,

			});
			this.leftCarousel.play('left-animation', true);
			this.centerLeftCarousel.playNext();

		} else {
			this.add.tween({
				targets: cake,
				x: "+=100",
				duration: 200,

			});
			this.leftCarousel.play('left-animation', true);
			this.centerLeftCarousel.playNext();

		}

	}

	movePrev(cake: Cake, index:number) {
		if (cake.x > 24) {
			if(cake.y >= 247){

					if(this.canMove(cake.x -100, cake.y)){
						if(index>=0){
							for(let i = index; i >= 0; i--){
								this.add.tween({
									targets: this.cakes[i],
									x: "-=100",
									duration: 200,

								});
							}

							if(GameVars.level == LEVEL.INTERMEDIATE || GameVars.level == LEVEL.ADVANCED){
								this.prevStepNum++;
								if(this.prevStepNum == 3 ){
									if(this.canMove(84, 121)){
										this.addCake();
									}

									this.prevStepNum = 0;
								}

								this.timer.reset();
							}
						}
					}

			}


			this.leftCarousel.playReverse('left-animation', true);
			this.centerLeftCarousel.playPrev();
		} else if (cake.x == 24) {
			if(cake.y > 148){

					if(this.canMove(cake.x + 30, cake.y - 63)){

						this.add.tween({
							targets: cake,
							x: "+=30",
							y: "-=63",
							duration: 200,

						});


						for(let i = index-1; i >= 0; i--){
							this.add.tween({
								targets: this.cakes[i],
								x: "-=100",
								//alpha: 0,
								duration: 200,

							});
						}

						if(GameVars.level == LEVEL.INTERMEDIATE || GameVars.level == LEVEL.ADVANCED){
							this.prevStepNum++;
							if(this.prevStepNum == 3 ){
								if(this.canMove(84, 121)){
									this.addCake();
								}

								this.prevStepNum = 0;
							}

							this.timer.reset();
						}

					}





			}
			this.leftCarousel.playReverse('left-animation', true);
			this.centerLeftCarousel.playPrev();
		}
	}

	playNext() {
		if(this.isMaking) return;
		if(this.cakes.length == 1 && this.getCakeByPos(this.frameSpot) && !this.isExistMakingCake()){
			this.hightlight(this.targetHightlight);
			this.controlHightlight.x = this.frameSpot.x - 12;
			this.hightlight(this.controlHightlight);
			return;
		}
		/*if(!this.isExistMakingCake()){

		}*/

		for (let i = 0; i < this.cakes.length; i++) {
			if (this.cakes[i].x > this.decorateSpot.x) {

				//add cake wit imter, advance
				if(GameVars.level == LEVEL.INTERMEDIATE || GameVars.level == LEVEL.ADVANCED){
					if(this.canMove(84, 121)){
						this.addCake();
					}

				}
				if (this.checkResult(this.cakes[i])) {
					this.resultScreen.setStatusAt(this.cakeNum, true);
					this.add.tween({
						targets: this.cakes[i],
						x: "+=110",
						duration: 200,
						onComplete: () => {

							this.hand.visible = true;
							this.hand.play('hand-in-animation');
							setTimeout(() => {
								this.cakes[i].destroy();
								this.cakes.splice(i, 1);
							}, 500);
							this.hand.on('animationcomplete', () => {

								//this.leftCarousel.play('left-animation');
								this.rightCarousel.play('right-animation');
								//create new image model
								if (GameVars.level == LEVEL.EASY) {

									let cake = this.createNewCake();

									cake.visible = false;
									this.box.visible = true;
									this.hand.off('animationcomplete');
									this.add.tween({
										targets: this.box,
										x: "+=150",
										y: "-=250",
										duration: 3000,
										onComplete: () => {
											this.box.visible = false;
											this.box.x = this.initX;
											this.box.y = this.initY;
											cake.visible = true;
											this.add.tween({
												targets: cake,
												x: 24,
												y: 247,
												duration: 200,
												onComplete: () => {
													this.centerLeftCarousel.playNext();
													this.add.tween({
														targets: cake,
														x: '+=200',
														duration: 800,
														onComplete: () => {
															if(GameVars.level == LEVEL.EASY){
																if(this.cakeNum == 4){

																	this.resultScreen.tran.visible = true;
																	this.resultScreen.tran.play('tran-animation');
																	//this.resultText.setText('You won');
																	//this.resultText.visible = true;
																	//this.mainMenu.visible = true;
																	//this.replay.visible = true;

																	//send messege to parent app
																	//window.parent.postMessage(GameVars.level, '*');
																	const data = {
																		Result: "win",
																		FailCount: this.failedCakeNum
																	  };
																	window.parent.postMessage(data, '*');
																	this.cakeNum = 0;
																	return;
																} 
															}else if(GameVars.level == LEVEL.ADVANCED || GameVars.level == LEVEL.INTERMEDIATE){
																if(this.cakeNum == 5){
																	//this.resultText.setText('You won');
																	//this.resultText.visible = true;
																	//this.mainMenu.visible = true;
																	//this.replay.visible = true;
																	//window.parent.postMessage(GameVars.level, '*');
																	const data = {
																		Result: "win",
																		FailCount: this.failedCakeNum
																	  };
																	window.parent.postMessage(data, '*');
																	this.cakeNum = 0;
																	return;
																}
															}
															this.cakeNum++;
														}
													});
												}
											});
										}
									});
								}

							});
						}
					});
				} else {
					this.failedCakeNum++;
					if(this.failedCakeNum>= 3){
						//this.resultText.setText('You failed');
						//this.resultText.visible = true;
						//this.replay.visible = true;
						//this.mainMenu.visible = true;
						const data = {
							Result: "lose",
							FailCount: this.failedCakeNum
						};
						window.parent.postMessage(data, '*');
						this.failedCakeNum = 0;
						if(this.timer.visible)this.timer.stop();
					}

					//play alarm light
					this.alarmLight.play('alarm-animation');
					this.resultScreen.setStatusAt(this.cakeNum, false);
					this.add.tween({
						targets: this.cakes[i],
						x: "+=110",
						duration: 200,
						onComplete: () => {

							this.centerLeftCarousel.openDesk();
							this.trash.play('open-animation');
							this.add.tween({
								targets: this.cakes[i],
								y: "+=100",
								duration: 200,
								onComplete: () => {

									this.cakes[i].destroy();
									this.cakes.splice(i, 1);

									if (GameVars.level == LEVEL.EASY) {
										let cake = this.createNewCake();
										cake.visible = true;
										this.add.tween({
											targets: cake,
											x: 24,
											y: 247,
											duration: 200,
											onComplete: () => {
												this.centerLeftCarousel.playNext();
												this.add.tween({
													targets: cake,
													x: '+=200',
													duration: 800,
													onComplete: () => {

													}
												});
											}
										});
									}
								}
							});
						}
					});
				}
			}else {
				this.moveNext(this.cakes[i]);
			}

		}
		if(GameVars.level == LEVEL.INTERMEDIATE || GameVars.level == LEVEL.ADVANCED){
			this.timer.reset();
			//this.prevStepNum = 0;
		}

	}

	checkResult(cake: Cake) {
		let result = false;
		result = cake.features.length == this.model.features.length && cake.features.every((el, ix) => el === this.model.features[ix]);
		return result;
	}

	createControl() {
		//let ribbon, taste, cake;
		//cake = this.getCakeByPos(this.frameSpot);
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
				this.resultScreen.cakeNum(5);

				break;
			case LEVEL.INTERMEDIATE:

				this.hideTasteControl();
				this.resultScreen.cakeNum(5);


				break;
			case LEVEL.ADVANCED:
				this.resultScreen.cakeNum(6);

				break;
		}
		this.flourSpot.setDepth(2);
		this.creamSpot.setDepth(2);
		this.frameSpot.setDepth(2);
		this.targetHightlight.setDepth(2);
	}

	initCake(){
		let cake = new Cake(this, this.frameSpot.x, this.frameSpot.y);

		cake.x = this.frameSpot.x;
		cake.y = 247;
		this.cakes.push(cake);
		return cake;
	}

	addCake(){
		let cake = new Cake(this, this.frameSpot.x, this.frameSpot.y);

		cake.x = 84;
		cake.y = 121;

		this.cakes.push(cake);
		return cake;
	}

	createInitCake(){
		let cake = this.initCake();


		this.model = new Model(GameVars.level);
		this.targetScreen.clearChild();
		this.targetScreen.createImage(this.model);
		this.targetScreen.setDepth(1);
		cake.setDepth(this.targetScreen.depth-1);

		this.initX = this.box.x;
		this.initY = this.box.y;
		return cake;
	}

	createNewCake() {


		let cake = this.addCake();


		this.model = new Model(GameVars.level);
		this.targetScreen.clearChild();
		this.targetScreen.createImage(this.model);
		this.targetScreen.setDepth(1);
		cake.setDepth(this.targetScreen.depth-1);

		this.initX = this.box.x;
		this.initY = this.box.y;
		return cake;
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


	circle() {
		if(this.isMaking) return;
		let frame, padding;
		let cake = this.getCakeByPos(this.frameSpot);

		//check if haven't cake, play shake spot
		if (!cake) {
			this.shake(this.frameSpot);
			this.hightlight(this.buttonHightlight);
			return;
		}
		if(this.getFrameNum(cake.features)>=3) {
			this.hightlight(this.buttonHightlight);
			return;
		}
		this.isMaking = true;
		//due to each levels, position show frame is different
		if (GameVars.level == LEVEL.EASY) {

			let feature = this.getEnd(cake.features);
			padding = Utils.calPaddingY(cake.features);
			//check if the feature has frame
			if (feature == FRAME.CIRCLE || feature == FRAME.HEART || feature == FRAME.SQUARE) {
				//get last element in cake, scale small, remove and create new frame
				frame = (cake.last as Phaser.GameObjects.Sprite);

				this.add.tween({
					targets: frame,
					y: -this.frameSpot.y - this.frameSpot.displayHeight,
					scaleX: 0.3,
					scaleY: 0.3,
					duration: 200,
					onComplete: () => {

						//remove current frame
						cake.remove(frame);
						frame.removedFromScene();
						frame.destroy();
						frame = null;
						cake.features.pop();
						//create new frame
						frame = this.add.sprite(this.frameSpot.x, this.frameSpot.y + this.frameSpot.displayHeight, 'comfy-spritesheet', 'circle_00.png').setOrigin(0.5);
						frame.scaleX = frame.scaleY = 0.3;

						this.add.tween({
							targets: frame,
							y: cake.y + 10 +  padding,
							scaleX: 0.9,
							scaleY: 0.9,
							duration: 200,
							onComplete: () => {

								//play frame animation
								frame.play('circle-frame-animation', true);
								//trigger event animation completet to set position frame
								frame.on('animationcomplete', () => {
									if(this.timer.visible) this.timer.resume();
									this.isMaking = false;
									cake.add(frame);
									frame.x = 0;
									frame.y =  padding + 10;
									cake.tableCloth.setDepth(0);
									let fmodel = this.getStart(this.model.features);
									//check frame cake with model
									if(fmodel != FRAME.CIRCLE) this.hightlight(this.targetHightlight);
								});
								cake.features.push(FRAME.CIRCLE);
							},
							callbackScope: this
						});

					}
				});
			} else {
				//create new frame
				frame = this.add.sprite(this.frameSpot.x, this.frameSpot.y + this.frameSpot.displayHeight, 'comfy-spritesheet', 'circle_00.png').setOrigin(0.5);
				frame.scaleX = frame.scaleY = 0.3;

				this.add.tween({
					targets: frame,
					y: cake.y - 10 +  padding,
					scaleX: 0.9,
					scaleY: 0.9,
					duration: 200,
					onComplete: () => {

						//play frame animation
						frame.play('circle-frame-animation', true);
						//trigger event animation completet to set position frame
						frame.on('animationcomplete', () => {
							if(this.timer.visible) this.timer.resume();
							this.isMaking = false;
							cake.add(frame);
							frame.x = 0;
							frame.y = -10 + padding;
							cake.tableCloth.setDepth(0);
							let fmodel = this.getStart(this.model.features);
							//check frame cake with model
							if(fmodel != FRAME.CIRCLE) this.hightlight(this.targetHightlight);

						});
						cake.features.push(FRAME.CIRCLE);
					},
					callbackScope: this
				});
			}


		} else {
			let feature = this.getEnd(cake.features);

			//check if the feature has frame
			if (feature == FRAME.CIRCLE || feature == FRAME.HEART || feature == FRAME.SQUARE) {
				this.hightlight(this.buttonHightlight);
				this.isMaking = false;
				return;
			}
			//check exist cake making
			if((this.isExistMakingCake || this.cakes.length > 1) && (GameVars.level == LEVEL.INTERMEDIATE || GameVars.level == LEVEL.ADVANCED)){
				this.timer.start();
				this.timer.on('reset', this.playNext, this);
			}
			//cal padding
			padding = Utils.calPaddingY(cake.features);
			//create new frame
			frame = this.add.sprite(this.frameSpot.x, this.frameSpot.y + this.frameSpot.displayHeight, 'comfy-spritesheet', 'circle_00.png').setOrigin(0.5);
			frame.scaleX = frame.scaleY = 0.3;
			if(this.timer.visible)this.timer.pause();
			this.add.tween({
				targets: frame,
				y: cake.y - 10 +  padding,
				scaleX: 0.9,
				scaleY: 0.9,
				duration: 200,
				onComplete: () => {
					//play frame animation
					frame.play('circle-frame-animation', true);
					//trigger event animation completet to set position frame
					frame.on('animationcomplete', () => {
						if(this.timer.visible) this.timer.resume();
						this.isMaking = false;
						cake.add(frame);
						frame.x = 0;
						frame.y = - 10 + padding;

						cake.tableCloth.setDepth(0);
						let fmodel = this.getStart(this.model.features);
						//check frame cake with model
						if(fmodel != FRAME.CIRCLE) this.hightlight(this.targetHightlight);
					});
					//push new feature
					cake.features.push(FRAME.CIRCLE);

				},
				callbackScope: this
			});


		}



	}

	square() {
		if(this.isMaking) return;
		let frame, padding;
		let cake = this.getCakeByPos(this.frameSpot);

		//check if haven't cake, play shake spot
		if (!cake) {
			this.shake(this.frameSpot);
			this.hightlight(this.buttonHightlight);
			return;
		}
		if(this.getFrameNum(cake.features)>=3) {
			this.hightlight(this.buttonHightlight);
			return;
		}
		this.isMaking = true;
		if (GameVars.level == LEVEL.EASY) {
			let feature = this.getEnd(cake.features);
			padding = Utils.calPaddingY(cake.features);
			//check if the feature has frame
			if (feature == FRAME.CIRCLE || feature == FRAME.HEART || feature == FRAME.SQUARE) {
				frame = (cake.last as Phaser.GameObjects.Sprite);
				this.add.tween({
					targets: frame,
					y: -this.frameSpot.y - this.frameSpot.displayHeight,
					scaleX: 0.3,
					scaleY: 0.3,
					duration: 200,
					onComplete: () => {
						//remove current frame
						cake.remove(frame);
						frame.removedFromScene();

						frame.destroy();
						frame = null;
						cake.features.pop();
						//create new frame
						frame = this.add.sprite(this.frameSpot.x, this.frameSpot.y + this.frameSpot.displayHeight, 'comfy-spritesheet', 'square_00.png');
						frame.scaleX = frame.scaleY = 0.3;

						this.add.tween({
							targets: frame,
							y: cake.y + 10 +  padding,
							scaleX: 1,
							scaleY: 1,
							duration: 200,
							onComplete: () => {
								//play frame animation
								frame.play('square-frame-animation', true);
								//trigger event animation completet to set position frame
								frame.on('animationcomplete', () => {
									this.isMaking = false;
									if(this.timer.visible)this.timer.resume();
									cake.add(frame);
									frame.x = 0;
									frame.y =  10 + padding;
									cake.tableCloth.setDepth(0);
									let fmodel = this.getStart(this.model.features);

									//check frame cake with model
									if(fmodel != FRAME.SQUARE) this.hightlight(this.targetHightlight);
								});
								cake.features.push(FRAME.SQUARE);
							},
							callbackScope: this
						});

					}
				});
			}else {
				//create new frame
				frame = this.add.sprite(this.frameSpot.x, this.frameSpot.y + this.frameSpot.displayHeight, 'comfy-spritesheet', 'square_00.png');
				frame.scaleX = frame.scaleY = 0.3;

				this.add.tween({
					targets: frame,
					y: cake.y - 10 +  padding,
					scaleX: 1,
					scaleY: 1,
					duration: 200,
					onComplete: () => {
						//play frame animation
						frame.play('square-frame-animation', true);
						//trigger event animation completet to set position frame
						frame.on('animationcomplete', () => {
							this.isMaking = false;
							if(this.timer.visible)this.timer.resume();
							cake.add(frame);
							frame.x = 0;
							frame.y = - 10 + padding;

							cake.tableCloth.setDepth(0);
							let fmodel = this.getStart(cake.features);

							//check frame cake with model
							if(fmodel != FRAME.SQUARE) this.hightlight(this.targetHightlight);
						});
						cake.features.push(FRAME.SQUARE);
					},
					callbackScope: this
				});
			}


		} else {
			let feature = this.getEnd(cake.features);

			//check if the feature has frame
			if (feature == FRAME.CIRCLE || feature == FRAME.HEART || feature == FRAME.SQUARE) {
				this.hightlight(this.buttonHightlight);
				this.isMaking = false;
				return;
			}
					//check exist cake making
			if((this.isExistMakingCake || this.cakes.length > 1) && (GameVars.level == LEVEL.INTERMEDIATE || GameVars.level == LEVEL.ADVANCED)){
				this.timer.start();
				this.timer.on('reset', this.playNext, this);
			}
			//cal padding
			padding = Utils.calPaddingY(cake.features);
			//create new frame
			let frame = this.add.sprite(this.frameSpot.x, this.frameSpot.y + this.frameSpot.displayHeight, 'comfy-spritesheet', 'square_00.png').setOrigin(0.5);
			frame.scaleX = frame.scaleY = 0.3;
			if(this.timer.visible)this.timer.pause();
			this.add.tween({
				targets: frame,
				y: cake.y - 10 +  padding,
				scaleX: 0.9,
				scaleY: 0.9,
				duration: 200,
				onComplete: () => {
					//play frame animation
					frame.play('square-frame-animation', true);
					//trigger event animation completet to set position frame
					frame.on('animationcomplete', () => {
						this.isMaking = false;
						if(this.timer.visible)this.timer.resume();
						cake.add(frame);
							frame.x = 0;
							frame.y = - 10 + padding;

							cake.tableCloth.setDepth(0);

							let fmodel = this.getStart(cake.features);
							//check frame cake with model
							if(fmodel != FRAME.SQUARE) this.hightlight(this.targetHightlight);
					});
					cake.features.push(FRAME.SQUARE);
				},
				callbackScope: this
			});

		}


	}

	heart() {
		if(this.isMaking) return;
		let frame, padding;
		let cake = this.getCakeByPos(this.frameSpot);

		//check if haven't cake, play shake spot
		if (!cake) {
			this.shake(this.frameSpot);
			this.hightlight(this.buttonHightlight);
			return;
		}
		if(this.getFrameNum(cake.features)>=3) {
			this.hightlight(this.buttonHightlight);
			return;
		}
		this.isMaking = true;
		//due to each levels, position show frame is different
		if (GameVars.level == LEVEL.EASY) {
			let feature = this.getEnd(cake.features);
			padding = Utils.calPaddingY(cake.features);
			//check if the feature has frame
			if (feature == FRAME.CIRCLE || feature == FRAME.HEART || feature == FRAME.SQUARE) {
				frame = (cake.last as Phaser.GameObjects.Sprite);
				this.add.tween({
					targets: frame,
					y: -this.frameSpot.y - this.frameSpot.displayHeight,
					scaleX: 0.4,
					scaleY: 0.4,
					duration: 200,
					onComplete: () => {
						//remove current frame
						cake.remove(frame);
						frame.removedFromScene();
						frame.destroy();
						frame = null;
						cake.features.pop();
						//create new frame
						frame = this.add.sprite(this.frameSpot.x, this.frameSpot.y + this.frameSpot.displayHeight, 'comfy-spritesheet', 'heart_00.png');
						frame.scaleX = frame.scaleY = 0.4;

						this.add.tween({
							targets: frame,
							y: cake.y + 10 +  padding,
							scaleX: 0.9,
							scaleY: 0.9,
							duration: 200,
							onComplete: () => {
								//play frame animation
								frame.play('heart-frame-animation', true);
								//trigger event animation completet to set position frame
								frame.on('animationcomplete', () => {
									this.isMaking = false;
									if(this.timer.visible)this.timer.resume();
									cake.add(frame);
									frame.x = 0;
									frame.y =  10 + padding;

									cake.tableCloth.setDepth(0);
									let fmodel = this.getStart(this.model.features);

									//check frame cake with model
									if(fmodel != FRAME.HEART) this.hightlight(this.targetHightlight);
								});
								cake.features.push(FRAME.HEART);
							},
							callbackScope: this
						});

					}
				});
			}else {
				//create new frame
				frame = this.add.sprite(this.frameSpot.x, this.frameSpot.y + this.frameSpot.displayHeight, 'comfy-spritesheet', 'heart_00.png');
				frame.scaleX = frame.scaleY = 0.4;
				this.add.tween({
					targets: frame,
					y: cake.y - 10 +  padding,
					scaleX: 0.9,
					scaleY: 0.9,
					duration: 200,
					onComplete: () => {
						//play frame animation
						frame.play('heart-frame-animation', true);
						//trigger event animation completet to set position frame
						frame.on('animationcomplete', () => {
							this.isMaking = false;
							if(this.timer.visible)this.timer.resume();
							cake.add(frame);
							frame.x = 0;
							frame.y = - 10 + padding;

							cake.tableCloth.setDepth(0);
							let fmodel = this.getStart(this.model.features);

							//check frame cake with model
							if(fmodel != FRAME.HEART) this.hightlight(this.targetHightlight);
						});
						cake.features.push(FRAME.HEART);
					},
					callbackScope: this
				});
			}


		} else {
			let feature = this.getEnd(cake.features);

			//check if the feature has frame
			if (feature == FRAME.CIRCLE || feature == FRAME.HEART || feature == FRAME.SQUARE) {
				this.hightlight(this.buttonHightlight);
				this.isMaking = false;
				return;
			}
					//check exist cake making
			if((this.isExistMakingCake || this.cakes.length > 1) && (GameVars.level == LEVEL.INTERMEDIATE || GameVars.level == LEVEL.ADVANCED)){
				this.timer.start();
				this.timer.on('reset', this.playNext, this);
			}
			//cal padding
			padding = Utils.calPaddingY(cake.features);
			//create new frame
			frame = this.add.sprite(this.frameSpot.x, this.frameSpot.y + this.frameSpot.displayHeight, 'comfy-spritesheet', 'heart_00.png').setOrigin(0.5);
			frame.scaleX = frame.scaleY = 0.3;
			if(this.timer.visible)this.timer.pause();
			this.add.tween({
				targets: frame,
				y: cake.y - 10 +  padding,
				scaleX: 0.9,
				scaleY: 0.9,
				duration: 200,
				onComplete: () => {
					//play frame animation
					frame.play('heart-frame-animation', true);
					//trigger event animation completet to set position frame
					frame.on('animationcomplete', () => {
						this.isMaking = false;
						if(this.timer.visible)this.timer.resume();
						cake.add(frame);
						frame.x = 0;
						frame.y = - 10 + padding;

						cake.tableCloth.setDepth(0);
						let fmodel = this.getStart(this.model.features);

						//check frame cake with model
						if(fmodel != FRAME.HEART) this.hightlight(this.targetHightlight);
					});

					cake.features.push(FRAME.HEART);
				},
				callbackScope: this
			});

		}



	}


	doBrownFlour() {
		if(this.isMaking) return;
		let cake = this.getCakeByPos(this.flourSpot);

		//check if haven't cake, play shake spot
		if (!cake) {
			this.shake(this.flourSpot);
			this.hightlight(this.buttonHightlight);
			return;
		}
		if(this.timer.visible)this.timer.pause();
		let eFeature = this.getEnd(cake.features);
		let padding = Utils.calPaddingY(cake.features);
		//IF(isExist frame)
		if (eFeature == FRAME.CIRCLE || eFeature == FRAME.HEART || eFeature == FRAME.SQUARE ) {
			let flour = this.add.sprite(this.flourSpot.x, this.flourSpot.y + this.flourSpot.displayHeight + padding, 'comfy-spritesheet', 'brown_flour_00.png').setOrigin(0.5, 0);
			flour.setDepth(this.flourSpot.depth - 1);
			flour.play('brown-flour-animation', true);
			flour.on('animationcomplete', () => {
				flour.removedFromScene();
				flour.destroy();
				flour.off('animationcomplete');

			});
			let frame = (cake.last as Phaser.GameObjects.Sprite);
			let initX = frame.x;
			let initY = frame.y;
			switch (eFeature) {
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
			frame.on('animationcomplete', () => {
				frame.x = initX;
				frame.y = initY;
				cake.features.push(FLOUR.BROWN);
				frame.off('animationcomplete');
				this.isMaking = false;
				if(this.timer.visible)this.timer.resume();
			});
		//IF(isExist Flour)	play reverse, and add new flour
		} else if(eFeature == FLOUR.BROWN || eFeature == FLOUR.PINK || eFeature == FLOUR.YELLOW){
			let sFeature = this.getStart(cake.features);
			let frame = (cake.last as Phaser.GameObjects.Sprite);
			let flour = this.add.sprite(this.flourSpot.x, this.flourSpot.y + this.flourSpot.displayHeight + padding, 'comfy-spritesheet', 'brown_flour_00.png').setOrigin(0.5, 0);
			flour.setDepth(this.flourSpot.depth - 1);
			switch (eFeature) {
				case FLOUR.BROWN:
					flour.playReverse('brown-flour-animation', true);

					break;
				case FLOUR.PINK:
					flour.playReverse('pink-flour-animation', true);

					break;
				case FLOUR.YELLOW:
					flour.playReverse('yellow-flour-animation', true);

					break;
			}

			switch (sFeature) {
				case FRAME.CIRCLE:
					//frame.play('brown-circle-animation', true);
					frame.setFrame('circle_00.png');

					break;
				case FRAME.HEART:
					frame.setFrame('heart_00.png');

					break;
				case FRAME.SQUARE:
					frame.setFrame('square_00.png');

					break;
			}
			cake.features.pop();
			flour.on('animationcomplete', () => {
				flour.removedFromScene();
				flour.destroy();
				flour.off('animationcomplete');
				let nflour = this.add.sprite(this.flourSpot.x, this.flourSpot.y + this.flourSpot.displayHeight + padding, 'comfy-spritesheet', 'brown_flour_00.png').setOrigin(0.5, 0);
				nflour.setDepth(this.flourSpot.depth - 1);
					nflour.play('brown-flour-animation', true);
					nflour.on('animationcomplete', () => {
						nflour.removedFromScene();
						nflour.destroy();
						nflour.off('animationcomplete');
						//resume timer
						if(this.timer.visible)this.timer.resume();
					});
					switch (sFeature) {
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
					cake.features.push(FLOUR.BROWN);
			});

		}else
			return;

	}
	doPinkFlour() {
		if(this.isMaking) return;
		let cake = this.getCakeByPos(this.flourSpot);

		//check if haven't cake, play shake spot
		if (!cake) {
			this.shake(this.flourSpot);
			this.hightlight(this.buttonHightlight);
			return;
		}
		if(this.timer.visible)this.timer.pause();
		let eFeature = this.getEnd(cake.features);
		let padding = Utils.calPaddingY(cake.features);
		//IF(isExist frame)
		if (eFeature == FRAME.CIRCLE || eFeature == FRAME.HEART || eFeature == FRAME.SQUARE ) {
			let flour = this.add.sprite(this.flourSpot.x, this.flourSpot.y + this.flourSpot.displayHeight  + padding, 'comfy-spritesheet', 'pink_flour_00.png').setOrigin(0.5, 0);
			flour.setDepth(this.flourSpot.depth - 1);
			flour.play('pink-flour-animation', true);
			flour.on('animationcomplete', () => {
				flour.removedFromScene();
				flour.destroy();
				flour.off('animationcomplete');
				this.isMaking = false;
				if(this.timer.visible)this.timer.resume();
			});
			let frame = (cake.last as Phaser.GameObjects.Sprite);
			let initX = frame.x;
			let initY = frame.y;
			switch (eFeature) {
				case FRAME.CIRCLE:
					frame.play('pink-circle-animation', true);

					break;
				case FRAME.HEART:
					frame.play('pink-heart-animation', true);

					break;
				case FRAME.SQUARE:
					frame.play('pink-square-animation', true);

					break;
			}
			frame.on('animationcomplete', () => {
				frame.x = initX;
				frame.y = initY;
				cake.features.push(FLOUR.PINK);
				frame.off('animationcomplete');
			});
		//IF(isExist Flour)	play reverse, and add new flour
		} else if(eFeature == FLOUR.BROWN || eFeature == FLOUR.PINK || eFeature == FLOUR.YELLOW){

			let sFeature = this.getStart(cake.features);
			let frame = (cake.last as Phaser.GameObjects.Sprite);
			let flour = this.add.sprite(this.flourSpot.x, this.flourSpot.y + this.flourSpot.displayHeight  + padding, 'comfy-spritesheet', 'pink_flour_00.png').setOrigin(0.5, 0);
			flour.setDepth(this.flourSpot.depth - 1);
			switch (eFeature) {
				case FLOUR.BROWN:
					flour.playReverse('brown-flour-animation', true);

					break;
				case FLOUR.PINK:
					flour.playReverse('pink-flour-animation', true);

					break;
				case FLOUR.YELLOW:
					flour.playReverse('yellow-flour-animation', true);

					break;
			}
			cake.features.pop();
			switch (sFeature) {
				case FRAME.CIRCLE:
					frame.setFrame('circle_00.png');

					break;
				case FRAME.HEART:
					frame.setFrame('heart_00.png');

					break;
				case FRAME.SQUARE:
					frame.setFrame('square_00.png');

					break;
			}

			flour.on('animationcomplete', () => {
				flour.removedFromScene();
				flour.destroy();
				flour.off('animationcomplete');
				let nflour = this.add.sprite(this.flourSpot.x, this.flourSpot.y + this.flourSpot.displayHeight + padding, 'comfy-spritesheet', 'pink_flour_00.png').setOrigin(0.5, 0);
				nflour.setDepth(this.flourSpot.depth - 1);
					nflour.play('pink-flour-animation', true);
					nflour.on('animationcomplete', () => {
						nflour.removedFromScene();
						nflour.destroy();
						nflour.off('animationcomplete');
						this.isMaking = false;
						if(this.timer.visible)this.timer.resume();
					});
					switch (sFeature) {
						case FRAME.CIRCLE:
							frame.play('pink-circle-animation', true);
							break;
						case FRAME.HEART:
							frame.play('pink-heart-animation', true);

							break;
						case FRAME.SQUARE:
							frame.play('pink-square-animation', true);

							break;
					}
					cake.features.push(FLOUR.PINK);
			});

		}else
			return;

	}
	doYellowFlour() {
		if(this.isMaking) return;
		let cake = this.getCakeByPos(this.flourSpot);

		//check if haven't cake, play shake spot
		if (!cake) {
			this.shake(this.flourSpot);
			this.hightlight(this.buttonHightlight);
			return;
		}
		if(this.timer.visible)this.timer.pause();
		let eFeature = this.getEnd(cake.features);
		let padding = Utils.calPaddingY(cake.features);
		//IF(isExist frame)
		if (eFeature == FRAME.CIRCLE || eFeature == FRAME.HEART || eFeature == FRAME.SQUARE ) {
			let flour = this.add.sprite(this.flourSpot.x, this.flourSpot.y + this.flourSpot.displayHeight + padding, 'comfy-spritesheet', 'yellow_flour_00.png').setOrigin(0.5, 0);
			flour.setDepth(this.flourSpot.depth - 1);
			flour.play('yellow-flour-animation', true);
			flour.on('animationcomplete', () => {
				flour.removedFromScene();
				flour.destroy();
				flour.off('animationcomplete');
				this.isMaking = false;
				if(this.timer.visible)this.timer.resume();
			});
			let frame = (cake.last as Phaser.GameObjects.Sprite);
			let initX = frame.x;
			let initY = frame.y;
			switch (eFeature) {
				case FRAME.CIRCLE:
					frame.play('yellow-circle-animation', true);

					break;
				case FRAME.HEART:
					frame.play('yellow-heart-animation', true);

					break;
				case FRAME.SQUARE:
					frame.play('yellow-square-animation', true);

					break;
			}
			frame.on('animationcomplete', () => {
				frame.x = initX;
				frame.y = initY;
				cake.features.push(FLOUR.YELLOW);
				frame.off('animationcomplete');
			});

		//IF(isExist Flour)	play reverse, and add new flour
		} else if(eFeature == FLOUR.BROWN || eFeature == FLOUR.PINK || eFeature == FLOUR.YELLOW){

			let sFeature = this.getStart(cake.features);
			let frame = (cake.last as Phaser.GameObjects.Sprite);
			let flour = this.add.sprite(this.flourSpot.x, this.flourSpot.y + this.flourSpot.displayHeight + padding, 'comfy-spritesheet', 'yellow_flour_00.png').setOrigin(0.5, 0);
			flour.setDepth(this.flourSpot.depth - 1);
			switch (eFeature) {
				case FLOUR.BROWN:
					flour.playReverse('brown-flour-animation', true);

					break;
				case FLOUR.PINK:
					flour.playReverse('pink-flour-animation', true);

					break;
				case FLOUR.YELLOW:
					flour.playReverse('yellow-flour-animation', true);

					break;
			}
			cake.features.pop();
			switch (sFeature) {
				case FRAME.CIRCLE:
					//frame.play('brown-circle-animation', true);
					frame.setFrame('circle_00.png');

					break;
				case FRAME.HEART:
					frame.setFrame('heart_00.png');

					break;
				case FRAME.SQUARE:
					frame.setFrame('square_00.png');

					break;
			}

			flour.on('animationcomplete', () => {
				flour.removedFromScene();
				flour.destroy();
				flour.off('animationcomplete');
				let nflour = this.add.sprite(this.flourSpot.x, this.flourSpot.y + this.flourSpot.displayHeight + padding, 'comfy-spritesheet', 'yellow_flour_00.png').setOrigin(0.5, 0);
				nflour.setDepth(this.flourSpot.depth - 1);
					nflour.play('yellow-flour-animation', true);
					nflour.on('animationcomplete', () => {
						nflour.removedFromScene();
						nflour.destroy();
						nflour.off('animationcomplete');
						this.isMaking = false;
						if(this.timer.visible)this.timer.resume();
					});
					switch (sFeature) {
						case FRAME.CIRCLE:
							frame.play('yellow-circle-animation', true);
							break;
						case FRAME.HEART:
							frame.play('yellow-heart-animation', true);

							break;
						case FRAME.SQUARE:
							frame.play('yellow-square-animation', true);

							break;
					}
					cake.features.push(FLOUR.YELLOW);
			});

		}else
			return;

	}
	doBurn() {
		if(this.isMaking) return;
		let cake = this.getCakeByPos(this.tasteSpot);

		//check if haven't cake, play shake spot
		if (!cake) {
			this.shake(this.tasteSpot);
			this.hightlight(this.buttonHightlight);
			return;
		}

		let end = this.getEnd(cake.features);
		if (end != CREAM.BROWN && end != CREAM.PINK && end != CREAM.YELLOW && end != DECORATE.BUTTONS && end != DECORATE.EMOTICON && end != DECORATE.HEART && end != DECORATE.LEAF) {
			return;
		} else {
			if(this.timer.visible)this.timer.pause();
			this.tasteSpot.play('burn-animation', true);
			this.tasteSpot.on('animationcomplete', () => {
				this.tasteSpot.off('animationcomplete');
				this.isMaking = false;
				if(this.timer.visible)this.timer.resume();
			});
			let taste, feature, start
			if (end == DECORATE.BUTTONS || end == DECORATE.EMOTICON || end == DECORATE.HEART || end == DECORATE.LEAF) {
				taste = (cake.getAt(cake.length-2) as Phaser.GameObjects.Sprite);
				feature = this.getLast(cake.features);
				start = this.getStart(cake.features);

			} else {
				taste = (cake.last as Phaser.GameObjects.Sprite);
				feature = this.getEnd(cake.features);
				start = this.getStart(cake.features);
			}


			if (feature == CREAM.BROWN) {
				switch (start) {
					case FRAME.CIRCLE:
						taste.setFrame('brown_burn_circle.png');
						break;
					case FRAME.HEART:
						taste.setFrame('brown_burn_heart.png');
						break;
					case FRAME.SQUARE:
						taste.setFrame('brown_burn_square.png');
						break;
				}
			} else if (feature == CREAM.PINK) {
				switch (start) {
					case FRAME.CIRCLE:
						taste.setFrame('pink_burn_circle.png');
						break;
					case FRAME.HEART:
						taste.setFrame('pink_burn_heart.png');
						break;
					case FRAME.SQUARE:
						taste.setFrame('pink_burn_square.png');
						break;
				}
			} else if (feature == CREAM.YELLOW) {
				switch (start) {
					case FRAME.CIRCLE:
						taste.setFrame('yellow_burn_circle.png');
						break;
					case FRAME.HEART:
						taste.setFrame('yellow_burn_heart.png');
						break;
					case FRAME.SQUARE:
						taste.setFrame('yellow_burn_square.png');
						break;
				}
			}

			cake.features.push(TASTE.BURN);
			if(GameVars.level == LEVEL.ADVANCED || GameVars.level == LEVEL.INTERMEDIATE ){
				this.showChar();
			}

		}
	}
	doSpice() {
		if(this.isMaking) return;
		let cake = this.getCakeByPos(this.tasteSpot);

		//check if haven't cake, play shake spot
		if (!cake) {
			this.shake(this.tasteSpot);
			this.hightlight(this.buttonHightlight);
			return;
		}

		let end = this.getEnd(cake.features);
		if (end != CREAM.BROWN && end != CREAM.PINK && end != CREAM.YELLOW && end != DECORATE.BUTTONS && end != DECORATE.EMOTICON && end != DECORATE.HEART && end != DECORATE.LEAF) {
			return;
		} else {
			if(this.timer.visible)this.timer.pause();
			this.tasteSpot.play('spice-animation', true);
			this.tasteSpot.on('animationcomplete', () => {
				this.tasteSpot.off('animationcomplete');
				this.isMaking = false;
				if(this.timer.visible)this.timer.resume();
			});
			let taste, last, start, spice;
			if (end == DECORATE.BUTTONS || end == DECORATE.EMOTICON || end == DECORATE.HEART || end == DECORATE.LEAF) {
				taste = (cake.getAt(cake.length-2) as Phaser.GameObjects.Sprite);
				last = this.getLast(cake.features);
				start = this.getStart(cake.features);

			} else {
				taste = (cake.last as Phaser.GameObjects.Sprite);
				last = this.getEnd(cake.features);
				start = this.getStart(cake.features);
			}


			switch (start) {
				case FRAME.CIRCLE:
					spice = this.add.image(taste.x, taste.y, 'comfy-spritesheet', 'spice_circle.png').setOrigin(0.5);
					cake.add(spice);
					spice.x = taste.x;
					spice.y = taste.y - 5;
					break;
				case FRAME.HEART:
					spice = this.add.image(taste.x, taste.y, 'comfy-spritesheet', 'spice_heart.png').setOrigin(0.5);
					cake.add(spice);
					spice.x = taste.x;
					spice.y = taste.y - 5;
					break;
				case FRAME.SQUARE:
					spice = this.add.image(taste.x, taste.y, 'comfy-spritesheet', 'spice_square.png').setOrigin(0.5);
					cake.add(spice);
					spice.x = taste.x;
					spice.y = taste.y - 5;
					break;
			}
			cake.features.push(TASTE.SPICE);
			if(GameVars.level == LEVEL.ADVANCED || GameVars.level == LEVEL.INTERMEDIATE ){
				this.showChar();
			}
		}
	}
	doRedRibbon() {
		if(this.isMaking) return;
		let cake = this.getCakeByPos(this.ribbonSpot);

		//check if haven't cake, play shake spot
		if (!cake) {
			this.shake(this.ribbonSpot);
			this.hightlight(this.buttonHightlight);
			return;
		}

		let end = this.getEnd(cake.features);
		if (end == FRAME.CIRCLE || end == FRAME.HEART || end == FRAME.SQUARE) {
			return;
		} else {
			if(this.timer.visible)this.timer.pause();
			let padding =  Utils.calPaddingY(cake.features);
			let ribbon = this.add.sprite(this.ribbonSpot.x, this.ribbonSpot.y + this.ribbonSpot.displayHeight, 'comfy-spritesheet', 'red_ribbon_00.png').setOrigin(0.5, 0);
			ribbon.play('red-ribbon-animation');
			ribbon.on('animationcomplete', () => {
				ribbon.off('animationcomplete');
				this.isMaking = false;
				if(this.timer.visible)this.timer.resume();
				ribbon.removedFromScene();
				ribbon.destroy();

				let ribbonSprite;
				switch (this.getEndFrame(cake.features)) {
					case FRAME.CIRCLE:

						if(end == RIBBON.RED || end == RIBBON.RED || end == RIBBON.GREEN || end == CREAM.BROWN || end == CREAM.PINK || end == CREAM.YELLOW){
							ribbonSprite = (cake.last as Phaser.GameObjects.Sprite);
							ribbonSprite.setFrame('red_ribbon_circle.png');
							cake.features.pop();
							cake.features.push(RIBBON.RED);
						}else{
							ribbonSprite = this.add.sprite(0, -5 + cake.length - 1 * -45, 'comfy-spritesheet', 'red_ribbon_circle.png');
							ribbonSprite.scaleX = ribbonSprite.scaleY = 0.9;
							cake.add(ribbonSprite);
							ribbonSprite.x = -1;
							ribbonSprite.y =  padding;
							cake.features.push(RIBBON.RED);
						}

						break;
					case FRAME.HEART:
						if(end == RIBBON.RED || end == RIBBON.RED || end == RIBBON.GREEN || end == CREAM.BROWN || end == CREAM.PINK || end == CREAM.YELLOW){
							ribbonSprite = (cake.last as Phaser.GameObjects.Sprite);
							ribbonSprite.setFrame('red_ribbon_heart.png');
							cake.features.pop();
							cake.features.push(RIBBON.RED);
						}else{
							ribbonSprite = this.add.sprite(0, -5 + cake.length - 1 * -45, 'comfy-spritesheet', 'red_ribbon_heart.png');
							ribbonSprite.scaleX = ribbonSprite.scaleY = 0.9;
							cake.add(ribbonSprite);
							ribbonSprite.x = -1;
							ribbonSprite.y =  padding;
							cake.features.push(RIBBON.RED);
						}

						break;
					case FRAME.SQUARE:
						if(end == RIBBON.RED || end == RIBBON.RED || end == RIBBON.GREEN || end == CREAM.BROWN || end == CREAM.PINK || end == CREAM.YELLOW){
							ribbonSprite = (cake.last as Phaser.GameObjects.Sprite);
							ribbonSprite.setFrame('red_ribbon_square.png');
							cake.features.pop();
							cake.features.push(RIBBON.RED);
						}else{
							ribbonSprite = this.add.sprite(0, -5 + cake.length - 1 * -45, 'comfy-spritesheet', 'red_ribbon_square.png');
							ribbonSprite.scaleX = ribbonSprite.scaleY = 0.9;
							cake.add(ribbonSprite);
							ribbonSprite.x = -1;
							ribbonSprite.y =  padding;
							cake.features.push(RIBBON.RED);
						}
						break;
				}
				//ribbonSprite.scaleX = ribbonSprite.scaleY = 0.9;
				//ribbonSprite.x = -1;
				//ribbonSprite.y = cake.last.y - 10;
				//cake.add(ribbonSprite);
			});
			//cake.features.push(RIBBON.RED);
		}

	}
	doWhiteRibbon() {
		if(this.isMaking) return;
		let cake = this.getCakeByPos(this.ribbonSpot);
		//check if haven't cake, play shake spot
		if (!cake) {
			this.shake(this.ribbonSpot);
			this.hightlight(this.buttonHightlight);
			return;
		}

		let end = this.getEnd(cake.features);
		if (end == FRAME.CIRCLE || end == FRAME.HEART || end == FRAME.SQUARE) {
			return;
		} else {
			if(this.timer.visible)this.timer.pause();
			let padding =  Utils.calPaddingY(cake.features);
			let ribbon = this.add.sprite(this.ribbonSpot.x, this.ribbonSpot.y + this.ribbonSpot.displayHeight, 'comfy-spritesheet', 'white_ribbon_00.png').setOrigin(0.5, 0);
			ribbon.play('white-ribbon-animation');
			ribbon.on('animationcomplete', () => {
				ribbon.off('animationcomplete');
				this.isMaking = false;
				if(this.timer.visible)this.timer.resume();
				ribbon.removedFromScene();
				ribbon.destroy();

				let ribbonSprite;

				switch (this.getEndFrame(cake.features)) {
					case FRAME.CIRCLE:
						if(end == RIBBON.RED || end == RIBBON.RED || end == RIBBON.GREEN || end == CREAM.BROWN || end == CREAM.PINK || end == CREAM.YELLOW){
							ribbonSprite = (cake.last as Phaser.GameObjects.Sprite);
							ribbonSprite.setFrame('white_ribbon_circle.png');
							cake.features.pop();
							cake.features.push(RIBBON.WHITE);
						}else{
							ribbonSprite = this.add.sprite(0, -5 + cake.length - 1 * -45, 'comfy-spritesheet', 'white_ribbon_circle.png');
							ribbonSprite.scaleX = ribbonSprite.scaleY = 0.9;
							cake.add(ribbonSprite);
							ribbonSprite.x = -1;
							ribbonSprite.y =  padding;
							cake.features.push(RIBBON.WHITE);
						}
						break;
					case FRAME.HEART:
						if(end == RIBBON.RED || end == RIBBON.RED || end == RIBBON.GREEN || end == CREAM.BROWN || end == CREAM.PINK || end == CREAM.YELLOW){
							ribbonSprite = (cake.last as Phaser.GameObjects.Sprite);
							ribbonSprite.setFrame('white_ribbon_heart.png');
							cake.features.pop();
							cake.features.push(RIBBON.WHITE);
						}else{
							ribbonSprite = this.add.sprite(0, -5 + cake.length - 1 * -45, 'comfy-spritesheet', 'white_ribbon_heart.png');
							ribbonSprite.scaleX = ribbonSprite.scaleY = 0.9;
							cake.add(ribbonSprite);
							ribbonSprite.x = -1;
							ribbonSprite.y =  padding;
							cake.features.push(RIBBON.WHITE);
						}
						break;
					case FRAME.SQUARE:
						if(end == RIBBON.RED || end == RIBBON.RED || end == RIBBON.GREEN || end == CREAM.BROWN || end == CREAM.PINK || end == CREAM.YELLOW){
							ribbonSprite = (cake.last as Phaser.GameObjects.Sprite);
							ribbonSprite.setFrame('white_ribbon_square.png');
							cake.features.pop();
							cake.features.push(RIBBON.WHITE);
						}else{
							ribbonSprite = this.add.sprite(0, -5 + cake.length - 1 * -45, 'comfy-spritesheet', 'white_ribbon_square.png');
							ribbonSprite.scaleX = ribbonSprite.scaleY = 0.9;
							cake.add(ribbonSprite);
							ribbonSprite.x = -1;
							ribbonSprite.y =  padding;
							cake.features.push(RIBBON.WHITE);
						}
						break;
				}
				//ribbonSprite.scaleX = ribbonSprite.scaleY = 0.9;
				//ribbonSprite.x = -1;
				//ribbonSprite.y = cake.last.y - 10;
				//cake.add(ribbonSprite);
			});
			//cake.features.push(RIBBON.WHITE);
		}
	}
	doGreenRibbon() {
		if(this.isMaking) return;
		let cake = this.getCakeByPos(this.ribbonSpot);
		//check if haven't cake, play shake spot
		if (!cake) {
			this.shake(this.ribbonSpot);
			this.hightlight(this.buttonHightlight);
			return;
		}

		let end = this.getEnd(cake.features);
		if (end == FRAME.CIRCLE || end == FRAME.HEART || end == FRAME.SQUARE) {
			return;
		} else {
			if(this.timer.visible)this.timer.pause();
			let padding =  Utils.calPaddingY(cake.features);
			let ribbon = this.add.sprite(this.ribbonSpot.x, this.ribbonSpot.y + this.ribbonSpot.displayHeight, 'comfy-spritesheet', 'green_ribbon_00.png').setOrigin(0.5, 0);
			ribbon.play('green-ribbon-animation');
			ribbon.on('animationcomplete', () => {
				ribbon.off('animationcomplete');
				this.isMaking = false;
				if(this.timer.visible)this.timer.resume();
				ribbon.removedFromScene();
				ribbon.destroy();

				let ribbonSprite;

				switch (this.getEndFrame(cake.features)) {
					case FRAME.CIRCLE:
						if(end == RIBBON.RED || end == RIBBON.RED || end == RIBBON.GREEN || end == CREAM.BROWN || end == CREAM.PINK || end == CREAM.YELLOW){
							ribbonSprite = (cake.last as Phaser.GameObjects.Sprite);
							ribbonSprite.setFrame('green_ribbon_circle.png');
							cake.features.pop();
							cake.features.push(RIBBON.GREEN);
						}else{
							ribbonSprite = this.add.sprite(0, -5 + cake.length - 1 * -45, 'comfy-spritesheet', 'green_ribbon_circle.png');
							ribbonSprite.scaleX = ribbonSprite.scaleY = 0.9;
							cake.add(ribbonSprite);
							ribbonSprite.x = -1;
							ribbonSprite.y =  padding;
							cake.features.push(RIBBON.GREEN);
						}

						break;
					case FRAME.HEART:
						if(end == RIBBON.RED || end == RIBBON.RED || end == RIBBON.GREEN || end == CREAM.BROWN || end == CREAM.PINK || end == CREAM.YELLOW){
							ribbonSprite = (cake.last as Phaser.GameObjects.Sprite);
							ribbonSprite.setFrame('green_ribbon_heart.png');
							cake.features.pop();
							cake.features.push(RIBBON.GREEN);
						}else{
							ribbonSprite = this.add.sprite(0, -5 + cake.length - 1 * -45, 'comfy-spritesheet', 'green_ribbon_heart.png');
							ribbonSprite.scaleX = ribbonSprite.scaleY = 0.9;
							cake.add(ribbonSprite);
							ribbonSprite.x = -1;
							ribbonSprite.y =  padding;
							cake.features.push(RIBBON.GREEN);
						}

						break;
					case FRAME.SQUARE:
						if(end == RIBBON.RED || end == RIBBON.RED || end == RIBBON.GREEN || end == CREAM.BROWN || end == CREAM.PINK || end == CREAM.YELLOW){
							ribbonSprite = (cake.last as Phaser.GameObjects.Sprite);
							ribbonSprite.setFrame('green_ribbon_square.png');
							cake.features.pop();
							cake.features.push(RIBBON.GREEN);
						}else{
							ribbonSprite = this.add.sprite(0, -5 + cake.length - 1 * -45, 'comfy-spritesheet', 'green_ribbon_square.png');
							ribbonSprite.scaleX = ribbonSprite.scaleY = 0.9;
							cake.add(ribbonSprite);
							ribbonSprite.x = -1;
							ribbonSprite.y =  padding;
							cake.features.push(RIBBON.GREEN);
						}

						break;
				}
				//ribbonSprite.scaleX = ribbonSprite.scaleY = 0.9;
				//ribbonSprite.x = -1;
				//ribbonSprite.y = cake.last.y - 10;
				//cake.add(ribbonSprite);
			});
			//cake.features.push(RIBBON.GREEN);
		}
	}
	doBrownCream() {
		if(this.isMaking) return;
		let cake = this.getCakeByPos(this.creamSpot);
		//check if haven't cake, play shake spot
		if (!cake) {
			this.shake(this.creamSpot);
			this.hightlight(this.buttonHightlight);
			return;
		}

		let feature = this.getEnd(cake.features);

		if (feature == undefined || feature == FRAME.CIRCLE || feature == FRAME.HEART || feature == FRAME.SQUARE) {
			this.shake(this.frameSpot);
			return;
		} else {
			if(this.timer.visible)this.timer.pause();
			let padding =  Utils.calPaddingY(cake.features);
			this.creamSpot.play('brown-spot-animation');
			this.creamSpot.on('animationcomplete', () => {
				this.creamSpot.off('animationcomplete');
				let cream = this.add.sprite(this.creamSpot.x, this.creamSpot.y + this.creamSpot.displayHeight + 50 + padding, 'comfy-spritesheet', 'brown_line_00.png').setOrigin(0.5);
				cream.setDepth(this.creamSpot.depth - 1);
				cream.play('brown-cream-animation');
				cream.on('animationcomplete', () => {
					this.isMaking = false;
					if(this.timer.visible)this.timer.resume();
					cream.off('animationcomplete');
					cream.removedFromScene();
					cream.destroy();
				});
				//let last = (cake.last as Phaser.GameObjects.Sprite);
				let creamSprite;
				switch (this.getEndFrame(cake.features)) {
					case FRAME.CIRCLE:
						if(feature == CREAM.BROWN || feature == CREAM.PINK || feature == CREAM.YELLOW || feature == RIBBON.GREEN || feature == RIBBON.RED || feature == RIBBON.WHITE){
							creamSprite = (cake.last as Phaser.GameObjects.Sprite);
							creamSprite.setFrame('brown_cream_circle.png');
							cake.features.pop();
							cake.features.push(CREAM.BROWN);
						}else{
							creamSprite = this.add.sprite(0, -5 + cake.length - 1 * -45, 'comfy-spritesheet', 'brown_cream_circle.png');
							creamSprite.scaleX = creamSprite.scaleY = 0.95;
							cake.add(creamSprite);
							creamSprite.x = -1;
							creamSprite.y =  padding;
							cake.features.push(CREAM.BROWN);
						}

						break;
					case FRAME.HEART:
						if(feature == CREAM.BROWN || feature == CREAM.PINK || feature == CREAM.YELLOW || feature == RIBBON.GREEN || feature == RIBBON.RED || feature == RIBBON.WHITE){
							creamSprite = (cake.last as Phaser.GameObjects.Sprite);
							creamSprite.setFrame('brown_cream_heart.png');
							cake.features.pop();
							cake.features.push(CREAM.BROWN);
						}else{
							creamSprite = this.add.sprite(0, -5 + cake.length - 1 * -45, 'comfy-spritesheet', 'brown_cream_heart.png');
							creamSprite.scaleX = creamSprite.scaleY = 0.95;
							cake.add(creamSprite);
							creamSprite.x = -1;
							creamSprite.y =  padding;
							cake.features.push(CREAM.BROWN);
						}

						break;
					case FRAME.SQUARE:
						if(feature == CREAM.BROWN || feature == CREAM.PINK || feature == CREAM.YELLOW || feature == RIBBON.GREEN || feature == RIBBON.RED || feature == RIBBON.WHITE){
							creamSprite = (cake.last as Phaser.GameObjects.Sprite);
							creamSprite.setFrame('brown_cream_square.png');
							cake.features.pop();
							cake.features.push(CREAM.BROWN);
						}else{
							creamSprite = this.add.sprite(0, -5 + cake.length - 1 * -45, 'comfy-spritesheet', 'brown_cream_square.png');
							creamSprite.scaleX = creamSprite.scaleY = 0.95;
							cake.add(creamSprite);
							creamSprite.x = -1;
							creamSprite.y =  padding;
							cake.features.push(CREAM.BROWN);
						}

						break;
				}




			});

		}


	}
	doPinkCream() {
		if(this.isMaking) return;
		let cake = this.getCakeByPos(this.creamSpot);
		//check if haven't cake, play shake spot
		if (!cake) {
			this.shake(this.creamSpot);
			this.hightlight(this.buttonHightlight);
			return;
		}

		let feature = this.getEnd(cake.features);
		if (feature == undefined || feature == FRAME.CIRCLE || feature == FRAME.HEART || feature == FRAME.SQUARE) {
			this.shake(this.frameSpot);
			return;
		} else {
			if(this.timer.visible)this.timer.pause();
			let padding =  Utils.calPaddingY(cake.features);
			this.creamSpot.play('pink-spot-animation');
			this.creamSpot.on('animationcomplete', () => {
				this.creamSpot.off('animationcomplete');
				let cream = this.add.sprite(this.creamSpot.x, this.creamSpot.y + this.creamSpot.displayHeight + 50 + padding, 'comfy-spritesheet', 'pink_line_00.png').setOrigin(0.5);
				cream.setDepth(this.creamSpot.depth - 1);
				cream.play('pink-cream-animation');
				cream.on('animationcomplete', () => {
					this.isMaking = false;
					if(this.timer.visible)this.timer.resume();
					cream.off('animationcomplete');
					cream.removedFromScene();
					cream.destroy();
				});
				//let end = (cake.end as Phaser.GameObjects.Sprite);
				let creamSprite;
				switch (this.getEndFrame(cake.features)) {
					case FRAME.CIRCLE:
						if(feature == CREAM.BROWN || feature == CREAM.PINK || feature == CREAM.YELLOW || feature == RIBBON.GREEN || feature == RIBBON.RED || feature == RIBBON.WHITE){
							creamSprite = (cake.last as Phaser.GameObjects.Sprite);
							creamSprite.setFrame('pink_cream_circle.png');
							cake.features.pop();
							cake.features.push(CREAM.PINK);
						}else{
							creamSprite = this.add.sprite(0, -5 + cake.length - 1 * -45, 'comfy-spritesheet', 'pink_cream_circle.png');
							creamSprite.scaleX = creamSprite.scaleY = 0.95;
							cake.add(creamSprite);
							creamSprite.x = -1;
							creamSprite.y =  padding;
							cake.features.push(CREAM.PINK);
						}

						break;
					case FRAME.HEART:
						if(feature == CREAM.BROWN || feature == CREAM.PINK || feature == CREAM.YELLOW || feature == RIBBON.GREEN || feature == RIBBON.RED || feature == RIBBON.WHITE){
							creamSprite = (cake.last as Phaser.GameObjects.Sprite);
							creamSprite.setFrame('pink_cream_heart.png');
							cake.features.pop();
							cake.features.push(CREAM.PINK);
						}else{
							creamSprite = this.add.sprite(0, -5 + cake.length - 1 * -45, 'comfy-spritesheet', 'pink_cream_heart.png');
							creamSprite.scaleX = creamSprite.scaleY = 0.95;
							cake.add(creamSprite);
							creamSprite.x = -1;
							creamSprite.y =  padding;
							cake.features.push(CREAM.PINK);
						}

						break;
					case FRAME.SQUARE:
						if(feature == CREAM.BROWN || feature == CREAM.PINK || feature == CREAM.YELLOW || feature == RIBBON.GREEN || feature == RIBBON.RED || feature == RIBBON.WHITE){
							creamSprite = (cake.last as Phaser.GameObjects.Sprite);
							creamSprite.setFrame('pink_cream_square.png');
							cake.features.pop();
							cake.features.push(CREAM.PINK);
						}else{
							creamSprite = this.add.sprite(0, -5 + cake.length - 1 * -45, 'comfy-spritesheet', 'pink_cream_square.png');
							creamSprite.scaleX = creamSprite.scaleY = 0.95;
							cake.add(creamSprite);
							creamSprite.x = -1;
							creamSprite.y =  padding;
							cake.features.push(CREAM.PINK);
						}

						break;
				}

			});
		}
	}
	doYellowCream() {
		if(this.isMaking) return;
		let cake = this.getCakeByPos(this.creamSpot);
		//check if haven't cake, play shake spot
		if (!cake) {
			this.shake(this.creamSpot);
			this.hightlight(this.buttonHightlight);
			return;
		}

		let feature = this.getEnd(cake.features);
		if (feature == undefined || feature == FRAME.CIRCLE || feature == FRAME.HEART || feature == FRAME.SQUARE) {
			this.shake(this.frameSpot);
			return;
		} else {
			if(this.timer.visible)this.timer.pause();
			let padding =  Utils.calPaddingY(cake.features);
			this.creamSpot.play('yellow-spot-animation');
			this.creamSpot.on('animationcomplete', () => {
				this.creamSpot.off('animationcomplete');
				let cream = this.add.sprite(this.creamSpot.x, this.creamSpot.y + this.creamSpot.displayHeight + 50 + padding, 'comfy-spritesheet', 'yellow_line_00.png').setOrigin(0.5);
				cream.setDepth(this.creamSpot.depth - 1);
				cream.play('yellow-cream-animation');
				cream.on('animationcomplete', () => {
					this.isMaking = false;
					if(this.timer.visible)this.timer.resume();
					cream.off('animationcomplete');
					cream.removedFromScene();
					cream.destroy();
				});
				//let end = (cake.end as Phaser.GameObjects.Sprite);
				let creamSprite;
				switch (this.getEndFrame(cake.features)) {
					case FRAME.CIRCLE:
						if(feature == CREAM.BROWN || feature == CREAM.PINK || feature == CREAM.YELLOW || feature == RIBBON.GREEN || feature == RIBBON.RED || feature == RIBBON.WHITE){
							creamSprite = (cake.last as Phaser.GameObjects.Sprite);
							creamSprite.setFrame('yellow_cream_circle.png');
							cake.features.pop();
							cake.features.push(CREAM.YELLOW);
						}else{
							creamSprite = this.add.sprite(0, -5 + cake.length - 1 * -45, 'comfy-spritesheet', 'yellow_cream_circle.png');
							creamSprite.scaleX = creamSprite.scaleY = 0.95;
							cake.add(creamSprite);
							creamSprite.x = -1;
							creamSprite.y =  padding;
							cake.features.push(CREAM.YELLOW);
						}

						break;
					case FRAME.HEART:
						if(feature == CREAM.BROWN || feature == CREAM.PINK || feature == CREAM.YELLOW || feature == RIBBON.GREEN || feature == RIBBON.RED || feature == RIBBON.WHITE){
							creamSprite = (cake.last as Phaser.GameObjects.Sprite);
							creamSprite.setFrame('yellow_cream_heart.png');
							cake.features.pop();
							cake.features.push(CREAM.YELLOW);
						}else{
							creamSprite = this.add.sprite(0, -5 + cake.length - 1 * -45, 'comfy-spritesheet', 'yellow_cream_heart.png');
							creamSprite.scaleX = creamSprite.scaleY = 0.95;
							cake.add(creamSprite);
							creamSprite.x = -1;
							creamSprite.y =  padding;
							cake.features.push(CREAM.YELLOW);
						}

						break;
					case FRAME.SQUARE:
						if(feature == CREAM.BROWN || feature == CREAM.PINK || feature == CREAM.YELLOW || feature == RIBBON.GREEN || feature == RIBBON.RED || feature == RIBBON.WHITE){
							creamSprite = (cake.last as Phaser.GameObjects.Sprite);
							creamSprite.setFrame('yellow_cream_square.png');
							cake.features.pop();
							cake.features.push(CREAM.YELLOW);
						}else{
							creamSprite = this.add.sprite(0, -5 + cake.length - 1 * -45, 'comfy-spritesheet', 'yellow_cream_square.png');
							creamSprite.scaleX = creamSprite.scaleY = 0.95;
							cake.add(creamSprite);
							creamSprite.x = -1;
							creamSprite.y =  padding;
							cake.features.push(CREAM.YELLOW);
						}

						break;
				}


			});

		}

	}
	doButtonsIcon() {
		if(this.isMaking) return;
		let cake = this.getCakeByPos(this.decorateSpot);
		//check if haven't cake, play shake spot
		if (!cake) {
			this.shake(this.decorateSpot);
			this.hightlight(this.buttonHightlight);
			return;
		}
		let end = this.getEnd(cake.features);
		if (end == FRAME.CIRCLE || end == FRAME.HEART || end == FRAME.SQUARE) {
			return;
		} else {
			if(this.timer.visible)this.timer.pause();
			let padding = Utils.calPaddingY(cake.features);
			if (end !== DECORATE.BUTTONS && end !== DECORATE.EMOTICON && end !== DECORATE.HEART && end !== DECORATE.LEAF) {

				let buttons = this.add.sprite(this.decorateSpot.x, this.decorateSpot.y + this.decorateSpot.displayHeight, 'comfy-spritesheet', 'buttons_00.png').setOrigin(0.5);
				buttons.play('buttons-animation');

				this.add.tween({
					targets: buttons,
					y: cake.y + padding - 10,
					duration: 200,
					onComplete: () => {

					},
					callbackScope: this
				});
				buttons.on('animationcomplete', () => {
					this.isMaking = false;
					if(this.timer.visible)this.timer.resume();
					buttons.off('animationcomplete');
					buttons.removedFromScene();
					buttons.destroy();
					let buttonsSprite = this.add.sprite(this.decorateSpot.x, this.decorateSpot.y, 'comfy-spritesheet', 'buttons_icon.png').setOrigin(0.5);

					buttonsSprite.x = 0;
					buttonsSprite.y = padding;
					cake.add(buttonsSprite);
				});
				cake.features.push(DECORATE.BUTTONS);
			} else {
				let lastSprite = (cake.last as Phaser.GameObjects.Sprite);
				cake.remove(lastSprite);
				lastSprite.removedFromScene();
				lastSprite.destroy();


				let buttons = this.add.sprite(this.decorateSpot.x, this.decorateSpot.y + this.decorateSpot.displayHeight, 'comfy-spritesheet', 'buttons_00.png').setOrigin(0, 0.5);
				buttons.play('buttons-animation');

				this.add.tween({
					targets: buttons,
					y: cake.y + padding - 10,
					duration: 200,
					onComplete: () => {

					},
					callbackScope: this
				});
				buttons.on('animationcomplete', () => {
					this.isMaking = false;
					if(this.timer.visible)this.timer.resume();
					buttons.off('animationcomplete');
					buttons.removedFromScene();
					buttons.destroy();
					let buttonsSprite = this.add.sprite(this.decorateSpot.x, this.decorateSpot.y, 'comfy-spritesheet', 'buttons_icon.png').setOrigin(0.5);

					buttonsSprite.x = 0;
					buttonsSprite.y = padding;
					cake.add(buttonsSprite);
				});
				cake.features.pop();
				cake.features.push(DECORATE.BUTTONS);

			}

			if(GameVars.level == LEVEL.EASY){
				this.showChar();
			}
		}


	}
	doHeartIcon() {
		if(this.isMaking) return;
		let cake = this.getCakeByPos(this.decorateSpot);
		//check if haven't cake, play shake spot
		if (!cake) {
			this.shake(this.decorateSpot);
			this.hightlight(this.buttonHightlight);
			return;
		}
		let end = this.getEnd(cake.features);
		if (end == FRAME.CIRCLE || end == FRAME.HEART || end == FRAME.SQUARE) {
			return;
		} else {
			if(this.timer.visible)this.timer.pause();
			let padding = Utils.calPaddingY(cake.features);
			if (end !== DECORATE.BUTTONS && end !== DECORATE.EMOTICON && end !== DECORATE.HEART && end !== DECORATE.LEAF) {

				let heart = this.add.sprite(this.decorateSpot.x, this.decorateSpot.y + this.decorateSpot.displayHeight, 'comfy-spritesheet', 'heart_icon_00.png').setOrigin(0, 0.5);
				heart.play('heart-animation');
				this.add.tween({
					targets: heart,
					y: cake.y + padding - 10,
					duration: 200,
					onComplete: () => {

					},
					callbackScope: this
				});
				heart.on('animationcomplete', () => {
					this.isMaking = false;
					if(this.timer.visible)this.timer.resume();
					heart.off('animationcomplete');
					heart.removedFromScene();
					heart.destroy();
					let heartSprite = this.add.sprite(this.decorateSpot.x, this.decorateSpot.y, 'comfy-spritesheet', 'heart_icon.png').setOrigin(0.5);
					cake.add(heartSprite);
					heartSprite.x = 0;
					heartSprite.y = padding;
				});
				cake.features.push(DECORATE.HEART);
			} else {
				let lastSprite = (cake.last as Phaser.GameObjects.Sprite);
				cake.remove(lastSprite);
				lastSprite.removedFromScene();
				lastSprite.destroy();


				let heart = this.add.sprite(this.decorateSpot.x, this.decorateSpot.y + this.decorateSpot.displayHeight, 'comfy-spritesheet', 'heart_icon_00.png').setOrigin(0, 0.5);
				heart.play('heart-animation');
				this.add.tween({
					targets: heart,
					y: cake.y + padding - 10,
					duration: 200,
					onComplete: () => {

					},
					callbackScope: this
				});
				heart.on('animationcomplete', () => {
					this.isMaking = false;
					if(this.timer.visible)this.timer.resume();
					heart.off('animationcomplete');
					heart.removedFromScene();
					heart.destroy();
					let heartSprite = this.add.sprite(this.decorateSpot.x, this.decorateSpot.y, 'comfy-spritesheet', 'heart_icon.png').setOrigin(0.5);

					heartSprite.x = 0;
					heartSprite.y = padding;
					cake.add(heartSprite);
				});
				cake.features.pop();
				cake.features.push(DECORATE.HEART);
			}

			if(GameVars.level == LEVEL.EASY){
				this.showChar();
			}
		}

	}
	doEmoticon() {
		if(this.isMaking) return;
		let cake = this.getCakeByPos(this.decorateSpot);
		//check if haven't cake, play shake spot
		if (!cake) {
			this.shake(this.decorateSpot);
			this.hightlight(this.buttonHightlight);
			return;
		}
		let end = this.getEnd(cake.features);
		if (end == FRAME.CIRCLE || end == FRAME.HEART || end == FRAME.SQUARE) {
			return;
		} else {
			if(this.timer.visible)this.timer.pause();
			let padding = Utils.calPaddingY(cake.features);
			if (end !== DECORATE.BUTTONS && end !== DECORATE.EMOTICON && end !== DECORATE.HEART && end !== DECORATE.LEAF) {

				let emoticon = this.add.sprite(this.decorateSpot.x, this.decorateSpot.y + this.decorateSpot.displayHeight, 'comfy-spritesheet', 'emoticon_00.png').setOrigin(0, 0.5);
				emoticon.play('emoticon-animation');
				this.add.tween({
					targets: emoticon,
					y: cake.y + padding - 10,
					duration: 200,
					onComplete: () => {

					},
					callbackScope: this
				});
				emoticon.on('animationcomplete', () => {
					this.isMaking = false;
					if(this.timer.visible)this.timer.resume();
					emoticon.off('animationcomplete');
					emoticon.removedFromScene();
					emoticon.destroy();
					let emoticonSprite = this.add.sprite(this.decorateSpot.x, this.decorateSpot.y, 'comfy-spritesheet', 'emoticon_icon.png').setOrigin(0.5);

					emoticonSprite.x = 0;
					emoticonSprite.y = padding;
					cake.add(emoticonSprite);
				});
				cake.features.push(DECORATE.EMOTICON);
			} else {
				let lastSprite = (cake.last as Phaser.GameObjects.Sprite);
				cake.remove(lastSprite);
				lastSprite.removedFromScene();
				lastSprite.destroy();


				let emoticon = this.add.sprite(this.decorateSpot.x, this.decorateSpot.y + this.decorateSpot.displayHeight, 'comfy-spritesheet', 'emoticon_00.png').setOrigin(0, 0.5);
				emoticon.play('emoticon-animation');
				this.add.tween({
					targets: emoticon,
					y: cake.y + padding - 10,
					duration: 200,
					onComplete: () => {

					},
					callbackScope: this
				});
				emoticon.on('animationcomplete', () => {
					this.isMaking = false;
					if(this.timer.visible)this.timer.resume();
					emoticon.off('animationcomplete');
					emoticon.removedFromScene();
					emoticon.destroy();
					let emoticonSprite = this.add.sprite(this.decorateSpot.x, this.decorateSpot.y, 'comfy-spritesheet', 'emoticon_icon.png').setOrigin(0.5);

					emoticonSprite.x = 0;
					emoticonSprite.y = padding;
					cake.add(emoticonSprite);
				});
				cake.features.pop();
				cake.features.push(DECORATE.EMOTICON);
			}

			if(GameVars.level == LEVEL.EASY){
				this.showChar();
			}
		}
	}
	doLeafIcon() {
		if(this.isMaking) return;
		let cake = this.getCakeByPos(this.decorateSpot);
		//check if haven't cake, play shake spot
		if (!cake) {
			this.shake(this.decorateSpot);
			this.hightlight(this.buttonHightlight);
			return;
		}
		let end = this.getEnd(cake.features);
		if (end == FRAME.CIRCLE || end == FRAME.HEART || end == FRAME.SQUARE) {
			return;
		} else {
			this.isMaking = true;
			if(this.timer.visible)this.timer.pause();
			let padding = Utils.calPaddingY(cake.features);
			if (end !== DECORATE.BUTTONS && end !== DECORATE.EMOTICON && end !== DECORATE.HEART && end !== DECORATE.LEAF) {

				let leaf = this.add.sprite(this.decorateSpot.x, this.decorateSpot.y + this.decorateSpot.displayHeight, 'comfy-spritesheet', 'leaf_00.png').setOrigin(0, 0.5);
				leaf.scaleX = leaf.scaleY = 1.5;
				leaf.play('leaf-animation');
				this.add.tween({
					targets: leaf,
					y: cake.y + padding-10,
					duration: 200,
					onComplete: () => {

					},
					callbackScope: this
				});
				leaf.on('animationcomplete', () => {
					this.isMaking = false;
					if(this.timer.visible)this.timer.resume();
					leaf.off('animationcomplete');
					leaf.removedFromScene();
					leaf.destroy();
					let leafSprite = this.add.sprite(this.decorateSpot.x, this.decorateSpot.y, 'comfy-spritesheet', 'leaf_icon.png').setOrigin(0.5);

					leafSprite.x = 0;
					leafSprite.y = padding;
					cake.add(leafSprite);
				});
				cake.features.push(DECORATE.LEAF);
			} else {
				let lastSprite = (cake.last as Phaser.GameObjects.Sprite);
				cake.remove(lastSprite);
				lastSprite.removedFromScene();
				lastSprite.destroy();


				let leaf = this.add.sprite(this.decorateSpot.x, this.decorateSpot.y + this.decorateSpot.displayHeight, 'comfy-spritesheet', 'leaf_00.png').setOrigin(0, 0.5);
				leaf.scaleX = leaf.scaleY = 1.5;
				leaf.play('leaf-animation');
				this.add.tween({
					targets: leaf,
					y: cake.y + padding - 10,
					duration: 200,
					onComplete: () => {

					},
					callbackScope: this
				});
				leaf.on('animationcomplete', () => {
					this.isMaking = false;
					if(this.timer.visible)this.timer.resume();
					leaf.off('animationcomplete');
					leaf.removedFromScene();
					leaf.destroy();
					let leafSprite = this.add.sprite(this.decorateSpot.x, this.decorateSpot.y, 'comfy-spritesheet', 'leaf_icon.png').setOrigin(0.5);

					leafSprite.x = 0;
					leafSprite.y = padding;
					cake.add(leafSprite);
				});
				cake.features.pop();
				cake.features.push(DECORATE.LEAF);
			}

			if(GameVars.level == LEVEL.EASY){
				this.showChar();
			}
		}

	}

	update(time: number, delta: number): void {
		if(this.timer.visible)this.timer.update();
	}

	getCakeByPos(target: any) {
		let cake = null;
		for (let i = 0; i < this.cakes.length; i++) {
			if (this.cakes[i].x == target.x) {
				cake = this.cakes[i];
				return cake;
			}
		}
		return cake;
	}

	getEnd(array: any) {
		return array[array.length - 1];
	}

	getStart(array: any) {
		return array[0];
	}

	getFirst(array: any){
		return array[1];
	}

	getLast(array: any) {
		return array[array.length - 2];
	}

	getEndFrame(array: any){
		let frame = null;
		for(let i = 0; i < array.length; i++){
			if(array[i] == FRAME.CIRCLE || array[i] == FRAME.HEART || array[i] == FRAME.SQUARE){
				frame = array[i];
			}
		}
		return frame;
	}
	getFrameNum(array: any){
		let count = 0;
		for(let i = 0; i < array.length; i++){
			if(array[i] == FRAME.CIRCLE || array[i] == FRAME.HEART || array[i] == FRAME.SQUARE){
				count++;
			}
		}
		return count;
	}

	hightlight(target:any){
		target.visible = true;
		target.alpha = 0;
		this.add.tween({
			targets: target,
			alpha: 1,
			duration: 200,
			yoyo: true,
			repeat: 2,
			onComplete:()=>{
				target.visible = false;
			}
		});
	}

	canMove(x: number, y: number){

		for(let i = 0; i < this.cakes.length; i++){
			if(this.cakes[i].x == x && this.cakes[i].y == y){
				return false;
			}

		}

		return true;
	}

	getIndex(cake:any){
		for(let i = 0; i < this.cakes.length; i++){
			if(this.cakes[i] == cake){
				return i;
			}
		}
		return null
	}

	shake(object: any) {
		this.tweens.add({
			targets: object,
			x: "+=20",
			duration: 50,
			yoyo: true,
			repeat: 1
		});

	}


	isExistMakingCake(){


		//if(this.cakes.length > 0) return true;
		for(let i = 0; i < this.cakes.length; i++){
			if(this.cakes[i].features.length>0) return true;
		}
		return false;
	}


	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
