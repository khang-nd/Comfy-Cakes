
// You can write more code here
import Model from "./Model";
import { FLOUR, RIBBON, CREAM, DECORATE, FRAME, FEATURES, TASTE, LEVEL } from '../../GameConstants';
import GameVars from "../../GameVars";
import Utils from "../../utils/Utils";
/* START OF COMPILED CODE */

import Phaser from "phaser";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class TargetScreen extends Phaser.GameObjects.Container {

	constructor(scene: Phaser.Scene, x?: number, y?: number) {
		super(scene, x ?? 0, y ?? 0);

		// frameTv
		const frameTv = scene.add.image(0, 0, "comfy-spritesheet", "frame_tv.png");
		frameTv.setOrigin(0, 0);
		this.add(frameTv);

		// screenTv
		const screenTv = scene.add.image(62, 85, "comfy-spritesheet", "screen_tv.png");
		this.add(screenTv);

		// modelContainer
		const modelContainer = scene.add.container(65, 132);
		modelContainer.scaleX = 0.8;
		modelContainer.scaleY = 0.8;
		this.add(modelContainer);

		this.modelContainer = modelContainer;

		/* START-USER-CTR-CODE */
		// Write your code here.

		/* END-USER-CTR-CODE */
	}

	private modelContainer: Phaser.GameObjects.Container;

	/* START-USER-CODE */

	// Write your code here.
	private modelCurrent: any;
	public createImage(model: Model): void {
		let flour, cream, decorate, ribbon, taste;
		let paddingY = 0;

		for (let i = 0; i < model.features.length; i++) {

			if (model.features[0] != null) {

				if (model.features[0] == FRAME.CIRCLE) {

					if (model.features[i] == FLOUR.BROWN) {
						paddingY += Utils.getPadding(model.features[i]);
						flour = this.scene.add.image(0, -5 + paddingY, 'comfy-spritesheet', 'brown_circle_06.png');
						//this.modelCurrent
						this.modelContainer.add(flour);
					} else if (model.features[i] == FLOUR.PINK) {
						paddingY += Utils.getPadding(model.features[i]);
						flour = this.scene.add.image(0, -5 + paddingY, 'comfy-spritesheet', 'pink_circle_06.png');
						this.modelContainer.add(flour);
					} else if (model.features[i] == FLOUR.YELLOW) {
						paddingY += Utils.getPadding(model.features[i]);
						flour = this.scene.add.image(0, -5 + paddingY, 'comfy-spritesheet', 'yellow_circle_06.png');
						this.modelContainer.add(flour);
					}else if (model.features[i] == RIBBON.RED) {
						paddingY += Utils.getPadding(model.features[i]);
						ribbon = this.scene.add.image(0, -15 + paddingY, 'comfy-spritesheet', 'red_ribbon_circle.png');
						this.modelContainer.add(ribbon);
					} else if (model.features[i] == RIBBON.GREEN) {
						paddingY += Utils.getPadding(model.features[i]);
						ribbon = this.scene.add.image(0, -15 + paddingY, 'comfy-spritesheet', 'green_ribbon_circle.png');
						this.modelContainer.add(ribbon);
					} else if (model.features[i] == RIBBON.WHITE) {
						paddingY += Utils.getPadding(model.features[i]);
						ribbon = this.scene.add.image(0, -15 + paddingY, 'comfy-spritesheet', 'white_ribbon_circle.png');
						this.modelContainer.add(ribbon);
					}else if (model.features[i] == CREAM.BROWN) {
						paddingY += Utils.getPadding(model.features[i]);
						cream = this.scene.add.image(0, -15 + paddingY, 'comfy-spritesheet', 'brown_cream_circle.png');
						this.modelContainer.add(cream);
					} else if (model.features[i] == CREAM.PINK) {
						paddingY += Utils.getPadding(model.features[i]);
						cream = this.scene.add.image(0, -15 + paddingY, 'comfy-spritesheet', 'pink_cream_circle.png');
						this.modelContainer.add(cream);
					} else if (model.features[i] == CREAM.YELLOW) {
						paddingY += Utils.getPadding(model.features[i]);
						cream = this.scene.add.image(0, -15 + paddingY, 'comfy-spritesheet', 'yellow_cream_circle.png');
						this.modelContainer.add(cream);
					}else if (model.features[i] == DECORATE.BUTTONS) {
						paddingY += Utils.getPadding(model.features[i]);
						decorate = this.scene.add.image(0, paddingY - 20, 'comfy-spritesheet', 'buttons_icon.png').setOrigin(0.5);
						this.modelContainer.add(decorate);
					} else if (model.features[i] == DECORATE.EMOTICON) {
						paddingY += Utils.getPadding(model.features[i]);
						decorate = this.scene.add.image(0, paddingY - 20, 'comfy-spritesheet', 'emoticon_icon.png').setOrigin(0.5);
						this.modelContainer.add(decorate);
					} else if (model.features[i] == DECORATE.HEART) {
						paddingY += Utils.getPadding(model.features[i]);
						decorate = this.scene.add.image(0, paddingY - 20, 'comfy-spritesheet', 'heart_icon.png').setOrigin(0.5);
						this.modelContainer.add(decorate);
					} else if (model.features[i] == DECORATE.LEAF) {
						paddingY += Utils.getPadding(model.features[i]);
						decorate = this.scene.add.image(0, paddingY - 20, 'comfy-spritesheet', 'leaf_icon.png').setOrigin(0.5);
						this.modelContainer.add(decorate);
					}else if (model.features[i] == TASTE.BURN) {

						if (model.features[i-2] == CREAM.BROWN) {
							cream.setFrame('brown_burn_circle.png');
						} else if (model.features[i-2] == CREAM.PINK) {
							cream.setFrame('pink_burn_circle.png');
						} else if (model.features[i-2] == CREAM.YELLOW) {
							cream.setFrame('yellow_burn_circle.png');
						}

					} else if(model.features[i] == TASTE.SPICE){
						paddingY += Utils.getPadding(model.features[i]);
						taste = this.scene.add.image(0, -20 + paddingY, 'comfy-spritesheet', 'spice_circle.png');
						this.modelContainer.add(taste);
					}
				} else if (model.features[0] == FRAME.HEART) {
					if (model.features[i] == FLOUR.BROWN) {
						paddingY += Utils.getPadding(model.features[i]);
						flour = this.scene.add.image(0, -5 + paddingY , 'comfy-spritesheet', 'brown_heart_06.png');
						this.modelContainer.add(flour);
					} else if (model.features[i] == FLOUR.PINK) {
						paddingY += Utils.getPadding(model.features[i]);
						flour = this.scene.add.image(0, -5 + paddingY , 'comfy-spritesheet', 'pink_heart_06.png');
						this.modelContainer.add(flour);
					} else if (model.features[i] == FLOUR.YELLOW) {
						paddingY += Utils.getPadding(model.features[i]);
						flour = this.scene.add.image(0, -5 + paddingY , 'comfy-spritesheet', 'yellow_heart_06.png');
						this.modelContainer.add(flour);
					}else if (model.features[i] == RIBBON.RED) {
						paddingY += Utils.getPadding(model.features[i]);
						ribbon = this.scene.add.image(0, -15 + paddingY, 'comfy-spritesheet', 'red_ribbon_heart.png');
						this.modelContainer.add(ribbon);
					} else if (model.features[i] == RIBBON.GREEN) {
						paddingY += Utils.getPadding(model.features[i]);
						ribbon = this.scene.add.image(0, -15 + paddingY, 'comfy-spritesheet', 'green_ribbon_heart.png');
						this.modelContainer.add(ribbon);
					} else if (model.features[i] == RIBBON.WHITE) {
						paddingY += Utils.getPadding(model.features[i]);
						ribbon = this.scene.add.image(0, -15 + paddingY, 'comfy-spritesheet', 'white_ribbon_heart.png');
						this.modelContainer.add(ribbon);
					}else if (model.features[i] == CREAM.BROWN) {
						paddingY += Utils.getPadding(model.features[i]);
						cream = this.scene.add.image(0, -15 + paddingY, 'comfy-spritesheet', 'brown_cream_heart.png');
						this.modelContainer.add(cream);
					} else if (model.features[i] == CREAM.PINK) {
						paddingY += Utils.getPadding(model.features[i]);
						cream = this.scene.add.image(0, -15 + paddingY, 'comfy-spritesheet', 'pink_cream_heart.png');
						this.modelContainer.add(cream);
					} else if (model.features[i] == CREAM.YELLOW) {
						paddingY += Utils.getPadding(model.features[i]);
						cream = this.scene.add.image(0, -15 + paddingY, 'comfy-spritesheet', 'yellow_cream_heart.png');
						this.modelContainer.add(cream);
					}else if (model.features[i] == DECORATE.BUTTONS) {
						paddingY += Utils.getPadding(model.features[i]);
						decorate = this.scene.add.image(0, paddingY - 20, 'comfy-spritesheet', 'buttons_icon.png').setOrigin(0.5);
						this.modelContainer.add(decorate);
					} else if (model.features[i] == DECORATE.EMOTICON) {
						paddingY += Utils.getPadding(model.features[i]);
						decorate = this.scene.add.image(0,  paddingY - 20, 'comfy-spritesheet', 'emoticon_icon.png').setOrigin(0.5);
						this.modelContainer.add(decorate);
					} else if (model.features[i] == DECORATE.HEART) {
						paddingY += Utils.getPadding(model.features[i]);
						decorate = this.scene.add.image(0,  paddingY - 20, 'comfy-spritesheet', 'heart_icon.png').setOrigin(0.5);
						this.modelContainer.add(decorate);
					} else if (model.features[i] == DECORATE.LEAF) {
						paddingY += Utils.getPadding(model.features[i]);
						decorate = this.scene.add.image(0,  paddingY - 20, 'comfy-spritesheet', 'leaf_icon.png').setOrigin(0.5);
						this.modelContainer.add(decorate);
					}else if (model.features[i] == TASTE.BURN) {

						if (model.features[i-2] == CREAM.BROWN) {
							cream.setFrame('brown_burn_heart.png');
						} else if (model.features[i-2] == CREAM.PINK) {
							cream.setFrame('pink_burn_heart.png');
						} else if (model.features[i-2] == CREAM.YELLOW) {
							cream.setFrame('yellow_burn_heart.png');
						}

					} else if (model.features[i] == TASTE.SPICE) {
						paddingY += Utils.getPadding(model.features[i]);
						taste = this.scene.add.image(0, -20  + paddingY, 'comfy-spritesheet', 'spice_heart.png');
						this.modelContainer.add(taste);
					}
				} else if (model.features[0] == FRAME.SQUARE) {
					if (model.features[i] == FLOUR.BROWN) {
						paddingY += Utils.getPadding(model.features[i]);
						flour = this.scene.add.image(0, -5  + paddingY , 'comfy-spritesheet', 'brown_square_06.png');
						this.modelContainer.add(flour);
					} else if (model.features[i] == FLOUR.PINK) {
						paddingY += Utils.getPadding(model.features[i]);
						flour = this.scene.add.image(0, -5 + paddingY, 'comfy-spritesheet', 'pink_square_06.png');
						this.modelContainer.add(flour);
					} else if (model.features[i] == FLOUR.YELLOW) {
						paddingY += Utils.getPadding(model.features[i]);
						flour = this.scene.add.image(0, -5 + paddingY, 'comfy-spritesheet', 'yellow_square_06.png');
						this.modelContainer.add(flour);
					}else if (model.features[i] == RIBBON.RED) {
						paddingY += Utils.getPadding(model.features[i]);
						ribbon = this.scene.add.image(0, -15 + paddingY, 'comfy-spritesheet', 'red_ribbon_square.png');
						this.modelContainer.add(ribbon);
					} else if (model.features[i] == RIBBON.GREEN) {
						paddingY += Utils.getPadding(model.features[i]);
						ribbon = this.scene.add.image(0, -15 + paddingY, 'comfy-spritesheet', 'green_ribbon_square.png');
						this.modelContainer.add(ribbon);
					} else if (model.features[i] == RIBBON.WHITE) {
						paddingY += Utils.getPadding(model.features[i]);
						ribbon = this.scene.add.image(0, -15 + paddingY, 'comfy-spritesheet', 'white_ribbon_square.png');
						this.modelContainer.add(ribbon);
					}else if (model.features[i] == CREAM.BROWN) {
						paddingY += Utils.getPadding(model.features[i]);
						cream = this.scene.add.image(0, -15 + paddingY, 'comfy-spritesheet', 'brown_cream_square.png');
						this.modelContainer.add(cream);
					} else if (model.features[i] == CREAM.PINK) {
						paddingY += Utils.getPadding(model.features[i]);
						cream = this.scene.add.image(0, -15 + paddingY, 'comfy-spritesheet', 'pink_cream_square.png');
						this.modelContainer.add(cream);
					} else if (model.features[i] == CREAM.YELLOW) {
						paddingY += Utils.getPadding(model.features[i]);
						cream = this.scene.add.image(0, -15 + paddingY, 'comfy-spritesheet', 'yellow_cream_square.png');
						this.modelContainer.add(cream);
					}else if (model.features[i] == DECORATE.BUTTONS) {
						paddingY += Utils.getPadding(model.features[i]);
						decorate = this.scene.add.image(0, paddingY - 20, 'comfy-spritesheet', 'buttons_icon.png').setOrigin(0.5);
						this.modelContainer.add(decorate);
					} else if (model.features[i] == DECORATE.EMOTICON) {
						paddingY += Utils.getPadding(model.features[i]);
						decorate = this.scene.add.image(0, paddingY - 20, 'comfy-spritesheet', 'emoticon_icon.png').setOrigin(0.5);
						this.modelContainer.add(decorate);
					} else if (model.features[i] == DECORATE.HEART) {
						paddingY += Utils.getPadding(model.features[i]);
						decorate = this.scene.add.image(0,  paddingY - 20, 'comfy-spritesheet', 'heart_icon.png').setOrigin(0.5);
						this.modelContainer.add(decorate);
					} else if (model.features[i] == DECORATE.LEAF) {
						paddingY += Utils.getPadding(model.features[i]);
						decorate = this.scene.add.image(0, paddingY - 20, 'comfy-spritesheet', 'leaf_icon.png').setOrigin(0.5);
						this.modelContainer.add(decorate);
					}else if (model.features[i] == TASTE.BURN) {

						if (model.features[i-2] == CREAM.BROWN) {
							cream.setFrame('brown_burn_square.png');
						} else if (model.features[i-2] == CREAM.PINK) {
							cream.setFrame('pink_burn_square.png');
						} else if (model.features[i-2] == CREAM.YELLOW) {
							cream.setFrame('yellow_burn_square.png');
						}

					} else if (model.features[i] == TASTE.SPICE) {
						paddingY += Utils.getPadding(model.features[i]);
						taste = this.scene.add.image(0, -20 + paddingY, 'comfy-spritesheet', 'spice_square.png');
						this.modelContainer.add(taste);
					}
				}

			}

		}
	}
	clearChild(){
		this.modelContainer.removeAll(true);

	}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
