// should return a table based on the argument. return value should be ex: [[1,2,3,] , [2,4,6] , [3,6,9]]
function multiplicationTable (size) {
  let initalArr = [];
  let totalArr = [];
  for (let i = 1; i < size + 1; i++) {
    initalArr.push(i)
  }
  let num = 1;
  while (num < size + 1) {
    let arr = initalArr.map(nums => {
      return nums * num;
    })
    totalArr.push(arr)
    num++;
  }
  console.log(totalArr)
}

// multiplicationTable(5)

// 1 2 3 4
// 2 4 6 8
// 3 6 9 12
// 4 8 12 16
