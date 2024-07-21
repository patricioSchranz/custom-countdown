// *********************
// SET COUNTDOWN
// *********************

// .............
// CALLBACKS
//..............

const setTitle = (selection, target)=>{
    target.value = selection.innerText
    titleList.classList.add('off') 
}

const setValidStyle = (element) =>{
    element.classList.add('valid')
    element.previousElementSibling.classList.add('valid')
}

// .................
// ELEMENT SETTINGS
//..................
inputDate.min = today.toISOString().slice(0,16)


// .............
// LISTENERS
// .............

// => check if a title exists
inputTitle.addEventListener('input', ()=>{
    const regex  = new RegExp(inputTitle.value, "i")

    titleDatalistpoints.forEach(listpoint =>{
            if(listpoint.innerHTML.match(regex) && inputTitle.value.length > 0){
                listpoint.classList.add("match")
            }
            else{
                listpoint.classList.remove("match")
            }
    })

})

// => set title from datalist
titleDatalistpoints.forEach(listpoint =>{
    listpoint.addEventListener('click', ()=> {
        setTitle(listpoint, inputTitle)
        inputDate.focus()
    }) 

    listpoint.addEventListener('keydown', (e)=>{
        if(e.key === "Enter"){ 
            setTitle(listpoint, inputTitle)
            inputDate.focus()
        }
    })
})

// => hide title list
inputDate.addEventListener('focus', ()=> titleList.classList.add('off') )
inputDate.addEventListener('focus', ()=> console.log(inputDate.value) )

// => show title list
inputTitle.addEventListener('focus', ()=> titleList.classList.remove('off') )

// => handle change of input fields
inputTitle.addEventListener('change', ()=>{
    if (inputTitle.value.length > 0){ setValidStyle(inputTitle) }
})

inputDate.addEventListener('change', ()=>{
    if (inputDate.value.length > 0){ setValidStyle(inputDate) }
})








