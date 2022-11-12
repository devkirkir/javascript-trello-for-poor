import updateModel from "../updateModel.js";

const changeTaskTitle = (target, taskId) => {
    let textarea = document.createElement("textarea");

    textarea.classList.add("task-textarea");
    textarea.value = target.textContent;

    target.style.display = "none";

    target.parentNode.append(textarea);
    textarea.focus();

    textarea.addEventListener("input", () => {
        target.textContent = textarea.value;

        updateModel(textarea, {
            type: "changeTitle",
            title: textarea.value,
            taskId,
        });
    });

    // input.addEventListener("keydown", (e) => {
    //     if (e.keyCode == 13) {
    //         target.style.display = "inline-block";
    //         input.remove();
    //     }
    // });

    textarea.addEventListener("focusout", () => {
        target.style.display = "inline-block";
        textarea.remove();
    });
};

export default changeTaskTitle;
