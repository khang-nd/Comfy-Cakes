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

}