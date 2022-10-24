const handleBoardContent = (boardsContent) => {
    let boardsContentsList = document.querySelectorAll(boardsContent);

    boardsContentsList.forEach((item) => {
        item.addEventListener("dragover", (event) => {
            event.preventDefault();
        });

        item.addEventListener("drop", (event) => {
            let dragElem = document.querySelector(
                `[data-task=${event.dataTransfer.getData("data")}]`
            );

            item.append(dragElem);
        });
    });
};

export default handleBoardContent;
