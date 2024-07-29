// *********************
// DOM ELEMENTS
// *********************

const 
    sectionHome = document.querySelector('.header'),
    sectionSetCountdown = document.querySelector('.set-countdown'),
    sectionCountdownList = document.querySelector('.countdowns'),
    allSections = document.querySelectorAll('[data-hidden]'),
    faButtons = document.querySelectorAll('.fabs_button'),

    displayCalenderWeek = document.querySelector('.set-countdown_current-date-display_kw'),
    displayLocalString = document.querySelector('.set-countdown_current-date-display_local-string'),
    displayHours = document.querySelector('.set-countdown_current-time-display_hours'),
    displayMinutes = document.querySelector('.set-countdown_current-time-display_minutes'),
    displaySeconds = document.querySelector('.set-countdown_current-time-display_seconds'),

    inputTitle = document.querySelector('#countdown-title'),
    inputDate = document.querySelector('#countdown-date'),
    titleList = document.querySelector('.custom-datalist'),
    titleDatalistpoints = document.querySelectorAll('.custom-datalist li'),

    submitButton = document.querySelector('.set-countdown_form_button')