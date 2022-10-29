import renderComponents from "../utils/renderComponents.js";

const tasksView = (taskList) => {
    const taskSkeleton = {
        tagName: "div",
        props: {
            class: "task",
            draggable: true,
        },
        childrens: [
            {
                tagName: "button",
                props: {
                    class: "task-btn-delete",
                },
            },
            {
                tagName: "span",
                props: {
                    class: "task-tag",
                },
            },
            {
                tagName: "h4",
                props: {
                    class: "task-title",
                },
            },
        ],
    };

    taskList.forEach((item) => {
        let component = renderComponents(item, taskSkeleton, "task");

        component.addEventListener("dragstart", (e) => {
            let dataAttr = e.target.getAttribute("data-task");

            e.dataTransfer.setData("data", dataAttr);
            e.dataTransfer.setData("id", item.id);
        });

        document.getElementById(item.inBoard).appendChild(component);
    });
};

export default tasksView;
