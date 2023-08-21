Prime : A prime number is a natural number greater than 1 that is not a product of two smaller natural numbers

isPrime(5): true(1*5 or 5*1)
isPrime(4): true(1*4 or 2*2 or 4*1)

OPTIMIZED PRIMALITY TEST: 
! integers larger than the square root do not need to be checked because whenever `n=a*b`, one of the two factors 'a' and 'b' is less than or equal to the square root of 'n'
ex: n=24 , a=4 and b=6
the square root of 24 is 4.89
a is less than the square root of n
