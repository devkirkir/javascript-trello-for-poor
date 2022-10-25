import * as Model from "./model.js";

import handleBoardContent from "./utils/handleBoardContent.js";

import boardsView from "./views/boardsView.js";
import tasksView from "./views/tasksView.js";

window.addEventListener("DOMContentLoaded", () => {
    const { boards, tasks } = Model.getData();

    boardsView(boards);
    tasksView(tasks);
    handleBoardContent(".board-content");

    document.addEventListener("updateModel", (event) => {
        Model.setData(event.detail);
    });
});
