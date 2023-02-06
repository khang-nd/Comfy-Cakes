import { FLOUR, CREAM, RIBBON, DECORATE, FRAME, FEATURES, TASTE, LEVEL } from '../../GameConstants';
import Feature from './Feature';
export default class Model {
    public features: Feature[] = [];
    constructor(level: LEVEL) {
        let frame, flour, ribbon, cream, decorate, taste, feature;
        switch (level) {
            case LEVEL.EASY:
                for (let i = 0; i < level; i++) {
                    frame = this.getRandom(FRAME);
                    flour = this.getRandom(FLOUR);
                    cream = this.getRandom(CREAM);
                    decorate = this.getRandom(DECORATE);
                    feature = new Feature(frame, flour, ribbon, cream, decorate, taste);
                    this.features.push(feature);
                }

                break;
            case LEVEL.INTERMEDIATE:
                for (let i = 0; i < level; i++) {
                    frame = this.getRandom(FRAME);
                    flour = this.getRandom(FLOUR);
                    ribbon = this.getRandom(RIBBON);
                    cream = this.getRandom(CREAM);
                    decorate = this.getRandom(DECORATE);
                    feature = new Feature(frame, flour, ribbon, cream, decorate, taste);
                    this.features.push(feature);
                }
                break;
            case LEVEL.ADVANCED:
                for (let i = 0; i < level; i++) {
                    frame = this.getRandom(FRAME);
                    flour = this.getRandom(FLOUR);
                    ribbon = this.getRandom(RIBBON);
                    cream = this.getRandom(CREAM);
                    decorate = this.getRandom(DECORATE);
                    taste = this.getRandom(TASTE);
                    feature = new Feature(frame, flour, ribbon, cream, decorate, taste);
                    this.features.push(feature);
                }
                break;
        }

    }


    private getRandom<T>(anEnum: T): T[keyof T] {
        const enumValues = Object.keys(anEnum)
            .map(n => Number.parseInt(n))
            .filter(n => !Number.isNaN(n)) as unknown as T[keyof T][]
        const randomIndex = Math.floor(Math.random() * enumValues.length)
        const randomEnumValue = enumValues[randomIndex]
        return randomEnumValue;
    }
}