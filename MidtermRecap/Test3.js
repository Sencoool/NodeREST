function capToFront(str){
    let upper = ""
    let lower = ""
    for(let i = 0; i < str.length; i++){
        if(str[i] == str[i].toUpperCase()){
            upper += str[i]
        }
        else {
            lower += str[i]
        }
    }
    return upper + lower
}

console.log(capToFront("hApPy"));
console.log(capToFront("moveMENT"));
console.log(capToFront("shOrtCAKE"));