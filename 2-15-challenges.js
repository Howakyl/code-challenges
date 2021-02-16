// should return a table based on the argument. return value should be ex: [[1,2,3,] , [2,4,6] , [3,6,9]]
function multiplicationTable (size) {
  let initalArr = [];
for (let i = 1; i < size + 1; i++) {
  initalArr.push(i)
}
console.log(initalArr)
}

multiplicationTable(4)
// 1 2 3 4
// 2 4 6 8
// 3 6 9 12
// 4 8 12 16