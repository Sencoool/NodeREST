function isValidIP(IP){
    var ipArray = []

    for(let i = 0; i < IP.length; i++){
        ipArray[i] = IP.split('.')[i]
    }

    ipArray = ipArray.filter(function( element ) {
        return element !== undefined;
    });


    for(let i = 0; i < ipArray.length; i++){
        ipArray[i] = parseInt(ipArray[i])
    }
    console.log(ipArray);
}

isValidIP("1.2.3.4")
isValidIP("1.2.3")
isValidIP("1.2.3.4.5")
isValidIP("123.45.67.89")
isValidIP("123.456.78.90")
isValidIP("123.045.067.089")