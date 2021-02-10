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

// console.log(reverseWords("This is an example!"))


function maxSubArr (array: number[]) {
    
    let maxSoFar: number = array[0];
    let currentMax: number = array[0];

    for (let i:number = 0; i < array.length; i++) {
        currentMax = Math.max(array[i], currentMax + array[i]);
        maxSoFar = Math.max(maxSoFar, currentMax);
    }
    return maxSoFar;
}

let arr: number[] = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
// console.log(maxSubArr(arr));