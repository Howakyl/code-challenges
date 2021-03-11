function decipherThis(text) {
    var final = '';
    text.split(' ').map(function (word) {
        var numbers = [];
        var letters = [];
        for (var i = 0; i < word.length; i++) {
            if (!isNaN(parseInt(word[i]))) {
                numbers.push(word[i]);
            }
            else {
                letters.push(word[i]);
            }
        }
        numbers = parseInt(numbers.join(''));
        var temp = letters[0];
        letters[0] = letters[letters.length - 1];
        letters[letters.length - 1] = temp;
        letters = letters.join('');
        var decrypted = String.fromCharCode(numbers);
        final += decrypted + letters + ' ';
    });
    return final;
}
;
console.log(decipherThis('65 119esi 111dl 111lw 108dvei 105n 97n 111ka'));
