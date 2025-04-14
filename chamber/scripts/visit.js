const visitMessage = document.getElementById("visit-message");
const visitButton = document.getElementById("visit-button");
visitButton.addEventListener("click", () => {
    document.getElementById("vm").style.display = "none";
  });
const lastVisitKey = "lastVisitDate";
const currentTime = Date.now();
const lastVisit = localStorage.getItem(lastVisitKey);
if (!lastVisit) {
    visitMessage.textContent = "Welcome! Let us know if you have any questions.";
} else {
    const lastVisitTime = parseInt(lastVisit, 10);
    const millisecondsInADay = 1000 * 60 * 60 * 24;
    const differenceInDays = Math.floor((currentTime - lastVisitTime) / millisecondsInADay);
    if (differenceInDays < 1) {
        visitMessage.textContent = "Back so soon! Awesome!";
    } else {
        const dayText = differenceInDays === 1 ? "day" : "days";
        visitMessage.textContent = `You last visited ${differenceInDays} ${dayText} ago.`;
    }
}
    localStorage.setItem(lastVisitKey, currentTime);