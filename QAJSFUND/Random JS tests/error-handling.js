try{
    let x = parseInt(prompt("Enter a number between 1-10",""));
    if(isNaN(x)){
        let e = new Error();
        e.message = "That wasn't a number...";
        throw e;
    }if(x < 1 || x > 10){
        let e = new Error();
        e.message = "Error. Number out of range";
        throw e;
    }
}catch (e){
    alert(`Something went wrong...: ${e.message}`)
}finally{
    console.log("finally block");    
}