// problem - give a positive integer 'n', determine if the number is a power of 2 or not
// apabila ada nilai sisa maka itu power of 2
// power of tow - PseudoCode
/**
 * n = 8
 * 8/2 =4 (remainder 0)
 * 4/2 = 2 (remainder 0)
 * 2/2 = 1 (remainder 0)
 * apabila nilai sisa bukan 0 maka n bukan power of 2
 * apabila nilai sisa 0 dan n berbuah ke 1 maka n power of 2
 */

function isPowerTwo(n) {
	if (n < 1) {
		return false;
	}

	// The while loop loops through a block of code as long as a specified condition is true.
	while (n > 1) {
		// KONDISI TRUE UNTUK N = 5 karena ada nilai sisanya
		if (n % 2 !== 0) {
			return false;
		}
		n = n / 2;
		console.log(n);
	}
	return true;
}

// console.log(isPowerTwo(1)) // true
// console.log(isPowerTwo(2)) // true
console.log(isPowerTwo(4)); // true
// console.log("ini false>",isPowerTwo(5)) // false

// BIG-O : O(logn)

// big-o : o(1) // constant menggunakan bitwise
function isPowerOfTwoBitwise(n) {
	if (n < 1) {
		return false;
	}

	return (n & (n - 1)) === 0;
}

console.log(isPowerOfTwoBitwise(1));
console.log(isPowerOfTwoBitwise(4));
console.log(isPowerOfTwoBitwise(5));
