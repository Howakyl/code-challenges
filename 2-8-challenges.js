function solution (string) {

    for (let i = 0; i < string.length; i++) {
      if (string.charAt(i) === string[i].toUpperCase()) {
        string = string.slice(0, i) + ` ${string[i]}` + string.slice(i +1, string.length);
        i++;
      }
    }
    return string;
};

function breakCamelCase (string) {
  return (string.replace(/([A-Z])/g, ' $1'))
}
console.log(breakCamelCase("camelCasingTest"));
// console.log(solution("camelCasingTest"))