import updateModel from "../updateModel.js";

const deleteTask = (selector) => {
    let deleteBtns = document.querySelectorAll(selector);

    deleteBtns.forEach((item) => {
        item.addEventListener("click", (event) => {
            let task = event.target.parentNode,
                taskId = task.getAttribute("data-task").slice(4);

            updateModel(item, {
                type: "deleteTask",
                taskId,
            });

            task.remove();
        });
    });
};

export default deleteTask;
