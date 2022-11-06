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

    document.addEventListener("updateModel", (e) => {
        Model.setData(e.detail);

        const { boards, tasks } = Model.getData();

        if (
            e.detail.type === "dropTask" ||
            e.detail.type === "deleteTask" ||
            e.detail.type === "changeTag" ||
            e.detail.type === "addTask"
        ) {
            let renderedTasks = document.querySelectorAll(".task");

            renderedTasks.forEach((task) => {
                task.remove();
            });

            tasksView(tasks);

            deleteTask(".task-btn-delete");

            return;
        }
    });
});
