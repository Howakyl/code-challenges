function maskify(cc) {
    for (let i = 0; i < cc.length; i++) {
        if (i < cc.length - 4) {
            cc = cc.replace(cc.charAt(i), '#')
        }
    }
    console.log(cc)
}
// maskify('423598273498')

const maskifyQuicker = (cc) => {
    return cc.slice(0, -4).replace(/./g, '#') + cc.slice(-4)
}
// console.log(maskifyQuicker('23948u23498u'))

//// additionless addition ////
function add (x,y) {
    if (y == 0) {
        return x; 
    } else {
        return add(x ^ y, (x & y) << 1)
    }
};
// console.log(add(4,4))