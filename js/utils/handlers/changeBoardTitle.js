import updateModel from "../updateModel.js";

const changeBoardTitle = (target, boardId) => {
    let input = document.createElement("input"),
        board = target.parentNode;

    input.classList.add("board-title-input");
    input.value = target.textContent;

    board.replaceChild(input, target);
    input.focus();

    input.addEventListener("input", () => {
        target.textContent = input.value;

        updateModel(input, {
            type: "changeBoardTitle",
            title: input.value,
            boardId,
        });
    });

    // input.addEventListener("keydown", (e) => {
    //     if (e.keyCode == 13) {
    //         target.style.display = "inline-block";
    //         input.remove();
    //     }
    // });

    input.addEventListener("focusout", () => {
        board.replaceChild(target, input);
    });
};

export default changeBoardTitle;
