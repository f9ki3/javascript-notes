let currentValue = "";

function appendValue(value) {
    currentValue += value;
    document.getElementById('number').value = currentValue;
}

function calculate() {
    document.getElementById('number').value = eval(currentValue);
    currentValue = "";
}

function clearInput(type) {
    if (type === 'C') {
        currentValue = currentValue.slice(0, -1); // Remove the last character
    } else if (type === 'AC') {
        currentValue = "";
    }

    document.getElementById('number').value = currentValue;
}