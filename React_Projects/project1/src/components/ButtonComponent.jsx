import {useState} from "react"
import ButtonComponent2 from "./ButtonComponent2"


function ButtonComponent(){

    let [counter, setCounter] = useState(10)
    

    let increment = () => setCounter(counter+1)
    

    return(
        <>
        {counter}
        <br/>
        <input type="button" value="OK" onClick={increment}/>
        <input type="button" value="INC-2" onClick={() => setCounter(counter+2)}/>
        <br />
        <ButtonComponent2/>
        </>
    )

}
export default ButtonComponent