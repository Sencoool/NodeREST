function numberSplit(nums){
    return[Math.floor(nums / 2),Math.ceil(nums / 2)];
}

console.log(numberSplit(4));
console.log(numberSplit(10));
console.log(numberSplit(11));
console.log(numberSplit(-9));