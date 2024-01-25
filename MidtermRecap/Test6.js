function removeDups(array){ //Set object are collections of values that only occur once
   const Nodup = array.filter((value,index,arr) => {
      return arr.indexOf(value) === index
   })
   return Nodup
}

console.log(removeDups([1,0,1,0]));
console.log(removeDups(["The","big","cat"]));
console.log(removeDups(["John","Taylor","John"]));
