function simplePair(array,multi){
    let ans = []
    for(let i = 0; i < array.length; i++){
        for(let j = i+1; j < array.length; j++){
            if(array[i] * array[j] == multi){
                ans.push([array[i],array[j]])
            }
            if(array[0] * array[i] == multi){
                ans.push([array[0],array[j]])
            }
        }
    }
    if(ans.length == 0){
        return null
    }else{
        return ans
    }
}

console.log(simplePair([1,2,3],3));
console.log(simplePair([1,2,3,6],6));
console.log(simplePair([1,2,3],9));