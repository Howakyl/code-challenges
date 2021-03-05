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
      let sum = divisors.reduce((accumulator, currValue) => accumulator + currValue)
      if (Number.isInteger(Math.sqrt(sum))) {
        console.log('squared number!', sum)
        answers.push([i , sum])
      }
    }
    console.log(answers)
  } else console.error('invalid input!')
}
// listSquared(250, 500)
// let squared = Math.sqrt(2500)
// console.log(Math.pow(squared,2))

//// String Incrementer ////
function incrementString (string) {
  if (string.length > 0) {
    string = string.split('')
    let num = [];
    for (let i = 0; i < string.length; i++) {
      if (!isNaN(string[i])) {
        // console.log(string[i])
        num.push(parseInt(string[i]))
      }
    }
    if (num.length === 0) {
      num.push(0)
    } else {
      num.forEach(number => {
        string.pop()
      });
    }
  
    console.log(num)
    num[num.length- 1] = (num[num.length- 1] + 1)
    console.log(num)
    num = num.join('')
    string = string.join('')
    // string = string.splice()
    console.log(string + num)
  } else return "1"
}

// incrementString('foobar99')

// let number = 099;
// let arr = [];

//// perfect power //// 
function isPp (number) {
  console.time('label')
  let answer = [];
  for (let i = 1; i < number; i++) {

    for (let k = 2; k < number + 2; k++) {
      if (Math.pow(i, k) === number) {
        answer.push(i, k)
        console.timeEnd('label')
        return answer;
      }
    }
    // num ++;
  }

  if (answer.length < 2) {
    return null;
  } else {
    return answer;
  }
}

// console.log(isPp(4))

function yee(number) {
console.time('woo')
  for (let m = 2; m * m <= number; m++) {
    for (let k = 2; Math.pow(m, k) <= number; k++) {
      if (Math.pow(m,k) == number){
        console.timeEnd('woo')
        return [m, k];
      } 
      }
  }
  return null;
}

// console.log(yee(125))

////////////////////////////////