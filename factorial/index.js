// problem - Give an integer 'n' , find the factorial of that integer
function factorial(n) {
    let result = 1

    for(let i=1; i<=n; i++){
        result *= i
    }
    
    return result;
};

// factorial(4)
console.log(factorial(0))
console.log(factorial(1))
console.log(factorial(4))
console.log(factorial(5))

// BI-O = o(n) linear time complexity

