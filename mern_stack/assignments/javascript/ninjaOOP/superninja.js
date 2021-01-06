const Ninja = require("./ninja.js")

class Sensei extends Ninja {
    constructor(name) {
        super(name)
        this.health = 200
        this.strength = 10
        this.speed = 10
        this.wisdom = 10
    }
    
    speakWisdom(){
        this.drinkSake();
        console.log("Something Profound")

    }
}

const sensei1 = new Sensei("Kakashi");
sensei1.speakWisdom();
console.log("**********")
sensei1.showStats();