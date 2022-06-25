function displayTime(){
    // Phase 1: Get the current time
    const currentDate = new Date()
    //1. retrieve teh hour from current date
    let hour = currentDate.getHours()
    let minute = currentDate.getMinutes()
    let seconds = currentDate.getSeconds()
    // let milliseconds = currentDate.getMilliseconds()
    let timeOfDay = "";
    if(hour == 0) {
        hour = 12;
        timeOfDay = "am";
    }
    if(hour > 12) {
        hour = hour - 12;
        timeOfDay = "pm";
    }

    hour = (hour < 10) ? "0" + hour : hour ;
    minute = (minute < 10) ? "0" + minute : minute;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    let timeString = `${hour} : ${minute} : ${seconds} : ${timeOfDay}`
    let displayClock = document.getElementById('clock')
    displayClock.innerHTML = timeString;
    setTimeout(displayTime, 10)  

}
// hour = (hour < 10) ? "0" + hour : hour;
displayTime()
    // Phase 2: Use DOM to udpate the HTML element

    // Phase 3: Run the function every 1 second

    //this is in milliseconds; 1 second = 1000 milliseconds (ms)
    // console.log('How long I have been coding.')

