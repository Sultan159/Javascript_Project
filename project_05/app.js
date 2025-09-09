const colorInput = document.getElementById("colorInput");
const hexCode = document.getElementById("hexCode");
const copyBtn = document.getElementById("copyBtn");
const complementContainer = document.getElementById("complementryContainer");
const saveBtn = document.getElementById("saveColorBtn");
const favContainer = document.getElementById("favoriteContainer");

let clickCount = 0;

colorInput.addEventListener("input", (e) => {
    let colorValue = colorInput.value;
    clickCount++;
    if(clickCount >= 5){
        colorInput.setAttribute("disabled", true)
        colorInput.style.pointerEvents = "none"
    }
    updateColorCode(colorValue)
    showComplementColor(colorValue)
})

function updateColorCode(color){
    hexCode.textContent = color
    hexCode.style.color = color
}

function showComplementColor(color){
    const colorArray = getComplementColor(color)
    colorArray.forEach( (colors) => {
        const complementColor = document.createElement("div");
        complementColor.style.backgroundColor = colors;
        complementColor.classList.add("box-color")
        complementContainer.appendChild(complementColor)
    })
}

function getComplementColor(color){
    const base = parseInt(color.slice(1), "16")
    const complement = (0xFFFFFF ^ base).toString(16).padStart(6, "0");
    return [`#${complement}`]
}

saveBtn.addEventListener("click", () => {
    const saveColor = document.createElement("div")
    saveColor.style.backgroundColor = colorInput.value
    saveColor.classList.add("box-color")
    favContainer.appendChild(saveColor)
})

copyBtn.addEventListener("click", () => {
    navigator.clipboard
    .writeText(hexCode.textContent)
    .then(alert("color is copied"))
    .catch(err => console.log(err))
})