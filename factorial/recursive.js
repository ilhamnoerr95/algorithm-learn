function recursionFactorial (n){

if(n === 0) {
    return 1
}

/**
 * * recursion
 * 4-1 = 3 * 4 = 12
 * 3-1 =2 * 12 = 24
 * 2-1 = 1 * 24 = 24
 * 1- 1 = 0
 */
return n * recursionFactorial(n-1)

}

// console.log(recursionFactorial(0))
// console.log(recursionFactorial(1))
console.log(recursionFactorial(4))//24

// BI-O = o(n) linear time complexity
