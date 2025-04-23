import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"

let Properties = () => {

    let {id} = useParams()

    let [properties, setProperties] = useState([])


    let processData = (records) => {      
        setProperties(records.filter((x) => x.sellerId == id))
        
    }


    let processResp = (response) => {
        let obj2 = response.json()
        obj2.then(processData)
    }

    let getData = () =>{
        let fetchObj = fetch("http://localhost:3000/property")
        fetchObj.then(processResp)

    }


    useEffect(getData)
    return(
        <>
        <h2>List of properties</h2>

        Address: {
            properties.map((property) => <div>{property.address}</div>)
        }

        </>

    )

}
export default Properties