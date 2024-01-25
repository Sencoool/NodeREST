function sumTwoSmallestNums(num){
    num.sort(function(a,b){
        return b - a
    });
    for(x = num.length;x > 0; x--){
        if(num[x] < 0){
            num.pop();
        }
    }
    console.log(num);
    num.sort()
    console.log(num);
}

console.log(sumTwoSmallestNums([19,5,42,2,77]));
console.log(sumTwoSmallestNums([10,343445353,3453445,3453545353453]));
console.log(sumTwoSmallestNums([2,9,6,-1]));
console.log(sumTwoSmallestNums([879,953,694,-847,342,221,-91,723,791,-587]));
console.log(sumTwoSmallestNums([3683,2902,3951,-475,1617,-2385]));