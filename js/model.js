"use strict";

let data = {
    tags: [
        {
            name: "Untagged",
            color: "#bbb",
        },
        {
            name: "Design",
            color: "#E74F3A",
        },
        {
            name: "Development",
            color: "#0063A5",
        },
    ],
    tasksCount: 2,
    boardsCount: 3,
    boards: [
        {
            id: 2,
            title: "To Do",
        },
        {
            id: 3,
            title: "Doing",
        },
        {
            id: 4,
            title: "Done",
        },
    ],
    tasks: [
        {
            id: 3,
            title: "Doing...",
            tag: "Development",
            tagColor: "#0063A5",
            inBoard: 3,
        },
        {
            id: 5,
            title: "In to do...",
            tag: "Design",
            tagColor: "#E74F3A",
            inBoard: 2,
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

            break;

        case "addTask":
            let newTask = {
                id: newData.id,
                title: newData.title,
                tag: newData.tag,
                tagColor: newData.tagColor,
                inBoard: newData.inBoard,
            };

            data = {
                ...data,
                tasks: [...data.tasks, newTask],
                tasksCount: ++data.tasks.length,
            };

            break;

        case "changeTitle":
            Object.values(data.tasks).map((item) => {
                if (item.id == newData.taskId) {
                    item.title = newData.title;
                    return;
                }
            });

            break;

        case "changeTag":
            Object.values(data.tasks).map((item) => {
                if (item.id == newData.taskId) {
                    item.tag = newData.newTag;
                    item.tagColor = newData.newColor;
                    return;
                }
            });

            break;

        case "changeBoardTitle":
            Object.values(data.boards).map((item) => {
                if (item.id == newData.boardId) {
                    item.title = newData.title;
                    return;
                }
            });

            break;

        case "addBoard":
            let newBoard = {
                id: newData.id,
                title: newData.title,
            };

            data = {
                ...data,
                boards: [...data.boards, newBoard],
                boardsCount: ++data.boards.length,
            };

            break;

        case "deleteBoard":
            let newBoardsList = [],
                newTasksList = [],
                idsIndex = 0;

            Object.values(data.boards).map((board) => {
                if (board.id == newData.boardId) return;
                newBoardsList.push(board);
            });

            if (newData.tasksIds.length > 0) {
                Object.values(data.tasks).map((task) => {
                    if (task.id == newData.tasksIds[idsIndex]) {
                        idsIndex++;
                        return;
                    }
                    newTasksList.push(task);
                });
            } else {
                newTasksList = data.tasks;
            }

            data = {
                ...data,
                boards: newBoardsList,
                tasks: newTasksList,
                boardsCount: --data.boards.length,
                tasksCount: data.tasks.length,
            };

            break;

        default:
            console.log("data", data);

            break;
    }
};

export { getData, setData };
