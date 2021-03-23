function maskify(cc) {
    for (let i = 0; i < cc.length; i++) {
        if (i < cc.length - 4) {
            cc = cc.replace(cc.charAt(i), '#')
        }
    }
    console.log(cc)
}
maskify('423598273498')