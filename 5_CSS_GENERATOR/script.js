document.addEventListener("DOMContentLoaded",()=>{
   var allBorder=document.getElementById('all');

   function allBorderUPDATE(){
    console.log("moving..");
   }

   allBorder.addEventListener("mousemove",allBorderUPDATE);
   
   allBorder.addEventListener("change",allBorderUPDATE);
});