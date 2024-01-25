function digitalClock(seconds){
    let hours = Math.floor(seconds / 3600)
    let minutes = Math.floor((seconds - (hours * 3600)) / 60)
    seconds = seconds - (hours * 3600) - (minutes * 60)

    if(hours >= 24){
        hours = 0
    }

    hoursSTR = hours.toString()
    minutesSTR = minutes.toString()
    secondsSTR = seconds.toString()

    if(hoursSTR.length != 2){
        hoursSTR = "0" + hoursSTR
    }
    if(minutesSTR.length != 2){
        minutesSTR = "0" + minutesSTR
    }
    if(secondsSTR.length != 2){
        secondsSTR = "0" + secondsSTR
    }

    return(hoursSTR + ":" + minutesSTR + ":" + secondsSTR)
}

console.log(digitalClock(5025));
console.log(digitalClock(61201));
console.log(digitalClock(87000));