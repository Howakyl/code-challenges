function spinWords (string) {
    return string.split(' ').map(word => {
        if (word.length >= 5) {
            return word = word.split('').reverse().join('')
        }
        return word;
    }).join(' ')
}

console.log(spinWords('Hey fellow warriors'))
console.log(spinWords('This is another test'))
console.log(spinWords('Just kidding there is still one more'))