const isVowel = (letter) => {
  const vowels = ["a", "e", "i", "o", "u"];
  let isVowel = false;
  for (let i = 0; i < vowels.length; i++) {
    if (letter === vowels[i]) {
      isVowel = true;
    }
  }
  return isVowel;
};

const isPunctuation = (char) => {
  const punctuation = ["!", ".", "?"];
  let isPunc = false;
  for (let i = 0; i < punctuation.length; i++) {
    if (char === punctuation[i]) {
      isPunc = true;
    }
  }
  return isPunc;
}

const pigLatin = (sentence) => {
  let split = sentence.split(" ");
  for (let j = 0; j < split.length; j++) {
    for (let i = 0; i < split[j].length; i++) {
      if (i === 0 && isVowel(split[j][0])) {
        split[j] += "way";
      } else if (i === 0 && !isVowel(split[j][0])) {
        let temp = split[j][0];
        split[j] = split[j].replace(split[j].charAt(0), "");
        if (temp.toUpperCase() === temp) {
          split[j] = split[j].replace(
            split[j].charAt(0),
            split[j].charAt(0).toUpperCase()
          );
        }
        split[j] += `${temp.toLowerCase()}ay`;
      }
      if (isPunctuation(split[j].charAt(i))) {
        console.log(split[j].charAt(i))
        let punctuation = split[j].charAt(i);
        split[j] = split[j].replace(split[j].charAt(i), '')
        split[j] += punctuation
      }
    }
  }
  return console.log(split.join(' '))
};

// pigLatin("Hello World");
// pigLatin("Pizza? Yes please!");
pigLatin('Convert the sentence to Pig Latin!')
