let secretNumber;
let attempts;

function startGame() {
    secretNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    document.getElementById("feedback").innerText = "";
    document.getElementById("attempts").innerText = "";
    document.getElementById("guessInput").value = "";
}

function checkGuess() {
    let userGuess = parseInt(document.getElementById("guessInput").value);
    attempts++;

    if (userGuess > secretNumber) {
        document.getElementById("feedback").innerText = "❌ Too large! Try smaller.";
    } else if (userGuess < secretNumber) {
        document.getElementById("feedback").innerText = "❌ Too small! Try bigger.";
    } else {
        document.getElementById("feedback").innerText = "🎉 Correct! You won!";
        document.getElementById("attempts").innerText = "Attempts: " + attempts;
    }
}

function restartGame() {
    startGame();
}

// Start game automatically when page loads
window.onload = startGame;
