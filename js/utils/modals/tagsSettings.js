import updateModel from "../updateModel.js";
import { generateId } from "../utils.js";

const tagsSettings = (tags) => {
    const openBtn = document.querySelector(".edit-tags-btn"),
        closeBtn = document.querySelector(".tags-close"),
        addBtn = document.querySelector(".tag-add-btn"),
        content = document.querySelector(".tags");

    let container = document.querySelector(".tags-container");

    tags.forEach((tag) => {
        if (tag.name == "Untagged") return;

        const div = document.createElement("div"),
            input = document.createElement("input"),
            color = document.createElement("input"),
            delBtn = document.createElement("button");

        div.classList.add("tag");

        input.value = tag.name;
        input.setAttribute("type", "text");
        input.setAttribute("placeholder", "Type tag name");
        input.classList.add("tag-input-text");

        color.setAttribute("type", "color");
        color.value = tag.color;
        color.classList.add("tag-input-color");

        delBtn.textContent = "Delete";
        delBtn.classList.add("tag-delete-btn");

        div.append(input);
        div.append(color);
        div.append(delBtn);
        container.append(div);

        input.addEventListener("change", () => {
            updateModel(input, {
                type: "renameTag",
                tagId: tag.id,
                color: color.value,
                value: input.value,
            });
        });

        color.addEventListener("change", () => {
            updateModel(color, {
                type: "renameTag",
                tagId: tag.id,
                color: color.value,
                value: input.value,
            });
        });

        delBtn.addEventListener("click", () => {
            updateModel(delBtn, {
                type: "deleteTag",
                tagId: tag.id,
            });

            addBtn.removeEventListener("click", addTag);
            closeBtn.removeEventListener("click", toggleClass);
            openBtn.removeEventListener("click", toggleClass);
        });
    });

    function addTag() {
        updateModel(addBtn, {
            type: "addTag",
            tagId: generateId(tags),
            color: document.querySelector(".color-input").value,
            value: document.querySelector(".tag-input").value,
        });

        addBtn.removeEventListener("click", addTag);
        closeBtn.removeEventListener("click", toggleClass);
        openBtn.removeEventListener("click", toggleClass);
    }

    function toggleClass() {
        content.classList.toggle("tags-active");
    }

    openBtn.addEventListener("click", toggleClass);

    closeBtn.addEventListener("click", toggleClass);

    addBtn.addEventListener("click", addTag);
};

export default tagsSettings;
