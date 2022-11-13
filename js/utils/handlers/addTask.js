import updateModel from "../updateModel.js";
import { getData } from "./../../model.js";
import { generateId } from "../utils.js";

const addTask = (elem, boardId) => {
    let board = document.querySelector(`[canvas-board-id="${boardId}"]`);

    let { tasks } = getData();

    updateModel(board, {
        type: "addTask",
        id: generateId(tasks),
        title: "Enter title...",
        tag: "Untagged",
        tagColor: "#bbbbbb",
        inBoard: boardId,
    });
};

export default addTask;
