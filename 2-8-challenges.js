function solution (string) {

    for (let i = 0; i < string.length; i++) {
      if (string.charAt(i) == string[i].toUpperCase()) {
        console.log(`uppercase letter: ${string[i]}`)
      }
    }
};

solution("camelCasing")