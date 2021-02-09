// BREAK CAMEL CASE //
//// MY SOLUTION ////
function breakCamelCase1 (string) {

    for (let i = 0; i < string.length; i++) {
      if (string.charAt(i) === string[i].toUpperCase()) {
        string = string.slice(0, i) + ` ${string[i]}` + string.slice(i +1, string.length);
        i++;
      }
    }
    return string;
};

//// CONCISE SOLUTION ////
function breakCamelCase2 (string) {
  return (string.replace(/([A-Z])/g, ' $1'))
}
// console.log(breakCamelCase2("camelCasingTest"));
// console.log(breakCamelCase1("camelCasingTest"))


//////////////////////////////////////////////////////

function reverseWords (str) {
  
  //  [...str].forEach(word => {
  //   word = word.split(' ').reverse().join('')
  //   console.log(word)
  // })
    // str.split(' ').reverse().join(' ')
    let newString = ""
      str.split(' ').forEach(word => {
        // console.log(word)
        word = word.split('').reverse().join('')
        newString += " " + word
      })
      return newString.trim();
}

console.log(reverseWords("This is an example!"))