import { data } from "./model.js";
import handleBoardContent from "./utils/handleBoardContent.js";
import boardsView from "./views/boardsView.js";
import tasksView from "./views/tasksView.js";

window.addEventListener("DOMContentLoaded", () => {
    boardsView(data.extraBoards);
    tasksView(data.tasks);
    handleBoardContent(".board-content");
});
