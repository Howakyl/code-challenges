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
// console.log(decipherThis('65 119esi 111dl 111lw 108dvei 105n 97n 111ka'))
//// File Name Extractor ////
var ExtractFileName = /** @class */ (function () {
    function ExtractFileName() {
    }
    ExtractFileName.extractFileName = function (dirtyFileName) {
        var numSlice = dirtyFileName.indexOf('_');
        var extSlice = dirtyFileName.lastIndexOf('.');
        dirtyFileName = dirtyFileName.slice(numSlice + 1, extSlice);
        return dirtyFileName;
    };
    return ExtractFileName;
}());
function validatePass(password) {
    var upper = false;
    var lower = false;
    var num = false;
    for (var i = 0; i < password.length; i++) {
        var char = password.charCodeAt(i);
        var value = password.charAt(i);
        if (!(char > 47 && char < 58) &&
            !(char > 64 && char < 91) &&
            !(char > 96 && char < 123)) {
            return false;
        }
        if (password.length >= 6) {
            if (value === value.toUpperCase()) {
                upper = true;
            }
            if (value === value.toLowerCase()) {
                lower = true;
            }
            if (isNaN(parseInt(password.charAt(i)))) {
                num = true;
            }
        }
    }
    if (upper && lower && num) {
        return true;
    }
    else
        return false;
}
console.log(validatePass('!JHd5fslqoS'));
