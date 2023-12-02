function climbingStaircase(n){
    const noOfWays =[1,2]

    // starting from index 2
    for(let i = 2; i< n; i++){
        // ex: n=3 
        console.log("looping==>",noOfWays[i] = noOfWays[i - 1] + noOfWays[i-2])
    }

    return noOfWays[n-1]
    
}

console.log(climbingStaircase(1))
console.log(climbingStaircase(2))
console.log(climbingStaircase(3))
console.log(climbingStaircase(4))

// timecomplexity O(n)


