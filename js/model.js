"use strict";

let data = {
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
    tasksCount: 2,
    tasks: [
        {
            id: 1,
            title: "Прогресс",
            inBoard: "board1",
        },
        {
            id: 2,
            title: "В списке",
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
