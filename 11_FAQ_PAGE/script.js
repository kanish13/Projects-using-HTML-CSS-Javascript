let butt1=document.querySelector(".sq1");
let butt2=document.querySelector(".sq2");
let butt3=document.querySelector(".sq3");
let q1=document.querySelector(".q1");
let q2=document.querySelector(".q2");
let q3=document.querySelector(".q3");
butt1.addEventListener("click",()=>{
    q1.classList.toggle("show"); 
    butt1.classList.toggle("ro");
})
butt2.addEventListener("click",()=>{
    q2.classList.toggle("show"); 
    butt2.classList.toggle("ro");
})
butt3.addEventListener("click",()=>{
    q3.classList.toggle("show"); 
    butt3.classList.toggle("ro");
})