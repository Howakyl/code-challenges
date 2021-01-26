// 1) Descending Order: 
function descendingOrder(n){
  //...
  if (n >= 0) {
    let newArr = n.toString().split("");
    newArr.sort((a,b) => b - a);
    return newArr = parseInt(newArr.join(""))
  }
}