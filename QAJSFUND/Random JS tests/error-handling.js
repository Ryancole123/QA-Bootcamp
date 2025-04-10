do{
try{
    let x = parseInt(prompt("Enter a number between 1-10","e.g. 7"));
    if(isNaN(x)){
        let e = new Error();
        e.message = "That wasn't a number...";
        throw e;
    }else if(x < 1 || x > 10){
        let e = new Error();
        e.message = "Error. Number out of range";
        throw e;
    }else{
        document.write(`<p> Your number was ${x}</p>`)
        break;
    }
}catch (e){
    alert(`Something went wrong...: ${e.message}`)
}finally{
    console.log("finally block");    
}
}while(true)