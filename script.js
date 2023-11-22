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

  minValue.value = minPrice + " ₽";
  maxValue.value = maxPrice + " ₽";
}

const inputElements = document.querySelectorAll(".range");

inputElements.forEach((element) => {
  element.addEventListener("input", validateRange);
});

minValue.addEventListener("blur", validateValueRange);
maxValue.addEventListener("blur", validateValueRange);

function validateValueRange() {
  let minPrice = parseInt(minValue.value);
  let maxPrice = parseInt(maxValue.value);
  if (minPrice < 0 || minPrice > maxPrice || !Number(minPrice)) {
    minPrice = 0;
  } 
   minValue.value = minPrice + " ₽";
  
  if (maxPrice > 1000 || maxPrice < maxPrice || !Number(maxPrice)) {
    maxPrice = 1000;
  } 
  maxValue.value = maxPrice + " ₽";
  
  
  const minPercentage = ((minPrice) / 1000) * 100;
  const maxPercentage = ((maxPrice) / 1000) * 100;
  rangeFill.style.left = minPercentage + "%";
  rangeFill.style.width = maxPercentage - minPercentage + "%";
  inputElements[0].value = minPrice;
  inputElements[1].value = maxPrice;
}

validateRange();
validateValueRange();


