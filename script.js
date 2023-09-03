// To get the month and day we have to make two array of months and weekday 

// Weekdays 
const weekdays=["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]; 

// Months 
const Months=[
    "January", 
    "February", 
    "March", 
    "April", 
    "May", 
    "June", 
    "July", 
    "August", 
    "September", 
    "October", 
    "November", 
    "December", 
]


// Accessing the calendar elements 

const weekdayEl=document.querySelector("#day"); 
const dateEl=document.querySelector("#date"); 
const yearEl=document.querySelector("#year"); 
const monthEl=document.querySelector("#month"); 



// getting today's date using new Date() constructor 

const date=new Date(); 

// Setting the weekday

weekdayEl.innerHTML=weekdays[date.getDay()];

// Setting the date

dateEl.innerHTML=date.getDate();

// Setting the year 

yearEl.innerHTML=date.getFullYear();

// Setting the month

monthEl.innerHTML=Months[date.getMonth()];


