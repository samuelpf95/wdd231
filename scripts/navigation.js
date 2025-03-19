const menu = document.querySelector("#menu");
const opened = document.querySelector("#open");
const closed = document.querySelector("#close");

opened.addEventListener("click", () =>{
    menu.classList.remove("closed");
    menu.classList.add("opened");
});

closed.addEventListener("click", () =>{
    menu.classList.add("closed");
    menu.classList.remove("opened");
});