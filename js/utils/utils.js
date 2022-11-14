export function generateId(arr) {
    let ids = new Set();

    let curr = 1;

    arr.forEach((item) => {
        ids.add(item.id);
    });

    while (ids.has(curr)) {
        curr++;
    }

    if (!ids.has(curr)) {
        ids.add(curr);
    }

    return curr;
}

// export function createErr(elem) {
//     let div = document.createElement("div");

//     div.classList.add("err-message");
//     div.textContent = "Field is empty";

//     elem.parentNode.append(div);
// }

// export function error(elem) {
//     let errMessage = document.querySelector(".err-message");
//     console.log(elem);

//     elem.addEventListener("input", () => {
//         if (elem.value.length <= 0 && !errMessage) {
//             elem.classList.add("err");
//             createErr(elem);
//         } else {
//             if (errMessage) {
//                 errMessage.remove();
//                 elem.classList.remove("err");
//             }
//         }
//     });
// }
