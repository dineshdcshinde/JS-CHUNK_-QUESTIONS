// login Form

const LoginForm = document.querySelector("#loginForm");

const savedUsername = "abc@gmail.com";
const savedPassword = "123abc";

LoginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const username = document.querySelector("#username").value;
  const password = document.querySelector("#password").value;

  if (username === savedUsername && password === savedPassword) {
    const newDocument = document.createElement("div");
    const para = document.createElement("p");
    para.textContent = `Welcome Back user 😎`;
    newDocument.appendChild(para);

    newDocument.classList.add("success");
    document.querySelector(".wrapper").style.display = "none";

    document.body.appendChild(newDocument);
    const closeBtn = document.createElement("button");

    closeBtn.textContent = "Close";
    closeBtn.addEventListener("click", () => {
      newDocument.remove();
      document.querySelector(".wrapper").style.display = "block";
    });
    newDocument.appendChild(closeBtn);
  } else {
    const message = document.createElement("storng");
    message.innerText = "Please Enter correct password and username";

    message.style.color = "red";
    document.querySelector("#password").parentNode.appendChild(message);
  }
});
