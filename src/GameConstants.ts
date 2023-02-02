export enum COLOR {
	BROWN,
	PINK,
	YELLOW,
	WHITE,
	GREEN,
};
export enum DECORATE {
	BUTTONS,
	HEART,
	LEAF,
	EMOTICON
};
export enum FRAME {
	CIRCLE,
	SQUARE,
	HEART
}

export enum TASTE{
	BURN,
	SPICE
}

export enum FEATURES {
	FRAME,
	FLOUR,
	RIBBON,
	CREAM,
	DECORATE,
	TASTE
};
export enum LEVEL{
	EASY = 1,
	INTERMEDIATE,
	ADVANCED
}
export default class GameConstants {
	public static readonly VERSION = "0.0";
	public static readonly DEVELOPMENT = true;
	public static readonly SAVED_GAME_DATA_KEY = "comfy-cakes-key";
	public static readonly LANGUAGE_ENGLISH = 'en';
	public static readonly VERBOSE = false;

};