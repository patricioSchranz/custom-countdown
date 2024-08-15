/**
 * HOME
 * 
 * >> shows the title and countdown of the event that has the focus or the project title if no countdown event exist
 */

// ...................................
// CALLBACKS

const countdownDisplay = (deadline, title)=>{

    homeTitle.innerHTML = title + ' begins in '

    const rightNow = new Date().getTime()

    let 
        remainingTime = deadline > rightNow ? deadline - rightNow : 0,
        remainingSeconds = (remainingTime / 1000) % 60,
        remainingMinutes = (remainingTime / (1000 * 60) ) % 60,
        remainingHours = (remainingTime / (1000 * 60 * 60) ) % 24,
        remainingDays = (remainingTime / (1000 * 60 * 60 * 24) )

    const setCountdown = setInterval(()=>{
        remainingTime -= 1000
       
        if(remainingTime <= 0){
            homeTitle.innerHTML = `${title} is arrived`
            homeCountdown.innerHTML = ''
            clearInterval(setCountdown)
        }
        else{
            remainingSeconds--

            if(remainingSeconds <= 0){
                remainingSeconds = 59
                remainingMinutes--
            }
            if(remainingMinutes <= 0){
                remainingMinutes = 59
                remainingHours--
            }
            if(remainingHours <= 0){
                remainingHours = 23
                remainingDays--
            }

            homeCountdown.innerHTML = `
                <span class="countdown-element">
                    ${Math.floor(remainingDays).toString().padStart('2', '0')}
                    <span class="time-unit">Days</span>
                </span> : 
                <span class="countdown-element">
                    ${Math.floor(remainingHours).toString().padStart('2', '0')}
                    <span class="time-unit">Hours</span>
                </span> : 
                <span class="countdown-element">
                    ${Math.floor(remainingMinutes).toString().padStart('2', '0')}
                    <span class="time-unit">Minutes</span>
                </span> :
                <span class="countdown-element">
                    ${Math.floor(remainingSeconds).toString().padStart('2', '0')}
                    <span class="time-unit">Seconds</span>
                </span>
                `
        }
    }, 1000)
 
}

// ...................................
// SET HEADING/COUNTDOWN

if(countdownEvents.length <= 0){
    homeTitle.innerHTML = `CUSTOM COUNTDOWN`
}
else {
    const focusEvent = countdownEvents.find(countdown => countdown.focus === true)

    if(focusEvent){
        countdownDisplay(focusEvent.deadline, focusEvent.title)
    }
    else{
        countdownEvents[0].focus = true
        countdownDisplay(countdownEvents[0].deadline, countdownEvents[0].title)
    }
}




