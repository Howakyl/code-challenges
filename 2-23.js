//// Array Helpers ////
// Extend the functionality of built-in Array class with the following methods:
// square() , cube() , average() , sum() , even() , odd()

// .SQUARE() 
Array.prototype.square = function () {
  return this.map(nums => Math.pow(nums,2))
}

// .cube()
Array.prototype.cube = function () {
  return this.map(nums => Math.pow(nums ,3))
}

const array = [1, 2, 3, 4, 5];
console.log(array.square())
console.log(array.cube())
