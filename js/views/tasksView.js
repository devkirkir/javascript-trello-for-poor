const tasksView = (taskList) => {
    function renderComponent({ id, title }) {
        let div = document.createElement("div");

        div.setAttribute("data-task", `task${id}`);
        div.setAttribute("draggable", true);
        div.classList.add("task");
        div.textContent = title;

        return div;
    }

    taskList.forEach((item) => {
        let component = renderComponent(item);

        component.addEventListener("dragstart", (event) => {
            let dataAttr = event.target.getAttribute("data-task");
            event.dataTransfer.setData("data", dataAttr);
            event.dataTransfer.setData("id", item.id);
        });

        document.getElementById(item.inBoard).appendChild(component);
    });
};

export default tasksView;
