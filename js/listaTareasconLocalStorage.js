const input = document.getElementById("input");
const listaTareas = document.querySelector(".todo__list");
const agregar = document.getElementById("agregar");
const borrar = document.getElementById("borrar");
const totalContenedor = document.querySelector(".todo__total");
const totalContador = document.getElementById("total");

let tasks = [];
let nextId = 1;

input.addEventListener("keyup", function (e) {
  if (e.key === "Enter") {
    agregar.click();
    input.value = "";
  }
});

function addToTasks() {
  let task = input.value;

  if (task === "") {
    alert("Debes insertar una tarea..");
    return;
  } else {
    tasks.push({
      tarea: task,
      id: nextId,
      done: false,
      status: "new",
    });
    nextId++;
    input.value = "";
  }
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

// function total(){}

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

function renderTasks() {
  listaTareas.innerHTML = "";

  for (let i = 0; i < tasks.length; i++) {
    let task = tasks[i];

    const div = document.createElement("div");
    div.classList.add("task");
    const name = document.createElement("span");
    name.classList.add("task__title");
    const borrarTarea = document.createElement("button");
    borrarTarea.classList.add("task__delete-button");
    const tareaEcha = document.createElement("button");
    tareaEcha.classList.add("task__done-button");
    const tareaPendiente = document.createElement("button");
    tareaPendiente.classList.add("task__pending-button");

    name.innerText = task.tarea;
    if (task.status === "new") {
      div.classList.add("task--new");
    } else if (task.status === "pending") {
      div.classList.add("task--pending");
    } else if (task.status === "done") {
      div.classList.add("task--done");
    }

    borrarTarea.innerText = "X";
    tareaEcha.innerText = "Fait";
    tareaPendiente.innerText = "A faire";

    div.appendChild(name);
    div.appendChild(borrarTarea);
    div.appendChild(tareaEcha);
    div.appendChild(tareaPendiente);
    if (task.status === "done") {
      tareaPendiente.remove();
    }
    listaTareas.appendChild(div);

    borrarTarea.addEventListener("click", function () {
      removeFromTasks(task.id);
    });

    tareaEcha.addEventListener("click", function () {
      updateTaskStatus(task, "done");
    });

    tareaPendiente.addEventListener("click", function () {
      updateTaskStatus(task, "pending");
    });
  }

  if (tasks.length > 0) {
    totalContenedor.classList.add("todo__total--visible");
  } else {
    totalContenedor.classList.remove("todo__total--visible");
  }

  if (tasks.length === 1) {
    totalContador.innerText = " 1 tache à faire";
  } else if (tasks.length > 1) {
    totalContador.innerText = tasks.length + " taches à faire";
  }
}
renderTasks();

agregar.addEventListener("click", function () {
  addToTasks();
});

borrar.addEventListener("click", function () {
  clearTasks();
});

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function chargeTasks() {
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
chargeTasks();
