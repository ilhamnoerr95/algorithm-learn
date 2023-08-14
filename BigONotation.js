function summation(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
      sum += i;
      console.log(i)
    }
    return sum;
  }

  console.log("worst case =>",summation(4))

//   time comlexity O(1) - constant
function goodTimeComplex(n){
    return (n * (n+1))/2
}

console.log("good time complexity code =>",goodTimeComplex(4))
