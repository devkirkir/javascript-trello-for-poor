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

        component.addEventListener("dragstart", (event) => {
            let dataAttr = event.target.getAttribute("data-task");

            event.dataTransfer.setData("data", dataAttr);
            event.dataTransfer.setData("id", item.id);
        });

        document.getElementById(item.inBoard).appendChild(component);
    });
};

export default tasksView;
