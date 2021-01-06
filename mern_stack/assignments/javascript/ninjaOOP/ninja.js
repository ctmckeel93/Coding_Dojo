class Ninja {
    constructor(name) {
        this.name = name
        this.health = 100
        this.strength = 3
        this.speed = 3
    }
    sayName() {
        console.log(`I am ze ninja known as ${this.name}`)
    }

    showStats() {
        console.log(`Strength: ${this.strength}`)
        console.log(`Speed: ${this.speed}`)
    }

    drinkSake() {
        this.health += 10
        console.log(`${this.name}'s health has been increased.`)
        console.log(`Current health: ${this.health}`)
    }
}

module.exports = Ninja
const ninja1 = new Ninja('Ryu')
// ninja1.sayName()
// ninja1.showStats()
// ninja1.drinkSake()