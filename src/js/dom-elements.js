// *********************
// DOM ELEMENTS
// *********************

const 
    sectionHome = document.querySelector('.header'),
    homeTitle = document.querySelector('.header_main-headline'),
    homeCountdown = document.querySelector('.header_countdown'),
    sectionSetCountdown = document.querySelector('.set-countdown'),
    sectionCountdownList = document.querySelector('.countdowns'),
    allSections = document.querySelectorAll('[data-hidden]'),
    faButtons = document.querySelectorAll('.fabs_button'),
    buttonCountdownList = document.querySelector('[data-target="countdowns"]'),

    displayCalenderWeek = document.querySelector('.set-countdown_current-date-display_kw'),
    displayLocalString = document.querySelector('.set-countdown_current-date-display_local-string'),
    displayHours = document.querySelector('.set-countdown_current-time-display_hours'),
    displayMinutes = document.querySelector('.set-countdown_current-time-display_minutes'),
    displaySeconds = document.querySelector('.set-countdown_current-time-display_seconds'),

    setCountdownForm = document.querySelector('#set-countdown-form'),
    inputTitle = document.querySelector('#countdown-title'),
    inputDate = document.querySelector('#countdown-date'),
    titleList = document.querySelector('.custom-datalist'),

    submitButton = document.querySelector('.set-countdown_form_button')