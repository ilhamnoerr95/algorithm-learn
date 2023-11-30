// ! Problem : Given an array of 'n' elements and a target element 't', find the index of 't' in the array. Return -1 if the  target element is not found

function linearSearch(n){
    let arr = [-5,2,10,4,6]
    let index = arr.indexOf(n)
   return arr[index]

}

console.log(linearSearch(10))
console.log(linearSearch(6))
console.log(linearSearch(1))


// pake cara map
// function linearSearchMap(n){
//     let arr = [-5,2,10,4,6]

//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] === n) {
//             return i
//         }
//     }
//     return -1
// }

// console.log(linearSearchMap(10))
// console.log(linearSearchMap(6))
// console.log(linearSearchMap(1))

// 1. loop O(n)