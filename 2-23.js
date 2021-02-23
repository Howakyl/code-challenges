//// Array Helpers ////
// Extend the functionality of built-in Array class with the following methods:
// square() , cube() , average() , sum() , even() , odd()

Array.prototype.square = function () {
  return this.map(nums => Math.pow(nums,2))
}
const squareArray = [1, 4 , 9, 16, 25];
console.log(squareArray.square())