// 10.
// const heading2 = [...document.querySelectorAll("h2")]

// heading2.forEach((heading)=>{
//     heading.textContent = `Welcome to My Page`
// })

// 12

// function replaceContent(id) {
//   let replace = document.querySelector(`#${id}`);
//   console.log(replace)
//   replace.innerHTML = `<button>Click me</button>`;
// }
// replaceContent("container");

// Q.15

// function addImage (id, imageURL){
//    const container = document.querySelector(`#${id}`)
//    console.log(container)

//    const img = document.createElement("img")
//    img.src = `${imageURL}`
//    img.alt = "random image"
//    container.appendChild(img)

// }

// addImage("container","https://images.unsplash.com/photo-1737535614450-ce142f8e2953?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8" );

// 23
// const signup = document.querySelector("#signup");

// signup.addEventListener("submit", (e) => {
//   e.preventDefault();
//   console.log("got prevent default with the help of the preventDefault()")
// });

// Q.25
// const btns = [...document.querySelectorAll("button")];

// btns.forEach((btn) => {
//   btn.addEventListener("click", () => {
//     btn.style.backgroundColor = "yellow";
//   });
// });

// Q.41

// const btns = [...document.querySelectorAll("button")];

// btns.forEach((btn)=>{
//     btn.addEventListener("click", ()=>{
//         btn.classList.toggle("active")
//     })
// })

// 46

// function addTodo() {
//   const unorderedList = document.querySelector("ul");

//   const todo = document.createElement("li");

//   todo.textContent = "coding";

//   todo.setAttribute("id", "todo-list");
//   unorderedList.appendChild(todo);
// }

// addTodo();

// 47
// const input = document.querySelector("input");

// let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

// input.addEventListener("change", () => {
//   const emailValue = input.value;

//   if (regex.test(emailValue)) {
//     console.log("Email valid");
//   } else {
//     console.log("Email invalid");
//     let issue = document.createElement("small");
//     issue.innerText = "Enter proper email";

//     issue.style.color = "red";
//     document.body.appendChild(issue);
//   }
// });

// 48

// const container = document.querySelector(".container");
// const openModel = document.querySelector(".open");

// openModel.addEventListener("click", () => {
//   const newData = document.createElement("div");

//   const para = document.createElement("p");
//   para.innerText = "Hit on the close btn to close this model";
//   newData.appendChild(para);

//   const closeBtn = document.createElement("button");
//   closeBtn.innerText = "Close";
//   newData.appendChild(closeBtn);

//   closeBtn.addEventListener("click", () => {
//     container.removeChild(newData);
//   });

//   container.appendChild(newData);
// });

// 49

// const btn = document.querySelector("button");

// btn.addEventListener("click", () => {
//   if (document.body.classList.contains("light")) {
//     document.body.classList.remove("light");
//     document.body.classList.add(".dark");
//     btn.textContent = "Light Mode";
//   } else {
//     document.body.classList.remove("dark");
//     document.body.classList.add("light");
//     btn.textContent = "Dark Mode";
//   }
// });

// Q.50

// const selected = document.querySelector("select");

// selected.addEventListener("change", (e) => {
//   let currentValue = e.target.value;
//   console.log(currentValue);
// });
