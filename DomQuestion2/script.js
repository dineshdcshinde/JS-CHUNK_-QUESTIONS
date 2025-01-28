const formSubmit = document.querySelector("#formSubmit");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const submitBtn = document.querySelector("#submitbtn");

const formData = {};

formSubmit.addEventListener("submit", (e) => {
  e.preventDefault();

  let nameValue = nameInput.value.trim();
  let emailValue = emailInput.value.trim();

  formData.name = nameValue;
  formData.email = emailValue;
  console.log(formData);

  console.log("form submit");
});
