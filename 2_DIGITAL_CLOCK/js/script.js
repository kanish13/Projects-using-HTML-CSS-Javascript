const clock=document.querySelector(".clock");
function runClock(){
    var time=new Date();
  
    var h=time.getHours();
    var m=time.getMinutes();
    var s=time.getSeconds();
    var txt="AM";
    if(h>12){
        h=h-12;
        txt="PM";
    }
    else if(h==0){
        h=12;
        txt="AM";
    }
    if (h<10){
h="0"+h;
    }
if (m<10){
    m="0"+m;
        }
if (s<10){
    s="0"+s;
        }
clock.innerHTML=`${h}:${m}:${s}:${txt}`;
}
setInterval(runClock,1000);