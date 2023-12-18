$(document).ready(function () {

     /*********************************counterUp****************************/
     $('.counter').counterUp({
         delay: 10,
         time: 1000
     });
     })
     
/*********************************tooltip****************************/
     $(function () {
      $('[data-toggle="tooltip"]').tooltip()
    })

    
 /*********************************countdown****************************/
// Set the date we are counting down to
var countdownDate = new Date("september 22, 2022 19:50:00").getTime();

var x = setInterval(function(){

    // Get today's date and time
    var nowDT = new Date().getTime();

    // Find the distance between now and the countdown date
    var distance = countdownDate - nowDT;

    // Time calculations for days, hours, munutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000* 60)) / 1000);

    // Output the result
    document.querySelector(".days h3").innerHTML = days;
    document.querySelector(".hours h3").innerHTML = hours;
    document.querySelector(".minutes h3").innerHTML = minutes;
    document.querySelector(".seconds h3").innerHTML = seconds;

    // If the countdown is over, write some text
    if(distance < 0){
        clearInterval(x);
        document.querySelector(".countdown-timer").style.display = 'none';
        document.querySelector(".cs-content h1").innerHTML = 'Welcome';
    }

}, 1000);