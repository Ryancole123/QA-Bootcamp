import { useParams } from "react-router-dom"

 
const Profile=()=>{
 
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
                <h2> Employee's Profile</h2>
     
                Name:{employee[0].ename}
                <br/>
                Address:{employee[0].address}
                <br/>
                Salary:{employee[0].esal}
                <br/>
            </>
        )
    }
     
    export default Profile
     