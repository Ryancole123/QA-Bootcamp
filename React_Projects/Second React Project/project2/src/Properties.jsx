import { useParams } from "react-router-dom"
import { useState } from "react"

let Properties = () => {

    let {id} = useParams()

    let [properties, setProperties] = useState([])


    let processData = (records) => {
        setProperties(records)
        
    }


    let processResp = (response) => {
        let obj2 = response.json()
        obj2.then(processData)
    }

    let getData = () =>{
        let fetchObj = fetch("http://localhost:3000/property")
        fetchObj.then(processResp)

    }




    let prop =  properties.filter((x) => x.sellerId == id)
    getData()
    return(
        <>
        <h2>List of properties</h2>

        Address: {prop[0].address}

        </>

    )

}
export default Properties