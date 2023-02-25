const textInputEl = document.querySelector("#name-input");
const textOutputEl = document.querySelector("#name-output");

textInputEl.addEventListener("input", textInputOutput);

function textInputOutput() {
  if (textInputEl.value !== "") {
    textOutputEl.textContent = textInputEl.value;
  } else {
    textOutputEl.textContent = "Anonymous";
  }
}
