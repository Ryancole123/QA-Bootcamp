import { useReducer } from "react"

let NewReducer = () => {

    function reducer(state, action){
        let newState = {
            empno:state.empno,
            ename:state.ename,
            esal:state.esal
        }
        switch(action){
            case "increase": newState.esal += 1000; break
            case "decrease": newState.esal -= 1000; break
        }
        return newState
    }
    let employee = {
        empno:101,
        ename:"Ryan",
        esal:15000
    }
    let [record, setRecord] = useReducer(reducer,employee)


    return(

        <>
        <h3>Second example of Reducer</h3>
        Employee no:{record.empno}<br/>
        Employee name:{record.ename}<br/>
        Employee salary:{record.esal}<br/>
        <input type="button" value="Increment Salary" onClick={() => setRecord("increase")} />
        <input type="button" value="Decrement Salary" onClick={() => setRecord("decrease")} />
        </>
    )


}

export default NewReducer