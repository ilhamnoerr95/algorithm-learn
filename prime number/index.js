// Problem - Give a natural number 'n', determina if the number is prime or not 

function isPrime(n){
    if(n < 2){
        return false
    }

    
    /**
     * @optimize function
     * optimzed algorigthm
     *  dengan menggunakan otimzed dimana kita bisa mengurangi beban 
     */
    // iterasi apabila sudah terpenuhi maka stop disitu
    for(let i =2; i <= Math.sqrt(n); i++){
        console.log(i)            
        if(n % i === 0){
            return false
        }

    }
    return true
}
// con modulo: 5 = 2 * 2 = 4 => 5-4 = 1 nilai sisanya
// 6 = 2 * 3 = 6 - 6 = 0
console.log(isPrime(1)) // false
console.log(isPrime(5)) // true 
console.log(isPrime(4)) // false


// Big-O Notation: loop : O(sqrt(n)) => linear time complexity
