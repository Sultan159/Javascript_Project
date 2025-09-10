const  quoteElement = document.getElementById("quote");
const authorElement = document.getElementById("author");
const generateBtn = document.getElementById("generateQuote");


const url = "https://api.api-ninjas.com/v1/quotes?";
const apiKey = "C0thCXxmuQAKKEgBejXw1g==bAuNTgiLO8IIa1OM"

const options = {
  method: "GET",
  headers: {
    "X-Api-Key": apiKey,
  },
};

generateBtn.addEventListener("click", renderQuote)

async function renderQuote() {
    try {
        const response = await fetch(url, options);
        const data = await response.json();
        // console.log(data);
        const {author, quote} = data[0]
        quoteElement.textContent = `${quote}...`;
        authorElement.textContent = `${author}`
    } catch (error) {
        console.log(error.message)
    }
}

renderQuote()