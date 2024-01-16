function capToFront(str){
    let upper = ""
    let lower = ""
    let ans = ""
    for(let i = 0; i < str.length; i++){
        if(str[i] == str[i].toUpperCase()){
            upper += str[i]
        }
        else if(str[i] == str[i].toLowerCase()){
            lower += str[i]
        }
    }
    ans = upper + lower
    return ans
}

console.log(capToFront("hApPy"));
console.log(capToFront("moveMENT"));
console.log(capToFront("shOrtCAKE"));
