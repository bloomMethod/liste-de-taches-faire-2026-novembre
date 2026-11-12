const input = document.getElementById("input");
const listaTareas = document.querySelector(".lista-tareas");
const agregar = document.getElementById("agregar");
const borrar = document.getElementById("borrar");
const totalContenedor = document.querySelector(".total-contenedor");
const totalContador = document.getElementById("total");

let tasks = [];
let nextId = 1;


input.addEventListener("keyup", function(e){
  if(e.key === "Enter"){
    agregar.click();
    input.value = "";
  };
});


function addToTasks(){
  let task = input.value;

  if(task === ""){
    alert("Debes insertar una tarea..");
    return;
  }else{
    tasks.push({
      tarea: task,
      id: nextId,
    });
    nextId++;
    input.value = "";
  };
  renderTasks();
  saveTasks();
};

function removeFromTasks(id){
  tasks = tasks.filter(function(task){
    return task.id !== id;
  });
  renderTasks();
  saveTasks();
};

// function total(){}

function clearTasks(){
  tasks = [];
  nextId = 1;
  renderTasks();
  saveTasks();
}

function renderTasks(){
  listaTareas.innerHTML = "";

  for(let i = 0; i < tasks.length; i++){
    let task = tasks[i];

    const div = document.createElement("div");
    const name  = document.createElement("span");
    const borrarTarea = document.createElement("button");
    const tareaEcha = document.createElement("button");
    const tareaPendiente = document.createElement("button");

    name.innerText = task.tarea;
    borrarTarea.innerText = "X";
    tareaEcha.innerText = "Fait";
    tareaPendiente.innerText = "A faire";

    div.appendChild(name);
    div.appendChild(borrarTarea);
    div.appendChild(tareaEcha);
    div.appendChild(tareaPendiente);
    listaTareas.appendChild(div);

    borrarTarea.addEventListener("click", function(){
      removeFromTasks(task.id);
    });

    tareaEcha.addEventListener("click", function(){
      div.classList.add("green");
      tareaPendiente.remove();
    });

    tareaPendiente.addEventListener("click", function(){
      div.classList.add("red");
    })
  }

  if(tasks.length > 0){
    totalContenedor.classList.add("active");
  } else{
    totalContenedor.classList.remove("active");
  }

  if(tasks.length === 1){
    totalContador.innerText = " 1 tache à faire";
  } else if ( tasks.length > 1){
    totalContador.innerText = tasks.length + " taches à faire";
  };
};
renderTasks();

agregar.addEventListener("click", function(){
  addToTasks();
})

borrar.addEventListener("click", function(){
  clearTasks();
});

function saveTasks(){
  localStorage.setItem("tasks", JSON.stringify(tasks));
};

function chargeTasks(){
  const data = localStorage.getItem("tasks");

  if(data){
    tasks = JSON.parse(data);
  };
  renderTasks();

  if(tasks.length > 0){
    nextId = Math.max(...tasks.map(function(task){
      return task.id;
    }))+ 1;
  } else{
    nextId = 1;
  }
};
chargeTasks();