import {Routes,Route} from "react-router-dom"
import './App.css'
import Layout from "./Layout"
import Home from "./Files/Home"
import AdminRegistration from "./Files/AdminRegistration"
import AdminLogin from "./Files/AdminLogin"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/adminregistration" element={<AdminRegistration/>} />
        <Route path="/adminlogin" element={<AdminLogin/>} />
        </Route>
      </Routes>
    </>
  )
}

export default App
