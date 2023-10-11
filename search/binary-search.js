// ! Problem : Given an sorted array of 'n' elements and a target element 't', find the index of 't' in the array. Return -1 if the  target element is not found
// function summation(n) {
//     let sum = 0; // executed 1
//     for (let i = 1; i < n; i++) {
//       sum += i; // executed n
//     }
//     return sum; // executed 1
//   }


//   console.log(summation(5))

  // mencari indexi dari target 
  function binarySearch(arr, target){
    let leftIndex = 0;
    let rightIndex = arr.length - 1;
    console.log(leftIndex)
    while(leftIndex <= rightIndex){
      let middleIndex = Math.floor((leftIndex + rightIndex)/2)
      console.log(middleIndex);
      if(target === arr[middleIndex]) {
        // hasil akhirnya
        return middleIndex; 
      }

      // trigger untuk reduce loopingan
      if(target < arr[middleIndex]){
        rightIndex = middleIndex -1
      } else {
        leftIndex = middleIndex + 1
      }
    }
    return -1
  }
  
  console.log(binarySearch([-5,2,4,6,10],10)) // 4
  console.log(binarySearch([-5,2,4,6,10],6))// 3
  console.log(binarySearch([-5,2,4,6,10],20)) //-1


  //binarySEarch is Big-O reduce by half O(logn)

  console.log("math flor", Math.floor(3.6))