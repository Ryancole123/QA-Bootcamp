import ButtonComponent from "../ButtonComponent"

function tax(salary){
    let tax1=0
    if (salary<10000) {
        tax1=0
    }
    if (salary>=10000 && salary<20000){
        tax1=salary*15/100
    }
    if(salary>=20000){
        tax1=salary*25/100
    }
 
    return tax1
}
 
 
function SalarySlip1(props){
    return(
        <>
        <b> Personal Information:{props.ename}</b>
        <table border="1">
            <tr>
                <td> Name:</td>
                <td> {props.ename}</td>
            </tr>
            <tr>
                <td> Address :</td>
                <td> {props.address}</td>
            </tr>
            <tr>
                <td> Salary :</td>
                <td> {props.salary}</td>
            </tr>
            <tr>
                <td> Tax :</td>
                <td> <b>{tax(props.salary)} </b></td>
            </tr>
            <tr>
                <td> Net Salary :</td>
                <td> <b>{props.salary - tax(props.salary)} </b></td>
            </tr>
        </table>
        <ButtonComponent/>
        </>
    )}
export default SalarySlip1