const max = document.querySelector(".range-slider").dataset.max;
const delta = (138 * max) / 1000;

let minValue = document.getElementById("min-value");
let maxValue = document.getElementById("max-value");

const rangeFill = document.querySelector(".range-fill");

function validateRange() {
  inputElements[0].max = max;
  inputElements[1].max = max;
  inputElements[0].value = Math.min(
    inputElements[0].value,
    inputElements[1].value - delta
  );
  inputElements[1].value = Math.max(
    Number(inputElements[0].value) + delta,
    inputElements[1].value
  );

  let minPrice = parseInt(inputElements[0].value);
  let maxPrice = parseInt(inputElements[1].value);

  const minPercentage = (minPrice / max) * 100;
  const maxPercentage = (maxPrice / max) * 100;

  rangeFill.style.left = minPercentage + "%";
  rangeFill.style.width = maxPercentage - minPercentage + "%";

  minValue.value = minPrice + " ₽";
  maxValue.value = maxPrice + " ₽";
}

function validateInputs() {
  let minPrice = parseInt(minValue.value);
  let maxPrice = parseInt(maxValue.value);
  if (maxPrice - minPrice < delta) {
    maxPrice - delta >= 0
      ? (minPrice = maxPrice - delta)
      : (maxPrice = minPrice + delta);
  }

  if (minPrice < 0 || minPrice > maxPrice || !Number(minPrice)) {
    minPrice = 0;
  }
  minValue.value = minPrice + " ₽";

  if (maxPrice > max || !Number(maxPrice)) {
    maxPrice = max;
  }
  maxValue.value = maxPrice + " ₽";

  const minPercentage = (minPrice / max) * 100;
  const maxPercentage = (maxPrice / max) * 100;
  rangeFill.style.left = minPercentage + "%";
  rangeFill.style.width = maxPercentage - minPercentage + "%";
  inputElements[0].value = minPrice;
  inputElements[1].value = maxPrice;
}

const inputElements = document.querySelectorAll(".range");

inputElements.forEach((element) => {
  element.addEventListener("input", validateRange);
});

minValue.addEventListener("blur", validateInputs);
maxValue.addEventListener("blur", validateInputs);

minValue.addEventListener("keydown", function (e) {
  if (e.key == "Enter") {
    validateInputs();
  }
});

maxValue.addEventListener("keydown", function (e) {
  if (e.key == "Enter") {
    validateInputs();
  }
});

validateRange();
validateInputs();
