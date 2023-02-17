import {DECORATE, FRAME, TASTE} from 'GameConstants';

export default class Feature{
    public frame: number;
    public flour: number;
    public ribbon: number;
    public cream: number;
    public decorate: number;
    public taste: number;

    constructor(frame: number = null, flour: number = null, ribbon: number = null, cream: number = null, decorate: number = null, taste: number = null){
        this.frame = frame;
        this.flour = flour;
        this.ribbon = ribbon;
        this.cream = cream;
        this.decorate = decorate;
        this.taste = taste;
    }
}

/*export class Frame{
    private frame: FRAME;
    constructor(frame: FRAME){
        this.frame = frame;
    }
}

export class Flour{
    private color: COLOR;
    constructor(color: COLOR){
        this.color = color;
    }
}

export class Ribbon{
    private color: COLOR;
    constructor(color: COLOR){
        this.color = color;
    }
}

export class Cream{
    private color: COLOR;
    constructor(color: COLOR){
        this.color = color;
    }
}

export class Decorate{
    private decorate: DECORATE;
    constructor(decorate: DECORATE){
        this.decorate = decorate;
    }
}

export class Taste{
    private taste: TASTE;
    constructor(taste: TASTE){
        this.taste = taste;
    }
}*/