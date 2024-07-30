// *********************
// FAB BUTTONS
// *********************

if(storageCountdownEvents.length === 0){
    buttonCountdownList.setAttribute('data-hidden', 'true')
}
else{
    buttonCountdownList.removeAttribute('data-hidden')
}

faButtons.forEach(button =>{
    button.addEventListener('click', (e) =>{

        // !> currentTarget points to the element that attached the listener
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