import updateModel from "../updateModel.js";

const changeTaskTitle = (target) => {
    let input = document.createElement("input"),
        taskId = target.parentNode.getAttribute("data-task").slice(4);

    input.classList.add("task-input");
    input.value = target.textContent;

    target.style.display = "none";

    target.parentNode.append(input);
    input.focus();

    input.addEventListener("input", () => {
        target.textContent = input.value;

        updateModel(input, {
            type: "changeTitle",
            title: input.value,
            taskId,
        });
    });

    // input.addEventListener("keydown", (e) => {
    //     if (e.keyCode == 13) {
    //         target.style.display = "inline-block";
    //         input.remove();
    //     }
    // });

    input.addEventListener("focusout", () => {
        target.style.display = "inline-block";
        input.remove();
    });
};

export default changeTaskTitle;
