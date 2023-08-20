const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTaskButton");
const taskList = document.getElementById("taskList");

addTaskButton.addEventListener("click", () => {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        const taskItem = document.createElement("li");
        taskItem.innerHTML = `${taskText} <button class="deleteButton">Delete</button>`;
        taskList.appendChild(taskItem);
        taskInput.value = "";

        taskItem.querySelector(".deleteButton").addEventListener("click", () => {
            taskList.removeChild(taskItem);
        });
    }
});
