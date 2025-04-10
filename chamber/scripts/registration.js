  const dialog = document.querySelector("#infoDialog");
  const msg = document.querySelector("#dialogMsg");
  const button0 = document.querySelector("#Learn0");
  const button1 = document.querySelector("#Learn1");
  const button2 = document.querySelector("#Learn2");
  const button3 = document.querySelector("#Learn3");
  const closeBtn = document.querySelector("#closeDialog");

  
    button0.addEventListener("click", () => {
      msg.textContent = 'NP Membership is for non profit organizations and there is no fee';
      dialog.showModal();
    });
    button1.addEventListener("click", () => {
        msg.textContent = 'Bronze Membership:  50 usd, access to special events';
        dialog.showModal();
    });
    button2.addEventListener("click", () => {
        msg.textContent = 'Silver Membership 100 usd, access to special events and training';
        dialog.showModal();
    });
    button3.addEventListener("click", () => {
        msg.textContent = 'Gold Membership 200 usd, access to special events, training, advertising and event discounts';
        dialog.showModal();
    });
  closeBtn.addEventListener("click", () => {
    dialog.close();
  });
  const params = new URLSearchParams(window.location.search);
  const results = document.querySelector("#results");

  for (const key in fields) {
    const value = params.get(key) || "Not provided";
    const p = document.createElement("p");
    p.innerHTML = `<strong>${fields[key]}:</strong> ${value}`;
    results.appendChild(p);
  }