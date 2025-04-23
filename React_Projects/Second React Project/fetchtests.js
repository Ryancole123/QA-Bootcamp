

let object1 = fetch("http://localhost:3000/seller")
object1.then((response) => {
            if(response.status==200){
                let object2 = response.json()
                object2.then((records) => records.map((rec) => console.log(rec.firstName))                )
            }})


//----------------------------------------------------------------------------------------------------


data = {
    "firstName" : "DWP-Shafeeq",
    "surname": "DWP-Khan",
    "adddress": "Manchester, UK"
}

function processResponse(resp){
    console.log("done");
    
}

let postObject = fetch("http://localhost:3000/seller",{
    method:"POST",
    headers:{"Content-Type": "application/json"},
    body:JSON.stringify(data)
})
postObject.then(processResponse)