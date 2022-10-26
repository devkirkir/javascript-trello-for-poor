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
                tagName: "div",
                props: {
                    class: "board-content",
                },
            },
            {
                tagName: "button",
                props: {
                    class: "button",
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
