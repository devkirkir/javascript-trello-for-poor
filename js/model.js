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

        default:
            console.log("drop-data", data);
            return;
    }
};

export { getData, setData };
