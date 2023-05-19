// JavaScript source code
let message = "Hello World";
let arrayOfMessages = []
let userMessage = "" //typed message from userbox

function updateLabelPlus() {
    
    
    var label = document.getElementById('changeme');
    var currentValue = parseInt(label.textContent);
    var updatedValue = currentValue + 1;
    label.textContent = updatedValue;
}

function updateLabelMinus() {


    var label = document.getElementById('changeme');
    var currentValue = parseInt(label.textContent);
    var updatedValue = currentValue - 1;
    label.textContent = updatedValue;
}
//create button that adds to message and button that deletes messages





console.log(message);
