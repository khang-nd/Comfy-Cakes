
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
		const frameTv = scene.add.image(0, 0, "comfy-spritesheet", "frame_tv.png");
		frameTv.setOrigin(0, 0);
		this.add(frameTv);

		// screenTv
		const screenTv = scene.add.image(62, 85, "comfy-spritesheet", "screen_tv.png");
		this.add(screenTv);

		// modelContainer
		const modelContainer = scene.add.container(65, 118);
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
		let paddingY = -32;

		for (let i = 0; i < model.features.length; i++) {

			if (model.features[i].frame != null) {

				if (model.features[i].frame == FRAME.CIRCLE) {

					if (model.features[i].flour == FLOUR.BROWN) {
						flour = this.scene.add.image(0, -5 + i * paddingY, 'comfy-spritesheet', 'brown_circle_06.png');
						//this.modelCurrent
						this.modelContainer.add(flour);
					} else if (model.features[i].flour == FLOUR.PINK) {
						flour = this.scene.add.image(0, -5 + i * paddingY, 'comfy-spritesheet', 'pink_circle_06.png');
						this.modelContainer.add(flour);
					} else if (model.features[i].flour == FLOUR.YELLOW) {
						flour = this.scene.add.image(0, -5 + i * paddingY, 'comfy-spritesheet', 'yellow_circle_06.png');
						this.modelContainer.add(flour);
					}
				} else if (model.features[i].frame == FRAME.HEART) {
					if (model.features[i].flour == FLOUR.BROWN) {
						flour = this.scene.add.image(0, -5 + i * paddingY, 'comfy-spritesheet', 'brown_heart_06.png');
						this.modelContainer.add(flour);
					} else if (model.features[i].flour == FLOUR.PINK) {
						flour = this.scene.add.image(0, -5 + i * paddingY, 'comfy-spritesheet', 'pink_heart_06.png');
						this.modelContainer.add(flour);
					} else if (model.features[i].flour == FLOUR.YELLOW) {
						flour = this.scene.add.image(0, -5 + i * paddingY, 'comfy-spritesheet', 'yellow_heart_06.png');
						this.modelContainer.add(flour);
					}
				} else if (model.features[i].frame == FRAME.SQUARE) {
					if (model.features[i].flour == FLOUR.BROWN) {
						flour = this.scene.add.image(0, -5 + i * paddingY, 'comfy-spritesheet', 'brown_square_06.png');
						this.modelContainer.add(flour);
					} else if (model.features[i].flour == FLOUR.PINK) {
						flour = this.scene.add.image(0, -5 + i * paddingY, 'comfy-spritesheet', 'pink_square_06.png');
						this.modelContainer.add(flour);
					} else if (model.features[i].flour == FLOUR.YELLOW) {
						flour = this.scene.add.image(0, -5 + i * paddingY, 'comfy-spritesheet', 'yellow_square_06.png');
						this.modelContainer.add(flour);
					}
				}

			}
			if (model.features[i].ribbon != null) {
				//console.log('create ribbon...');
				if (model.features[i].frame == FRAME.CIRCLE) {

					if (model.features[i].ribbon == RIBBON.RED) {
						ribbon = this.scene.add.image(0, -15 + i * paddingY, 'comfy-spritesheet', 'red_ribbon_circle.png');
						this.modelContainer.add(ribbon);
					} else if (model.features[i].ribbon == RIBBON.GREEN) {
						ribbon = this.scene.add.image(0, -15 + i * paddingY, 'comfy-spritesheet', 'green_ribbon_circle.png');
						this.modelContainer.add(ribbon);
					} else if (model.features[i].ribbon == RIBBON.WHITE) {
						ribbon = this.scene.add.image(0, -15 + i * paddingY, 'comfy-spritesheet', 'white_ribbon_circle.png');
						this.modelContainer.add(ribbon);
					}
				} else if (model.features[i].frame == FRAME.HEART) {
					if (model.features[i].ribbon == RIBBON.RED) {
						ribbon = this.scene.add.image(0, -15 + i * paddingY, 'comfy-spritesheet', 'red_ribbon_heart.png');
						this.modelContainer.add(ribbon);
					} else if (model.features[i].ribbon == RIBBON.GREEN) {
						ribbon = this.scene.add.image(0, -15 + i * paddingY, 'comfy-spritesheet', 'green_ribbon_heart.png');
						this.modelContainer.add(ribbon);
					} else if (model.features[i].ribbon == RIBBON.WHITE) {
						ribbon = this.scene.add.image(0, -15 + i * paddingY, 'comfy-spritesheet', 'white_ribbon_heart.png');
						this.modelContainer.add(ribbon);
					}
				} else if (model.features[i].frame == FRAME.SQUARE) {
					if (model.features[i].ribbon == RIBBON.RED) {
						ribbon = this.scene.add.image(0, -15 + i * paddingY, 'comfy-spritesheet', 'red_ribbon_square.png');
						this.modelContainer.add(ribbon);
					} else if (model.features[i].ribbon == RIBBON.GREEN) {
						ribbon = this.scene.add.image(0, -15 + i * paddingY, 'comfy-spritesheet', 'green_ribbon_square.png');
						this.modelContainer.add(ribbon);
					} else if (model.features[i].ribbon == RIBBON.WHITE) {
						ribbon = this.scene.add.image(0, -15 + i * paddingY, 'comfy-spritesheet', 'white_ribbon_square.png');
						this.modelContainer.add(ribbon);
					}
				}
			}
			if (model.features[i].cream != null) {
				if (model.features[i].frame == FRAME.CIRCLE) {

					if (model.features[i].cream == CREAM.BROWN) {
						cream = this.scene.add.image(0, -15 + i * paddingY, 'comfy-spritesheet', 'brown_cream_circle.png');
						this.modelContainer.add(cream);
					} else if (model.features[i].cream == CREAM.PINK) {
						cream = this.scene.add.image(0, -15 + i * paddingY, 'comfy-spritesheet', 'pink_cream_circle.png');
						this.modelContainer.add(cream);
					} else if (model.features[i].cream == CREAM.YELLOW) {
						cream = this.scene.add.image(0, -15 + i * paddingY, 'comfy-spritesheet', 'yellow_cream_circle.png');
						this.modelContainer.add(cream);
					}
				} else if (model.features[i].frame == FRAME.HEART) {
					if (model.features[i].cream == CREAM.BROWN) {
						cream = this.scene.add.image(0, -15 + i * paddingY, 'comfy-spritesheet', 'brown_cream_heart.png');
						this.modelContainer.add(cream);
					} else if (model.features[i].cream == CREAM.PINK) {
						cream = this.scene.add.image(0, -15 + i * paddingY, 'comfy-spritesheet', 'pink_cream_heart.png');
						this.modelContainer.add(cream);
					} else if (model.features[i].cream == CREAM.YELLOW) {
						cream = this.scene.add.image(0, -15 + i * paddingY, 'comfy-spritesheet', 'yellow_cream_heart.png');
						this.modelContainer.add(cream);
					}
				} else if (model.features[i].frame == FRAME.SQUARE) {
					if (model.features[i].cream == CREAM.BROWN) {
						cream = this.scene.add.image(0, -15 + i * paddingY, 'comfy-spritesheet', 'brown_cream_square.png');
						this.modelContainer.add(cream);
					} else if (model.features[i].cream == CREAM.PINK) {
						cream = this.scene.add.image(0, -15 + i * paddingY, 'comfy-spritesheet', 'pink_cream_square.png');
						this.modelContainer.add(cream);
					} else if (model.features[i].cream == CREAM.YELLOW) {
						cream = this.scene.add.image(0, -15 + i * paddingY, 'comfy-spritesheet', 'yellow_cream_square.png');
						this.modelContainer.add(cream);
					}
				}
			}
			if (model.features[i].decorate != null) {
				//console.log('create decorate...');
				if (model.features[i].decorate == DECORATE.BUTTONS) {
					decorate = this.scene.add.image(0, -20 + i * paddingY, 'comfy-spritesheet', 'buttons_icon.png');
					this.modelContainer.add(decorate);
				} else if (model.features[i].decorate == DECORATE.EMOTICON) {
					decorate = this.scene.add.image(0, -20 + i * paddingY, 'comfy-spritesheet', 'emoticon_icon.png');
					this.modelContainer.add(decorate);
				} else if (model.features[i].decorate == DECORATE.HEART) {
					decorate = this.scene.add.image(0, -20 + i * paddingY, 'comfy-spritesheet', 'heart_icon.png');
					this.modelContainer.add(decorate);
				} else if (model.features[i].decorate == DECORATE.LEAF) {
					decorate = this.scene.add.image(0, -20 + i * paddingY, 'comfy-spritesheet', 'leaf_icon.png');
					this.modelContainer.add(decorate);
				}

			}
			if (model.features[i].taste !== null) {
				//console.log('create taste...');
				if (model.features[i].frame == FRAME.CIRCLE) {
					if (model.features[i].taste == TASTE.BURN) {

						if (model.features[i].cream == CREAM.BROWN) {
							cream.setFrame('brown_burn_circle.png');
						} else if (model.features[i].cream == CREAM.PINK) {
							cream.setFrame('pink_burn_circle.png');
						} else if (model.features[i].cream == CREAM.YELLOW) {
							cream.setFrame('yellow_burn_circle.png');
						}

					} else {
						taste = this.scene.add.image(0, -20 + i * paddingY, 'comfy-spritesheet', 'spice_circle.png');
						this.modelContainer.add(taste);
					}

				} else if (model.features[i].frame == FRAME.HEART) {
					if (model.features[i].taste == TASTE.BURN) {

						if (model.features[i].cream == CREAM.BROWN) {
							cream.setFrame('brown_burn_heart.png');
						} else if (model.features[i].cream == CREAM.PINK) {
							cream.setFrame('pink_burn_heart.png');
						} else if (model.features[i].cream == CREAM.YELLOW) {
							cream.setFrame('yellow_burn_heart.png');
						}

					} else {
						taste = this.scene.add.image(0, -20 + i * paddingY, 'comfy-spritesheet', 'spice_heart.png');
						this.modelContainer.add(taste);
					}

				} else if (model.features[i].frame == FRAME.SQUARE) {
					if (model.features[i].taste == TASTE.BURN) {

						if (model.features[i].cream == CREAM.BROWN) {
							cream.setFrame('brown_burn_square.png');
						} else if (model.features[i].cream == CREAM.PINK) {
							cream.setFrame('pink_burn_square.png');
						} else if (model.features[i].cream == CREAM.YELLOW) {
							cream.setFrame('yellow_burn_square.png');
						}

					} else {
						taste = this.scene.add.image(0, -20 + i * paddingY, 'comfy-spritesheet', 'spice_square.png');
						this.modelContainer.add(taste);
					}
				}
			}
		}
	}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
