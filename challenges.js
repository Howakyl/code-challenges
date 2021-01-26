// 1) Descending Order:
// takes in a number, and orders the digits in descending order
// function descendingOrder(n){
//   //...
//   if (n >= 0) {
//     let newArr = n.toString().split("");
//     newArr.sort((a,b) => b - a);
//     return newArr = parseInt(newArr.join(""))
//   }
// }

// 2) Convert number to reversed array of digits
function digitize(n) {
  if (n >= 0) {
    return n.toString().split('').reverse().map(number => parseInt(number))
  };
};

console.log(digitize(18459))