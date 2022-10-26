const renderTask = (skeleton, item) => {
    const { tagName, props, childrens } = skeleton,
        { id, title, tags } = item;

    let node = document.createElement(tagName);
    node.setAttribute("data-task", `task${id}`);

    Object.entries(props).forEach(([key, value]) => {
        node.setAttribute(key, value);
    });

    childrens.forEach((child) => {
        let { tagName, props } = child;
        let nodeChild = document.createElement(tagName);

        Object.entries(props).forEach(([key, value]) => {
            nodeChild.setAttribute(key, value);

            switch (value) {
                case "task-tag":
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

            node.append(nodeChild);
        });
    });

    return node;
};

export default renderTask;
