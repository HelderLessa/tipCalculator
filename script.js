"use strict";
const amount = document.querySelector("#amount");
const guests = document.querySelector("#guest");
const quality = document.querySelector("#quality");
const tipAmount = document.querySelector("#tip-amount");

// functions:
const calculate = () => {
  const tip = ((amount.value * quality.value) / guests.value).toFixed(2);
  amount.value = "";
  guests.value = "";
  quality.value = "";

  if (tip === "Nan") {
    tipAmount.innerHTML = "Tip $0 each";
    showTipAmount();
  } else {
    tipAmount.innerHTML = `Tip $${tip} each`;
    showTipAmount();
  }
};

const showTipAmount = () => {
  tipAmount.classList.add("show");

  setTimeout(() => {
    tipAmount.classList.remove("show");
  }, 3000);
};
