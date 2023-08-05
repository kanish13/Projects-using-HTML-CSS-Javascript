let colors=["aqua", "black", "blue", "fuchsia",  "grey", "green", "lime", "maroon", "navy", "olive", "purple", "red", "silver", "teal", "white", "yellow"];
document.querySelector(".btn").addEventListener("click",change_color);

function change_color(){
    let ran=Math.floor(Math.random()*colors.length);
    let choose=colors[ran];
    document.querySelector(".change").innerHTML=choose;
    if (choose==="black"){
    document.querySelector(".btn").style.color="white";
    document.querySelector(".btn").style.borderColor="white";
    document.querySelector(".container").style.color="black";
    document.querySelector(".container").style.backgroundColor="white";
    document.body.style.backgroundColor=choose;
    document.querySelector(".btn").style.backgroundColor=choose;}
    else{
        document.querySelector(".btn").style.color="black";
        document.querySelector(".btn").style.borderColor="black";
        document.querySelector(".container").style.color="white";
        document.querySelector(".container").style.backgroundColor="black";
        document.body.style.backgroundColor=choose;
    document.querySelector(".btn").style.backgroundColor=choose;}
    }
