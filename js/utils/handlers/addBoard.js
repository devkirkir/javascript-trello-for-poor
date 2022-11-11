import updateModel from "../updateModel.js";
import { getData } from "../../model.js";

const addBoard = (btnSelector) => {
    const btn = document.querySelector(btnSelector);

    btn.addEventListener("click", () => {
        let { boards } = getData();

        console.log(boards);

        let ids = new Set(),
            curr = 1;

        boards.forEach((item) => {
            ids.add(item.id);
        });

        while (ids.has(curr)) {
            curr++;
        }

        if (!ids.has(curr)) {
            ids.add(curr);
        }

        updateModel(btn, {
            type: "addBoard",
            id: curr,
            title: "Title",
        });
    });
};

export default addBoard;
