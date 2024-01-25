function geek() {
    let str1 = "Geeksforgeeks is the computer "
        + "science Portal portal for geeks Portal PORTAL.";

    let match4 = str1.match(/Portal/ig);
 
    console.log("Found " + match4.length
        + " matches: " + match4);
}
geek();

function findVowels(str) {
    let vowels = str.match(/[b]/ig)
    return vowels
  }

console.log(findVowels('abracadabraAAA'));