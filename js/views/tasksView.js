const tasksView = (taskList) => {
    taskList.forEach((item) => {
        let div = document.createElement("div");
        div.setAttribute("data-task", `task${item.id}`);
        div.setAttribute("draggable", true);
        div.classList.add("task");
        div.textContent = item.title;

        div.addEventListener("dragstart", (event) => {
            let dataAttr = event.target.getAttribute("data-task");
            event.dataTransfer.setData("data", dataAttr);
        });

        document.getElementById(item.inBoard).appendChild(div);
    });
};

export default tasksView;
