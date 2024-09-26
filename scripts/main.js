const addBtn = document.getElementById("addTask");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

loadTasks();

function addTask() {
    const task = taskInput.value.trim();
    if (task) {
        createTaskElement(task);
        taskInput.value = "";
        taskStorage();
    }
    else {
        alert("You forgot to add a task!")
    }
}

addBtn.addEventListener("click", addTask);

function createTaskElement(task) {
    const taskItem = document.createElement("div");
    taskItem.classList.add("taskItem", "checkTask");
    taskItem.textContent = task;

    const removeBtn = document.createElement("button")
    removeBtn.innerHTML = "<i class='fa-regular fa-square-minus'>";

    taskItem.appendChild(removeBtn);
    taskList.appendChild(taskItem);
    removeBtn.addEventListener("click", function(){
        taskList.removeChild(taskItem);
        taskStorage();
    });
}

function taskStorage() {
    let tasks = [];
    taskList.querySelectorAll("*").forEach
    (function(item) {
        tasks.push(item.textContent.replace("<i class='fa-regular fa-square-minus'>", "").trim());
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach(createTaskElement);
}