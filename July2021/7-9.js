function numPlayers (maxRank, scores) {
  let num = 1;
  let ranks = []
  scores = scores.sort((a,b) => b - a)
  if (scores[0] > 0 && scores[0] <= 100) {
    ranks.push(1)
  }

  for (let i = 1; i < scores.length; i++) {
    if (scores[i] > 100 || scores[i] <= 0) {
      continue;
    }
    if (scores[i] === scores[i - 1]) {
      ranks.push(num)
    } else {
      num = ranks.length + 1;
      ranks.push(ranks.length + 1)
    }
  }

  console.log('ranks: ', ranks)
  console.log(ranks.filter(num => num <= maxRank).length)
}

// numPlayers(3, [100, 50, 50, 25])
// numPlayers(4, [20,40, 60, 80, 100])
// numPlayers(4, [2,2,3,4,5])
// numPlayers(5, [99, 99, 99, 20, 40, 60, 70, 80, 45])
// numPlayers(5, [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 99])
// numPlayers(710, [1000, 710, 76, 29, 6, 9])
// numPlayers(832, [0,0,0,0,0,0,0,0,0,0,0])
// let arr = [ 2, 3 ,4 ]
// console.log(arr.filter(num => num < 3).length)


function minMoves(arr) {
  // let sorted = arr.sort((a,b) => a - b);
  let moves = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
      continue;
    }
    if (arr[i] != arr[i + 1]) {
      // console.log(`${arr[i]} greater than ${arr[i + 1]}`)
      if (arr[i + 1] != undefined) {

        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
        moves++;
      }
    }
  }
  console.log('moves: ', moves)
  console.log(arr)
}

// minMoves([0,1,0,1])
// minMoves([1,1,1,1,0,1,0,1])
// [arr[0], arr[1]] = [arr[1], arr[0]];

function minMoves2 (arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 1) {
      arr.splice(i, 1)
    }
  }

  let count = 0;
  let dis = 0; 
  for (const num of arr) {
    if (num > 1) {
      console.log('hmm', arr.indexOf(num))
      console.log(arr)
    }
    if (num === 1){
      count += 1;
    }
    if (num === 0) {
      dis += count;
    }
    console.log('COUNT: ', count)
    console.log('DIS:   ', dis)
  }

  let length = arr.length - count;
  let revised = count * length - dis;
  return Math.min(dis, revised)
}

// console.log(minMoves2([1,1,1,1,0,1,0,1]))
// console.log(minMoves2([8,1,1,1,1,0,0,0]))