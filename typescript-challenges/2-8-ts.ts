function reverseWords (str: string) {

    let newString: string = ""
        str.split(' ').forEach(word => {
            word = word.split('').reverse().join('')
            newString += " " + word
        })
        return newString.trim();
}

console.log(reverseWords("This is an example!"))