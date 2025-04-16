// import { useState } from "react"

// let Employees = () =>{

//     let recs = [
//         {
//             empno: 87104,
//             name: "Walter H. White",
//             esal: 1000000
//         },
//         {
//             empno: 64,
//             name: "Lionel Messi",
//             esal: 100
//         },
//         {
//             empno: 100,
//             name: "Ryan Cole",
//             esal: 10000            
//         }
//     ]

//     let [data, setData] = useState(recs)

//     function addNewRecord(){
//         let employee = {
//             empno:1001,
//             name:"Dexter Morgan",
//             esal:50000
//         }
//         setData([...data,employee])
//     }


//     return(
//         <>
//         <h3>List of Employees</h3>
//         <input type="button" value="Add employee" onClick={()=>addnewRecord()} />
//         {recs.map((emp) => 
//             <div>
//             {emp.empno}, {emp.name}, {emp.esal}
//             </div>
//         )}
//         </>
//     )

// }
// export default Employees

import {useState} from "react"
 
let Employees = ()=>{
 
 
    let employees=[
 
                    {
                        empno:201,
                        ename:"Shafeeq",
                        esal:2000
                    },
                    {
                        empno:202,
                        ename:"PEter",
                        esal:4000
                    },    
                    {
                        empno:203,
                        ename:"JAmes",
                        esal:14000
                    }
    ]
 
    let [records,setRecords]= useState(employees)
    function addnewRecord(){
 
        let employee= {
            empno:111,
            ename:"Peter pan",
            esal:999
        }
 
        setRecords([...records,employee])
 
    }
    return(
        <>
        <input type="button" value="Add Employee" onClick={()=>addnewRecord()}/>
        <h2> List OF EMployees</h2>
        {
            records.map( (rec)=>
            <div>
                {rec.empno},{rec.ename},{rec.esal}
            </div>)
       
        }
        </>
    )
}
 
export default Employees