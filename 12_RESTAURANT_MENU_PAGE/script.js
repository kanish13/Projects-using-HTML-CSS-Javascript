let i1=document.querySelector(".all");
let i2=document.querySelector(".brk");
let i3=document.querySelector(".lun");
let i4=document.querySelector(".din");

i1.addEventListener("click",()=>{
 let a=document.querySelectorAll(".i")
    a.forEach(div=>{
    div.style.display="grid";
 })
 

})

i2.addEventListener("click",()=>{
    document.querySelector(".i1").style.display="grid";
    document.querySelector(".i2").style.display="grid";
    document.querySelector(".i3").style.display="grid";
    document.querySelector(".i4").style.display="none";
    document.querySelector(".i5").style.display="none";
    document.querySelector(".i6").style.display="none";
    document.querySelector(".i7").style.display="none";
    document.querySelector(".i8").style.display="none";
   })


   i3.addEventListener("click",()=>{
    document.querySelector(".i1").style.display="none";
    document.querySelector(".i2").style.display="none";
    document.querySelector(".i3").style.display="none";
    document.querySelector(".i4").style.display="grid";
    document.querySelector(".i5").style.display="grid";
    document.querySelector(".i6").style.display="none";
    document.querySelector(".i7").style.display="none";
    document.querySelector(".i8").style.display="none";
   
   })

   i4.addEventListener("click",()=>{
    document.querySelector(".i1").style.display="none";
    document.querySelector(".i2").style.display="none";
    document.querySelector(".i3").style.display="none";
    document.querySelector(".i4").style.display="none";
    document.querySelector(".i5").style.display="none";
    document.querySelector(".i6").style.display="grid";
    document.querySelector(".i7").style.display="grid";
    document.querySelector(".i8").style.display="grid";
   
   })


