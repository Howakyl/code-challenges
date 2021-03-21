//// Rock em Sock em robots ////
function fight(robot1, robot2, tactics) {
  function botAttack (bot, target) {
    let attack = bot.tactics.shift()

    if (bot.tactics.length === 0) {
      target.health -= 0
    }

    switch (attack) {
      case 'punch':
        console.log(`${bot.name} strikes with a ${attack}!`)
        target.health -= 20;
        break;
      case 'laser':
        console.log(`${bot.name} strikes with a ${attack}!`)
        target.health -= 30;
        break;
      case 'missile':
        console.log(`${bot.name} strikes with a ${attack}!`)
        target.health -= 35;
        break;
      case 'space ray':
        console.log('attack!!!')
        target.health = 0;
        break;
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
  "health": 150,
  "speed": 20,
  "tactics": ["missile", "missile", "missile", "missile"]
}
tactics = {
  "punch": 20,
  "laser": 30,
  "missile": 35
}

// fight(bot1, bot2)

//// How many numbers? ////
// find all the numbers of three digits where: 
// the sum of their digits is equal to 10
// their digits are in increasing order (the numbers may have two or more equal contiguous digits)

// ARGUMENTS: sum of the digits value , desired number of digits for the numbers 
// OUTPUT: 1 - the total number of possible numbers
//         2 - the min number
//         3 - the max number
// if only one possible number, should input like so: (27, 3) => [1, "999", "9999"]

function findAll (sum, numOfDigits) {
  console.time('label')
  let answerArr = [];
  for (let i = 0; i.toString().length < numOfDigits + 1; i++) {
    let sumOfDigits ;
    let numCheck = i.toString().split('')
    if (numCheck.length === numOfDigits) {
      sumOfDigits = numCheck.reduce((a, b) => Number(a) + Number(b))
      if (sumOfDigits === sum) {
        if (numCheck.sort((a,b) => a - b).join('') === i.toString()) {
          answerArr.push(i.toString())
          
        }
      }
    }
    // console.log(sumOfDigits)
  }

  if (answerArr.length === 0) {
    return []
  } else {
    console.timeEnd('label')
    return [answerArr.length, answerArr[0], answerArr[answerArr.length - 1]]
  }
}

// console.log(findAll(35,6))

//// MergeSort "merge" function ////
// take in two arrays, and return the arrays as one array, sorted
// DONT USE ARRAY.SORT().

function mergeSorted (arr1, arr2) {
  let combinedArr = arr1.concat(arr2)
  let sorted = false;
  while (!sorted) {
    // each time loop finishes, sorted is set to true.
    sorted = true;
    for (let i = 0; i < combinedArr.length; i++) {
      // if current index is lower than previous, they are swapped, and sorted is set to FALSE. This will cause the while loop to continue.
      // once all indecies are sorted, sorted will not become false, and the loop completes.
      if (combinedArr[i - 1] > combinedArr[i]) {
        sorted = false;
        let temp = combinedArr[i - 1]
        combinedArr[i - 1] = combinedArr[i]
        combinedArr[i] = temp
      }
    }
  }
  return combinedArr
}

// console.log(mergeSorted([1,2,3], [1,2,3]))

// function thing (a,b) {
//   let done = false;

//   while (!done) {
//     console.log('a: ', a, 'b: ', b)
//     done = true;
//     if (a < b) {
//       done = false;
//       a += 1
//     }
//   }
// }
// thing(0, 3)

function countBits (number) {
  let total = 0;
  number.toString(2).split('').map( bit => {
    if (bit === '1') {
      total ++;
    }
  })
  return total
}
console.log(countBits(10));