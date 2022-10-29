import renderComponent from "../renderComponents.js";
import updateModel from "../updateModel.js";

import { getData } from "../../model.js";

const addTask = (elem) => {
    // let task = document.querySelector(elem);
    let boardId = elem.getAttribute("data-board"),
        board = document.getElementById(boardId);

    let { tasks } = getData();

    function getRandomId() {
        let ids = new Set();

        let curr = 1;

        tasks.forEach((item, index) => {
            ids.add(item.id);
        });

        while (ids.has(curr)) {
            curr++;
        }

        if (!ids.has(curr)) {
            ids.add(curr);
        }

        return curr;
    }

    updateModel(board, {
        type: "addTask",
        id: getRandomId(),
        title: "Введите название задачи",
        tags: [],
        inBoard: boardId,
    });
};

export default addTask;
