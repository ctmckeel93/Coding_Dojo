const Unit = require('./unit.js')
class Effect {
    constructor(name, cost, text, stat, mag) {
        this.name = name
        this.cost = cost 
        this.text = text
        this.stat = stat
        this.magnitude = mag
    }
    showEffect(){
        console.log("Name: " + this.name)
        console.log("Cost: " + this.cost)
        console.log("Effect: " + this.text)
        
    }
    addEffect(target){
        if (this.stat == "power"){
            target.power += this.magnitude
        }
        else {
            target.resilience += this.magnitude
        }
            
        
    }
    

}
    


module.exports = Effect