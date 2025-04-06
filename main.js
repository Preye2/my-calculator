let currentInput = "0";
const display = document.getElementById("current-input");

// Append numbers/operators to display
function appendToDisplay(value) {
    if (currentInput === "0" && value !== ".") {
        currentInput = value;
    } else {
        currentInput += value;
    }
    updateDisplay();
}

// Clear the display
function clearDisplay() {
    currentInput = "0";
    updateDisplay();
}

// Backspace (remove last character)
function backspace() {
    if (currentInput.length === 1) {
        currentInput = "0";
    } else {
        currentInput = currentInput.slice(0, -1);
    }
    updateDisplay();
}

// Calculate the result
function calculate() {
    try {
        currentInput = eval(currentInput).toString();
    } catch (error) {
        currentInput = "Error";
    }
    updateDisplay();
}

// Update the display
function updateDisplay() {
    display.textContent = currentInput;
}




