function recursiveBinarySearch(arr, target){
    // recursive pertama
    return search(arr,target,0,arr.length - 1)
}

function search(arr, target,leftIndex,rightIndex){
    if(leftIndex > rightIndex){
        return -1
    }

    let middleIndex = Math.floor((leftIndex + rightIndex) /2)
    console.log(arr[middleIndex] , ",", target,  "-> ini target")
    if(target === arr[middleIndex]) {
        return middleIndex
    }

    if(target < arr[middleIndex]){
        return search(arr,target, leftIndex, middleIndex - 1)
    } else {
        return search(arr,target,middleIndex + 1, rightIndex )
    }
}

// console.log(recursiveBinarySearch([-5,2,4,6,10],10)) // 4
console.log(recursiveBinarySearch([-5,2,4,6,10],1))// 3
// console.log(recursiveBinarySearch([-5,2,4,6,10],20)) //-1

// * Big-O = o(logn) reduce half the target looping