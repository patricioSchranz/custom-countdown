// *********************
// SET COUNTDOWN
// *********************

// => check if a title exists
inputTitle.addEventListener('input', ()=>{
    const regex  = new RegExp(inputTitle.value, "i")
    console.log(inputTitle.value.length)

   titleDatalistpoints.forEach(listpoint =>{
        if(listpoint.innerHTML.match(regex) && inputTitle.value.length > 0){
            listpoint.classList.add("match")
        }
        else{
            listpoint.classList.remove("match")
        }
   })


})








