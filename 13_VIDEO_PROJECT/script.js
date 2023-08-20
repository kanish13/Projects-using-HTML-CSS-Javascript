let a=document.querySelector(".btn2")
let b=document.querySelector(".btn1")
let c=document.querySelector("video")
function m(){
    
    a.style.backgroundColor="white";
    b.style.background="transparent";
}
function n(){ 
    b.style.backgroundColor="white";
    a.style.background="transparent";
}

b.addEventListener("click",()=>{
c.play();
})
a.addEventListener("click",()=>{
    c.pause();
    })
    