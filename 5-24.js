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
    if(arr[i].includes('d')) {
      num += 13;
    }
    if(arr[i].includes('h')) {
      num += 26;
    }
    if(arr[i].includes('s')) {
      num += 39;
    }
    console.log('NUM: ', num)
    answer.push(num)
  }
  return console.log(answer.sort())
}

encode(["Ac", "Ks", "5h", "Td", "3c"]);
