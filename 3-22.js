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

console.log(decompose2(11))