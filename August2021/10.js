const isVowel= (letter) =>  {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let isVowel = false;
  for (let i = 0; i < vowels.length; i++) {
    if (letter === vowels[i]) {
      isVowel = true;
    }
  }
  return isVowel;
}

const pigLatin = (sentence) => {
  for (let i = 0; i < sentence.length; i++) {
    if (i === 0) {
      let temp = sentence[0];
      sentence = sentence.replace(sentence.charAt(0), '');
      sentence += `${temp}ay`
    }
    console.log(isVowel(sentence[i]))
  }
  console.log(sentence)
}

pigLatin('hello')