// this ascending
function insertionSort(arr){
    for(let i = 1; i < arr.length; i++){
        let numberToInsert = arr[i]
        let j = i - 1
        
        // console.log(arr[j] , numberToInsert)
        // console.log("index",j, i)
        // console.log(arr[j+1])
        // itertate ntill get array to 0  
        // check sorted element greater than the number to 
        while(j >= 0 && arr[j] > numberToInsert){
            arr[j+1] = arr[j]
            j = j -1
        }
        arr[j+1] =numberToInsert
    }
}

const arr = [-6,20,8,-2,4]
insertionSort(arr)
console.log(arr)


// Big-o = nested loops - 0(N^2) QUADRATIC COMPLEXITY
