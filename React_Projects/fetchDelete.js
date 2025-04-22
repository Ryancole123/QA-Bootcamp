function processResponse(resp){
    console.log("done");
    
}

let postObject = fetch("http://localhost:3000/seller/e931",{method:"DELETE"})
postObject.then(processResponse)