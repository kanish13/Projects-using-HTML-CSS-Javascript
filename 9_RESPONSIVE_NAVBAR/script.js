const butt = document.querySelector("button");
const element = document.querySelector(".menu-after");

butt.addEventListener("click", () => {
    element.classList.toggle("hide");
});

