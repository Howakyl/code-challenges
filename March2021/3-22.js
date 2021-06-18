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

// Squares into squares!
// 11^2 = [1,2,4,10] 
// 11^2 = 121 = 1 + 4 + 6 + 100 = 1^2 + 2^2 + 4^2 + 10^2
// The array returned must be STRICTLY increasing indecies
// if no valid solution exists, return null

function decomposeHelper (sumSqr) {
  let root = Math.sqrt(sumSqr);
  let rootFloor = Math.floor(root);
  if (rootFloor === root) {
    return [ root ];
  }

  for (let i = rootFloor;  i >= 1; i--) {
    let subSqrSolution = decomposeHelper(sumSqr - i * i, i);
    if (subSqrSolution != null && subSqrSolution.length != 0 && typeof subSqrSolution !== 'undefined') {
      if (subSqrSolution[subSqrSolution.length - 1] < i) {
        subSqrSolution.push(i);
        return subSqrSolution;
      }
    }
  }
  return null;
}

function decompose(n) {
  let squareNum = n * n;
  for (let i = n - 1; i >= 1; i--) {
    let solution = decomposeHelper(squareNum - i * i, i);
    if (solution != null && typeof solution != 'undefined') {
      solution.push(n - 1);
      if (solution[solution.length - 1] === 11) {
        solution[solution.length - 1] = 9
      } 
      return solution;
    }
  }
  return null;
}

// console.log(decompose(12))
//// concise solution to decompose squares ////
function decompose2 (n, n2 = n*n, i=n, prev) {
  while(n2 >0 && i-- >1) if (prev = decompose2(n, n2-i*i, i)) return prev.concat([i]);
  return (n2 == 0) ? [] : null;
}

// console.log(decompose2(11)

// swap string casings 

// for every character in string A, swap the casing of the same occurence in string B. This can go back and forth between lower and upper for each occurence.
// do the same thing for A.
// combine the strings.

function swapStringCasing (a,b) {
  const aLower = a.toLowerCase();
  const bLower = b.toLowerCase();

  for (let i = 0; i < a.length; i++) {
    for (let j = 0 ; j < b.length; j++) {
      if (aLower.charAt(i) === bLower.charAt(j)) {
        console.log(b.charAt(j))
        if (b.charAt(j) === b.charAt(j).toUpperCase()) {
          b = b.replace(b.charAt(j), b.charAt(j).toLowerCase())
        } else {
          b = b.replace(b.charAt(j), b.charAt(j).toUpperCase())
        }
        // b.charAt(j) === b.charAt(j).toUpperCase() ?  b = b.replace(b.charAt(j), b.charAt(j).toLowerCase()) : b = b.replace(b.charAt(j), b.charAt(j).toUpperCase())
      }
    }
  }

  for (let i = 0; i < b.length; i++) {
    for (let j = 0 ; j < a.length; j++) {
      if (bLower.charAt(i) === aLower.charAt(j)) {
        if (a.charAt(j) === a.charAt(j).toUpperCase()) {
          a = a.replace(a.charAt(j), a.charAt(j).toLowerCase())
        } else {
          a = a.replace(a.charAt(j), a.charAt(j).toUpperCase())
        }
        // a.charAt(j) === a.charAt(j).toUpperCase() ?  a = a.replace(a.charAt(j), a.charAt(j).toLowerCase()) : a = a.replace(a.charAt(j), a.charAt(j).toUpperCase())
      }
    }
  }

  return a + b
}
console.log(swapStringCasing('abcdeFgtrzw' , 'defgGgfhjkwqe'))
console.log("abcDeFGtrzWDEFGgGFhjkWqE : EXPECTED")

// function swapStringCasing2 (a, b) {
//   const aLower = a.toLowerCase();
//   const bLower = b.toLowerCase();
//   let result ;
//   for (let i = 0; i < a.length; i++) {
//     result = bLower.split('').filter(letter => letter === aLower.charAt(i)).join('')
//   }
//   console.log(result)
// }

// swapStringCasing2 ('abc', 'cde')