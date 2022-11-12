import updateModel from "../updateModel.js";

const dragBoardContent = (boardsContent) => {
    let boardsContentsList = document.querySelectorAll(boardsContent);

    boardsContentsList.forEach((item) => {
        item.addEventListener("dragover", (e) => {
            e.preventDefault();
            item.classList.add("board-content--hover");
        });

        item.addEventListener("dragleave", (e) => {
            e.preventDefault();
            item.classList.remove("board-content--hover");
        });

        item.addEventListener("drop", (e) => {
            item.classList.remove("board-content--hover");

            let dragElem = document.querySelector(
                `[task-id="${e.dataTransfer.getData("data")}"]`
            );

            let boardId = item.getAttribute("canvas-board-id"),
                taskId = e.dataTransfer.getData("id");

            updateModel(dragElem, {
                type: "dropTask",
                taskId,
                boardId,
            });
        });
    });
};

export default dragBoardContent;
