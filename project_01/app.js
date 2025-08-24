const timeDisplay = document.getElementById("time");
const content = document.querySelector(".content")
const selectElement = document.querySelectorAll("select");
const btn = document.getElementById("btn");

let alarmTime, isAlarmSet, 
ringtone = new Audio("../project_01/audio/fire_alarm.mp3");

for (let i = 12; i > 0; i--) {
    i = i < 10 ? `0${i}` : i;
    let option = `<option value="${i}">${i}</option>`;
    selectElement[0].firstElementChild.insertAdjacentHTML("afterend", option)
}

for (let i = 59; i >= 0; i--) {
    i = i < 10 ? `0${i}` : i;
    let option = `<option value="${i}">${i}</option>`;
    selectElement[1].firstElementChild.insertAdjacentHTML("afterend", option)
}

function displayTime(){
    const time = new Date();
    const hours = (time.getHours() % 12 || 12).toString().padStart(2, "0");
    const minutes = time.getMinutes().toString().padStart(2, "0");
    const seconds = time.getSeconds().toString().padStart(2, "0");
    const ampm = hours >= 12 ? "PM" : "AM";
    timeDisplay.textContent = `${hours}:${minutes}:${seconds} ${ampm}`;

    if (alarmTime === `${hours}:${minutes}:${ampm}`) {
      ringtone.play();
      ringtone.loop();
    }
}


function setAlarm(){
    if(isAlarmSet){
        alarmTime = ""
        ringtone.pause();
        content.classList.remove("disable");
        btn.innerText = "Set Alarm";
        return isAlarmSet = false;
    }

    let setTime = `${selectElement[0].value}:${selectElement[1].value}:${selectElement[2].value}`;
    if(setTime.includes("Hours") || setTime.includes("Minute") || setTime.includes("AM/PM")){
        alert("please, select a valid time to set alarm!");
        return
    };

    alarmTime = setTime;
    content.classList.add("disable");
    btn.innerText = "Clear Alarm";
    isAlarmSet = true;
}

setInterval(displayTime, 1000)
displayTime()
btn.addEventListener("click", setAlarm);