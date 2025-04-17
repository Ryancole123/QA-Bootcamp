import { useParams } from "react-router-dom"

const EmployeeProfile = () =>{


    let {eno} = useParams()

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

        let employee =  employees.filter((x) => x.empno == eno)


    return(

        <>
        <h3>Employee's Profile</h3>
        Name: <b>{employee[0].ename}</b><br/>
        Salary: <b>{employee[0].esal}</b><br/>
        Address: <b>{employee[0].address}</b><br/>
        </>

    )

}
export default EmployeeProfile