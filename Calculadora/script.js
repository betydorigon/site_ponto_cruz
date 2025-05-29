const display = document.getElementById('display');

function appendToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function calculate() {
    try {
        let result = new Function('return ' + display.value)();
        display.value = result;
    } catch {
        display.value = 'Erro';
    }
}

function backspace() {
    display.value = display.value.slice(0, -1);
}
