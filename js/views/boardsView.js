const boardsView = (boardsList) => {
    if (boardsList.length == 0) return;

    function renderBoard({ title, id }) {
        let div = document.createElement("div");
        div.classList.add("board");

        let h3 = document.createElement("h3");
        h3.classList.add("board-title");
        h3.textContent = title;

        let content = document.createElement("div");
        content.classList.add("board-content");
        content.setAttribute("id", `board${id}`);

        div.append(h3);
        div.append(content);

        return div;
    }

    boardsList.forEach((item) => {
        let component = renderBoard(item);

        document.querySelector(".boards-wrapper").append(component);
    });
};

export default boardsView;
