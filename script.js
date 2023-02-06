window.onload = rollDice();

function rollDice() {
    const max = 6;
    const min = 1;
    document.getElementById("roll").innerHTML = min + Math.floor(Math.random() * (max - min + 1));;
}

function buttonPress(event, body) {
    if (event.key === "Enter") {
        rollDice();
    }
}

