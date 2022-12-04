function time(){
  let dt = new Date();
  var ht = dt.getHours();
  let mt = dt.getMinutes();
  let st = dt.getSeconds();
  let format = document.getElementById('session')

  document.getElementById("hrs").innerHTML=ht;
  document.getElementById("min").innerHTML=mt;
  document.getElementById("sec").innerHTML=st;
  
 
  if(ht>=12){
    hr= ht-12
    hrs.innerHTML=ht;
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
  if(ht>=20 && ht<7){
  var change = 
  document.getElementById('dowork');
  change.innerHTML='Close Your Eyes and Go to Sleep!!';
    var goodnight = 
    document.getElementById('gn');
    goodnight.innerHTML='GOOD NIGHT!!';
     var img = 
    document.getElementsById('myimg');
    img.innerHTML=style.img="img/goodnight.png"
   
  }
  if(ht>=07 && ht<11){
    var change = 
    document.getElementById('dowork');
    change.innerHTML=`GRAB SOME HEALTHY BREKFAST!!`;
      var goodnight = 
      document.getElementById('gn');
      goodnight.innerHTML='GOOD MORNING!! WAKE UP!!';
       var img = 
      document.getElementsById('myimg2');
      img.innerHTML=style.img="img/goodnight.png"
  }
  if(ht>=11 && ht<15){
    var change = 
    document.getElementById('dowork');
    change.innerHTML=`LET'S HAVE SOME LUNCH !!`;
      var goodnight = 
      document.getElementById('gn');
      goodnight.innerHTML='GOOD AFTERNOON !! TAKE SOME SLEEP';
       var img = new Image();
       img.src= 'img/afternoon.png';
       document.getElementById('gn').appendChild(img);
  }

  if(ht>=16 && ht<20){
    var change = 
    document.getElementById('dowork');
    change.innerHTML='STOP YAWINING';
      var goodnight = 
      document.getElementById('gn');
      goodnight.innerHTML='GOOD EVENING!!';
       var img = 
      document.getElementsById('myimg3');
      img.innerHTML=style.img="img/goodnight.png"
  }



}
setInterval(time,1000)