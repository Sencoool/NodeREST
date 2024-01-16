function totalVolume(...num){ //handle Rest Parameter
    let ans = 0
    let sum = 1
    for(let i = 0; i < num.length ; i++){
        for (let arg of num[i]){
            sum *= arg
        }
        ans += sum
        sum = 1
    }
    return ans
}

console.log(totalVolume([4,2,4],[3,3,3],[1,1,2],[2,1,1]));
console.log(totalVolume([2,2,2],[2,1,1]));
console.log(totalVolume([1,1,1]));