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
    day: "2-digit"
}

const
    today = new Date(),
    todayLocalString = today.toLocaleString('de-AT',localStringOptions),
    currentYear = today.getFullYear()

let
    currentHour = today.getHours(),
    currentMinutes = today.getMinutes(),
    currentSeconds = today.getSeconds()

const currentCalendarWeek = getCalendarWeek(currentYear, today)


// *********************
// FUNCTIONS
// *********************

// => get calendar weeks according to ISO 8601
function getCalendarWeek(year, date){

    // (!) =>  monday - saturday = 1 - 6 , sunday = 0
    const 
        firstJanuarWeekday = new Date(year, 0, 1).getDay()
        todayWeekday = date.getDay()

    const isLateFirstWeek = firstJanuarWeekday > 4 || firstJanuarWeekday === 0 
    ? true
    : false
        
    let 
        firstMonday = 0,
        firstMondayMilliseconds = 0,
        todayMilliseconds = date.getTime(),
        timeDifference = 0
       
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

    if(date < firstMondayMilliseconds && isLateFirstWeek){
        return 52
    }
    else if(date < firstMondayMilliseconds){
        return 1
    }
    else{
        // (!) => 604800000 = 1 week in milliseconds
       timeDifference =  Math.ceil( (date - firstMondayMilliseconds) / 604800000 )

       if(!isLateFirstWeek && firstJanuarWeekday !== 1 || todayWeekday === 1){
        timeDifference += 1
       }

       return timeDifference
    }
    
    console.log('today weekday :', todayWeekday)
    console.log('used date :', new Date(date))
    console.log('first januar weekday : ', firstJanuarWeekday)
    console.log('first monday :', new Date(year, 0 , firstMonday))
    console.log('is late first week :', isLateFirstWeek)
    console.log('time diff : ', timeDifference)
    console.log('first januar weekday : ', firstJanuarWeekday)
}


// *********************
// FORM
// *********************


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
