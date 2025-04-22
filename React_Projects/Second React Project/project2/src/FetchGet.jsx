import { useState } from "react";
import { Link } from "react-router-dom";

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

    getData()
    return(
        <>
        <h3>List of Sellers</h3>

        {
        sellers.map((seller) => 
        <div>
            {seller.firstName} {seller.surname} - <Link to={`/properties/${seller.id}`}>Properties</Link>
        </div>)
        }

        
        </>

    )


}
export default FetchGet