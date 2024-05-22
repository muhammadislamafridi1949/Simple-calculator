var display = document.getElementById("table");
function dependOnclIck(input) {
    if (input === '%') {
        display.value = eval(display.value) / 100;
    } else {
        display.value += input;
    }
}
function AllcLear() {
    display.value = "";
};

function dark(color) {
    document.body.style.backgroundColor = color
    const element = document.querySelectorAll(".btn").forEach(element => {
        element.classList.remove("mystyle");    
 } )
 document.querySelectorAll(".b").forEach(element => {
    element.classList.remove("mstyle");
})
 const a =  document.getElementById("table")
 a.classList.remove("input1")
 document.getElementById("maintable").style.backgroundColor = "#e8f5e9" 

}

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

function darks(color) {
    document.body.style.background = color
     document.querySelectorAll(".bt").forEach(element => {
        element.classList.add("mystyle");
    })
    document.querySelectorAll(".b").forEach(element => {
        element.classList.add("mstyle");
    })
    const a =  document.getElementById("table")
    a.classList.add("input1")
    document.getElementById("maintable").style.backgroundColor = "black" 
 }