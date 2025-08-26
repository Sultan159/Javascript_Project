const textInput = document.getElementById("todo-input");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

let listArray = []



addBtn.addEventListener("click", () => {
    const inputValue = textInput.value.trim()
    if(inputValue === "") return

    listArray.push(inputValue)
    localStorage.setItem("task", JSON.stringify(listArray))
})


function renderTask(){
    
}