const inputTask = document.querySelector("input");
const addBtn = document.querySelector(".add-btn");
const ul = document.querySelector("ul");

addBtn.addEventListener("click", () => {
  const li = document.createElement("li");
  li.innerText = inputTask.value;

  const check = document.createElement("input");
  check.type = "checkbox";
  check.classList.add("checkbox");
  li.appendChild(check);












  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "Delete";
  deleteBtn.classList.add("btn-delete");
  li.appendChild(deleteBtn);

  ul.appendChild(li);
});

