// *********************
// CREATE DOM ELEMENTS
// *********************

// .........................
// SET HOME SCREEN HEADING
//..........................

// => callback => set the countdown display
const countdownDisplay = (deadline, title)=>{

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
            document.querySelector('.header_main-headline').innerHTML = `${title} is arrived`
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

            document.querySelector('.header_main-headline').innerHTML = `
                <span>${Math.floor(remainingDays).toString().padStart('2', '0')}</span> : 
                <span>${Math.floor(remainingHours).toString().padStart('2', '0')}</span> : 
                <span>${Math.floor(remainingMinutes).toString().padStart('2', '0')}</span> :
                <span>${Math.floor(remainingSeconds).toString().padStart('2', '0')}</span>
                `
        }
    }, 1000)
 
}

if(storageCountdownEvents.length <= 0){
    document.querySelector('.header_main-headline').innerHTML = `CUSTOM COUNTDOWN`
}
else if(storageCountdownEvents.length === 1){
    storageCountdownEvents[0].focus = true
}

countdownDisplay(storageCountdownEvents[0].deadline, storageCountdownEvents[0].title)



// .........................
// FILL THE CUSTOM DATALIST
//..........................

const countDownTitles = []

storageCountdownEvents.forEach(countdown =>{
    if(!countDownTitles.includes(countdown.title)) { countDownTitles.push(countdown.title)}
})

console.log('countdown titles', countDownTitles)

countDownTitles.forEach(title =>{
    document.querySelector('.custom-datalist').innerHTML += `<li>${title}</li>`
})