let a = 0
let operator = ''
let b = 0
let displayValue = ''
let firstGuy = true
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

function operate (a, b, operator) {
    return operator(a, b)
}

function populateDisplay (number) {
    displayValue += number;
    document.querySelector('#display').textContent = displayValue;
}

document.querySelectorAll('.numeric').forEach((btn) => {
    btn.addEventListener('click', () => {
        populateDisplay(Number(btn.textContent))
    })
})

document.querySelector('#clear').addEventListener('click', () => {
    displayValue = ''
    populateDisplay(displayValue);
});

document.querySelectorAll('.operator').forEach((btn) => {
    btn.addEventListener('click', () => {
        a = Number(displayValue)
        displayValue = ''
        console.log(typeof(a))
        console.log(a)
        operator = btn.id
        console.log(operator)
    })
})

document.querySelector('#equals').addEventListener('click', () => {
    b = Number(displayValue);
    console.log(b)
    console.log(operator)
    console.log(typeof(operator))
    let operatorObj = window[operator]
    result = operate(a, b, operatorObj)
    displayValue = result
    display.textContent = result

})




