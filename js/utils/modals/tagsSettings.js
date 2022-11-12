import updateModel from "../updateModel.js";

const tagsSettings = (tagsSettingsSelector, tags) => {
    const openBtn = document.querySelector(tagsSettingsSelector),
        content = document.querySelector(".tags");

    let container = document.querySelector(".tags-container");

    tags.forEach((item) => {
        const input = document.createElement("input"),
            color = document.createElement("input");

        input.value = item.name;
        input.setAttribute("type", "text");
        input.setAttribute("placeholder", "Type tag name");
        input.classList.add("tag-input-text");

        color.setAttribute("type", "color");
        color.value = item.color;
        color.classList.add("tag-input-color");

        container.append(input);
        container.append(color);

        input.addEventListener("change", () => {
            updateModel(input, {
                type: "renameTag",
                tag: item.name,
                color: color.value,
                value: input.value,
            });

            item.name = input.value;
        });

        color.addEventListener("change", () => {
            updateModel(color, {
                type: "renameTag",
                tag: item.name,
                color: color.value,
                value: input.value,
            });

            item.name = input.value;
        });
    });

    openBtn.addEventListener("click", () => {
        content.classList.toggle("tags-active");
    });
};

export default tagsSettings;
