//// Array Helpers ////
// Extend the functionality of built-in Array class with the following methods:
// square() , cube() , average() , sum() , even() , odd()

// .SQUARE() 
Array.prototype.square = function () {
  return this.map(nums => Math.pow(nums,2));
};

// .cube()
Array.prototype.cube = function () {
  return this.map(nums => Math.pow(nums ,3));
};

// .sum()
Array.prototype.sum = function () {
  return this.reduce((a,b) => a + b, 0);
};

// .average()
Array.prototype.average = function () {
  if (this.length > 0) {
    return this.reduce((a,b) => a + b) / this.length;
  } 
  return NaN
};

// .even()
Array.prototype.even = function () {
  return this.filter(num => num % 2 === 0)
}

// .odd()
Array.prototype.odd = function () {
  return this.filter(num => num % 2 !== 0)
}

const array = [1, 2, 3, 4, 5];
// console.log(array.square())
// console.log(array.cube())
// console.log(array.sum())
// console.log(array.average())
// console.log(array.even())
// console.log(array.odd())

/////////////////////////////////////////
//// Mexican Wave //// 
// loop through a string and capitalize each character one by one
const wave = (string) => {
  let array = [];
  for (let i = 0; i < string.length; i++) {
    console.log('string: ', string)
    string = string.toLowerCase()
    // console.log("STRING: ", string[i])
    if (string.charAt(i) !== ' ') {
      string = string.replace(string[i], string[i].toUpperCase())
      array.push(string)
    }
  }
  return array
}

// console.log(wave('two words'))

const aaa = (string) => {
  let newArr = [];
  for (let i = 0; i < string.length; i++) {
    let word = string.split('');
    console.log(word)
    if (word[i] !== ' ') {
      word[i] = word[i].toUpperCase()
      newArr.push(word.join(''))
    }
  }
  return newArr
}
// console.log(aaa('two words'))
/////////////////////////////////////////
//// Meeting ////
// make the string uppercase
// sort in alphabetical order, by last name

function meeting(people) {
  return people.toUpperCase();
}
const people = "Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill";
console.log(meeting(people))