import {useParams} from "react-router-dom"

const Employees = () => {

    let {ename, address} = useParams()


    return(


        <>
        <h2>Employee Information</h2>
        Name: <b>{ename}</b>
        <br/>
        Address: <b>{address}</b>
        
        </>
    )


}

export default Employees