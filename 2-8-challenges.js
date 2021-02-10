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

//// MY SOLUTION ////
function reverseWords (str) {
    let newString = ""
      str.split(' ').forEach(word => {
        word = word.split('').reverse().join('')
        newString += " " + word
      })
      return newString.trim();
}

// console.log(reverseWords("This is an example!"))

function maxSubArray (array) {

  let maxSoFar = array[0];
  let currMax= array[0];

  for (let i = 0; i < array.length; i++) {
    currMax = Math.max(array[i], currMax + array[i]);
    maxSoFar = Math.max(maxSoFar, currMax);
    console.log('MAX SO FAR: -----', maxSoFar);
  }
  return maxSoFar;
}
let arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(maxSubArray(arr));
