const palindromeInput = document.getElementById("palindrome");
const btn = document.getElementById("btn");
const message = document.getElementById("message");

btn.addEventListener("click", () => {
  const originalInput = palindromeInput.value;
  const inputValue = originalInput.toLowerCase().replace(/[^A-Z0-9]/gi, "");
  const inputReverse = inputValue.split("").reverse().join("");

  checkInput(originalInput, inputValue, inputReverse);

  palindromeInput.value = "";
});

function checkInput(originalValue, valueOne, valueTwo) {
  if (originalValue == "") return;

  if (valueOne == valueTwo) {
    message.innerHTML = `Yes, <span style="color: #AA57CC">"${originalValue}"</span>  is palindrome!`;
  } else {
    message.innerHTML = `No, <span style="color: #AA57CC">"${originalValue}"</span>  is not palindrome!`;
  }
}
