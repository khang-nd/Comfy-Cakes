import {DECORATE, FRAME, TASTE} from 'GameConstants';

export default class Feature{
    public frame: string;
    public flour: string;
    public ribbon: string;
    public cream: string;
    public decorate: string;
    public taste: string;

    constructor(frame: string = null, flour: string = null, ribbon: string = null, cream: string = null, decorate: string = null, taste: string = null){
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