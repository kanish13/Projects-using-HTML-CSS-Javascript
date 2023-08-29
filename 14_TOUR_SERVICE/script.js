const nav = document.querySelector("nav");
const back=document.querySelector(".back")
window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    nav.classList.add("scrolled");
back.classList.add("scroll");
  } else {
    nav.classList.remove("scrolled");
    back.classList.remove("scroll");
  }
});

const to=document.querySelector(".toggle");

to.addEventListener("click",()=>{
  document.querySelector("ul").classList.toggle("show");

})
