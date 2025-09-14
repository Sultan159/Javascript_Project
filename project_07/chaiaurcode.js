const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop")

let timerId = null
// Generate Random Number

function randomNumber(number){
    return `${Math.floor(Math.random() * number + 1)}`
}

// Generate Random Color

function generateColor(){
    return `rgba(${randomNumber(255)} ${randomNumber(255)} ${randomNumber(255)})`
}

startBtn.addEventListener("click", () => {
    timerId = setInterval(() => {
        document.body.style.backgroundColor = generateColor()
    }, 1000);
})

stopBtn.addEventListener("click", () => {
    clearInterval(timerId)
})