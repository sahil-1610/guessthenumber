const secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;
const userGuessInput = document.getElementById("userGuess");
const submitButton = document.getElementById("submit");
const resultElement = document.getElementById("result");
const numberOfGuessesElement = document.getElementById("noofguess");

submitButton.addEventListener("click", function() {
    const userGuess = parseInt(userGuessInput.value);

    if (isNaN(userGuess)) {
        resultElement.innerHTML = "Please enter a valid number.";
    } else if (userGuess < 1 || userGuess > 100) {
        resultElement.innerHTML = "Please enter a number between 1 and 100.";
    } else {
        attempts++;
        checkGuess(userGuess);
    }
});

function checkGuess(userGuess) {
    const resultElement = document.getElementById("result");

    if (userGuess == secretNumber) {
        resultElement.style.color = "green";
        resultElement.innerHTML = `Congratulations! You guessed the number ${secretNumber} in ${attempts} attempts.`;
    } else {
        resultElement.style.color = "red";
        resultElement.innerHTML = userGuess < secretNumber ? "The number is higher than your guess." : "The number is lower than your guess.";
    }

    numberOfGuessesElement.innerHTML = `Number of guess attempts: ${attempts}`;
    console.log(secretNumber);
}

function reset() {
    window.location.reload();
}
