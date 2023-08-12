const butt = document.querySelector("button");
const element = document.querySelector(".menu-after");
butt.addEventListener("click", () => {
    element.classList.toggle("hide");
});
const rotateButton = document.querySelector("button");
let r = false;
rotateButton.addEventListener("click", () => {
    r = !r;
    rotateButton.classList.toggle("rotated", r);
});


