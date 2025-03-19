const year = document.querySelector("#currentyear");
const lastmod = document.querySelector("#lastModified")
const today=new Date();

year.innerHTML = today.getFullYear();
lastmod.innerHTML=new Date(document.lastModified);