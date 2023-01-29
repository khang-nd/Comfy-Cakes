import GameConstants from './GameConstants';
import GameVars from './GameVars';

export default class GameManager {
    public static currentInstance: any;
    public static init(): void {
        GameVars.development = process.env.NODE_ENV === "development";
        this.currentInstance = this;
        if (GameVars.currentScene.game.device.os.desktop) {
        }
        GameManager.readGameData();
    }

    public static readGameData(): void {
        //localStorage.removeItem(GameConstants.SAVED_GAME_DATA_KEY);
        GameManager.getGameStorageData(
            GameConstants.SAVED_GAME_DATA_KEY,
            function (gameData: string): void {
                //gameData = null;
                if (gameData) {
                    GameVars.gameData = JSON.parse(gameData);
                } else {
                    GameVars.gameData = {
                        googleUser: null,
                        soundMuted: false,
                        musicMuted: false,
                        language: GameConstants.LANGUAGE_ENGLISH,
                        score: 0,
                        tutorialSeen: false
                    };
                }

                GameManager.startGame();
            }
        );
    }

    private static startGame(): void {
        GameVars.currentScene.scene.start("Preload");
    }

    private static getGameStorageData(key: string, successCb: Function): void {

        const gameDataStr = localStorage.getItem(key);
        successCb(gameDataStr);
    }

    public static enterPlayScene(): void {
        GameVars.currentScene.scene.start('PlayScene');
    }

    public static enterMenuScene(): void {
        GameVars.currentScene.scene.start('MenuScene');
    }

    public static setCurrentScene(scene: Phaser.Scene): void {
        if(GameVars.currentScene)
            GameVars.prevScene = GameVars.currentScene.scene.key;
        GameVars.currentScene = scene;
    }

    public static reset(): void {
        if (GameVars.gameOver) {
            GameManager.enterMenuScene();
        } else {
            GameManager.enterPlayScene();
        }
    }

    public static writeGameData(): void {

        GameManager.setGameStorageData(
            GameConstants.SAVED_GAME_DATA_KEY,
            GameVars.gameData,
            function (): void {
                GameManager.log("game data successfully saved");
            }
        );
    }

    public static log(text: string, error?: Error): void {

        if (!GameConstants.VERBOSE) {
            return;
        }

        if (error) {
            console.error(text + ":", error);
        } else {
            console.log(text);
        }
    }

    public static getTimeUntilEndOfDay(): number {

        const d = new Date();
        const h = d.getUTCHours();
        const m = d.getUTCMinutes();
        const s = d.getUTCSeconds();

        return (24 * 60 * 60) - (h * 60 * 60) - (m * 60) - s;
    }

    private static setGameStorageData(key: string, value: any, successCb: Function): void {
        
        localStorage.setItem(key, JSON.stringify(value));
        successCb();
    }

    private static hashCode(s: string): string {

        return s.split("").reduce(function (a, b) { a = ((a << 5) - a) + b.charCodeAt(0); return a & a; }, 0).toString();
    }

}