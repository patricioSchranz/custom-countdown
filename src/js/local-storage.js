// *********************
// LOCAL STORAGE
// *********************

const storageCountdownEvents = 
    localStorage.getItem("countdownEvents") 
    ? JSON.parse( localStorage.getItem("countdownEvents") )
    : []

console.log('storage countdown events', storageCountdownEvents)

