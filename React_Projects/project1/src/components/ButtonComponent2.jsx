import {useState} from "react"


let ButtonComponent2 = ()=>{

    let [counter, setCounter] = useState(10)
    

    let increment = () => setCounter(counter+3)
    

    return(
        <>
        {counter}
        <br/>
        <input type="button" value="OK" onClick={increment}/>
        <input type="button" value="INC-2" onClick={() => setCounter(counter+5)}/>
        </>
    )

}
export default ButtonComponent2