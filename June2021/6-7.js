// longest palindrome string
const palindrome = (s) => {
  string = s.split("");
  let answer = "";
  for (let i = 0; i < string.length + 1; i++) {
    for (let j = i + 1; j < string.length + 1; j++) {
      let subString = string.slice(i, j);
      let joined = subString.join("");
      // console.log(subString.join(''))
      if (
        joined === subString.reverse().join("") &&
        joined.length > answer.length
      ) {
        answer = joined;
      }
    }
  }
  return console.log("ANSWER:", answer);
};

// palindrome("babad");
// palindrome("racecar");
// palindrome("abcdbbfcba");
// palindrome("a");
// palindrome("cbbd");
// palindrome(
//   "ibvjkmpyzsifuxcabqqpahjdeuzaybqsrsmbfplxycsafogotliyvhxjtkrbzqxlyfwujzhkdafhebvsdhkkdbhlhmaoxmbkqiwiusngkbdhlvxdyvnjrzvxmukvdfobzlmvnbnilnsyrgoygfdzjlymhprcpxsnxpcafctikxxybcusgjwmfklkffehbvlhvxfiddznwumxosomfbgxoruoqrhezgsgidgcfzbtdftjxeahriirqgxbhicoxavquhbkaomrroghdnfkknyigsluqebaqrtcwgmlnvmxoagisdmsokeznjsnwpxygjjptvyjjkbmkxvlivinmpnpxgmmorkasebngirckqcawgevljplkkgextudqaodwqmfljljhrujoerycoojwwgtklypicgkyaboqjfivbeqdlonxeidgxsyzugkntoevwfuxovazcyayvwbcqswzhytlmtmrtwpikgacnpkbwgfmpavzyjoxughwhvlsxsgttbcyrlkaarngeoaldsdtjncivhcfsaohmdhgbwkuemcembmlwbwquxfaiukoqvzmgoeppieztdacvwngbkcxknbytvztodbfnjhbtwpjlzuajnlzfmmujhcggpdcwdquutdiubgcvnxvgspmfumeqrofewynizvynavjzkbpkuxxvkjujectdyfwygnfsukvzflcuxxzvxzravzznpxttduajhbsyiywpqunnarabcroljwcbdydagachbobkcvudkoddldaucwruobfylfhyvjuynjrosxczgjwudpxaqwnboxgxybnngxxhibesiaxkicinikzzmonftqkcudlzfzutplbycejmkpxcygsafzkgudy"
// );

// arr = ['go', 'link']
// let obj = {}
// obj[arr[0]]= arr[1]
// console.log(obj)
