"use strict";

let data = {
    tasksCount: 2,
    boardsCount: 3,
    boards: [
        {
            id: 1,
            title: "To Do",
        },
        {
            id: 2,
            title: "Doing",
        },
        {
            id: 3,
            title: "Done",
        },
    ],
    tasks: [
        {
            id: 1,
            title: "Прогресс",
            tags: ["Привет", "Как дела"],
            inBoard: "board2",
        },
        {
            id: 2,
            title: "В списке",
            tags: ["hi"],
            inBoard: "board1",
        },
    ],
};

const getData = () => {
    return { ...data };
};

const setData = (newData) => {
    switch (newData.type) {
        case "dropTask":
            Object.values(data.tasks).map((item) => {
                if (item.id == newData.taskId) {
                    item.inBoard = newData.boardId;
                    return;
                }
            });
            break;

        case "deleteTask":
            let newTaskList = [];

            Object.values(data.tasks).map((item) => {
                if (item.id == newData.taskId) return;
                newTaskList.push(item);
            });

            data = {
                ...data,
                tasks: newTaskList,
                tasksCount: --data.tasks.length,
            };

        default:
            console.log("data", data);
            break;
    }
};

export { getData, setData };
