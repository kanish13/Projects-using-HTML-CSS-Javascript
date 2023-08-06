const btnStart=document.querySelector(".start");
const btnStop=document.querySelector(".stop");
const btnReset=document.querySelector(".reset");

let hrs=min=sec=ms=0;
let startTimer;

btnStart.addEventListener("click",()=>{
startTimer=setInterval(()=>{
    ms++;
    if(ms==100){
        sec++;
        ms=0;
    }
    if(sec==60){
        min++;
        sec=0;
    }
    if(min==60){
        hrs++;
        min=0;
    }
    updateDisplay();
});
});
btnStop.addEventListener("click",()=>{
clearInterval(startTimer)
});
btnReset.addEventListener("click",()=>{
hrs=min=sec=ms=0;
updateDisplay();
});

function updateDisplay(){
    phrs=hrs<10?"0"+hrs:hrs;
    pmin=min<10?"0"+min:min;
    psec=sec<10?"0"+sec:sec;
    pms=ms<10?"0"+ms:ms;
    document.querySelector(".hour").innerText=phrs;
    document.querySelector(".min").innerText=pmin;
    document.querySelector(".sec").innerText=psec;
    document.querySelector(".ms").innerText=pms;
}