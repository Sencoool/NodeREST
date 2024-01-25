function totalVolume(...num){ //handle Rest Parameter
    let sum = 0
    let multiply = 1
    for(let i = 0; i < num.length; i++){
        for(let j of num[i]){ //index = position value = value of that position
            multiply *= j
        }
        sum += multiply
        multiply = 1
    }
    return sum
}

console.log(totalVolume([4,2,4],[3,3,3],[1,1,2],[2,1,1]));
console.log(totalVolume([2,2,2],[2,1,1]));
console.log(totalVolume([1,1,1]));