document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let submitBtn = document.querySelector("button");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
  });

  function checkAvailability() {
    if (!email && !password) {
      submitBtn.disabled = true;
    } else {
      submitBtn.disabled = false;
    }
  }
  checkAvailability();

  form.querySelector("input").addEventListener("change", checkAvailability);
});
