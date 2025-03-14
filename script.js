script.js
document.getElementById("rollButton").addEventListener("click", rollColorDice);

function rollColorDice() {
    const colors = ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Purple'];
    const diceContainer = document.getElementById("diceContainer");
    
    // Clear previous results
    diceContainer.innerHTML = '';

    for (let i = 0; i < 4; i++) {
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        
        // Create dice element
        const dice = document.createElement("div");
        dice.className = "dice";
        dice.style.backgroundColor = randomColor.toLowerCase();
        dice.textContent = randomColor;
        
        // Append to container
        diceContainer.appendChild(dice);
    }
}
