import SalarySlip from "./components/HRComponents/SalarySlip"
import Account from "./components/AccountsComponents/Account"
import SalarySlip1 from "./components/HRComponents/SalarySlip1"
import ButtonComponent from "./components/ButtonComponent"
import Data from "./components/Data"
import Employees from "./components/Employees"
import Reducer1 from "./components/Reducer1"
import NewReducer from "./components/NewReducer"

function App() {





  return (
    // <div>
    //   <h1>Employee Information System</h1>
    //   <SalarySlip ename="James Bond" address="London, UK" salary="20000"/>
    //   <SalarySlip ename="Robb Stark" address="Winterfell" salary="10"/>
    //   <SalarySlip1 ename="Walter White" address="Aberquerque" salary="800000"/>
    //   <Account/>
    //   {/* <ButtonComponent/> */}
    // </div>

    <>
    <Data/>
    <hr/>
    <Employees/>
    <Reducer1/>
    <NewReducer/>
    </>
  )
}

export default App
