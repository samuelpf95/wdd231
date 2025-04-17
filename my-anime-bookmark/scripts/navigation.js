document.addEventListener("DOMContentLoaded", () => {
    const hamburgerBtn = document.getElementById("hamburger");
    const navMenu = document.querySelector("nav");
  
    hamburgerBtn.addEventListener("click", () => {
      const isClosed = navMenu.classList.contains("closed");
  
      if (isClosed) {
        navMenu.classList.remove("closed");
        navMenu.classList.add("open");
      } else {
        navMenu.classList.remove("open");
        navMenu.classList.add("closed");
      }
  
      hamburgerBtn.classList.toggle("closedb");
    });
  });