//// integers - sum of squared divisors ////
// Given two numbers ex: [1, 250] find all the numbers between M and N whose sum of squared divisors itself is a square
// ex: divisors of 42 are: 1,2,3,6,7,14,21,42. These divisors squared are 1,4,9,36,49,196, 441, 1764
// the sum of these would be 2500. Which is 50 * 50, a square!
// the RESULT will be an array of arrays. Each subarray having two elements; first the number whose squared divisors is a square, and then the sum of the squared numbers.

function listSquared(minNumber, maxNum) {
  if (1 <= minNumber && minNumber <= maxNum) {
    let answers = [];
    for (let i = minNumber; i < maxNum  + 1; i++) {
      let divisors = [];
      for (let k = 0; k < maxNum + 1; k++) {
        if (Number.isInteger(i / k)) {
          divisors.push(Math.pow(k,2))
        }
      }
      // console.log(`Divisors for ${i}:`,divisors)
      let sum = divisors.reduce((accumulator, currValue) => accumulator + currValue)
      // console.log('sum:',sum)
      if (Number.isInteger(Math.sqrt(sum))) {
        console.log('squared number!', sum)
        // console.log(i)
        answers.push([i , sum])
      }
    }
    console.log(answers)
  } else console.error('invalid input!')
}
listSquared(250, 500)
// let squared = Math.sqrt(2500)
// console.log(Math.pow(squared,2))
