function numberSplit(nums){
    spilt = []
    spilt.push(Math.floor(nums / 2))
    spilt.push(Math.ceil(nums / 2))
    return spilt
}

console.log(numberSplit(4));
console.log(numberSplit(10));
console.log(numberSplit(11));
console.log(numberSplit(-9));