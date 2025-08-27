document.addEventListener("DOMContentLoaded", () => {
  const taskText = document.getElementById("todo-input");
  const taskAddBtn = document.getElementById("addBtn");
  const taskList = document.getElementById("taskList");

  let tasks = JSON.parse(localStorage.getItem("task")) || [];

  tasks.forEach( (task) => (renderTask(task)))

  taskAddBtn.addEventListener("click", () => {
    const textValue = taskText.value.trim()
    if(textValue === "") return alert("please enter a task");

    const newTask = {
      id: Date.now(),
      text: textValue,
      completed: false,
    }

    tasks.push(newTask);
    // console.log(tasks)
    saveTask()
    renderTask(newTask)


    taskText.value = ""
  })

  function saveTask() {
    localStorage.setItem("task", JSON.stringify(tasks));
  }

  function renderTask(task){
    const list = document.createElement("li");
    list.setAttribute("data-id", task.id);
    // console.log(list)
    if(list.completed) list.classList.add("completed");
    list.classList.add("task")
    list.innerHTML = `
    ${task.text} <button class="deleteBtn">Delete</button>`;

    list.addEventListener("click", (e) => {
      if(e.target.tagName === "BUTTON") return
      task.completed = !task.completed;
      list.classList.toggle("completed");
    });

    list.querySelector("button").addEventListener("click", (e) => {
      e.stopPropagation();
      tasks = tasks.filter( (t) => t.id !== task.id);
      list.remove()
      saveTask()
    })

    taskList.appendChild(list)
  }
})

