// DOM ELEMENTS
const input = document.getElementById("input");
const taskList = document.querySelector(".todo__list");
const addButton = document.getElementById("agregar");
const deleteAllButton = document.getElementById("borrar");
const totalContainer = document.querySelector(".todo__total");
const totalCounter = document.getElementById("total");

//App State
let tasks = [];
let nextId = 1;

// Event Listeners
input.addEventListener("keyup", function (e) {
  if (e.key === "Enter") {
    addButton.click();
  }
});

addButton.addEventListener("click", function () {
  addToTasks();
});

deleteAllButton.addEventListener("click", function () {
  clearTasks();
});

// Task management
function addToTasks() {
  let task = input.value.trim();

  if (task === "") {
    alert("Debes insertar una tarea..");
    return;
  }

  tasks.push({
    title: task,
    id: nextId,
    done: false,
    status: "new",
  });

  nextId++;
  input.value = "";
  renderTasks();
  saveTasks();
}

function removeFromTasks(id) {
  tasks = tasks.filter(function (task) {
    return task.id !== id;
  });
  renderTasks();
  saveTasks();
}

function clearTasks() {
  tasks = [];
  nextId = 1;
  renderTasks();
  saveTasks();
}

function updateTaskStatus(task, status) {
  task.status = status;
  task.done = status === "done";
  saveTasks();
  renderTasks();
}

// Tasks rendering
function renderTasks() {
  taskList.innerHTML = "";

  for (let i = 0; i < tasks.length; i++) {
    let task = tasks[i];

    // CREATE TASK ELEMENTS
    const div = document.createElement("div");
    div.classList.add("task");
    const name = document.createElement("span");
    name.classList.add("task__title");
    const deleteButton = document.createElement("button");
    deleteButton.classList.add("task__delete-button");
    const doneButton = document.createElement("button");
    doneButton.classList.add("task__done-button");
    const pendingButton = document.createElement("button");
    pendingButton.classList.add("task__pending-button");

    // SET TASK CONTENT
    name.innerText = task.title;
    if (task.status === "new") {
      div.classList.add("task--new");
    } else if (task.status === "pending") {
      div.classList.add("task--pending");
    } else if (task.status === "done") {
      div.classList.add("task--done");
    }

    // SET BUTTON TEXT
    deleteButton.innerText = "X";
    doneButton.innerText = "Fait";
    pendingButton.innerText = "A faire";

    // APPEND ELEMENTS TO TASK
    div.appendChild(name);
    div.appendChild(deleteButton);

    if (task.status !== "done") {
      div.appendChild(doneButton);
      div.appendChild(pendingButton);
    }
    taskList.appendChild(div);

    // TASK BUTTON EVENTS

    deleteButton.addEventListener("click", function () {
      removeFromTasks(task.id);
    });

    doneButton.addEventListener("click", function () {
      updateTaskStatus(task, "done");
    });

    pendingButton.addEventListener("click", function () {
      updateTaskStatus(task, "pending");
    });
  }

  // UPDATE TASK COUNTER VISIBILITY
  if (tasks.length > 0) {
    totalContainer.classList.add("todo__total--visible");
  } else {
    totalContainer.classList.remove("todo__total--visible");
  }

  // UPDATE TASK COUNTER TEXT
  if (tasks.length === 1) {
    totalCounter.innerText = " 1 tache à faire";
  } else if (tasks.length > 1) {
    totalCounter.innerText = tasks.length + " taches à faire";
  } else {
    totalCounter.innerText = "0 taches à faire";
  }
}

// Local Storage
function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
  const data = localStorage.getItem("tasks");

  if (data) {
    tasks = JSON.parse(data);
  }
  renderTasks();

  if (tasks.length > 0) {
    nextId =
      Math.max(
        ...tasks.map(function (task) {
          return task.id;
        }),
      ) + 1;
  } else {
    nextId = 1;
  }
}
loadTasks();
