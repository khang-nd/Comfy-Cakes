import { FLOUR, CREAM, RIBBON, DECORATE, FRAME, FEATURES, TASTE, LEVEL } from '../../GameConstants';
import Feature from './Feature';
export default class Model {
    public features: Array<string> = [];
    constructor(level: LEVEL) {
        let frame, flour, ribbon, cream, decorate, taste, feature;
        switch (level) {
            case LEVEL.EASY:
                frame = this.getRandom(FRAME);
                this.features.push(frame);
                for (let i = 0; i < level; i++) {
                    
                    flour = this.getRandom(FLOUR);
                    cream = this.getRandom(CREAM);
                    decorate = this.getRandom(DECORATE);
                    //feature = new Feature(frame, flour, ribbon, cream, decorate, taste);
                   
                    this.features.push(flour);
                    //this.features.push(ribbon);
                    this.features.push(cream);
                    this.features.push(decorate);
                    //this.features.push(taste);
                }

                break;
            case LEVEL.INTERMEDIATE:
                frame = this.getRandom(FRAME);
                
                for (let i = 0; i < level; i++) {
                    this.features.push(frame);
                    flour = this.getRandom(FLOUR);
                    ribbon = this.getRandom(RIBBON);
                    
                    //feature = new Feature(frame, flour, ribbon, cream, decorate, taste);
                    //this.features.push(feature);
                    this.features.push(flour);
                    if(i < level - 1) this.features.push(ribbon);
                    if(i == level - 1){
                        cream = this.getRandom(CREAM);
                        decorate = this.getRandom(DECORATE);
                        this.features.push(cream);
                    this.features.push(decorate);
                    }
                    
                    //this.features.push(taste);
                }
                break;
            case LEVEL.ADVANCED:
                frame = this.getRandom(FRAME);
                this.features.push(frame);
                ribbon = null;
                for (let i = 0; i < level; i++) {
                    
                    flour = this.getRandom(FLOUR);
                    if(i < level - 1) ribbon = this.getRandom(RIBBON);
                    
                    
                    if(i == level - 1){
                        cream = this.getRandom(CREAM);
                        decorate = this.getRandom(DECORATE);
                        taste = this.getRandom(TASTE);
                    }
                    //feature = new Feature(frame, flour, ribbon, cream, decorate, taste);
                    //this.features.push(feature);
                    this.features.push(flour);
                    this.features.push(ribbon);
                    this.features.push(cream);
                    this.features.push(decorate);
                    this.features.push(taste);
                }
                break;
        }

    }


    private getRandom (enumeration)  {
        /*const enumValues = Object.keys(anEnum)
            .map(n => Number.parseInt(n))
            .filter(n => !Number.isNaN(n)) as unknown as T[keyof T][]
        const randomIndex = Math.floor(Math.random() * enumValues.length)
        const randomEnumValue = enumValues[randomIndex]
        return randomEnumValue;*/
        const values = Object.keys(enumeration);
  const enumKey = values[Math.floor(Math.random() * values.length)];
  return enumeration[enumKey];
    }
}