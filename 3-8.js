//// Gap in Primes ////

function primeGap(g, start, end) {
  let primes = [];
    for (let i = start; i < end; i++) {
      let divisors = [];
      for (let k = 2; k < end; k++) {
        if (i % k === 0) {
          divisors.push(k)
        }
      }
      if (divisors.length === 1) {
        primes.push(divisors[0])
      }
    }
  //   console.log(primes)
    
    let answer ;
    for (let j = 0; j < primes.length; j++) {
      if (primes[j + 1] - primes[j] === g) {
        return answer = [primes[j], primes[j + 1]]
      }
    }
    
    if (!answer) {
      return null
    }
  }

console.log(primeGap(8, 300, 400));


let num = 109
for (let i = 2; i < num + 1; i++) {
  if (num % i === 0) {
    // console.log(i)
    return
  }
}