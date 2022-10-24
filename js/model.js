"use strict";

let data = {
    extraBoards: {
        startId: 3,
        boards: [
            {
                id: 3,
                title: "Дополнительная доска",
            },
        ],
    },
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
            inBoard: "board0",
        },
    ],
};

export { data };
