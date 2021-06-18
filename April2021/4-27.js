function toCamelCase(str) {
  let newStr;
  if (str === '') {
    return ''
  }
  if (str.includes('-')) {
    newStr = str.split('-').map((letter, index) => {
      letter = letter.replace(letter[0], letter[0].toUpperCase())
      return letter
    }).join('')
  }

  if (str.includes('_')) {
    newStr = str.split('_').map(letter => {
      letter = letter.replace(letter[0], letter[0].toUpperCase())
      return letter
    }).join('')
  }

  if (str.charAt(0) !== newStr.charAt(0)) {
    newStr = newStr.replace(newStr.charAt(0), newStr.charAt(0).toLowerCase())
  }
  return newStr;
}

console.log(toCamelCase('The-stealth-warrior'))
console.log(toCamelCase('the_stealth_warrior'))

