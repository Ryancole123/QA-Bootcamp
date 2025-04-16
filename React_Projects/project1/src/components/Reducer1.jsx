import {useReducer} from "react"


function reducer(state,action){
    switch(action){
        case "one":return state+1
        case "ten":return state+10
        case "hundred":return state+100
        case "thousand":return state+1000
    }
    
    // if(action=="one"){return state+1}
    // if(action=="ten"){return state+10}
    // if(action=="hundred"){return state+100}
    // if(action=="thousand"){return state+1000}
    
}

let Reducer1 = () =>{


    let [data, setData] = useReducer(reducer, 10)


    return(
        <>
        <h2>Example of useReducer</h2>
        {data} <br/>
        <input type="button" value="A" onClick={() => setData("one")} />
        <input type="button" value="B" onClick={() => setData("ten")} />
        <input type="button" value="C" onClick={() => setData("hundred")} />
        <input type="button" value="D" onClick={() => setData("thousand")} />
        </>

    )

}
export default Reducer1