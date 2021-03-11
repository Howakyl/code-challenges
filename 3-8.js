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

let foobar = String.fromCharCode(119)
//// Decipher This! ////
function decipher (text) {
  let final = '';
  text.split(' ').map(word => {
    let numbers = [];
    let letters = [];
    for (let i = 0; i < word.length; i++) {
      if (!isNaN(word[i])) {
        numbers.push(word[i])
      } else {
        letters.push(word[i])
      }
    }
    numbers = parseInt(numbers.join(''))
    const temp = letters[0]
    letters[0] = letters[letters.length - 1]
    letters[letters.length - 1] = temp
    letters = letters.join('')
    let decrypted = String.fromCharCode(numbers)
    final += decrypted + letters + ' '
  })
  return console.log(final)
}

decipher(encryptThis('A wise old owl lived in an oak'))

console.log(isNaN(parseInt('r')))