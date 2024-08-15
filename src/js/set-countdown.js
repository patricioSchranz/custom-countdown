/**
 * SET COUNTDOWN
 * 
 * >> handled the form that creates a new countdown event
 */

// .............
// CALLBACKS

const setTitle = (selection, target)=>{
    target.value = selection.innerText
    titleList.classList.add('off') 
}

const setValidStyle = (element) =>{
    element.classList.add('valid')
    element.previousElementSibling.classList.add('valid')
}

const removeValidStyle = (element) =>{
    element.classList.remove('valid')
    element.previousElementSibling.classList.remove('valid')
}

const setFormState = ()=>{
    if(
        inputTitle.classList.contains('valid')
        && inputDate.classList.contains('valid')
    ){
        submitButton.classList.add('enabled')
    }
    else{
        submitButton.classList.remove('enabled')
    }
}

// .................
// ELEMENT SETTINGS

// => set date input min value
inputDate.min = today.toISOString().slice(0,16)

// => create custom datalist entrys
const countDownTitles = []

countdownEvents.forEach(countdown =>{
    if(!countDownTitles.includes(countdown.title)) { countDownTitles.push(countdown.title)}
})

countDownTitles.forEach(title =>{
    titleList.innerHTML += `<li>${title}</li>`
})

titleDatalistpoints = document.querySelectorAll('.custom-datalist li')


// .............
// LISTENERS

inputTitle.addEventListener('input', ()=>{
    
    // => handle title state
    if(inputTitle.value.length > 0){
        setValidStyle(inputTitle)
    }
    else{
        removeValidStyle(inputTitle)
    }

    // => set form state
    setFormState()

    // => show custom datalist
    titleList.classList.remove('off')

    // => show/hide titles from datalist
    const regex  = new RegExp('^' + inputTitle.value, "i")

    titleDatalistpoints.forEach(listpoint =>{
            if( 
                listpoint.innerHTML.match(regex)
                && (listpoint.innerHTML.length > inputTitle.value.length)
                && inputTitle.value.length > 0
            ){
                listpoint.classList.add("match")
                listpoint.setAttribute('tabindex', '0')
            }
            else{
                listpoint.classList.remove("match")
                listpoint.removeAttribute('tabindex')
            }
    })
})

titleDatalistpoints.forEach(listpoint =>{

    // => set title on click
    listpoint.addEventListener('click', ()=> {
        setTitle(listpoint, inputTitle)
        inputDate.focus()
    }) 

    // => set title on keydown
    listpoint.addEventListener('keydown', (e)=>{
        if(e.key === "Enter"){ 
            setTitle(listpoint, inputTitle)
        }
    })
})

// => hide custom datalist
inputDate.addEventListener('focus', ()=> titleList.classList.add('off') )

inputDate.addEventListener('input', ()=>{

    // => handle date state
    if (inputDate.value.length > 0){ setValidStyle(inputDate) }
    else { removeValidStyle(inputDate) }

    // => set form state
    setFormState()
})

setCountdownForm.addEventListener("submit", (e)=>{
    e.preventDefault()

    const newCountdownEvent = new CountdownEvent(inputTitle.value, new Date(inputDate.value).getTime())

    countdownEvents.push(newCountdownEvent)
    localStorage.setItem("countdownEvents", JSON.stringify(countdownEvents))

    setCountdownForm.submit()
})









