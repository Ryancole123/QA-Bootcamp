function doSomething(){
    alert("Wagwan");
}

function london(){
    alert("i am in LONDON")
}

function ok(){
    // const name = document.getElementById("nameInput").value;
    alert(`Hello there ${document.getElementById("nameInput").value}`)
    document.getElementById("nameInput").value = "";
}

function storeSomething(){
    document.getElementById("nameInput").value = "abc";
}

function add(){
    document.getElementById("num3").value = parseInt(document.getElementById("num1").value) + parseInt(document.getElementById("num2").value)  
}

function subtract(){
    document.getElementById("num3").value = parseInt(document.getElementById("num1").value) - parseInt(document.getElementById("num2").value)  
}

function multiply(){
    document.getElementById("num3").value = parseInt(document.getElementById("num1").value) * parseInt(document.getElementById("num2").value)  
}

function divide(){
    document.getElementById("num3").value = (parseFloat(document.getElementById("num1").value) / parseFloat(document.getElementById("num2").value)).toFixed(2)
}