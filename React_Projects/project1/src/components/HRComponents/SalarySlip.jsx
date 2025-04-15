

function SalarySlip(props){
    // let employeeName = "Ryan";
    // let employeeAddress = "292947729 Street"

    return(
        <div>
            {/* <h3><u>Personal details</u></h3>
            Employee name: {employeeName}<br/>
            Employee address: {employeeAddress} */}
            <b>Personal Information</b>
            <table border='1'>
                <tr>
                    <td>Name</td>
                    <td>{props.ename}</td>
                </tr>
                <tr>
                    <td>Address</td>
                    <td>{props.address}</td>
                </tr>
                <tr>
                    <td>Salary</td>
                    <td>{props.salary}</td>
                </tr>
                <tr>
                    <td>Tax</td>
                    <td>{props.salary * 21/100}</td>
                </tr>
                <tr>
                    <td>Net Salary</td>
                    <td>{props.salary - (props.salary * 21/100)}</td>
                </tr>
            </table>

        </div>
    )
}

export default SalarySlip;