import {BrowserRouter, Routes, Route, Link} from "react-router-dom"
import AboutUs from "./AboutUs"
import Services from "./Services"
import Employees from "./Employees"
import Profile from "./Profile"
import EmployeesList from "./EmployeesList"
//import EmployeeProfile from "./EmployeeProfile"
import FetchGet from "./FetchGet"
import Properties from "./Properties"

function App() {

  return (
    <>
      <h2>My New Project</h2>
      <BrowserRouter>
      <Link to="/about">About us</Link><br/>
      <Link to="/services">Sercives</Link><br/>
      <Link to="/list">Employee List</Link><br/>
      <Link to="/sellers">Sellers</Link><br/>
        <Routes>
          <Route path="/about" element={<AboutUs/>}/>
          <Route path="/services" element={<Services/>}/>
          <Route path="/employee-info/:ename/:address" element={<Employees/>}/>
          <Route path="/profile/:num" element={<Profile/>}/>
          <Route path="/list" element={<EmployeesList/>}/>
          <Route path="/emp-profile/:eno" element={<Profile/>}/>
          <Route path="/sellers" element={<FetchGet/>}/>
          <Route path="/properties/:id" element={<Properties/>}/>
        </Routes>
      </BrowserRouter><br/><br/>

    </>
  )
}

export default App
