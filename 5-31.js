// 3 longest substring

function longestSubStr2(string) {
  let answer = "";
  let num = 0;
  let shortString = string;
  for (let i = 1; i < string.length + 1; i++) {
    let isRepeating = false;
    shortString = string.substr(num, i);
    let sorted = shortString.split("").sort();
    // console.log(shortString)
    for (let j = 0; j < shortString.length; j++) {
      // if (typeof shortString === "string") {
      //   shortString = shortString.split('').sort()
      // }
      if (sorted[j] === sorted[j + 1]) {
        isRepeating = true;
        num++;
        i = 1;
      }
      if (!isRepeating && shortString === answer) {
        break;
      }
    }
    if (!isRepeating && shortString.length > answer.length) {
      answer = string.substr(num, i);
    }
  }
  if (string === " ") {
    console.log("answer:", 1);
  }
  console.log("answer:", answer);
}
// longestSubStr2("pwwkew");
// longestSubStr2("abcabcbb")
// longestSubStr2(" ")
// longestSubStr2("c")
// longestSubStr2("au")
// longestSubStr2("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~ abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~")

// median two sorted arrays
function findMedianArray(nums1, nums2) {
  let combined = [...nums1, ...nums2];
  combined = combined.sort((a, b) => a - b);
  console.log(combined);
  if (combined.length === 2) {
    return console.log((combined[0] + combined[1]) / 2);
  }

  for (let i = combined.length; i > 0; i--) {
    if (combined.length === 1) {
      return console.log(combined[0]);
    }
    combined.pop();
    combined.shift();
    if (combined.length === 2) {
      return console.log((combined[0] + combined[1]) / 2);
    }
  }
}

// findMedianArray([3], [-2, -1]);

function addLinkedList (l1, l2) {
  l1 = parseInt(l1.join(''));
  l2 = parseInt(l2.join(''));

  // l1 = l1.map(num => {
  //   return parseInt(num)
  // })
  let sum = l1 + l2
  sum = sum.toString().split('')
  let arr = []
  for (let i = 0; i < sum.length; i++ ){
    arr.push(parseInt(sum[i]))
  }

  console.log(arr.reverse())
}

addLinkedList([2,4,3], [5,6,4])
addLinkedList([0], [0])
addLinkedList([9,9,9,9,9,9,9], [9,9,9,9])
// 342 + 465
// console.log(parseInt('342'))