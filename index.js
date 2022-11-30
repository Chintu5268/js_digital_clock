function time(){
  let dt = new Date();
  let ht = dt.getHours();
  let mt = dt.getMinutes();
  let st = dt.getSeconds();
  let session = document.getElementById('session')

  document.getElementById("hrs").innerHTML=ht;
  document.getElementById("min").innerHTML=mt;
  document.getElementById("sec").innerHTML=st;
  
  if(ht>12){
    session.innerHTML="PM";
  }else{
    session.innerHTML="AM"
  }
  
  if(ht && ht<7){
    document.getElementsByClassName('sun').innerHTML=('img/Group 5194.png')
  }

}
setInterval(time,1000)