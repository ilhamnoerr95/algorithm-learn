
// problem: Give a number 'n' , find the first 'n' elements of the fibonacci sequence.
function fibonacci (n){
    const fib = [0,1]
    for(let i= 2;i< n ;i++){
        fib[i]= fib[i-1] + fib[i-2]
        // console.log(i)
        // console.log([i-1],  [i-2])
    }
    return fib
}

console.log(fibonacci(2)) //[0,1]
console.log(fibonacci(3)) //[0,1,1]
console.log(fibonacci(7)) //[0,1,1,2,3,5,8]
//  bit-o = 0(n)

/**
 * Big-o calculation:
 * calculation not dependent on input size - O(1)
 * 1. loop O(n)
 * 2. nested loop O(n^2)
 * input size reduced by half - O(logn())
 */