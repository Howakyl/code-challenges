function reverseWords (str: string) {

    let newString: string = ""
        str.split(' ').forEach(word => {
            word = word.split('').reverse().join('')
            newString += " " + word
        })
        return newString.trim();
}

const reverse = (x: string) => x.split('').reverse().join('')
export const reverseWords2 = (str: string): string => str.split(' ').map(reverse).join(' ');

console.log(reverseWords("This is an example!"))