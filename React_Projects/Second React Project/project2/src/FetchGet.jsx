import { useState } from "react";

let FetchGet = () =>{

    let [sellers, setSellers] = useState([])


    let processData = (records) => {
        setSellers(records)
        
    }


    let processResp = (response) => {
        let obj2 = response.json()
        obj2.then(processData)
    }

    let getData = () =>{
        let fetchObj = fetch("http://localhost:3000/seller")
        fetchObj.then(processResp)

    }

    return(
        <>
        <h3>Getting Seller information</h3>
        <input type="button" value="Get Data" onClick={() => getData()} />
        {
        sellers.map((seller) => 
        <div>
            {seller.firstName},
            {seller.surname}
        </div>)
        }

        
        </>

    )


}
export default FetchGet