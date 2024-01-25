function isValidIP(IP){
    var ipArray = []
    var ans = true

    for(let i = 0; i < IP.length; i++){
        ipArray[i] = IP.split('.')[i]
    }
    console.log(ipArray);

    ipArray = ipArray.filter(a => !isNaN(a));

    console.log(ipArray);

    if(ipArray.length > 3 && ipArray.length < 5){
        for(let i = 0; i < ipArray.length; i++){ //checking zero
            word = ipArray[i]
            if(parseInt(word) < 0 || parseInt(word) > 255){
                ans = false
                break
            }
            if(word[0] === "0"){
                ans = false
                break
            }
        }
    }
    else{
        ans = false
    }
    
    return ans
}

console.log(isValidIP("1.2.3.4"));
console.log(isValidIP("1.2.3"));
console.log(isValidIP("1.2.3.4.5"));
console.log(isValidIP("123.45.67.89"));
console.log(isValidIP("123.456.78.90"));
console.log(isValidIP("123.045.067.089"));