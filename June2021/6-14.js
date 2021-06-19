const scrambleWords = (str) => {
  const isLetter = (letter) => {
    return letter.toLowerCase() != letter.toUpperCase();
  };

  str = str.split("");
  let saved = [];
  if (str.length > 1) {
    let short = str.slice(1, str.length - 1).sort((a, b) => {
      if (!isLetter(a)) {
        console.log(a);
        saved = [str.indexOf(a), a];
        str.splice(saved[0], saved[1]);
        console.log("saved: ", saved);
      }

      function getRaw(s) {
        return s.toLowerCase().trim();
      }
      return getRaw(a).localeCompare(getRaw(b));
    });
    short = [str[0], ...short, str[str.length - 1]];
    short = short.join("").replace(/[\W_]+/g, "");
    short = short.split("").splice(saved[0], 0, saved[1]);

    return console.log(short);
  }
  // str[0] = str[0].split('').sort()

  return console.log(str.join(""));
};

// scrambleWords('professionals')
// scrambleWords('card-carrying')

// console.log(short.indexOf(/[\W_]+/g))

// const isLetter = (letter) => {
//   return letter.toLowerCase() !=letter.toUpperCase()
// }
// let string = 'card-carrying'
// string = string.split('')
// let saved = [];
// for (let i = 0; i < string.length; i++) {
//   if (!isLetter(string[i])) {
//     console.log(string[i])
//     saved = [i, string[i]]
//     string.splice(i, 1)
//   }
// }
// console.log('saved: ', saved)
// let short  = string.slice(1, string.length - 1).sort((a,b) => a.localeCompare(b))
// short = [string[0], ...short, string[string.length - 1]]
// short.splice(saved[0],0, saved[1])
// console.log(short.join(''))

/////////////////////////////////////

function fibonacci(num) {
  let start = [1, 1];

  for (let i = 1; i < num + 1; i++) {
    start.push(start[i] + start[i - 1]);
  }

  console.log(start);
}

// fibonacci(5)

////////////////////////////////////

function reverseInt(int) {
  int = int.toString().split("").reverse();
  if (int[int.length - 1] === "-") {
    let dash = int.pop();
    int.unshift(dash);
  }
  int = int.join("");
  if (int > Math.pow(2, 31) || int < Math.pow(-2, 31) - 1) {
    return 0;
  }
  return console.log(+int);
}

// reverseInt(321);
// reverseInt(-123);
// reverseInt(120);
// reverseInt(0);

function alternateReverseInt(int) {
  const isNegative = int < 0 ? true : false;
  int = parseInt(int.toString().split("").reverse().join(""));
  const outsideRange = int > Math.pow(2, 31) || int < (Math.pow(-2, 31) - 1) ? true : false;
  if (outsideRange) {
    return console.log(0);
  }
  return isNegative ? console.log(-Math.abs(int)) : console.log(int);
}

// alternateReverseInt(1534236469);

////////////////////////////////////
