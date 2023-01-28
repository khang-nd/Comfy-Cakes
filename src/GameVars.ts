import GameData from "./GameData";
export default class GameVars {
	public static gameText: any;
    public static gameData: GameData;
    public static development: boolean;
    public static currentScene: Phaser.Scene;
    public static areValidDomains(domains: string[]): boolean {

        if (domains.length === 0) {
            return true;
        }

        const hostname = window.location.hostname;
        const referrer = document.referrer;

        let isValid = false;

        for (let i = 0; i < domains.length; i++) {
            if (hostname.indexOf(domains[i]) !== -1) {
                isValid = true;
                break;
            }
        }

        if (referrer) {

            isValid = false;
            
            for (let i = 0; i < domains.length; i++) {

                if (referrer.indexOf(domains[i]) !== -1) {
                    isValid = true;
                    break;
                }
            }
        }

        return isValid;
    }

    public static fixNumber(n: number): number {
            
        return isNaN(n) ? 0 : Math.round(1e5 * n) / 1e5;
    }
   
    public static formatTime(timeInSeconds: number): { str: string, h: string, m: string, s: string } {

        if (isNaN(timeInSeconds) || timeInSeconds > 24 * 3600) {
            return { str: "0:00:00", h: "00", m: "00", s: "00" };
        }

        const hours = Math.floor(timeInSeconds / 3600);
        const minutes = Math.floor((timeInSeconds - (hours * 3600)) / 60);
        const seconds = timeInSeconds - (hours * 3600) - (minutes * 60);

        let h = hours.toString();
        let m = minutes.toString();
        let s = seconds.toString();

        if (hours < 10) {
            h = "0" + hours;
        }

        if (minutes < 10) {
            m = "0" + minutes;
        }

        if (seconds < 10) {
            s = "0" + seconds;
        }

        return { str: h + ":" + m + ":" + s, h: h, m: m, s: s };
    }

    public static formatNumber(value: number): string {
        return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    public static getDate(): string {

        const date = new Date();

        const day = date.getUTCDate();
        const weekDay = date.getUTCDay();
       
        let weekDayStr: string = '';

        switch (weekDay) {

            case 0:
                weekDayStr = GameVars.gameText[GameVars.gameData.language].SUNDAY;
                break;
            case 1:
                weekDayStr = GameVars.gameText[GameVars.gameData.language].MONDAY;
                break;
            case 2:
                weekDayStr = GameVars.gameText[GameVars.gameData.language].TUESDAY;
                break;
            case 3:
                weekDayStr = GameVars.gameText[GameVars.gameData.language].WEDNESDAY;
                break;
            case 4:
                weekDayStr = GameVars.gameText[GameVars.gameData.language].THURSDAY;
                break;
            case 5:
                weekDayStr = GameVars.gameText[GameVars.gameData.language].FRIDAY;
                break;
            case 6:
                weekDayStr = GameVars.gameText[GameVars.gameData.language].SATURDAY;
                break;
            default:
        }

        let dayStr: string;

        if (day % 10 === 1) {
            dayStr = day + "st";
        } else if (day % 10 === 2) {
            dayStr = day + "nd";
        } else if (day % 10 === 3) {
            dayStr = day + "rd";
        } else  {
            dayStr = day + "th";
        }

        return weekDayStr + " " + dayStr;
    }
}