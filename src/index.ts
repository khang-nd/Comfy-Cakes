import Phaser from "phaser";
import PlayScene from "./scenes/PlayScene";
import MenuScene from "./scenes/MenuScene"
import preloadAssetPackUrl from "../static/assets/preload-asset-pack.json";
import Preload from "./scenes/Preload";

class Boot extends Phaser.Scene {

    constructor() {
        super("Boot");
    }

    preload() {

        this.load.pack("pack", preloadAssetPackUrl);
    }

    create() {

       this.scene.start("Preload");
    }
}

window.addEventListener('load', function () {
	
const SIZE_WIDTH_SCREEN = 800;
	const SIZE_HEIGHT_SCREEN = 496;

	globalThis.screenBaseSize = {
		width: SIZE_WIDTH_SCREEN,
		height: SIZE_HEIGHT_SCREEN
	};

	const game = new Phaser.Game({
		type: Phaser.AUTO,
		scale: {
			mode: Phaser.Scale.RESIZE,
			parent: 'game',
			width: SIZE_WIDTH_SCREEN,
			height: SIZE_HEIGHT_SCREEN,
		},
		dom: {
			createContainer: true
		},
		backgroundColor: "#2f2f2f",
		scene: [Boot, Preload, PlayScene, MenuScene]
	});


	game.scene.start("Boot");

});