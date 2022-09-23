
var countDownDate = new Date("Sep 23, 2022 14:20:00").getTime();
var x = setInterval(function() {
  var now = new Date().getTime();
  var distance = countDownDate - now;
  console.log(distance);
  //var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  console.log(minutes);
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="timer"
 var a =  document.getElementById("timer").innerHTML =   minutes +" :   " +seconds;
  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "EXPIRED";
  }
}, 1000);

//toggle side Panel
function toggleSidePanel(){
    var a = document.getElementById("side-panel");
    if(a.style.margin = "-400px"){
    a.style.margin = "0px";
    a.style.transition = '1s';
    }

    else{
     a.style.margin = "-400px";
    a.style.transition = '1s';
    }
}


