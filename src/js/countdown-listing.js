/** 
 * COUNTDOWN LISTING
 * 
 * >> lists all saved countdown events
 */

const setListEntryCountdown = (deadline, element) => {
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
            element.innerHTML = 'COMPLETED'
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

            element.innerHTML = `
                <span>${Math.floor(remainingDays).toString().padStart('2', '0')}</span> : 
                <span>${Math.floor(remainingHours).toString().padStart('2', '0')}</span> : 
                <span>${Math.floor(remainingMinutes).toString().padStart('2', '0')}</span> :
                <span>${Math.floor(remainingSeconds).toString().padStart('2', '0')}</span>
                `
        }
    }, 1000)
}

// => create the countdown list items
countdownEvents.forEach(countdownEvent =>{
    countdownList.innerHTML += `
        <li 
            class="${today.getTime() < countdownEvent.deadline ? "pending" : "achieved" }" 
            data-deadline="${countdownEvent.deadline}"
            data-creation-date="${countdownEvent.creationDate}"
        >
                <span class="title">${countdownEvent.title}</span>
                <span class="date">${countdownEvent.getEventLocalDateString()}</span>
                <span class="countdown"></span>
                ${
                    today.getTime() < countdownEvent.deadline 
                    ? "<img src='assets/icons/focus-icon-" + countdownEvent.focus + ".svg'>"
                    : "" 
                }
                
        </li>
    `
})

// => set the countdown displays
const countdownListEntrys = document.querySelectorAll(".countdowns_list li")

countdownListEntrys.forEach(listEntry =>{
    const 
        deadline = listEntry.dataset.deadline,
        countdownDisplay = listEntry.querySelector('.countdown')

    setListEntryCountdown(deadline, countdownDisplay)
})

// => handle the focus / delete completed events
const countdownListPoints = countdownList.querySelectorAll('li')

countdownListPoints.forEach(listpoint =>{
    listpoint.addEventListener('click', ()=>{
        const eventId = listpoint.dataset.creationDate

        if(listpoint.classList.contains('pending')){
            countdownEvents.forEach(countdownEvent =>{
                if(countdownEvent.creationDate == eventId) {  countdownEvent.focus = true }
                else { countdownEvent.focus = false }
            })
        }
        else{
            countdownEvents.forEach( (countdownEvent, idx) =>{
                if(countdownEvent.creationDate == eventId) {  countdownEvents.splice(idx, 1) }
            })
        }

        localStorage.setItem("countdownEvents", JSON.stringify(countdownEvents))
        location.reload()
       
    })
})


