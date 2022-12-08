function time() {
  let dt = new Date();
  var ht = dt.getHours();
  let mt = dt.getMinutes();
  let st = dt.getSeconds();
  let format = "AM"

  console.log(ht, mt, st)
  document.getElementById("hrs").innerHTML = ht;
  document.getElementById("min").innerHTML = mt;
  document.getElementById("sec").innerHTML = st;

  if (ht >= 12) {
    hr = ht - 12;
    hrs.innerHTML = hr;
  }
  if (hr < 10) {
    hrs.innerHTML = "0" + hr;
  }
  if (mt < 10) {
    min.innerHTML = "0" + mt;
  }
  if (st < 10) {
    sec.innerHTML = "0" + st;
  }
  if (ht >= 12) {
    session.innerHTML = "PM";
  } else {
    session.innerHTML = "AM";
  }

  if (ht >= 05 && ht < 11) {
    var change = document.getElementById("behave");
    change.innerHTML = `GRAB SOME HEALTHY BREKFAST!!`;
    var goodnight = document.getElementById("vibes");
    goodnight.innerHTML = "GOOD MORNING!! WAKE UP!!";
    var img=document.getElementById('images');
    img.src='img/morning.png';
  }
   if (ht >= 11 && ht <15 ) {
    var change = document.getElementById("behave");
    change.innerHTML = `GOOD AFTERNOON !! TAKE SOME SLEEP`;
    var goodnight = document.getElementById("vibes");
    goodnight.innerHTML = " LET'S HAVE SOME LUNCH !";
    var img=document.getElementById('images');
    img.src='img/afterlunch.png';
  }
 if (ht >= 15 && ht < 20) {
    var change = document.getElementById("behave");
    change.innerHTML = `GOOD EVENING!!`;
    var goodnight = document.getElementById("vibes");
    goodnight.innerHTML = "STOP YAWINING";
    var img=document.getElementById('images');
    img.src='img/evening.png';
  }
 if (ht >= 20 && ht < 24 ) {
    var change = document.getElementById("behave");
    change.innerHTML = `GOOD NIGHT!!`;
    var goodnight = document.getElementById("vibes");
    goodnight.innerHTML = "Close Your Eyes and Go to Sleep!!";
    var img=document.getElementById('images');
    img.src='img/goodnight.png';
  }
}
setInterval(time, 1000);

function changeEvent(){
  let dt = new Date();
  var ht = dt.getHours();
  let mt = dt.getMinutes();
  let st = dt.getSeconds();
  let format = "AM"

// console.log(ht, mt, st)

  document.getElementById("hrs").innerHTML = ht;
  document.getElementById("min").innerHTML = mt;
  document.getElementById("sec").innerHTML = st;
  document.getElementById('optn').innerHTML=wakeup;

 

   



}
setTimeout(changeEvent,10000)
