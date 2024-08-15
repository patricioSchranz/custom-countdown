/**
 * COUNTDOWN EVENT CLASS
 * 
 * >> the blueprint for countdown event objects
 */

const ab = {
    weekday: 'long', 
    year: "numeric", 
    month: "2-digit", 
    day: "2-digit"
}


class CountdownEvent{

    #localStringOptions = {
        weekday: 'long', 
        year: "numeric", 
        month: "2-digit", 
        day: "2-digit"
    }

    #localDateStringOptions = {
        year: "numeric", 
        month: "2-digit", 
        day: "2-digit"
    }

    constructor(title, deadline, focus = false, creationDate = new Date().getTime()){
        this.title = title
        this.deadline = deadline
        
        this.focus = focus
        this.creationDate = creationDate
    }

    setFocus(){
        this.focus = true
    }

    getEventLocalString(){
        return new Date(this.deadline).toLocaleString('de-AT',this.#localStringOptions)
    }

    getEventLocalDateString(){
        return new Date(this.deadline).toLocaleDateString('de-AT',this.#localDateStringOptions)
    }
}