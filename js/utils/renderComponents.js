const renderComponent = (item, skeleton, type) => {
    const { tagName, props, childrens } = skeleton,
        { id, title, tags } = item;

    let node = document.createElement(tagName);

    if (type == "task") {
        node.setAttribute("data-task", `task${id}`);
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
                    break;
                case "board-content":
                    nodeChild.setAttribute("id", `board${id}`);
                    break;
                case "board-button-new-task":
                    nodeChild.setAttribute("data-board", `board${id}`);
                    break;
                case "task-tag":
                    if (tags.length == 0) return;

                    tags.forEach((tag) => {
                        nodeChild = document.createElement(tagName);
                        nodeChild.setAttribute(key, value);
                        nodeChild.textContent = tag;
                        node.append(nodeChild);
                    });
                    break;
                case "task-title":
                    nodeChild.textContent = title;
                    break;
                default:
                    break;
            }

            switch (key) {
                case "text":
                    nodeChild.textContent = value;
            }

            node.append(nodeChild);
        });
    });

    return node;
};

export default renderComponent;
