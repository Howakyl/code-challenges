// poker cards encoder/decoder //

function encode(arr) {
  let answer = [];

  const converter = {
    A: 0,
    2: 1,
    3: 2,
    4: 3,
    5: 4,
    6: 5,
    7: 6,
    8: 7,
    9: 8,
    T: 9,
    J: 10,
    Q: 11,
    K: 12,
  };

  for (let i = 0; i < arr.length; i++) {
    let num = 0;
    for (const card in converter) {
      if (arr[i].includes(card)) {
        num = converter[card]
        console.log(card);
        if (arr[i].includes("d")) {
          num += 13;
        }
        if (arr[i].includes("h")) {
          num += 26;
        }
        if (arr[i].includes("s")) {
          num += 39;
        }
        answer.push(num);
      }
    }
  }

  return console.log(answer.sort((a, b) => a - b));
}

// encode(["Ac", "Ks", "5h", "Td", "3c"]);
// encode(["5h", "7c", "Qh", "Qs", "Ad"]);

function decode(arr) {
  const converter = {
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
      for (const num in converter) {
        if (num === arr[i].toString()) {
          answer.push(converter[num] + "c");
        }
      }
    }
    if (arr[i] >= 13 && arr[i] < 26) {
      for (const num in converter) {
        if (num === (arr[i] - 13).toString()) {
          answer.push(converter[num] + "d");
        }
      }
    }
    if (arr[i] >= 26 && arr[i] < 39) {
      for (const num in converter) {
        if (num === (arr[i] - 26).toString()) {
          answer.push(converter[num] + "h");
        }
      }
    }
    if (arr[i] >= 39 && arr[i] < 52) {
      for (const num in converter) {
        if (num === (arr[i] - 39).toString()) {
          answer.push(converter[num] + "s");
        }
      }
    }
  }
  console.log(answer);
}
// c > d > h > s
// decode([0, 51, 30, 22, 2]);

/////////////////////////////////

function Node(data) {
  this.data = data;
  this.next = null;
}

function Context(first, second) {
  this.first = first;
  this.second = second;
}

function alternatingSplit(head) {
  let arr = new Context;
  let node = new Node;
  arr.first = []
  arr.second = []
  

  for (let i = 0; i < head.length; i++) {
    // console.log(head[i])
    // if (i % 2 !== 0) {
    //   arr.first.push(head[i])
    // }
    // else {
    //   arr.second.push(head[i])
    // }


  }
  console.log(arr)
}

// alternatingSplit([1,2,3,4,5,null])

console.log(new Date(parseInt("52fefe6cb0091856db00030e".substr(0,8), 16) * 1000))