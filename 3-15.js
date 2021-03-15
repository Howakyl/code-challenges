function fight(robot1, robot2, tactics) {
  function botAttack (bot, target) {
    let attack = bot.tactics.shift()

      if (bot.tactics.length === 0) {
        target.health -= 0
      }

      if (attack === 'punch') {
        console.log(`${bot.name} strikes with a ${attack}!`)
        target.health -= 20;
      } else if (attack === 'laser') {
        console.log(`${bot.name} strikes with a ${attack}!`)
        target.health -= 30;
      } else if (attack === 'missile') {
        console.log(`${bot.name} strikes with a ${attack}!`)
        target.health -= 35;
      } else if (attack === 'space ray') {
        console.log('attack!!!')
        target.health = 0;
        return `${bot.name} has won the fight.`
      }
  }

  if (robot1.speed >= robot2.speed) {
    //robot 1 attack
    while (robot1.health > 0 && robot2.health > 0) {
      if (robot1.tactics.length === 0 && robot2.tactics.length === 0) {
        console.log('no more attacks!')
        break;
      }
      botAttack(robot1, robot2)
      if (robot2.health <= 0) {
        break;
      }
      botAttack(robot2,robot1)
      // console.log('ROBOT 1 HEALTH: ', robot1.health)
      // console.log('ROBOT 2 HEALTH: ', robot2.health)
    }

  } else if (robot1.speed < robot2.speed) {
    //robot 2 attack
    while (robot1.health > 0 && robot2.health > 0) {
      if (robot1.tactics.length === 0 && robot2.tactics.length === 0) {
        break;
      }
      botAttack(robot2,robot1)
      if (robot1.health <= 0) {
        break;
      }
      botAttack(robot1, robot2)
      // console.log('ROBOT 1 HEALTH: ', robot1.health)
      // console.log('ROBOT 2 HEALTH: ', robot2.health)
    }
  }

  if (robot1.health > robot2.health) {
    console.log(`${robot1.name} has won the fight.`)
  } else if (robot2.health > robot1.health) {
    console.log(`${robot2.name} has won the fight.`)
  } else if (robot1.health === robot2.health && robot1.tactics.length === 0 && robot2.tactics.length === 0) {
    console.log('The fight was a draw.')
  }
}
bot1 = {
  "name": "Rocky",
  "health": 150,
  "speed": 20,
  "tactics": ["punch", "punch", "laser", "missile", "laser", "punch"]
}
bot2 = {
  "name": "Missile Bob",
  "health": 200,
  "speed": 20,
  "tactics": ["missile", "missile", "missile", "missile"]
}
tactics = {
  "punch": 20,
  "laser": 30,
  "missile": 35
}

// fight(bot1, bot2)
