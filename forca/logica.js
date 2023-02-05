const word = "javascript";
const wordArray = word.split("");
const wordLength = wordArray.length;
const wordDisplay = Array(wordLength).fill("_");
let incorrectGuesses = 0;

const wordElement = document.querySelector(".word");
const hangmanElement = document.querySelector(".hangman");
const inputElement = document.querySelector("#input");
const submitElement = document.querySelector("#submit");

submitElement.addEventListener("click", () => {
  const guess = inputElement.value;
  if (wordArray.includes(guess)) {
    for (let i = 0; i < wordArray.length; i++) {
      if (wordArray[i] === guess) {
        wordDisplay[i] = guess;
      }
    }
    wordElement.textContent = wordDisplay.join(" ");
  } else {
    incorrectGuesses++;
    hangmanElement.textContent = `Errou ${incorrectGuesses} vezes.`;
  }
  if (!wordDisplay.includes("_")) {
    alert("Você ganhou!");
  } else if (incorrectGuesses >= 6) {
    alert("Você perdeu.");
  }
  inputElement.value = "";
});

const input = document.querySelector("input[type='text']");
const button = document.querySelector("button");

input.addEventListener("input", function() {
  if (input.value.length > 0) {
    button.style.backgroundColor = "green";
    button.style.cursor = "pointer";
  } else {
    button.style.backgroundColor = "lightgray";
    button.style.cursor = "default";
  }
});
