
let  MANITUDEMODE:any;
let MODE:any;
export default class ShakePosition {
    private gameObject: Phaser.GameObjects.GameObject;
    private isRunning: boolean = false;
    private timeScale: number;
    private nowTime: number;
    private ox: number;
    private oy: number;
    private enable: boolean =  true;
    private magnitude: number = 0;
    private duration: number = 0;
    private magnitudeMode:any;
    private mode:any;
   
    constructor(gameObject, config){

        this.gameObject = gameObject;
        this.resetFromJSON(config);
    }
    resetFromJSON(config) {
        this.setMode(Phaser.Utils.Objects.GetValue(config, 'mode', 1));
        this.isRunning = Phaser.Utils.Objects.GetValue(config, 'isRunning', true);
        this.setEnable(Phaser.Utils.Objects.GetValue(config, 'enable', true));
        this.timeScale = Phaser.Utils.Objects.GetValue(config, 'timeScale', 1);
        this.setMagnitudeMode(Phaser.Utils.Objects.GetValue(config, 'magnitudeMode', 1));
        this.setDuration(Phaser.Utils.Objects.GetValue(config, 'duration', 500));
        this.setMagnitude(Phaser.Utils.Objects.GetValue(config, 'magnitude', 10));
        this.nowTime = Phaser.Utils.Objects.GetValue(config, 'nowTime', 0);
        this.ox = Phaser.Utils.Objects.GetValue(config, 'ox', undefined);
        this.oy = Phaser.Utils.Objects.GetValue(config, 'oy', undefined);
        return this;
    }
    update(time, delta) {
        if ((!this.isRunning) || (!this.enable)) {
            return this;
        }

        let gameObject:any = this.gameObject;
        this.nowTime += (delta * this.timeScale);
        if (this.nowTime >= this.duration) {
            this.backToOrigin();
            //this.complete();
        } else {
            if (this.ox === undefined) {
                this.ox = gameObject.x;
                this.oy = gameObject.y;
            }

            let magnitude = this.magnitude;
            if (this.magnitudeMode === 1) // decay
            {
                magnitude *= (this.duration - this.nowTime) / this.duration;
            }
            let a = Math.random() * Math.PI * 2;
            let offsetX = Math.cos(a) * magnitude;
            let offsetY = Math.sin(a) * magnitude;
            gameObject.setPosition(this.ox + offsetX, this.oy + offsetY);
        }

        return this;
    }
    shake(duration, magnitude) {
        this.start(duration, magnitude);
        return this;
    }

    setEnable(value) {
        if (value == undefined) {
            value = true;
        }
        this.enable = value;
        return this;
    }

    setMode(mode) {
        if (typeof (mode) === 'string') {
            mode = MODE[mode];
        }
        this.mode = mode;
        return this;
    }

    setMagnitudeMode(magnitudeMode) {
        if (typeof (magnitudeMode) === 'string') {
            magnitudeMode = MANITUDEMODE[magnitudeMode];
        }

        this.magnitudeMode = magnitudeMode;
        return this;
    }

    setDuration(duration) {
        this.duration = duration;
        return this;
    }

    setMagnitude(magnitude) {
        this.magnitude = magnitude;
        return this;
    }

    start(duration, magnitude) {
        if (typeof (duration) !== 'number') {
            let config = duration;
            magnitude = Phaser.Utils.Objects.GetValue(config, 'magnitude', undefined);
            duration = Phaser.Utils.Objects.GetValue(config, 'duration', undefined);
        }
        if (magnitude !== undefined) {
            this.setMagnitude(magnitude);
        }
        if (duration !== undefined) {
            this.setDuration(duration);
        }

        this.nowTime = 0;
        //super.start();
        return this;
    }

    backToOrigin() {
        if ((!this.isRunning) || (!this.enable)) {
            return this;
        }

        if (this.ox === undefined) {
            return this;
        }

        let gameObject:any = this.gameObject;
        if ((this.ox === gameObject.x) && (this.oy === gameObject.y)) {
            return this;
        }

        gameObject.setPosition(this.ox, this.oy);
        this.ox = undefined;
        this.oy = undefined;
        return this;
    }
}