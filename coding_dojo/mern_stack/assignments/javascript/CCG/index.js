const Unit = require('./unit.js')
const Effect = require('./effect.js')

// Make your units!
redNinja = new Unit('Red Belt', 3, 3, 4);
// redNinja.showStats();

blackNinja = new Unit('Black Belt', 4, 5, 4)
// blackNinja.showStats();

// Make your effect cards

effect1 = new Effect('Hard Algorithm', 2, `increase target's resilience by 3`, 'resilience', 3 )
effect1.showEffect();

effect2 = new Effect('Unhandled Promise Rejection', 1, `reduce target's resilience by 2`, 'resilience', -2 )

effect3 = new Effect('Pair Programming', 3, `increase target's power by 2`, 'power', 2 )

// redNinja.damage(effect2)
// redNinja.addPower(effect3)
// redNinja.showStats()
// blackNinja.showStats()
// redNinja.attack(blackNinja)
// blackNinja.showStats()
effect1.addEffect(redNinja)
redNinja.showStats()
effect2.addEffect(redNinja)
redNinja.showStats()
effect3.addEffect(redNinja)
redNinja.showStats()
redNinja.attack(blackNinja)
blackNinja.showStats()