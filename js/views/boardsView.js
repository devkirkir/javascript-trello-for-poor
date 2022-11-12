import renderComponents from "../utils/renderComponents.js";

const boardsView = (boardsList) => {
    if (boardsList.length == 0) return;

    const borderSkeleton = {
        tagName: "div",
        props: {
            class: "board",
        },
        childrens: [
            {
                tagName: "h3",
                props: {
                    class: "board-title",
                },
            },
            {
                tagName: "button",
                props: {
                    class: "board-delete-btn",
                },
            },
            {
                tagName: "div",
                props: {
                    class: "board-content",
                },
            },
            {
                tagName: "button",
                props: {
                    class: "board-button-new-task",
                    text: "Add New Task",
                },
            },
        ],
    };

    boardsList.forEach((item) => {
        let component = renderComponents(item, borderSkeleton, "board");
        document.querySelector(".boards-wrapper").append(component);
    });
};

export default boardsView;
