//// Gap in Primes ////

function primeGap(g, start, end) {
  let primes = [];
    for (let i = start; i < end; i++) {
      let divisors = [];
      for (let k = 2; k < end; k++) {
        if (i % k === 0) {
          divisors.push(k)
        }
      }
      console.log(divisors)
      if (divisors.length === 1) {
        primes.push(divisors[0])
        // console.log(primes)
      }
    }
    // console.log(primes)
    
    let answer ;
    for (let j = 0; j < primes.length; j++) {
      if (primes[j + 1] - primes[j] === g) {
        return answer = [primes[j], primes[j + 1]]
      }
    }
    
    if (!answer) {
      return null
    }
  }

// console.log(primeGap(8, 300, 400));

//// Encrypt this! ////

function encryptThis (text) {
  let final = '';
  text.split(' ').map(word => {
    const ascii = word.charCodeAt(0).toString()
    let string = word.split('').slice(1, word.length)
    const temp = string[0]
    string[0] = string[string.length - 1]
    string[string.length - 1] = temp
    string = string.join('')
    final += ascii + string + ' '
  })
  return final.trim()

}

console.log(encryptThis('A wise old owl lived in an oak'))
// console.log(encryptThis('hello world'))

// let thing = 'hello world'
// thing.split(' ').map(word => console.log(word))
// console.log(thing.split(' '))

let string1 = '65 119esi 111dl 111lw 108devi 105n 97n 111ka'
let string2 = '65 119esi 111dl 111lw 108dvei 105n 97n 111ka'

let string3 = 'orld'
string3 = string3.split('')
const tmp = string3[0]
string3[0] = string3[string3.length - 1]
string3[string3.length - 1] = tmp

// console.log(string3)