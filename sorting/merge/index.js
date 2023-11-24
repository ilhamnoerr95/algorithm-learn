const mergeArr = (arr)=>{
        if(arr.length<2){
            
            return arr
        }
    // *untuk membagi 2 array dari 1 array dengan mencari nilai tengah terlebih dahulu dngn rumus dibawa ini
    let mid =  Math.floor(arr.length/2)
    const left = arr.slice(0, mid)
    const right= arr.slice(mid)
    return merge(mergeArr(left), mergeArr(right))
    // console.log("==>",left)
    // return mergeArr(left)
}

const merge = (left, right)=>{
    let sortedArray =[];
    console.log("length",left) 
    while(left.length && right.length){
        if(left[0] <= right[0]){
            sortedArray.push(left.shift())
        }
        else {
            sortedArray.push(right.shift())
        }
    }

    return [...sortedArray,...left, ...right];


}

const a = [-1,3,-20,6,-10,8]

console.log(mergeArr(a))


