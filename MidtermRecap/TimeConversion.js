function digitalClock(seconds){
    let minutes = 0,hours = 0;
    let str = ""

    if((seconds / 60) > 60){
        minutes = (seconds / 60) - 60
    }
    if(minutes > 60){
        minutes = 0
    }

    hours = seconds / 3600
    if(hours > 24){
        hours = 0
    }

    if(hours < 10){
        str = 0
        str += Math.floor(hours).toString() + ":" + Math.floor(minutes) + ":" + seconds
    }else if(hours < 10 & minutes < 10){
        str = 0
        str += Math.floor(hours).toString() + ":" + Math.floor(minutes) + "0:" + seconds
    }else if(minutes < 10){
        str += Math.floor(hours).toString() + ":" + Math.floor(minutes) + "0:" + seconds    
    }else{
        str += Math.floor(hours).toString() + ":" + Math.floor(minutes) + ":" + seconds
    }
    return(str)
}

console.log(digitalClock(5025));
console.log(digitalClock(61201));
console.log(digitalClock(87000));