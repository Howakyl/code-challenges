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

// 5) Spin Words 
// reverse all words that are five or more letter words

//////// MY SOLUTION ////////
// function spinWords(sentence) {

//     let string = ""
//     sentence.split(" ").forEach(word => {
//         if(word.length >=5) {
//             word = word.split("").reverse().join("");
//             string += " " + word
//         } else {
//             string += " " + word
//         }
//     });
//     return string.trim();
// }

//////// CONCISE SOLUTION ////////

// function spinWords(words) {
//     return words.split(' ').map(function (word) {
//         return (word.length > 4) ? word.split('').reverse().join('') : word;
//     }).join(' ');
// }

// console.log(spinWords("this is a test"));
// console.log(spinWords("this is another test"));

// 6) Summing a number's digits
// sum the digits of a number with their absolute values
///// MY SOLUTION /////
// function sumDigits(number) {
//     number = Math.abs(number);
//     number = parseInt(number.toString().split('').reduce((a,b) => Math.abs(a) + Math.abs(b)))
//     console.log(number)
// }

////// another solution //////
// const sumDigits = numberToSum => Math.abs(numberToSum)
//     .toString()
//     .split('')
//     .map(Number)
//     .reduce((acc, num) => acc + num, 0);

// sumDigits(-450)

// 7) Money, Money, Money

//// MY SOLUTION ////
// function calculateYears(principal, interest, tax, desired) { 
//     let years = 0;
//     while (principal < desired) {
//       let gain = principal * interest;
//       gain -= tax * gain;
//       principal += gain;
//       years++;
//     }
//     return years;
// }

// //// more concise solution ////
// function calculateYears(principal, interest, tax, desired) {
//   let years = 0;
//   while (principal < desired) {
//     principal += (principal * interest) * (1 - tax);
//     years++;
//   }
//   return years;
// }

// console.log(calculateYears(1000, .05, .18, 1100));

// 8) two fighters, one winner

// function declareWinner(fighter1, fighter2, firstAttacker) {
//     while (fighter1.health > 0 && fighter2.health > 0) {
//       fighter2.health -= fighter1.damagePerAttack;
//       fighter1.health -= fighter2.damagePerAttack;
//     }
    
//     if (fighter1.health <= 0 && fighter2.health <= 0)
//       return firstAttacker;
//     else if (fighter1.health <= 0)
//       return fighter2.name;
//     else
//       return fighter1.name;
//   }
