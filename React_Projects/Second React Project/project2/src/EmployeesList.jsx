import { Link } from "react-router-dom"

let EmployeesList = () => {
    let employees=[
        {
            empno:201,
            ename:"Shafeeq",
            esal:3000,
            address:"Manchester"
        },
        {
            empno:202,
            ename:"James",
            esal:13000,
            address:"London"
        },
        {
            empno:203,
            ename:"Peter",
            esal:35000,
            address:"leeds"
        },
        {
            empno:204,
            ename:"Walter White",
            esal:400000,
            address:"Alberquerque"
        },
        ]
    return(

        <>
        <br/>{
            employees.map( (rec) => 
            <div>
                
                <Link to={`/emp-profile/${rec.empno}`}>{rec.ename}</Link>
            </div>)
        }
        
        </>

    )

}
export default  EmployeesList