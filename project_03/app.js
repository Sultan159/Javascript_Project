const inputField = document.getElementById("input-field");
const startBtn = document.getElementById("btn");
const countElement = document.getElementById("count");


let count = 0;
let countId = null

startBtn.addEventListener("click", () => {
    const inputValue = Number(inputField.value);
    if(!inputField.value || isNaN(inputValue)) alert("please put a number!")
    startCounting(inputValue)

    inputField.value = ""
})

function startCounting(counted){
    clearInterval(countId)
    countElement.innerText = counted
    countId = setInterval( () => {
        counted--;
        if(counted < 0){
            return clearInterval(countId)
            
        }
        countElement.innerText = counted;
    }, 1200)
    
}
