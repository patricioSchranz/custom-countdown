/**
 * COUNTDOWN EVENTS
 * 
 * >> fetches all stored countdown events and creates instances of the countdown event class
 */

// => get storage countdown events
const storageCountdownEvents = 
    localStorage.getItem("countdownEvents") 
    ? JSON.parse( localStorage.getItem("countdownEvents") )
    : []

console.log('storage countdown events', storageCountdownEvents)

// => create CountdownEvent instances
const countdownEvents = []

storageCountdownEvents.forEach(countdown =>{
    const newCountdownEvent = 
        new CountdownEvent(countdown.title, countdown.deadline, countdown.focus, countdown.creationDate)

    countdownEvents.push(newCountdownEvent)
})

console.log('countdown events', countdownEvents)

