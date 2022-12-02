function time(){
  let dt = new Date();
  let ht = dt.getHours();
  let mt = dt.getMinutes();
  let st = dt.getSeconds();
  let session = document.getElementById('session')

  document.getElementById("hrs").innerHTML=ht;
  document.getElementById("min").innerHTML=mt;
  document.getElementById("sec").innerHTML=st;
  
 
  if(ht>=12){
    hr= ht-12
    hrs.innerHTML=hr;
  }
  if(ht<10){
    hrs.innerHTML="0"+ht;
  }
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
    document.querySelectorAll(".box4").innerHTML="Good night People"
  }


}
setInterval(time,1000)