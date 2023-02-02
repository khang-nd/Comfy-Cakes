import {COLOR, DECORATE, FRAME, TASTE} from 'GameConstants';

export default class Feature{
    public frame: FRAME;
    public flour: COLOR;
    public ribbon: COLOR;
    public cream: COLOR;
    public decorate: DECORATE;
    public taste: TASTE;

    constructor(frame: FRAME, flour: COLOR, ribbon: COLOR = null, cream: COLOR = null, decorate: DECORATE = null, taste: TASTE = null){
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