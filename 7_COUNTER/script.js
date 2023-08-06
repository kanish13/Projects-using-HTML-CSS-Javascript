function increase(){
document.querySelector(".increase").addEventListener("click",add);
function add(){
    let a=document.querySelector(".no").innerHTML;
    document.querySelector(".no").innerHTML=parseInt(a)+1
}
}
function decrease(){
     document.querySelector(".decrease").addEventListener("click",sub);
    function sub(){
        let x=document.querySelector(".no").innerHTML;
        if(parseInt(x)>0){
    document.querySelector(".no").innerHTML=parseInt(x)-1;}
    }
    
}
function reset(){
    document.querySelector(".reset").addEventListener("click",re);
    function re(){
        document.querySelector(".no").innerHTML=0;
    }
}
increase();
decrease();
reset();