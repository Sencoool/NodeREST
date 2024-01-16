function sumTwoSmallestNums(num){
    let st = 0
    let nd = 0
    for(let i = 0; i <= num.length; i++){
        for(let j = i+1; j <= num.length; j++){
            if(num[i] < num[j]){
                temp = num[i]
                num[i] = num[j]
                num[j] = temp 
            }
        }
    }
    for(let i = 0; i < num.length; i++){
        if(num[i] > 0){
            st = num[i-1]
            nd = num[i]
        }
    }
    return st + nd
}

console.log(sumTwoSmallestNums([19,5,42,2,77]));
console.log(sumTwoSmallestNums([10,343445353,3453445,3453545353453]));
console.log(sumTwoSmallestNums([2,9,6,-1]));
console.log(sumTwoSmallestNums([879,953,694,-847,342,221,-91,723,791,-587]));
console.log(sumTwoSmallestNums([3683,2902,3951,-475,1617,-2385]));