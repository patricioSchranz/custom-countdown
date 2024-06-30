// *********************
// VARIABLES
// *********************

// 
// DOM ELEMENTS
const 
    header = document.querySelector('.header'),
    sectionSetCountdown = document.querySelector('.set-countdown'),
    sectionCountdownList = document.querySelector('.countdowns'),
    allSections = document.querySelectorAll('[data-hidden]'),
    faButtons = document.querySelectorAll('.fabs_button'),

    displayCalenderWeek = document.querySelector('.set-countdown_current-date-display_kw'),
    displayLocalString = document.querySelector('.set-countdown_current-date-display_local-string'),
    displayHours = document.querySelector('.set-countdown_current-time-display_hours'),
    displayMinutes = document.querySelector('.set-countdown_current-time-display_minutes'),
    displaySeconds = document.querySelector('.set-countdown_current-time-display_seconds')

// 
// DATE VARIABLES
const localStringOptions = {
    weekday: 'long', 
    year: "numeric", 
    month: "2-digit", 
    day: "numeric"
}

const
    today = new Date(),
    todayLocalString = today.toLocaleString('de-AT',localStringOptions),
    currentYear = today.getFullYear(),
    todayMilliseconds = today.getTime()

let
    currentHour = today.getHours(),
    currentMinutes = today.getMinutes(),
    currentSeconds = today.getSeconds()

const currentCalendarWeek = getCalendarWeek(currentYear, todayMilliseconds)


// *********************
// FUNCTIONS
// *********************

// => get calendar weeks according to ISO 8601
function getCalendarWeek(year, date){

    // (!) => 
    // monday - saturday = 1 - 6 
    // sunday = 0
    const firstJanuarWeekday = new Date(year, 0, 1).getDay()
        
    let 
        firstMonday = 0,
        firstMondayMilliseconds = 0
        

    if(firstJanuarWeekday > 1){
        // (?) => monday - sunday = 7 days + monday = 8 days
        firstMonday = 1 + (8 - firstJanuarWeekday)
    }
    else if(firstJanuarWeekday === 1){
        firstMonday = 1 
    }
    else if(firstJanuarWeekday === 0){
        firstMonday = 2
    }

    firstMondayMilliseconds = new Date(year, 0 , firstMonday).getTime()
    timeDifference =  Math.round ( (date - firstMondayMilliseconds) / 604800000 )

    return timeDifference
}


// *********************
// FAB BUTTONS
// *********************

faButtons.forEach(button =>{
    button.addEventListener('click', (e) =>{

        // (!) => currentTarget points to the element that attached the listener
        const targetOfButton = e.currentTarget.dataset.target

        allSections.forEach(section =>{
            section.id === targetOfButton 
            ? section.dataset.hidden = false
            : section.dataset.hidden = true
        })

        faButtons.forEach(fab => {
            fab.dataset.target === targetOfButton 
            ? fab.dataset.active = true
            : fab.dataset.active = false
        })
    })
})


// *********************
// DATE & TIME DISPLAYS
// *********************

displayLocalString.innerHTML = todayLocalString
displayCalenderWeek.innerHTML = `KW ${currentCalendarWeek}`

setInterval(() =>{
    displayHours.innerHTML = currentHour.toString().padStart('2', '0'),
    displayMinutes.innerHTML = currentMinutes.toString().padStart('2', 0),
    displaySeconds.innerHTML = currentSeconds.toString().padStart('2', 0)

    currentSeconds ++

    if(currentSeconds > 59) { 
        currentSeconds = 0
        currentMinutes ++
    }
    if(currentMinutes > 59) { 
        currentMinutes = 0
        currentHour ++ 
    }
    if(currentHour > 23) { 
        currentHour = 0
    }

}, 1000)
