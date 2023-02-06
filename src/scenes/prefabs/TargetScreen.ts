
// You can write more code here
import Model from "./Model";
import { FLOUR, RIBBON, CREAM, DECORATE, FRAME, FEATURES, TASTE, LEVEL } from '../../GameConstants';
import GameVars from "../../GameVars";
/* START OF COMPILED CODE */

import Phaser from "phaser";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class TargetScreen extends Phaser.GameObjects.Container {

	constructor(scene: Phaser.Scene, x?: number, y?: number) {
		super(scene, x ?? 0, y ?? 0);

		// frameTv
		const frameTv = scene.add.image(0, 0, "cakes", "frame_tv.png");
		frameTv.setOrigin(0, 0);
		this.add(frameTv);

		// screenTv
		const screenTv = scene.add.image(62, 85, "cakes", "screen_tv.png");
		this.add(screenTv);

		// modelBegin
		const modelBegin = scene.add.container(65, 106);
		modelBegin.scaleX = 0.8;
		modelBegin.scaleY = 0.8;
		this.add(modelBegin);

		// frameBegin
		const frameBegin = scene.add.image(-3, 4, "cakes", "brown_heart_06.png");
		modelBegin.add(frameBegin);

		// creamBegin
		const creamBegin = scene.add.image(-4, -3, "cakes", "brown_cream_heart.png");
		modelBegin.add(creamBegin);

		// decorateBegin
		const decorateBegin = scene.add.image(-8, -14, "material", "leaf_icon.png");
		modelBegin.add(decorateBegin);

		// modelInter
		const modelInter = scene.add.container(65, 106);
		modelInter.scaleX = 0.8;
		modelInter.scaleY = 0.8;
		this.add(modelInter);

		// frameOneInter
		const frameOneInter = scene.add.image(-3, 4, "cakes", "brown_heart_06.png");
		modelInter.add(frameOneInter);

		// ribbonInter
		const ribbonInter = scene.add.image(-2, -7, "cakes", "green_ribbon_heart.png");
		modelInter.add(ribbonInter);

		// frameTwoInter
		const frameTwoInter = scene.add.image(-3, -18, "cakes", "brown_heart_06.png");
		modelInter.add(frameTwoInter);

		// creamInter
		const creamInter = scene.add.image(-3, -26, "cakes", "brown_cream_heart.png");
		modelInter.add(creamInter);

		// decorateInter
		const decorateInter = scene.add.image(-6, -33, "material", "leaf_icon.png");
		modelInter.add(decorateInter);

		// modelAdvanced
		const modelAdvanced = scene.add.container(65, 106);
		modelAdvanced.scaleX = 0.8;
		modelAdvanced.scaleY = 0.8;
		this.add(modelAdvanced);

		// frameOneAdvanced
		const frameOneAdvanced = scene.add.image(-3, 4, "cakes", "brown_heart_06.png");
		modelAdvanced.add(frameOneAdvanced);

		// ribbonOneAdvanced
		const ribbonOneAdvanced = scene.add.image(-3, -6, "cakes", "green_ribbon_heart.png");
		modelAdvanced.add(ribbonOneAdvanced);

		// frameTwoAdvanced
		const frameTwoAdvanced = scene.add.image(-3, -18, "cakes", "brown_heart_06.png");
		modelAdvanced.add(frameTwoAdvanced);

		// ribbonTwoAdvanced
		const ribbonTwoAdvanced = scene.add.image(-3, -23, "cakes", "green_ribbon_heart.png");
		modelAdvanced.add(ribbonTwoAdvanced);

		// frameThreeAdvanced
		const frameThreeAdvanced = scene.add.image(-3, -32, "cakes", "brown_heart_06.png");
		modelAdvanced.add(frameThreeAdvanced);

		// creamAdvanced
		const creamAdvanced = scene.add.image(-4, -39, "cakes", "brown_cream_heart.png");
		modelAdvanced.add(creamAdvanced);

		// decorateAdvanced
		const decorateAdvanced = scene.add.image(-8, -46, "material", "emoticon_icon.png");
		modelAdvanced.add(decorateAdvanced);

		// modelContainer
		const modelContainer = scene.add.container(65, 118);
		modelContainer.scaleX = 0.8;
		modelContainer.scaleY = 0.8;
		this.add(modelContainer);

		this.modelBegin = modelBegin;
		this.frameBegin = frameBegin;
		this.creamBegin = creamBegin;
		this.decorateBegin = decorateBegin;
		this.modelInter = modelInter;
		this.frameOneInter = frameOneInter;
		this.ribbonInter = ribbonInter;
		this.frameTwoInter = frameTwoInter;
		this.creamInter = creamInter;
		this.decorateInter = decorateInter;
		this.modelAdvanced = modelAdvanced;
		this.frameOneAdvanced = frameOneAdvanced;
		this.ribbonOneAdvanced = ribbonOneAdvanced;
		this.frameTwoAdvanced = frameTwoAdvanced;
		this.ribbonTwoAdvanced = ribbonTwoAdvanced;
		this.frameThreeAdvanced = frameThreeAdvanced;
		this.creamAdvanced = creamAdvanced;
		this.decorateAdvanced = decorateAdvanced;
		this.modelContainer = modelContainer;

		/* START-USER-CTR-CODE */
		// Write your code here.
		this.modelBegin.visible = false;
		this.modelInter.visible = false;
		this.modelAdvanced.visible = false;
		/* END-USER-CTR-CODE */
	}

	private modelBegin: Phaser.GameObjects.Container;
	private frameBegin: Phaser.GameObjects.Image;
	private creamBegin: Phaser.GameObjects.Image;
	private decorateBegin: Phaser.GameObjects.Image;
	private modelInter: Phaser.GameObjects.Container;
	private frameOneInter: Phaser.GameObjects.Image;
	private ribbonInter: Phaser.GameObjects.Image;
	private frameTwoInter: Phaser.GameObjects.Image;
	private creamInter: Phaser.GameObjects.Image;
	private decorateInter: Phaser.GameObjects.Image;
	private modelAdvanced: Phaser.GameObjects.Container;
	private frameOneAdvanced: Phaser.GameObjects.Image;
	private ribbonOneAdvanced: Phaser.GameObjects.Image;
	private frameTwoAdvanced: Phaser.GameObjects.Image;
	private ribbonTwoAdvanced: Phaser.GameObjects.Image;
	private frameThreeAdvanced: Phaser.GameObjects.Image;
	private creamAdvanced: Phaser.GameObjects.Image;
	private decorateAdvanced: Phaser.GameObjects.Image;
	private modelContainer: Phaser.GameObjects.Container;

	/* START-USER-CODE */

	// Write your code here.
	private modelCurrent:any;
	public createImage(model: Model):void{
		let flour, cream, decorate, ribbon;

		/*switch(GameVars.level){
			case LEVEL.EASY:
				this.modelBegin.visible = true;
				this.modelCurrent = this.modelBegin;
				break;
			case LEVEL.INTERMEDIATE:
				this.modelInter.visible = true;
				this.modelCurrent = this.modelInter;
				break;
			case LEVEL.ADVANCED:
				this.modelAdvanced.visible = true;
				this.modelCurrent = this.modelAdvanced;
				break;
		}*/

		for(let i = 0; i < model.features.length; i++){

			if(model.features[i].frame != null){

				if(model.features[i].frame == FRAME.CIRCLE){

					if(model.features[i].flour == FLOUR.BROWN){
						flour = this.scene.add.image(0,-5,'cakes','brown_circle_06.png');
						//this.modelCurrent
						this.modelContainer.add(flour);
					}else if(model.features[i].flour == FLOUR.PINK){
						flour = this.scene.add.image(0,-5,'cakes','pink_circle_06.png');
						this.modelContainer.add(flour);
					}else if(model.features[i].flour == FLOUR.YELLOW){
						flour = this.scene.add.image(0,-5,'cakes','yellow_circle_06.png');
						this.modelContainer.add(flour);
					}
				}else if(model.features[i].frame == FRAME.HEART){
					if(model.features[i].flour == FLOUR.BROWN){
						flour = this.scene.add.image(0,-5,'cakes','brown_heart_06.png');
						this.modelContainer.add(flour);
					}else if(model.features[i].flour == FLOUR.PINK){
						flour = this.scene.add.image(0,-5,'cakes','pink_heart_06.png');
						this.modelContainer.add(flour);
					}else if(model.features[i].flour == FLOUR.YELLOW){
						flour = this.scene.add.image(0,-5,'cakes','yellow_heart_06.png');
						this.modelContainer.add(flour);
					}
				}else if(model.features[i].frame == FRAME.SQUARE){
					if(model.features[i].flour == FLOUR.BROWN){
						flour = this.scene.add.image(0,-5,'cakes','brown_square_06.png');
						this.modelContainer.add(flour);
					}else if(model.features[i].flour == FLOUR.PINK){
						flour = this.scene.add.image(0,-5,'cakes','pink_square_06.png');
						this.modelContainer.add(flour);
					}else if(model.features[i].flour == FLOUR.YELLOW){
						flour = this.scene.add.image(0,-5,'cakes','yellow_square_06.png');
						this.modelContainer.add(flour);
					}
				}

			}
			if(model.features[i].ribbon != null){
				//console.log('create ribbon...');
				if(model.features[i].frame == FRAME.CIRCLE){

					if(model.features[i].ribbon == RIBBON.BROWN){
						ribbon = this.scene.add.image(0,-15,'cakes','brown_ribbon_circle.png');
						this.modelContainer.add(ribbon);
					}else if(model.features[i].ribbon == RIBBON.GREEN){
						ribbon = this.scene.add.image(0,-15,'cakes','green_ribbon_circle.png');
						this.modelContainer.add(ribbon);
					}else if(model.features[i].ribbon == RIBBON.WHITE){
						ribbon = this.scene.add.image(0,-15,'cakes','white_ribbon_circle.png');
						this.modelContainer.add(ribbon);
					}
				}else if(model.features[i].frame == FRAME.HEART){
					if(model.features[i].ribbon == RIBBON.BROWN){
						ribbon = this.scene.add.image(0,-15,'cakes','brown_ribbon_heart.png');
						this.modelContainer.add(ribbon);
					}else if(model.features[i].ribbon == RIBBON.GREEN){
						ribbon = this.scene.add.image(0,-15,'cakes','green_ribbon_heart.png');
						this.modelContainer.add(ribbon);
					}else if(model.features[i].ribbon == RIBBON.WHITE){
						ribbon = this.scene.add.image(0,-15,'cakes','white_ribbon_heart.png');
						this.modelContainer.add(ribbon);
					}
				}else if(model.features[i].frame == FRAME.SQUARE){
					if(model.features[i].ribbon == RIBBON.BROWN){
						ribbon = this.scene.add.image(0,-15,'cakes','brown_ribbon_square.png');
						this.modelContainer.add(ribbon);
					}else if(model.features[i].ribbon == RIBBON.GREEN){
						ribbon = this.scene.add.image(0,-15,'cakes','green_ribbon_square.png');
						this.modelContainer.add(ribbon);
					}else if(model.features[i].ribbon == RIBBON.WHITE){
						ribbon = this.scene.add.image(0,-15,'cakes','white_ribbon_square.png');
						this.modelContainer.add(ribbon);
					}
				}
			}
			if(model.features[i].cream != null){
				if(model.features[i].frame == FRAME.CIRCLE){

					if(model.features[i].cream == CREAM.BROWN){
						cream = this.scene.add.image(0,-15,'cakes','brown_cream_circle.png');
						this.modelContainer.add(cream);
					}else if(model.features[i].cream == CREAM.PINK){
						cream = this.scene.add.image(0,-15,'cakes','pink_cream_circle.png');
						this.modelContainer.add(cream);
					}else if(model.features[i].cream == CREAM.YELLOW){
						cream = this.scene.add.image(0,-15,'cakes','yellow_cream_circle.png');
						this.modelContainer.add(cream);
					}
				}else if(model.features[i].frame == FRAME.HEART){
					if(model.features[i].cream == CREAM.BROWN){
						cream = this.scene.add.image(0,-15,'cakes','brown_cream_heart.png');
						this.modelContainer.add(cream);
					}else if(model.features[i].cream == CREAM.PINK){
						cream = this.scene.add.image(0,-15,'cakes','pink_cream_heart.png');
						this.modelContainer.add(cream);
					}else if(model.features[i].cream == CREAM.YELLOW){
						cream = this.scene.add.image(0,-15,'cakes','yellow_cream_heart.png');
						this.modelContainer.add(cream);
					}
				}else if(model.features[i].frame == FRAME.SQUARE){
					if(model.features[i].cream == CREAM.BROWN){
						cream = this.scene.add.image(0,-15,'cakes','brown_cream_square.png');
						this.modelContainer.add(cream);
					}else if(model.features[i].cream == CREAM.PINK){
						cream = this.scene.add.image(0,-15,'cakes','pink_cream_square.png');
						this.modelContainer.add(cream);
					}else if(model.features[i].cream == CREAM.YELLOW){
						cream = this.scene.add.image(0,-15,'cakes','yellow_cream_square.png');
						this.modelContainer.add(cream);
					}
				}
			}
			if(model.features[i].decorate != null){
				//console.log('create decorate...');
				if(model.features[i].decorate == DECORATE.BUTTONS){
					decorate = this.scene.add.image(0,-20,'material','three_icon.png');
					this.modelContainer.add(decorate);
				}else if(model.features[i].decorate == DECORATE.EMOTICON){
					decorate = this.scene.add.image(0,-20,'material','emoticon_icon.png');
					this.modelContainer.add(decorate);
				}else if(model.features[i].decorate == DECORATE.HEART){
					decorate = this.scene.add.image(0,-20,'material','heart_icon.png');
					this.modelContainer.add(decorate);
				}else if(model.features[i].decorate == DECORATE.LEAF){
					decorate = this.scene.add.image(0,-20,'material','leaf_icon.png');
					this.modelContainer.add(decorate);
				}

			}
			if(model.features[i].taste !== null){
				//console.log('create taste...');
				if(model.features[i].frame == FRAME.CIRCLE){
					if(model.features[i].cream == CREAM.BROWN){
						if(model.features[i].taste == TASTE.BURN){
						
							cream.setFrame('cakes');
						}else{
	
						}
					}else if(model.features[i].cream == CREAM.PINK){
						if(model.features[i].taste == TASTE.BURN){
						
							cream.setFrame('cakes');
						}else{
	
						}
					}else if(model.features[i].cream == CREAM.YELLOW){
						if(model.features[i].taste == TASTE.BURN){
						
							cream.setFrame('cakes');
						}else{
	
						}
					}
					
				}else if(model.features[i].frame == FRAME.HEART){
					if(model.features[i].cream == CREAM.BROWN){
						if(model.features[i].taste == TASTE.BURN){
						
							cream.setFrame('cakes');
						}else{
	
						}
					}else if(model.features[i].cream == CREAM.PINK){
						if(model.features[i].taste == TASTE.BURN){
						
							cream.setFrame('cakes');
						}else{
	
						}
					}else if(model.features[i].cream == CREAM.YELLOW){
						if(model.features[i].taste == TASTE.BURN){
						
							cream.setFrame('cakes');
						}else{
	
						}
					}
				}else if(model.features[i].frame == FRAME.SQUARE){
					if(model.features[i].cream == CREAM.BROWN){
						if(model.features[i].taste == TASTE.BURN){
						
							cream.setFrame('cakes');
						}else{
	
						}
					}else if(model.features[i].cream == CREAM.PINK){
						if(model.features[i].taste == TASTE.BURN){
						
							cream.setFrame('cakes');
						}else{
	
						}
					}else if(model.features[i].cream == CREAM.YELLOW){
						if(model.features[i].taste == TASTE.BURN){
						
							cream.setFrame('cakes');
						}else{
	
						}
					}
				}
			}
		}
	}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
