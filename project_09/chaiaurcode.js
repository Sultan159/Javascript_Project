const generateBtn = document.querySelector(".btn");
const containerImage = document.querySelector(".container");
const div = document.createElement("div");
const img = document.createElement("img");

const url = "https://api.thecatapi.com/v1/images/search";



async function generateRandomImage(){
    try {
        const response = await fetch(url);
        const data = await response.json();
        div.classList.add("cats");
        img.src = data[0].url;
        img.classList.add("random_cats");
        div.appendChild(img);
        containerImage.appendChild(div);
    } catch (error) {
        console.log(error)
    }
}

generateBtn.addEventListener("click", generateRandomImage);

