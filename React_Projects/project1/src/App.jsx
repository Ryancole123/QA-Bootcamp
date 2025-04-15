import SalarySlip from "./components/HRComponents/SalarySlip"
import Account from "./components/AccountsComponents/Account"

function App() {

  return (
    <div>
      <h1>Employee Information System</h1>
      <SalarySlip ename="James Bond" address="London, UK" salary="20000"/>
      <SalarySlip ename="Robb Stark" address="Winterfell" salary="10"/>
      <Account/>
    </div>

  )
}

export default App
