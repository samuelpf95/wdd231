document.addEventListener("DOMContentLoaded", () => {
    const donationRadios = document.querySelectorAll('input[name="donation"]');
    const otherInput = document.getElementById("quantityText");
  
    donationRadios.forEach(radio => {
      radio.addEventListener("change", () => {
        if (radio.value === "other" && radio.checked) {
          otherInput.disabled = false;
          otherInput.name = "donationAmount";
        } else {
          otherInput.disabled = true;
          otherInput.value = "";
          otherInput.removeAttribute("name");
        }
      });
    });
  
    const timestampInput = document.getElementById("timestamp");
    if (timestampInput) {
      timestampInput.value = new Date().toISOString();
    }
  });