function spinWords (string) {
    return string.split(' ').map(word => {
        if (word.length >= 5) {
            return word = word.split('').reverse().join('')
        }
        return word;
    }).join(' ')
}

// console.log(spinWords('Hey fellow warriors'))

function descendingOrder (num) {
    return parseInt(num.toString().split('').sort().reverse().join(''))
}

console.log(descendingOrder(42145))