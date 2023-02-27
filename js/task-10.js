function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const amountEl = document.querySelector("input[type='number']");
const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");
const containerEl = document.querySelector("#boxes");

createBtn.addEventListener("click", createBoxes);
destroyBtn.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  amount = amountEl.value;
  let marcupTemplate = [];
  for (let i = 0; i < amount; i++) {
    const marcupEl = document.createElement("div");
    let calculation = 30 + i * 10;
    marcupEl.style.width = `${calculation}px`;
    marcupEl.style.height = `${calculation}px`;
    marcupEl.style.backgroundColor = getRandomHexColor();
    marcupTemplate.push(marcupEl);
  }
  containerEl.append(...marcupTemplate);
}

function destroyBoxes() {
  containerEl.innerHTML = "";
  amountEl.value = "";
}
