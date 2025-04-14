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
    if(document.getElementById("num1").value && document.getElementById("num2").value){
    document.getElementById("num3").value = parseInt(document.getElementById("num1").value) + parseInt(document.getElementById("num2").value)  
    }else{
        alert("Please ensure that all boxes are filled")
    }
}

function subtract(){
    if(document.getElementById("num1").value && document.getElementById("num2").value){
    document.getElementById("num3").value = parseInt(document.getElementById("num1").value) - parseInt(document.getElementById("num2").value)  
    }else{
        alert("Please ensure that all boxes are filled")
    }
}

function multiply(){
    if(document.getElementById("num1").value && document.getElementById("num2").value){
    document.getElementById("num3").value = parseInt(document.getElementById("num1").value) * parseInt(document.getElementById("num2").value)  
    }else{
        alert("Please ensure that all boxes are filled")
    }
}

function divide(){
    if(document.getElementById("num1").value && document.getElementById("num2").value){
    document.getElementById("num3").value = (parseFloat(document.getElementById("num1").value) / parseFloat(document.getElementById("num2").value)).toFixed(2)
    }else{
        alert("Please ensure that all boxes are filled")
    }
}