const effect = require('./effect.js')
class Unit extends effect {
    constructor(name, cost, power, res){
        super(name, cost)
        this.power = power
        this.resilience = res
        
    }
    showStats() {
        console.log("Name: " + this.name)
        console.log("Cost: " + this.cost)
        console.log("Power: " + this.power)
        console.log("Resilience: " + this.resilience)
        console.log("**************")
    }
    
    attack(Unit){
        Unit.resilience -= this.power
    }
    
}

module.exports = Unit