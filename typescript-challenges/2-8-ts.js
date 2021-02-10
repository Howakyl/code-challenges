"use strict";
exports.__esModule = true;
exports.reverseWords2 = void 0;
function reverseWords(str) {
    var newString = "";
    str.split(' ').forEach(function (word) {
        word = word.split('').reverse().join('');
        newString += " " + word;
    });
    return newString.trim();
}
var reverse = function (x) { return x.split('').reverse().join(''); };
var reverseWords2 = function (str) { return str.split(' ').map(reverse).join(' '); };
exports.reverseWords2 = reverseWords2;
// console.log(reverseWords("This is an example!"))
function maxSubArr(array) {
    var maxSoFar = array[0];
    var currentMax = array[0];
    for (var i = 0; i < array.length; i++) {
        currentMax = Math.max(array[i], currentMax + array[i]);
        maxSoFar = Math.max(maxSoFar, currentMax);
    }
    return maxSoFar;
}
var arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(maxSubArr(arr));
