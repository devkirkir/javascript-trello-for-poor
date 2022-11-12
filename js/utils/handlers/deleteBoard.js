import updateModel from "./../updateModel.js";

const deleteBoard = (target, boardId) => {
    let tasksIds = [];

    document
        .querySelector(`[canvas-board-id="${boardId}"]`)
        .childNodes.forEach((task) => {
            tasksIds.push(task.getAttribute("task-id"));
        });

    updateModel(target, {
        type: "deleteBoard",
        boardId,
        tasksIds,
    });
};

export default deleteBoard;
