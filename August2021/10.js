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
    console.log(isVowel(sentence[i]))
  }
}

pigLatin('apple')