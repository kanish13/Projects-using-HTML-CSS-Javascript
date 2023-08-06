const h=document.querySelector(".hrs");
const m=document.querySelector(".min");
const s=document.querySelector(".sec");
function runClock(){
const time=new Date();
const sec=time.getSeconds()/60;
const min=(sec+time.getMinutes())/60;
const hrs=(min+time.getHours())/12;
h.style.setProperty("--rotate",hrs*360);
m.style.setProperty("--rotate",min*360);
s.style.setProperty("--rotate",sec*360);
}
setInterval(runClock,1000);
