const countDownTitles = []

storageCountdownEvents.forEach(countdown =>{
    if(!countDownTitles.includes(countdown.title)) { countDownTitles.push(countdown.title)}
})

console.log('countdown titles', countDownTitles)

countDownTitles.forEach(title =>{
    document.querySelector('.custom-datalist').innerHTML += `<li>${title}</li>`
})