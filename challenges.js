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
// function digitize(n) {
//   if (n >= 0) {
//     return n.toString().split('').reverse().map(number => parseInt(number))
//   };
// };

// console.log(digitize(18459))


// 3) Take a number and sum its digits raised to the consecutive powers.
// ex: 135 = 1^1 + 3^2 + 5^3

// function sumDigPow (a, b) {
//   let answers = [];

//   while (a <= b) {
//     if (a.toString().split('').reduce((total, currentNum, index) => total + currentNum ** (index + 1), 0) == a) {
//       answers.push(a);
//     };
//     a++;
//   }
//   return console.log(answers);
// }

// sumDigPow(1,150);

// let word = 'thisWord';
// word = word.charAt(0).toUpperCase() + word.slice(1);
// console.log(word);


// 4) Convert a string to Camel Case: letters that follow - OR _ set to uppercase.
//////// MY SOLUTION ////////

// function toCamelCase(str){
//     for (let i = 0; i < str.length; i++) {
//       while (str.charAt(i).includes("-")) {
//         str = str.replace('-', '').replace( str[i + 1], str[i + 1].toUpperCase())
//       }
//       while (str.charAt(i).includes("_")) {
//         str = str.replace('_', '').replace( str[i + 1], str[i + 1].toUpperCase())
//       }
//     }
//   console.log(str);
// }
// toCamelCase('the_stealth_warrior');

////// More concise solution //////

// function toCamelCase(str){
//   var regExp=/[-_]\w/ig;
//   return str.replace(regExp,function(match){
//         return match.charAt(1).toUpperCase();
//    });
// }


