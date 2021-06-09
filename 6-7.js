// longest palindrome string
const palindrome = (s) => {
  string = s.split('')
  let answer = ''
  for (let i = 0; i < string.length + 1; i++) {
    for (let j = i + 1; j < string.length + 1; j++) {
      let subString = string.slice(i, j)
      console.log(subString.join(''))
      if (subString.join('') === subString.reverse().join('')) {
        // console.log('palindrome: ', s.substr(i, j))
        if (subString.length > answer.length)
        answer = subString.join('')
      }
    }
  }
  return console.log('ANSWER:' , answer)
}

// palindrome('babad')
// palindrome('racecar')
// palindrome("abcdbbfcba")
palindrome('a')
// palindrome('cbbd')
// palindrome("ibvjkmpyzsifuxcabqqpahjdeuzaybqsrsmbfplxycsafogotliyvhxjtkrbzqxlyfwujzhkdafhebvsdhkkdbhlhmaoxmbkqiwiusngkbdhlvxdyvnjrzvxmukvdfobzlmvnbnilnsyrgoygfdzjlymhprcpxsnxpcafctikxxybcusgjwmfklkffehbvlhvxfiddznwumxosomfbgxoruoqrhezgsgidgcfzbtdftjxeahriirqgxbhicoxavquhbkaomrroghdnfkknyigsluqebaqrtcwgmlnvmxoagisdmsokeznjsnwpxygjjptvyjjkbmkxvlivinmpnpxgmmorkasebngirckqcawgevljplkkgextudqaodwqmfljljhrujoerycoojwwgtklypicgkyaboqjfivbeqdlonxeidgxsyzugkntoevwfuxovazcyayvwbcqswzhytlmtmrtwpikgacnpkbwgfmpavzyjoxughwhvlsxsgttbcyrlkaarngeoaldsdtjncivhcfsaohmdhgbwkuemcembmlwbwquxfaiukoqvzmgoeppieztdacvwngbkcxknbytvztodbfnjhbtwpjlzuajnlzfmmujhcggpdcwdquutdiubgcvnxvgspmfumeqrofewynizvynavjzkbpkuxxvkjujectdyfwygnfsukvzflcuxxzvxzravzznpxttduajhbsyiywpqunnarabcroljwcbdydagachbobkcvudkoddldaucwruobfylfhyvjuynjrosxczgjwudpxaqwnboxgxybnngxxhibesiaxkicinikzzmonftqkcudlzfzutplbycejmkpxcygsafzkgudy")

arr = ['r', 'a', 'c' , 'e', 'c', 'a', 'r']

let newArr = arr.slice(4, 6)
// console.log(newArr)