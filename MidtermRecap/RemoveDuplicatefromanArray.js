function removeDups(array){
    return array.filter((value,index) => array.indexOf(value) === index)
}

console.log(removeDups([1,0,1,0]));
console.log(removeDups(["The","big","cat"]));
console.log(removeDups(["John","Taylor","John"]));
