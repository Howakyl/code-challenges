// 3 longest substring

function longestSubStr(string) {
  let answer = "";
  let num = 0;
  let num2 = 0;
  while (num < string.length) {
    for (let i = 0; i < string.length; i++) {
      console.log(string.substr(num, i));
      if (!string.substr(num, i).includes(string[i])) {
        answer = string.substr(num, i);
      }
    }
    num++;
    num2++;
  }
  console.log("answer: ", answer);
}
// longestSubStr('abcabcbb')

function longestSubStr2(string) {
  let answer = '';
  let num = 0;
  let shortString = string;
  for (let i = 1; i < string.length + 1; i++) {
    let isRepeating = false;
    shortString = string.substr(num, i);
    let sorted = shortString.split('').sort()
    // console.log(shortString)
    for (let j = 0; j < shortString.length; j++) {
      // if (typeof shortString === "string") {
      //   shortString = shortString.split('').sort()
      // }
      if (sorted[j] === sorted[j + 1]) {
        isRepeating = true;
        num ++;
        i = 1;
      }
      if (!isRepeating && shortString === string) {
        return console.log('yay')
      }
    }
    if (!isRepeating && shortString.length > answer.length) {
      answer = string.substr(num, i )
    }
  }
  if (string === " ") {
    console.log("answer:",1)
  }
  console.log('answer:' ,answer);
}
// longestSubStr2("pwwkew");
// longestSubStr2("abcabcbb")
// longestSubStr2(" ")
// longestSubStr2("c")
// longestSubStr2("au")
// longestSubStr2("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~ abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~ ")