function Splittest(IP){
    let ipArray = []
    ipArray = IP.split(".")
    console.log(typeof(ipArray));
    console.log(ipArray);

    let word  = ""
    word = IP.split('.')

    console.log(typeof(word));
    console.log(word);
}

console.log(Splittest("Hello.Test.Pal.World"));