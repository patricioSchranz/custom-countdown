/**
 * COUNTDOWN EVENT CLASS
 * 
 * >> the blueprint for countdown event objects
 */

class CountdownEvent{
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
        return new Date(this.deadline).toLocaleString('de-AT',localStringOptions)
    }

    getEventLocalDateString(){
        return new Date(this.deadline).toLocaleDateString()
    }
}