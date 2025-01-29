// const circle = document.querySelector(".circle");
// const wrapper = document.querySelector(".wrapper");

// window.addEventListener("mousemove", (dets) => {
//   let x = dets.clientX;
//   let y = dets.clientY;

//   circle.style.transform = `translate3d(${x + 9}px, ${y + 9}px, 0)`;
// });

//  q.4
// let redInput = document.querySelector("#red");
// let blueInput = document.querySelector("#blue");
// let greenInput = document.querySelector("#green");
// let form = document.querySelector("form");

// let redValue = 0;
// let blueValue = 0;
// let greenValue = 0;

// let color = {};

// form.addEventListener("submit", (e) => {
//   e.preventDefault();

//   color.red = redInput.value;
//   color.green = greenInput.value;
//   color.blue = blueInput.value;

//   const rectangle = document.querySelector(".rectangle");
//   rectangle.style.backgroundColor = `rgba(${color.red}, ${color.green}, ${color.blue}, 1)`;
// });

// Q.5

// document.querySelector(".tabs").addEventListener("click", (e) => {
//   const tab = e.target.closest(".tab");
//   if (!tab) return;

//   // remove all the active classes
//   document.querySelectorAll(".tab, .tab-content").forEach((ele) => {
//     ele.classList.remove("active");
//   });

//   tab.classList.add("active");

//   const targetId = tab.dataset.target;
//   document.querySelector(`#${targetId}`).classList.add("active");
// });
