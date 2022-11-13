"use strict";

let data = {
    tags: [
        {
            id: 2,
            name: "Untagged",
            color: "#BBBBBB",
        },
        {
            id: 4,
            name: "Design",
            color: "#E74F3A",
        },
        {
            id: 7,
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
            id: 5,
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
            data.tasks.forEach((task) => {
                if (task.id == newData.taskId) {
                    task.inBoard = newData.boardId;
                    return;
                }
            });

            break;

        case "deleteTask":
            let newTaskList = [];

            data.tasks.forEach((task) => {
                if (task.id == newData.taskId) return;
                newTaskList.push(task);
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
            data.tasks.forEach((task) => {
                if (task.id == newData.taskId) {
                    task.title = newData.title;
                    return;
                }
            });

            break;

        case "changeTag":
            data.tasks.forEach((task) => {
                if (task.id == newData.taskId) {
                    task.tag = newData.newTag;
                    task.tagColor = newData.newColor;
                    return;
                }
            });

            break;

        case "changeBoardTitle":
            data.boards.forEach((board) => {
                if (board.id == newData.boardId) {
                    board.title = newData.title;
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

            data.boards.forEach((board) => {
                if (board.id == newData.boardId) return;
                newBoardsList.push(board);
            });

            if (newData.tasksIds.length > 0) {
                data.tasks.forEach((task) => {
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
        case "renameTag":
            let oldTags = [];

            data.tags.forEach((tag) => {
                if (tag.id == newData.tagId) return;

                oldTags.push(tag);
            });

            data = {
                ...data,
                tags: [
                    ...oldTags,
                    {
                        id: newData.tagId,
                        name: newData.value,
                        color: newData.color,
                    },
                ],
            };

            break;

        case "addTag":
            data = {
                ...data,
                tags: [
                    ...data.tags,
                    {
                        id: newData.tagId,
                        name: newData.value,
                        color: newData.color,
                    },
                ],
            };
            break;

        case "deleteTag":
            let oldTagsDelete = [];

            data.tags.forEach((tag) => {
                if (tag.id == newData.tagId) return;

                oldTagsDelete.push(tag);
            });

            data = {
                ...data,
                tags: [...oldTagsDelete],
            };
            break;
        default:
            console.log("data", data);

            break;
    }
};

export { getData, setData };
