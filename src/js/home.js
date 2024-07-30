// *********************
// HOME SCREEN
// *********************

// ...................................
// CALLBACKS
//....................................

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
                <span>${Math.floor(remainingDays).toString().padStart('2', '0')}</span> : 
                <span>${Math.floor(remainingHours).toString().padStart('2', '0')}</span> : 
                <span>${Math.floor(remainingMinutes).toString().padStart('2', '0')}</span> :
                <span>${Math.floor(remainingSeconds).toString().padStart('2', '0')}</span>
                `
        }
    }, 1000)
 
}

// ...................................
// SET HEADING/COUNTDOWN
//....................................

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

    console.log('fc event', focusEvent)
}




