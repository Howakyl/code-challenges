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

//// Sum of Pairs 
let array = [10, 5, 2, 3, 7, 5];


function sumPairs (ints , sum) {

  const numbersSeen = {};

  for (let i = 0 ; i < ints.length; i++) {
    console.log(numbersSeen)
    const currentNumber = ints[i];

    const pair = sum - currentNumber;

    if (numbersSeen[pair] !== undefined) {
      return [pair, currentNumber];
    }

    if (numbersSeen[currentNumber] === undefined) {
      numbersSeen[currentNumber] = i;
    }
  }

  return null;
}
// console.log(sumPairs(array , 10))
//////////////////////////////////////////

//// Two Sum ////
// a function that takes an array of numbers, and a target number.
// return two items in the array, that when added together equal the target number.
function twoSum (numbers, target) {

  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === target) return [i ,j]
    }
  }
}

// let arr = [1,2,3];
// console.log(twoSum(arr, 4));
//////////////////////////////////////////

function stockList(listOfArt, listOfCat) {
  if (!listOfArt.length || !listOfCat.length) return ''

  return listOfCat.map(category => {
    const sum = listOfArt.reduce((a,b) => a + (b.charAt(0) === category ? +b.split(' ')[1]: 0), 0)
    return `(${category} : ${sum})`
  }).join(' - ')
}

b = ["ABAR 200", "CDXE 500", "BKWR 250", "BTSQ 890", "DRTY 600"]
c = ["A", "B"]

// console.log(stockList(b, c));

function dataReverse(array) {
  if (array.length == 0) return [];
  let newArr = [];
  for (let i = 0; i < array.length + 1; i++) {
    if (i % 8 === 0 && i < 9) {
      newArr.push(array.slice(0,i))
    } else if (i % 8 === 0) {
      newArr.push(array.slice(i -8, i)) 
    }
  }
  newArr.shift()
  return newArr.reverse().toString().split(',').map(nums => parseInt(nums))  
}

const data1 = [1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0];
console.log(dataReverse(data1))