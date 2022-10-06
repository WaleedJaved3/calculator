let num1 =3;
let num2 =5;
let total;
document.getElementById("num1-el").textContent = num1; 
document.getElementById("num2-el").textContent = num2; 

let sumel = document.getElementById("sum-el");

function add(){
    let result = num1 + num2;
    sumel.textContent = "Sum: " + result;
}
function subtract(){
    let result = num1 - num2;
    sumel.textContent = "Subtract: " + result;
}
function divide(){
    let result = num1 / num2;
    sumel.textContent = "Divide: " + result;
}
function multiply(){
    let result = num1 * num2;
    sumel.textContent = "Multiply: " + result;
}

