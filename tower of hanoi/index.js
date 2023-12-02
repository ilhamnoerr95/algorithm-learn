function towerOfHanoi(n, fromRod, toRod, usingRod){
    if(n === 1){
        console.log(`move disk 1 from ${fromRod} to ${toRod}`)
        return
    }

    towerOfHanoi(n-1, fromRod,usingRod, toRod)
    console.log(`MOVE DISK ${n} from ${fromRod} to ${toRod}`)
    towerOfHanoi(n-1,usingRod, toRod, fromRod)
    console.log(n)
}


towerOfHanoi(3, 'A', 'C', 'B')

// worst-0 0(2^n)