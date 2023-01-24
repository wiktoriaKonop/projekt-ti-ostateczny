

//basket 
const bought= document.querySelectorAll('.btn-offers-box');
let cartNumber=document.querySelector('.cart-number');
let number=1;

bought.forEach(item => {
    item.addEventListener('click', function(e){
        console.log(number);
        e.preventDefault();
        cartNumber.style.display='block';
        cartNumber.textContent=number;
        number++;
    });
});

// passengers
const passengerTable = document.querySelector('.passenger-extra');
const passengerBox=document.querySelector('.passenger-area');
const passengerClose=document.querySelector('.hero-main-box');

passengerBox.addEventListener('click', function(){
    passengerTable.classList.toggle('hidden');

});
passengerClose.addEventListener('click', function(){
    if(!passengerTable.classList.contains('hidden')) passengerTable.classList.add('.hidden');
}
)

document.addEventListener('keydown', function (e) {
  
    if (e.key === 'Escape' && !passengerTable.classList.contains('hidden')) passengerTable.classList.add('.hidden');
  });

/*
document.addEventListener('click', function(){
    passengerTable.classList.add('.hidden');

})
*/

// date=attributes
//  <input type="date" id="start" name="trip-start" value="2022-12-27" min="2022-12-27" max="2023-05-31"> 

const departure = document.querySelector('#start');
const arrival = document.querySelector('#finish');

let date = new Date();

let day = String(date.getDate());
let dayArrival = String(date.getDate()+3);
let month = String(date.getMonth()+1).padStart(2,'0');
let year = String(date.getFullYear());
//console.log(day,month,year);


departure.setAttribute('value', `${year}-${month}-${day}`);
departure.setAttribute('min', `${year}-${month}-${day}`);

arrival.setAttribute('value', `${year}-${month}-${dayArrival}`);
arrival.setAttribute('min', `${year}-${month}-${day}`);

  // date 
/*const countDownDate = new Date('Jan 01, 2023 00:00:00');

function addDays(days) {
    var result = new Date();
    result.setDate(result.getDate() + days);
    return result;
  }
  console.log(addDays(3));
*/

    const countDownDate= new Date(date.setDate(date.getDate()+3));
    console.log(countDownDate);

function setCountdown(countingDownTime) {

    let now = new Date();
    let timeRemaining = countingDownTime - now; // timeRemaining is time left in milliseconds!

    // Seconds
    let seconds = Math.floor(timeRemaining / 1000);
    // Minutes
    let minutes = Math.floor(timeRemaining / (1000*60));
    // Hours 
    let hours = Math.floor(timeRemaining / (1000*60*60));
    // Days
    let days = Math.floor(timeRemaining / (1000*60*60*24));


    let daysToDisplay = String(days).padStart(2,'0');

    // Subtract 24 hours for every day remaining from the hour count
    let hoursToDisplay = String(hours - (days * 24)).padStart(2, '0');
    // Subtract 60 minutes for every hour remaining from the minute count
    let minutesToDisplay = String(minutes - ( hours * 60 )).padStart(2, '0');
    // Subtract 60 seconds for every minute remaining from the seconds count
    let secondsToDisplay = String(seconds - ( minutes * 60 )).padStart(2, '0');

    // Print to DOM
    const daysEl = document.getElementById('days');
    const hoursEl = document.getElementById('hours');
    const minutesEl = document.getElementById('minutes');
    const secondsEl = document.getElementById('seconds');

    daysEl.textContent = daysToDisplay;
    hoursEl.textContent = hoursToDisplay;
    minutesEl.textContent = minutesToDisplay;
    secondsEl.textContent = secondsToDisplay;
}

setCountdown(countDownDate);

// Sets the countdown after every second:
setInterval(function() {
    setCountdown(countDownDate);
},1000);

// copyright - year

const yearEl = document.querySelector('.copyright-year');
yearEl.textContent = year;



/*

// stars
const starsFull = Array.from(document.querySelectorAll('.star-full'));
const starsEmpty = Array.from(document.querySelectorAll('.star-empty'));


// 1st version
starsFull.forEach(element => element.style.display = 'none');
starsEmpty.forEach(element => element.style.display = 'block');

starsEmpty.forEach((el, i)=>{
    el.addEventListener('click', function(e){
        e.preventDefault();
        if(el.style.display === 'block'){
            for (i;i>=0;i--){
                starsEmpty[i].style.display='none';
                starsFull[i].style.display='block';
            }}});
        } )
        
        starsFull.forEach((el, i)=>{
            el.addEventListener('click', function(e){
            e.preventDefault();
        if(el.style.display === 'block'){
            for (i;i>=0;i++){
                starsEmpty[i].style.display='block';
                starsFull[i].style.display='none';
                    }}});
        } )
      */

// const starsFull = Array.from(document.querySelectorAll('.star-full'));
// const starsEmpty = Array.from(document.querySelectorAll('.star-empty'));
// starsFull.forEach(element => element.style.display = 'none');
// starsEmpty.forEach((el, i)=>{
    // el.addEventListener('click', function(e){
        // e.preventDefault;
        // console.log(el)
    // })
// })

            


  



//2nd
/*
starsEmpty.forEach((element, i) => element.addEventListener('click', function(e){
    e.preventDefault();
    element.style.display='none';
    console.log(i);
    if(element.style.display === 'block'){
        for (i;i>=0;i--){
            element.style.display='none';
            starsNew[i].style.display='block';
    }
}));
*/
/*
console.log(starsEmpty);
function rating(stars, starsNew){
    console.log(stars,starsNew);
    stars.map( (star)=>{
        star.onlick = ()=>{
            let i=stars.indexOf(star);
            if (stars[i].style.display === 'block'){
                for (i;i>=0;i--){
                    stars[i].style.display='none';
                    starsNew[i].style.display='block';
                }
            } 

        };
    });
    starsNew.map( (starNew)=>{
        starNew.onlick = ()=>{
            let i=stars.indexOf(starNew);
            if (starsNew[i].style.display === 'block'){
                for (i;i>=0;i++){
                    starsNew[i+1].style.display='none';
                    stars[i].style.display='block';
                }
            } 

        };
    });
    
}

rating(Array.from(starsEmpty),Array.from(starsFull));
*/

/*
let checked = 0;

const starsFull = Array.from(document.querySelectorAll('.star-full'));
const starsEmpty = Array.from(document.querySelectorAll('.star-empty'));

console.log(starsEmpty)
console.log(starsFull)

// 1st version
starsFull.forEach(element => element.style.display = 'none');
starsEmpty.forEach(element => element.style.display = 'block');

starsEmpty.forEach((el, i)=>{
    el.addEventListener('click', function(e){

        checked = starsEmpty.indexOf(el) +  1
        console.log(checked)
        for(let i = 0; i < starsEmpty.length; i++){

            if(i > checked) starsEmpty[i].style.display = 'none'
            console.log(i)
            // else starsFull[i].style.display = 'block'

            console.log("23")
            // if()
        }
        
        } )
    })
        

starsFull.forEach((el, i)=>{
    el.addEventListener('click', function(e){

        checked = starsEmpty.indexOf(el)
        console.log(checked)
        for(let i = 0; i <= starsEmpty.length; i++){

            if(i > checked) starsEmpty[i].style.display = 'none'
            else starsFull[i].style.display = 'block'

            console.log("23")
            // if()
        }
        
        } )
    })

*/
        
