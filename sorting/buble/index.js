//*  Problem - Given an array of integers, sort the array
// const arr = [-6,20,8,-2, 4]
// result must be [-6,-2,4,8,20]
//  cara kerja buble sort dengan repeat dan membandingkan nilai dari index 1 dengan lainnya, contoh ada di buble.png, 
// apabila niliai 1 lebih besar dari indexi lainnya maka akan ditukar

function bubbleSort(arr){
    let swapped;
    // kita akan mulai dari element/index pertama sampe dituker ke index terakhir
    do{
    swapped= false
    for(let i =0; i< arr.length - 1; i++){
         // Tukar elemen jika elemen sekarang lebih besar dari elemen berikutnya
        if(arr[i] > arr[i+1]){
            let temp = arr[i]
            arr[i] = arr[i+1]
            arr[i+1] = temp
            swapped = true
        }
   
    }
}
    while(swapped)
}

const myArray = [64, 34, 25, 12, 22, 11, 90];
bubbleSort(myArray)

console.log(myArray)

// let test = [1,2]
// test = [...test, 3]
// console.log(test)

// ! note penggunaaan do while, do akan mengeksekusi fungsi sekali dan while untuk looping function apabila dalam keadaan true

// * Big-o untuk buble sort O(n^2)