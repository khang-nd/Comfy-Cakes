
export enum FLOUR {
	BROWN = 0,
	PINK,
	YELLOW,
};

export enum CREAM {
	BROWN = 0,
	PINK,
	YELLOW,
};

export enum RIBBON {
	BROWN = 0,
	GREEN,
	WHITE,
};

export enum DECORATE {
	BUTTONS = 0,
	HEART,
	LEAF,
	EMOTICON
};
export enum FRAME {
	CIRCLE = 0,
	SQUARE,
	HEART
}

export enum TASTE{
	BURN = 0,
	SPICE
}

export enum FEATURES {
	FRAME= 0,
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
	public static readonly DELAY = 5;

};