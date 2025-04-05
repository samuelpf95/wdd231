const menu = document.querySelector("#ani");
const opened = document.querySelector("#open");


opened.addEventListener("click", () =>{
    menu.classList.toggle("closed");
    opened.classList.toggle("closedb")
});

