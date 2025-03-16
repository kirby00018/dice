document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("rollButton").addEventListener("click", function () {
        console.log("Dice rolled!"); // Check if this logs when clicking
        rollDice();
    });
});

function rollDice() {
    // Example: Generate a random number between 1-6
    let diceValue = Math.floor(Math.random() * 6) + 1;
    console.log("Rolled:", diceValue);
    document.getElementById("diceResult").innerText = `You rolled: ${diceValue}`;
}
