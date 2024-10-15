let a = 0
let operator = ''
let b = 0
let displayValue = ''
let firstGuy = true
let positive = true 
const display = document.querySelector('#display')

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

function remainder(a, b) {
    return a % b
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
        if (displayValue.length <= 12) {
            populateDisplay((btn.textContent))
        }
    })
})

document.querySelector('#clear').addEventListener('click', () => {
    displayValue = ''
    a = 0
    b = 0
    operator = ''
    firstGuy = true
    populateDisplay(displayValue);
});

document.querySelectorAll('.operator').forEach((btn) => {
    btn.addEventListener('click', () => {
        if (firstGuy) {
            a = Number(displayValue)
        }
        else {
            b = Number(displayValue)
        }
        firstGuy = false
        displayValue = ''
        operator = btn.id

    })
})

document.querySelector('#equals').addEventListener('click', () => {
    b = Number(displayValue);
    let operatorObj = window[operator]
    result = operate(a, b, operatorObj)
    if ((result).toString().length > 9) {
        result = result.toPrecision(9)
    }
    displayValue = result
    display.textContent = result
    a = result
    firstGuy = false;
    displayValue = '';
});

document.querySelector('#change-sign').addEventListener('click', () => {
    if (positive) {
        displayValue = '-' + displayValue;
        display.textContent = displayValue
        console.log(Number(displayValue))
        positive = false;
    } else {
        displayValue = displayValue.slice(1)
        display.textContent = displayValue;
        positive = true;
    }
})







