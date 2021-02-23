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
console.log(array.square())
console.log(array.cube())
console.log(array.sum())
console.log(array.average())
console.log(array.even())
console.log(array.odd())

/////////////////////////////////////////