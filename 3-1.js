//// integers - sum of squared divisors ////
// Given two numbers ex: [1, 250] find all the numbers between M and N whose sum of squared divisors itself is a square
// ex: divisors of 42 are: 1,2,3,6,7,14,21,42. These divisors squared are 1,4,9,36,49,196, 441, 1764
// the sum of these would be 2500. Which is 50 * 50, a square!
// the RESULT will be an array of arrays. Each subarray having two elements; first the number whose squared divisors is a square, and then the sum of the squared numbers.

function listSquared(m, n) {
    
}
const num = 42;
for (let i = 0; i < num  + 1; i++) {
    if (Number.isInteger(num / i)) {
        console.log(i)
    }
}
