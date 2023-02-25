function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColorBtn = document.querySelector("button.change-color");
const textSpanEl = document.querySelector("span.color");

changeColorBtn.addEventListener("click", bodyChangeColor);

function bodyChangeColor() {
  let curentColor = getRandomHexColor();
  textSpanEl.textContent = curentColor;
  document.body.style.backgroundColor = curentColor;
}