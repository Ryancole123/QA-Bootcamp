try{
    let x = parseInt(prompt("Enter a number",""));
    if(isNaN(x)){
        let e = new Error();
        e.message = "That wasn't a number...";
        throw e;
    }
}catch (e){
    alert(`Something went wrong...: ${e.message}`)
}finally{
    console.log("finally block");    
}