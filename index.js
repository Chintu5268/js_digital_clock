function time(){
  let dt = new Date();
  var ht = dt.getHours();
  let mt = dt.getMinutes();
  let st = dt.getSeconds();
  let format = document.getElementById('session')

  document.getElementById("hrs").innerHTML=ht;
  document.getElementById("min").innerHTML=mt;
  document.getElementById("sec").innerHTML=st;
  
 
  if(ht>=12 || ht<10){
    hr= ht-12
    hrs.innerHTML="0"+hr;
  }
  // if(ht<10){
  //   hrs.innerHTML="0"+ht;
  // }
  if(mt<10){
    min.innerHTML="0"+mt;
  }
  if(st<10){
    sec.innerHTML="0"+st;
  }
  if(ht>=12){
    session.innerHTML="PM";
  }else{
    session.innerHTML="AM"
  }
  if(ht>=20 || ht<=7){
    document.getElementsByClassName("box4").innerHTML="Good night People";
    document.querySelectorAll("img").innerHTML="img/Group 5194.png";
    document.querySelectorAll(".name").innerHTML="GOOD NIGHT!!";
  }
  if(ht>=16 || ht<20){
    document.getElementsByClassName("box4").innerHTML="Good EVENING";
    document.querySelectorAll("img").innerHTML="img/lunch_image.png";
    document.querySelectorAll(".name").innerHTML="GOOD NIGHT!!";
  }

}
setInterval(time,1000)