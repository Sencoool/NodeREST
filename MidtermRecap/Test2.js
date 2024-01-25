function highestDigit(num){
    let str = num.toString()
    let max = "0"

    for(let i = 0; i < str.length; i++){
        let chars = str.split('');
        if(max < chars[i]){
            max = chars[i]
        }
    }
    return max
}

console.log(highestDigit(379));
console.log(highestDigit(2));
console.log(highestDigit(377401));