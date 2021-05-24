// poker cards encoder/decoder

function encode(arr) {
  let answer = [];
  for (let i = 0; i < arr.length; i++) {
    let num = 0;
    if (arr[i].includes("A")) {
      num = 0;
    }
    if (arr[i].includes("2")) {
      num = 1;
    }
    if (arr[i].includes("3")) {
      num = 2;
    }
    if (arr[i].includes("4")) {
      num = 3;
    }
    if (arr[i].includes("5")) {
      num = 4;
    }
    if (arr[i].includes("6")) {
      num = 5;
    }
    if (arr[i].includes("7")) {
      num = 6;
    }
    if (arr[i].includes("8")) {
      num = 7;
    }
    if (arr[i].includes("9")) {
      num = 8;
    }
    if (arr[i].includes("T")) {
      num = 9;
    }
    if (arr[i].includes("J")) {
      num = 10;
    }
    if (arr[i].includes("Q")) {
      num = 11;
    }
    if (arr[i].includes("K")) {
      num = 12;
    }

    // CHECK IF CLUB, DIAMOND, HEART, OR SPADE
    if (arr[i].includes("d")) {
      num += 13;
    }
    if (arr[i].includes("h")) {
      num += 26;
    }
    if (arr[i].includes("s")) {
      num += 39;
    }
    // console.log('NUM: ', num)
    answer.push(num);
  }
  return console.log(answer.sort((a, b) => a - b));
}

// encode(["Ac", "Ks", "5h", "Td", "3c"]);
// encode(["5h", "7c", "Qh", "Qs", "Ad"]);

function decode(arr) {
  const clubs = {
    0: "A",
    1: "2",
    2: "3",
    3: "4",
    4: "5",
    5: "6",
    6: "7",
    7: "8",
    8: "9",
    9: "T",
    10: "J",
    11: "Q",
    12: "K",
  };

  arr = arr.sort((a, b) => a - b);
  const answer = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 0 && arr[i] < 13) {
      for (const num in clubs) {
        if (num === arr[i].toString()) {
          answer.push(clubs[num] + "c");
        }
      }
    }
    if (arr[i] >= 13 && arr[i] < 26) {
      for (const num in clubs) {
        if (num === (arr[i] - 13).toString()) {
          answer.push(clubs[num] + "d");
        }
      }
    }
    if (arr[i] >= 26 && arr[i] < 39) {
      for (const num in clubs) {
        if (num === (arr[i] - 26).toString()) {
          answer.push(clubs[num] + "h");
        }
      }
    }
    if (arr[i] >= 39 && arr[i] < 52) {
      for (const num in clubs) {
        if (num === (arr[i] - 39).toString()) {
          answer.push(clubs[num] + "s");
        }
      }
    }
  }
  console.log(answer);
}
// c > d > h > s
decode([0, 51, 30, 22, 2]);
