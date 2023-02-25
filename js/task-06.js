const inputEl = document.querySelector("#validation-input");
inputEl.addEventListener("blur", inputValidation);

function inputValidation() {
  if (
    String(inputEl.value).length < inputEl.dataset.length &&
    String(inputEl.value).length >= 1
  ) {
    inputEl.classList.remove("valid");
    inputEl.classList.add("invalid");

  } else if (String(inputEl.value).length >= inputEl.dataset.length) {
    inputEl.classList.remove("invalid");
    inputEl.classList.add("valid");
    
  } else if (inputEl.value === "") {
    inputEl.classList.remove("valid");
    inputEl.classList.remove("invalid");
  }
}
