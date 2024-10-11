let a = ''
let operator = ''
let b = ''
let displayValue = ''

function add(a, b) {
    return a + b
}

function subtract(a, b) {
    return a - b
}

function multiply(a, b) {
    return a * b
}

function divide(a, b) {
    return a / b
}

function operate (a, b, operator) {
    return operator(a, b)
}

function populateDisplay (number) {
    displayValue += number;
    document.querySelector('#display').textContent = displayValue;
}

document.querySelectorAll('.numeric').forEach((btn) => {
    btn.addEventListener('click', () => {
        populateDisplay(btn.textContent)
    })
})

document.querySelector('#clear').addEventListener('click', () => {
    displayValue = ''
    populateDisplay(displayValue);
})


