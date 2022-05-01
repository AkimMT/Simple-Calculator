const firstNumber = document.getElementById("firstNumber");
const secondNumber = document.getElementById("secondNumber");
const result = document.getElementById("result");

function multiplyBy(){
    const num1 = firstNumber.value;
    const num2 = secondNumber.value;

    if (num1 !== '' && num2 !== ''){
        result.textContent = 'Result: ' + `${Number(num1 * num2).toFixed(2)}`; 
    } else {
        alert('Enter all values.')
    }
}
function divideBy() { 
    const num1 = firstNumber.value;
    const num2 = secondNumber.value;

    if (num1 !== '' && num2 !== ''){
        result.textContent = 'Result: ' + `${Number(num1 / num2).toFixed(2)}`;
    } else {
        alert('Enter all values.')
    }
}
function addBy(){
    const num1 = firstNumber.value;
    const num2 = secondNumber.value;

    if (num1 !== '' && num2 !== ''){
        result.textContent = 'Result: ' + `${Number(num1 * 1 + num2 * 1).toFixed(2)}`; 
        console.log(typeof num2); 
    } else {
        alert('Enter all values.')
    }
}
function subtractBy() { 
    const num1 = firstNumber.value;
    const num2 = secondNumber.value;

    if (num1 !== '' && num2 !== ''){
        result.textContent = 'Result: ' + `${Number(num1 - num2).toFixed(2)}`;
    } else {
        alert('Enter all values.')
    }
}

// clear fields
function resetAll(){
    const num1 = firstNumber.value;
    const num2 = secondNumber.value;
    const result = document.getElementById("result");

    if (num1 === '' || num2 === '') {
        alert('Fields are empty.');
    } else if (!!num1 && !!num2 && result.textContent === ''){
        //alert("No calculation done yet.")
        let isExecuted = confirm("No calculation done yet. Are you sure to reset fields? ");
        if (isExecuted) {
            firstNumber.value = '';
            secondNumber.value = '';
            result.textContent = '';
        } 
    } else if (num1 !== '' && num2 !== '') {
        firstNumber.value = '';
        secondNumber.value = '';
        result.textContent = '';
    } 
}

//restrict input to numbers only 
firstNumber.addEventListener('input', () => {
    firstNumber.value = firstNumber.value.replace(/[^\+\d]/g, '');
    // console.log(secondNumber.value, Number.isInteger(firstNumber.value), typeof Number(firstNumber.value));
    if (!Number.isInteger(parseInt(firstNumber.value))) {
        alert('Only numbers are allowed.');
        if (!!firstNumber.value) {
            return null;
        }
    } 
})

secondNumber.addEventListener('input', () => {
    secondNumber.value = secondNumber.value.replace(/[^\+\d]/g, '');
    // console.log(secondNumber.value, Number.isInteger(secondNumber.value), typeof Number(secondNumber.value));
    if (!Number.isInteger(parseInt(secondNumber.value))) {
        alert('Only numbers are allowed.');
        if (!!secondNumber.value) {
            return null;
        }
    } 
})

