function decipherThis (text: string):string {
  let final:string = '';
  text.split(' ').map((word: string) => {
    let numbers: (string|number)[] | number = [];
    let letters: string[] | string = [];
    for (let i = 0; i < word.length; i++) {
      if (!isNaN(parseInt(word[i]))) {
        numbers.push(word[i])
      } else {
        letters.push(word[i])
      }
    }
    numbers = parseInt(numbers.join(''))
    const temp: string = letters[0]
    letters[0] = letters[letters.length - 1]
    letters[letters.length - 1] = temp
    letters = letters.join('')
    let decrypted:string = String.fromCharCode(numbers)
    final += decrypted + letters + ' ';
  });
  return final;
};

// console.log(decipherThis('65 119esi 111dl 111lw 108dvei 105n 97n 111ka'))

//// File Name Extractor ////
class ExtractFileName {
  static extractFileName (dirtyFileName: string): string {
    let numSlice: number = dirtyFileName.indexOf('_');
    let extSlice: number = dirtyFileName.lastIndexOf('.');
    dirtyFileName = dirtyFileName.slice(numSlice + 1, extSlice)
    return dirtyFileName;
  }
}

function validatePass (password: string): boolean {
  let upper: boolean = false;
  let lower: boolean = false;
  let num: boolean = false;

  for (let i: number = 0; i < password.length; i++) {
    let char: number = password.charCodeAt(i);
    let value: string = password.charAt(i);
    if (
      !(char > 47 && char < 58) &&
      !(char > 64 && char < 91) &&
      !(char > 96 && char < 123)
      ) {
      return false;
    }

    if (password.length >= 6) {
      if (value === value.toUpperCase()) {
        upper = true;
      }
      if (value === value.toLowerCase()) {
        lower = true;
      }
      if (isNaN(parseInt(password.charAt(i)))) {
        num = true;
      }
    }
  }

  if (upper && lower && num) {
    return true;
  } else return false;
} 

console.log(validatePass('!JHd5fslqoS'))