import {BrowserRouter, Routes, Route, Link} from "react-router-dom"
import AboutUs from "./AboutUs"
import Services from "./Services"

function App() {

  return (
    <>
      <h2>My New Project</h2>
      <BrowserRouter>
      <Link to="/about">About us</Link><br/>
      <Link to="/services">Sercives</Link>
        <Routes>
          <Route path="/about" element={<AboutUs/>}/>
          <Route path="/services" element={<Services/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
