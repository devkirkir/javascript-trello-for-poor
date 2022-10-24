// const column1 = document.getElementById("first"),
//     column2 = document.getElementById("second");

// const box = document.querySelector(".box");
// const box2 = document.querySelector(".box2");

// box.addEventListener("dragstart", (event) => {
//     event.dataTransfer.setData("id", event.target.id);
// });

// box2.addEventListener("dragstart", (event) => {
//     event.dataTransfer.setData("id", event.target.id);
// });

// column2.addEventListener("dragover", (event) => {
//     event.preventDefault();
// });
// column1.addEventListener("dragover", (event) => {
//     event.preventDefault();
// });

// box.addEventListener("dragend", (event) => {
//     console.log("end", event.dataTransfer);
// });

// box2.addEventListener("dragend", (event) => {
//     console.log("end", event.dataTransfer);
// });

// column2.addEventListener("drop", (event) => {
//     let dragElem = event.dataTransfer.getData("id");
//     column2.appendChild(document.getElementById(dragElem));
//     event.dataTransfer.clearData();
// });

// column1.addEventListener("drop", (event) => {
//     let dragElem = event.dataTransfer.getData("id");
//     column1.appendChild(document.getElementById(dragElem));
//     event.dataTransfer.clearData();
// });

import { data } from "./js/model";

console.log(data);
