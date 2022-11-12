import addTask from "./handlers/addTask.js";
import changeBoardTitle from "./handlers/changeBoardTitle.js";
import changeTag from "./handlers/changeTag.js";
import changeTaskTitle from "./handlers/changeTaskTitle.js";
import deleteBoard from "./handlers/deleteBoard.js";

const renderComponent = (item, skeleton, type) => {
    const { tagName, props, childrens } = skeleton,
        { id, title, tag, tagColor } = item;

    let node = document.createElement(tagName);

    if (type == "task") {
        node.setAttribute("task-id", `${id}`);
    }

    if (type == "board") {
        node.setAttribute("board-id", id);
    }

    Object.entries(props).forEach(([key, value]) => {
        node.setAttribute(key, value);
    });

    childrens.forEach((child) => {
        let { tagName, props } = child;
        let nodeChild = document.createElement(tagName);

        Object.entries(props).forEach(([key, value]) => {
            if (key !== "text") nodeChild.setAttribute(key, value);

            switch (value) {
                case "board-title":
                    nodeChild.textContent = title;
                    nodeChild.addEventListener("click", (e) =>
                        changeBoardTitle(e.target, id)
                    );
                    break;
                case "board-delete-btn":
                    nodeChild.addEventListener("click", (e) =>
                        deleteBoard(e.target, id)
                    );
                    break;
                case "board-content":
                    nodeChild.setAttribute("canvas-board-id", `${id}`);
                    break;
                case "board-button-new-task":
                    nodeChild.setAttribute("btn-board-id", `${id}`);
                    nodeChild.addEventListener("click", (e) =>
                        addTask(e.target, id)
                    );
                    break;
                case "task-tag":
                    nodeChild.textContent = tag;
                    nodeChild.style.background = tagColor;
                    nodeChild.addEventListener("click", (e) =>
                        changeTag(e.target, id)
                    );
                    break;
                case "task-title":
                    nodeChild.textContent = title;
                    nodeChild.addEventListener("click", (e) =>
                        changeTaskTitle(e.target, id)
                    );
                    break;
                default:
                    break;
            }

            switch (key) {
                case "text":
                    nodeChild.textContent = value;
                    break;
            }

            node.append(nodeChild);
        });
    });
    return node;
};

export default renderComponent;
