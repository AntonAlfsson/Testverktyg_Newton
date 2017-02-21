
$(start);


function start(){
    console.log('Hello and welcome!');
}

function checked(id){ // funktion för att kontrollera checkbox
if($("#" + id).is(':checked'))
    return true;
else
    return false;
}

// Hittade lite kod för en timer, kanske något man kan använda sig utav senare.
// Set the date we're counting down to
var countDownDate = new Date("Feb 20, 2017 17:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get todays date and time
  var now = new Date().getTime();

  // Find the distance between now an the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("demo").innerHTML = hours + "h "
  + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "Tiden är slut!";
  }
}, 1000);
