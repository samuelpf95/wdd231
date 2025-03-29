const menu = document.querySelector("#animate");
const opened = document.querySelector("#hamburger");
const closed = document.querySelector("#close");
const listed = document.querySelector("#listt");
const list = document.querySelector("#half")

opened.addEventListener("click", () =>{
    menu.classList.toggle("open");
    opened.classList.toggle("open");
});
list.addEventListener("click", () =>{
    listed.classList.toggle("list")
    listed.classList.toggle("grid")
});