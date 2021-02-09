// function solution(A) {
//     let answer = 1;
//     for (let i = 0; i < A.length; i++) {
//         if (A[i] <= 100000000 && A[i] > 0) {
            
//             let check = A.filter(number => number === A[i]);
//             if (check) {
//                 answer += 1;
//             }
    
//         }
//     }
//     if (answer <= 0) {
//         answer = 1;
//     }
//     return answer;
// }
// let nums = [1,3,6,4,1,2]
// console.log(solution(nums))

function solution(N) {
    // write your code in JavaScript (Node.js 8.9.4)
    // turn N into string, split out N into an array
    // loop through N, .map?
    // insert 5 at every index, then join & parseInt
    // save this to a variable 

    let answer = 0;
    N = N.toString().split(' ');

    for (let i = 0; i < N.length; i++) {
        N.splice(i, 0 , '5')
    }
    console.log(N)
}
// solution(268)

n = 268999;
n = n.toString().split('')
n += n.splice(0,0, 5)
console.log(n)


// n.toString().split(' ').map(number => console.log(number))