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

//////////////////////////////////////////////////////

// SOLUTION EXPLAINED: find the largest sum subarray ex: [4, -1, 2, 1]
// take the first value of "array" and those become the values of maxSoFar and currMax.
// loop through "array", then currMax compares the current index, to currMax + the index.
// maxSoFar is similar. It either stays the same, or currMax if currMax is higher.

function maxSubArray (array) {

  let maxSoFar = array[0];
  let currMax = array[0];

  for (let i = 1; i < array.length; i++) {
    currMax = Math.max(array[i], currMax + array[i]);
    maxSoFar = Math.max(maxSoFar, currMax);
  }
  return maxSoFar <= 0 || array.length === 0 ? 0 : maxSoFar;
}

let arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
// console.log(maxSubArray(arr));
// console.log(maxSubArray([]))
