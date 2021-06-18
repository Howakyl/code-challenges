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

// console.log(encryptThis('A wise old owl lived in an oak'))
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

// decipher(encryptThis('A wise old owl lived in an oak'))

//// extract file name ////

class FileNameExtractor {
  static extractFileName (dirtyFileName) {
    for (let i = 0; i < dirtyFileName.length; i++) {
      if (dirtyFileName.charAt(i) === '_') {
        break;
      }
      if (!isNaN(dirtyFileName.charAt(i))) {
        dirtyFileName = dirtyFileName.replace(dirtyFileName.charAt(i), ' ')
      }
    }
      dirtyFileName = dirtyFileName.trim()
    if (dirtyFileName.charAt(0) === '_' || dirtyFileName.charAt(0) === '.') {
      dirtyFileName = dirtyFileName.replace(dirtyFileName.charAt(0), '')
    }
    dirtyFileName = dirtyFileName.split('.')
    dirtyFileName.pop()
    return dirtyFileName.join('.')
  }

  // CONCISE SOLUTION //
  static extractConcise (fileName) {
    let numSlice = fileName.indexOf('_')
    let extSlice = fileName.lastIndexOf('.')
    fileName = fileName.slice(numSlice + 1, extSlice)
    return fileName
  }
}

// console.log(FileNameExtractor.extractFileName('1231231223123131_myFil2e.tar.gz2'))
// console.log(FileNameExtractor.extractConcise('1231231223123131_myFil2e.tar.gz2'))

//// Validate Password ////
// at least six characters long
// contains lowercase
// contains uppercase
// contains number

function validate (password) {
  let upper = false;
  let lower = false;
  let num = false;

  for (let i = 0; i < password.length; i++) {
    let char = password.charCodeAt(i);
    if (
      !(char > 47 && char < 58) &&
      !(char > 64 && char < 91) &&
      !(char > 96 && char < 123)
      ) {
        console.log(char)
        return false;
    }

    if (password.length >= 6) {
      if (password.charAt(i) === password.charAt(i).toUpperCase() && isNaN(password.charAt(i))) {
        upper = true;
      }
      if (password.charAt(i) === password.charAt(i).toLowerCase() && isNaN(password.charAt(i))) {
        lower = true;
      }
      if (!isNaN(password.charAt(i))) {
        num = true;
      }
  
    }
  }
  console.log(`upper: ${upper} , lower: ${lower}, num: ${num}`)
  if (upper && lower && num) {
    return true
  } else return false
}

console.log(validate('JHd5FJ53'))