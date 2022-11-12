import * as Model from "./model.js";

import dragBoardContent from "./utils/handlers/dragBoardContent.js";
import deleteTask from "./utils/handlers/deleteTask.js";

import boardsView from "./views/boardsView.js";
import tasksView from "./views/tasksView.js";
import addBoard from "./utils/handlers/addBoard.js";
import tagsSettings from "./utils/modals/tagsSettings.js";

window.addEventListener("DOMContentLoaded", () => {
    const { boards, tasks, tags } = Model.getData();

    boardsView(boards);
    tasksView(tasks);

    dragBoardContent(".board-content");
    deleteTask(".task-btn-delete");

    addBoard(".add-board-btn");
    tagsSettings(".edit-tags-btn", tags);

    document.addEventListener("updateModel", (e) => {
        Model.setData(e.detail);

        const { boards, tasks } = Model.getData();

        if (
            e.detail.type === "addTask" ||
            e.detail.type === "dropTask" ||
            e.detail.type === "deleteTask" ||
            e.detail.type === "changeTag" ||
            e.detail.type === "addBoard" ||
            e.detail.type === "deleteBoard"
        ) {
            let renderedTasks = document.querySelectorAll(".task"),
                renderedBoards = document.querySelectorAll(".board");

            renderedTasks.forEach((task) => {
                task.remove();
            });

            renderedBoards.forEach((board) => {
                board.remove();
            });

            boardsView(boards);
            tasksView(tasks);

            deleteTask(".task-btn-delete");
            dragBoardContent(".board-content");

            return;
        }
    });
});
