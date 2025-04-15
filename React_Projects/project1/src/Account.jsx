

function Account(){
    let salary = 400000;
    let tax = 40000;

    return(
        <div>
            <h3><u>Account information</u></h3>
            Salary: £{salary}<br/>
            Tax: £{tax}<br/>
            Net pay after tax: £{parseInt(salary) - parseInt(tax)}
        </div>
    )
}

export default Account;