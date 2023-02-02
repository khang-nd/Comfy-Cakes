import { COLOR, DECORATE, FRAME, FEATURES, TASTE, LEVEL } from 'GameConstants';
import Feature from './Feature';
export default class Model {
    public features: Feature[];
    constructor(level: LEVEL) {
        let frame, flour, ribbon, cream, decorate, taste, feature;
        switch (level) {
            case LEVEL.EASY:
                for (let i = 0; i < level; i++) {
                    frame = this.getRandom(FRAME);
                    flour = this.getRandom(COLOR);
                    cream = this.getRandom(COLOR);
                    decorate = this.getRandom(DECORATE);
                    feature = new Feature(frame, flour, ribbon, cream, decorate, taste);
                    this.features.push(feature);
                }

                break;
            case LEVEL.INTERMEDIATE:
                for (let i = 0; i < level; i++) {
                    frame = this.getRandom(FRAME);
                    flour = this.getRandom(COLOR);
                    ribbon = this.getRandom(COLOR);
                    cream = this.getRandom(COLOR);
                    decorate = this.getRandom(DECORATE);
                    feature = new Feature(frame, flour, ribbon, cream, decorate, taste);
                    this.features.push(feature);
                }
                break;
            case LEVEL.ADVANCED:
                for (let i = 0; i < level; i++) {
                    let frame = this.getRandom(FRAME);
                    let flour = this.getRandom(COLOR);
                    let ribbon = this.getRandom(COLOR);
                    let cream = this.getRandom(COLOR);
                    let decorate = this.getRandom(DECORATE);
                    let taste = this.getRandom(TASTE);
                    let feature = new Feature(frame, flour, ribbon, cream, decorate, taste);
                    this.features.push(feature);
                }
                break;
        }

    }


    private getRandom(objs: any): any {
        const index = Math.floor(Math.random() * Object.keys(objs).length);
        const value = Object.values(objs)[index];

        return objs[value as number];
    }
}