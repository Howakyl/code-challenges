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
    if (i === 0 && isVowel(sentence[0])) {
      sentence += 'way'
    } else if (i === 0 && !isVowel(sentence[0])) {
      let temp = sentence[0]
      sentence = sentence.replace(sentence.charAt(0), '');
      if (temp.toUpperCase() === temp) {
        sentence = sentence.replace(sentence.charAt(0), sentence.charAt(0).toUpperCase())
      }
      sentence += `${temp.toLowerCase()}ay`
    }
  }
  console.log(sentence)
}

pigLatin('hello')
pigLatin('apple')