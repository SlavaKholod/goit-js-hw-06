const inputEmailEl = document.querySelector("input[type = 'email']");
const inputPassEl = document.querySelector("input[type = 'password']");
// const submittBtn = document.querySelector("button[type = 'submit']");
const submittForm = document.querySelector(".login-form");

submittForm.addEventListener("submit", formProcessor);

function formProcessor(event) {
  event.preventDefault();

  if (inputEmailEl.value === "" || inputPassEl.value === "") {
    alert("Усі поля форми мають бути заповнені");
  } else {
    const userLogin = {
      email: inputEmailEl.value,
      password: inputPassEl.value,
    };

    console.log(userLogin);
    submittForm.reset();
  }
}
