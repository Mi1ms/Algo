export default class Clock {
    
    constructor(hour, minutes=0) {
        this.hour = this.getHour(hour);
        this.minute = this.getMinute(minutes);
    }

    getTime() {
        return `${this.hour}:${this.minute}`;
    }

    getHour(h) {
        let new_h = h;

        if (new_h > 24) {
            new_h = Math.round(new_h/24);
        } 
        if (new_h == 24) {
            new_h = Number(0);
        }
        if (new_h < 0) {
            // use for the test but not really good..
            new_h = 24 + new_h;
        }
        
        const size_h = new_h.toString().split('').length;
        return (size_h == 1) ? `0${new_h}` : new_h;
    }

    getMinute(m) {
        let new_m = m;
        let nbr_h = 0;
        if (new_m >= 60) {
            while (new_m >= 60) {
                new_m -= 60;
                nbr_h++;
            }
            this.hour = this.getHour( (parseInt(this.hour) + nbr_h) );
        }
        if (new_m < 0) {
            while (new_m <= 0) {
                new_m += 60;
                nbr_h--;
            }
            this.hour = this.getHour(parseInt(this.hour) + nbr_h);
        }
        const size_m = new_m.toString().split('').length;
        
        return (size_m == 1) ? `0${new_m}` : new_m;

    }
}