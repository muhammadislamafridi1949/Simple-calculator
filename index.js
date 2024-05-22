var display = document.getElementById("table");
function dependOnclIck(input) {
    display.value += input;
};
function AllcLear() {
    display.value = "";
};

function dark(color) {
    document.body.style.backgroundColor = color
    var a = document.getElementById("btns")
    a.style.color = "black"
}
var elements = document.querySelectorAll('.btn')
elements.forEach(element =>  {
    element.style.color
})

function cacuLate() {
    try {
        if (display.value.trim() === "") {
            display.value = ""; 
        } else {
            display.value = eval(display.value); 
        }
    } catch (error) {   
        display.value = ""; 
    }
}

function deleteLastCharacter() {
    let currentValue = display.value;
    display.value = currentValue.slice(0, -1); 
}

function darks(color){
    document.body.style.background = color
}

// if (dark) {
//   var a = document.getElementById("ac")
//   a.style.color = "white"
// }





// function removeLastDigit() {
//     var display = document.getElementById('display');
//     var currentValue = display.textContent;
//     if (currentValue.length === 1) {
//         display.textContent = '0';
//     } else {
//         display.textContent = currentValue.slice(0, -1);
//     }
// }