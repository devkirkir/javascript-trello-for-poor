import renderComponent from "../renderComponents.js";
import updateModel from "../updateModel.js";

const addTask = (elem) => {
    // let task = document.querySelector(elem);
    let boardId = elem.getAttribute("data-board"),
        board = document.getElementById(boardId);

    updateModel(board, {
        type: "addTask",
        id: 5,
        title: "Введите название задачи",
        tags: [],
        inBoard: boardId,
    });
};

export default addTask;
