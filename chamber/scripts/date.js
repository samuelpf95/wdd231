const year = document.querySelector("#currentyear");
const lastmod = document.querySelector("#lastModified")
const today=new Date();

year.innerHTML = today.getFullYear();
lastmod.innerHTML=`Last modified: ${new Date(document.lastModified).toLocaleString()}`;