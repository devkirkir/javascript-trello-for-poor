import updateModel from "../updateModel.js";
import { getData } from "../../model.js";
import { generateId } from "../utils.js";

const addBoard = (btnSelector) => {
    const btn = document.querySelector(btnSelector);

    btn.addEventListener("click", () => {
        let { boards } = getData();

        updateModel(btn, {
            type: "addBoard",
            id: generateId(boards),
            title: "Title",
        });
    });
};

export default addBoard;
