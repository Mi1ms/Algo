
export default class RobotName {

    constructor() {
        this.name_exist = [];
        this.name = this.getName();
    }

    getName() {
        const alphabet = "azertyuiopqsdfkigdfghjklmwxcvbn";
        const num = Math.floor(Math.random() * Math.floor(999));
        const nbr_letter = Math.floor(Math.random() * Math.floor(alphabet.length-2)); 
        const letter = alphabet.substring(nbr_letter, nbr_letter+2).toUpperCase();
        const name = `${letter}${num}`;

        if (this.name_exist.indexOf(name) > 0) {
            this.regenerateName();
            return 
        }

        this.name_exist.push(name)
        return name;
    }

    regenerateName() {
        this.name = this.getName();
    }
} 
