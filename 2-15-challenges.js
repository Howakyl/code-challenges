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


// this should return how many months it will take to buy the new car, and how much money he will have left over.
// round down the remaining money
// the prices of the NEW and OLD cars decrease by 1.5% each month.
// Also, every two months, depreceation goes up by .5%.
function nbMonths (startPriceOld, startPriceNew, savingPerMonth, percentLossByMonth) {
  let months = 0;
  let savings = 0;
  while (startPriceNew > startPriceOld + savings) {
    savings += savingPerMonth;
    startPriceOld -= (startPriceOld * (percentLossByMonth /100));
    startPriceNew -= (startPriceNew * (percentLossByMonth /100));
    months++;

    if (months % 2 === 0) {
      percentLossByMonth += .5;
    }
  }
  return [months, Math.round(startPriceOld + savings - startPriceNew)]
}

// console.log(nbMonths(2000, 8000, 1000, 1.5));
