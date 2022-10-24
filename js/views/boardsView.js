const boardsView = (boardsList) => {
    let boards = boardsList.boards;

    if (boards.length == 0) return;

    boards.forEach((item) => {
        let div = document.createElement("div");
        div.classList.add("board");

        let title = document.createElement("h3");
        title.classList.add("board-title");
        title.textContent = item.title;

        let content = document.createElement("div");
        content.classList.add("board-content");
        content.setAttribute("id", `board${item.id}`);

        div.append(title);
        div.append(content);
        document.querySelector(".wrapper").append(div);
    });
};

export default boardsView;
