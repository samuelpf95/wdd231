const year = document.querySelector("#currentyear");
const lastmod = document.querySelector("#lastModified")
const today=new Date();
const ts = document.querySelector("#timestamp")

year.innerHTML = today.getFullYear();
lastmod.innerHTML=`Last modified: ${new Date(document.lastModified).toLocaleString()}`;
ts.value=today.toDateString();
