import updateModel from "./updateModel.js";

const dragBoardContent = (boardsContent) => {
    let boardsContentsList = document.querySelectorAll(boardsContent);

    boardsContentsList.forEach((item) => {
        item.addEventListener("dragover", (event) => {
            event.preventDefault();
            item.classList.add("board-content--hover");
        });

        item.addEventListener("dragleave", (event) => {
            event.preventDefault();
            item.classList.remove("board-content--hover");
        });

        item.addEventListener("drop", (event) => {
            item.classList.remove("board-content--hover");

            let dragElem = document.querySelector(
                `[data-task=${event.dataTransfer.getData("data")}]`
            );

            let boardId = item.getAttribute("id"),
                taskId = event.dataTransfer.getData("id");

            item.append(dragElem);

            updateModel(dragElem, {
                type: "dropTask",
                taskId,
                boardId,
            });
        });
    });
};

export default dragBoardContent;
