function time() {
  let dt = new Date();
  var ht = dt.getHours();
  let mt = dt.getMinutes();
  let st = dt.getSeconds();
  let format = document.getElementById("session");

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

  if (ht >= 7 || ht < 11) {
    var change = document.getElementById("dowork");
    change.innerHTML = `GRAB SOME HEALTHY BREKFAST!!`;
    var goodmorning = document.getElementById("gn");
    goodmorning.innerHTML = "GOOD MORNING!! WAKE UP!!";
    var img=document.getElementById('myimg');
    img.src='img/morning.png';
  }
  if (ht >= 11 || ht < 15) {
    var chintu = document.getElementById("dowork");
    chintu.innerHTML = `LET'S HAVE SOME LUNCH !!`;
    var goodafternoon = document.getElementById("gn");
    goodafternoon.innerHTML = "GOOD AFTERNOON !! TAKE SOME SLEEP";
    var img1=document.getElementById('myimg');
   img1.src='img/afterlunch.png';
  }

  if (ht >= 15 || ht < 20) {
    var person = document.getElementById("dowork");
    person.innerHTML = "STOP YAWINING";
    var goodevening = document.getElementById("gn");
    goodevening.innerHTML = "GOOD EVENING!!  ";
   var img2=document.getElementById('myimg');
   img2.src='img/evening.png';
  }
  if (ht >= 20 || ht < 7) {
    var newchange = document.getElementById("dowork");
    newchange.innerHTML = "Close Your Eyes and Go to Sleep!!";
    var goodnight = document.getElementById("gn");
    goodnight.innerHTML = "GOOD NIGHT!!";
    var img3=document.getElementById('myimg');
    img3.src='img/goodnight.png';
  }

}
setInterval(time, 1000);


