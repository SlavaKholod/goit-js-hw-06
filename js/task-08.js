const submittForm = document.querySelector(".login-form");

const inputsForm = submittForm.elements;

submittForm.addEventListener("submit", formProcessor);

function formProcessor(event) {
  event.preventDefault();

  if (inputsForm["email"].value === "" || inputsForm["password"].value === "") {
    alert("Усі поля форми мають бути заповнені");
  } else {
    const userLogin = {
      email: inputsForm["email"].value,
      password: inputsForm["password"].value,
    };

    console.log(userLogin);
    submittForm.reset();
  }
}
