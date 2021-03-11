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