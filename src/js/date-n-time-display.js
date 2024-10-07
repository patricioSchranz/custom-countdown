/**
 * DATE AND TIME DISPLAY
 * 
 * >> creates the date and time display of the set-countdown section
 */

// .......................
// VARIABLES

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


// .......................
// FUNCTIONS

// => get calendar weeks according to ISO 8601
function getCalendarWeek(year, date){

    // !>  janyuary = 0 , december = 11
    // !>  monday - saturday = 1 - 6 , sunday = 0
    const 
        firstJanuarWeekday = new Date(year, 0, 1).getDay()
        todayWeekday = date.getDay()

    const isLateFirstWeek = firstJanuarWeekday > 4 || firstJanuarWeekday === 0 
    ? true
    : false
        
    let 
        firstMonday = 0,
        firstMondayMilliseconds = 0,
        timeDifference = 0
    
    // => get the date of the first januar monday
    if(firstJanuarWeekday > 1){
        // ?> monday - sunday = 7 days + monday = 8 days
        firstMonday = 1 + (8 - firstJanuarWeekday)
    }
    else if(firstJanuarWeekday === 1){
        firstMonday = 1 
    }
    else if(firstJanuarWeekday === 0){
        firstMonday = 2
    }

    firstMondayMilliseconds = new Date(year, 0 , firstMonday).getTime()


    /**
     * => if today is before the first monday of the year and not in the first calender week ...
     * => else if today is before the first monday of the year but in the first calender week ...
     * => else if today is after the first monday of the year
     */
    
    if(date < firstMondayMilliseconds && isLateFirstWeek){
        return 52
    }
    else if(date < firstMondayMilliseconds){
        return 1
    }
    else{
        // !> 604800000 = 1 week in milliseconds
       timeDifference =  Math.ceil( (date - firstMondayMilliseconds) / 604800000 )

       // => if the first calender week is before the first monday of the year add another count
       if(!isLateFirstWeek && firstJanuarWeekday !== 1){
            timeDifference += 1
       }

       return timeDifference
    }
    
    console.log('today weekday :', todayWeekday)
    console.log('used date :', new Date(date))
    console.log('first monday :', new Date(year, 0 , firstMonday))
    console.log('is late first week :', isLateFirstWeek)
    console.log('time diff : ', timeDifference)
    console.log('first januar weekday : ', firstJanuarWeekday)
    console.log((date - firstMondayMilliseconds) / 604800000);
}

// .......................
// SET DISPLAY

displayCalenderWeek.innerHTML = `KW ${currentCalendarWeek}`
displayLocalString.innerHTML = todayLocalString

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