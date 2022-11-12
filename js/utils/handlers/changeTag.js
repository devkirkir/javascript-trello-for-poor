import updateModel from "../updateModel.js";
import * as Model from "./../../model.js";

const changeTag = (target, taskId) => {
    if (document.querySelector(".options")) return;

    const optionsContainer = document.createElement("div"),
        ul = document.createElement("ul"),
        task = target.parentNode;

    const tagsList = Model.getData().tags;

    optionsContainer.classList.add("options");
    optionsContainer.append(ul);

    tagsList.forEach((tag) => {
        const li = document.createElement("li");

        li.textContent = tag.name;
        li.style.background = tag.color;

        ul.append(li);

        li.addEventListener("click", (e) => {
            const newTag = e.target.textContent;

            updateModel(li, {
                type: "changeTag",
                newTag,
                newColor: tag.color,
                taskId,
            });

            optionsContainer.remove();
        });
    });

    document.addEventListener("click", (e) => {
        if (
            !e.target.classList.contains("options") &&
            !e.target.classList.contains("task-tag")
        ) {
            optionsContainer.remove();
        }
    });

    task.append(optionsContainer);
};

export default changeTag;
