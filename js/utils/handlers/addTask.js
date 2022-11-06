import updateModel from "../updateModel.js";

import { getData } from "../../model.js";

const addTask = (elem) => {
    let boardId = elem.getAttribute("data-board"),
        board = document.getElementById(boardId);

    let { tasks } = getData();

    function generateId() {
        let ids = new Set();

        let curr = 1;

        tasks.forEach((item) => {
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
        id: generateId(),
        title: "Введите название задачи",
        tag: "Untagged",
        tagColor: "#bbb",
        inBoard: boardId,
    });
};

export default addTask;
