
export enum FLOUR {
	BROWN = 'BROWN_FLOUR',
	PINK = 'PINK_FLOUR',
	YELLOW = 'YELLOW_FLOUR',
};

export enum CREAM {
	BROWN = 'BROWN_CREAM',
	PINK = 'PINK_CREAM',
	YELLOW = 'YELLOW_CREAM',
};

export enum RIBBON {
	RED = 'RED_RIBBON',
	GREEN = 'GREEN_RIBBON',
	WHITE = 'WHITE_RIBBON',
};

export enum DECORATE {
	BUTTONS = 'BUTTONS_DECORATE',
	HEART = 'HEART_DECORATE',
	LEAF = 'LEAF_DECORATE',
	EMOTICON = 'EMOTICON'
};
export enum FRAME {
	CIRCLE = 'CIRCLE_FRAME',
	SQUARE = 'SQUARE_FRAME',
	HEART = 'HEART_FRAME'
}

export enum TASTE{
	BURN = 'BURN_TASTE',
	SPICE = 'SPICE_TASTE'
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