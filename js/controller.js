import * as Model from "./model.js";

import dragBoardContent from "./utils/handlers/dragBoardContent.js";
import deleteTask from "./utils/handlers/deleteTask.js";

import boardsView from "./views/boardsView.js";
import tasksView from "./views/tasksView.js";

window.addEventListener("DOMContentLoaded", () => {
    const { boards, tasks } = Model.getData();

    boardsView(boards);
    tasksView(tasks);

    dragBoardContent(".board-content");
    deleteTask(".task-btn-delete");

    document.addEventListener("updateModel", (event) => {
        Model.setData(event.detail);
    });
});
