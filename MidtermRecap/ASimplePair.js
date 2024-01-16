function simplePair(array,multi){
    let ans = []
    for(let i = 0; i < array.length; i++){
        for(let j = i+1; j < array.length; j++){
            if(array[i] * array[j] == multi){
                ans[0] = array[i]
                ans[1] = array[j]
            }
        }
    }
    return ans
}

console.log(simplePair([1,2,3],3));
console.log(simplePair([1,2,3],6));
console.log(simplePair([1,2,3],9));