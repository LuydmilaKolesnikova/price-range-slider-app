let minValue = document.getElementById("min-value");
let maxValue = document.getElementById("max-value");

const rangeFill = document.querySelector(".range-fill");

function validateRange() {
  inputElements[0].value = Math.min(inputElements[0].value, inputElements[1].value-138);
  inputElements[1].value = Math.max(Number(inputElements[0].value)+138, inputElements[1].value);
  

  let minPrice = parseInt(inputElements[0].value);
  let maxPrice = parseInt(inputElements[1].value);

  const minPercentage = ((minPrice) / 1000) * 100;
  const maxPercentage = ((maxPrice) / 1000) * 100;

  rangeFill.style.left = minPercentage + "%";
  rangeFill.style.width = maxPercentage - minPercentage + "%";

  minValue.value = minPrice;
  maxValue.value = maxPrice;
}

const inputElements = document.querySelectorAll(".range");

inputElements.forEach((element) => {
  element.addEventListener("input", validateRange);
});

minValue.addEventListener("input", validateValueRange);
maxValue.addEventListener("input", validateValueRange);

function validateValueRange() {
  let minPrice = Number(minValue.value)>=0 && Number(minValue.value)<Number(maxValue.value)-138 && parseInt(minValue.value);
  let maxPrice = parseInt(maxValue.value);
  const minPercentage = ((minPrice) / 1000) * 100;
  const maxPercentage = ((maxPrice) / 1000) * 100;
  rangeFill.style.left = minPercentage + "%";
  rangeFill.style.width = maxPercentage - minPercentage + "%";
  inputElements[0].value = minPrice;
  inputElements[1].value = maxPrice;
}

validateRange();
validateValueRange();

