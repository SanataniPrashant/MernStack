import {Routes,Route} from "react-router-dom"
import './App.css'
import Layout from "./Layout"
import Home from "./Files/Home"
import AdminRegistration from "./Files/AdminRegistration"
import AdminLogin from "./Files/AdminLogin"
import AdminDashboard from "./AdminDashboard"
import ProtectedRoute from './ProtectedRoute';
import About from "./Files/About"
import AdminProfile from "./Files/AdminProfile"
import Inquiries from "./Files/Inquiries"
import AddVehicle from "./Files/AddVehicle"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/adminregistration" element={<AdminRegistration/>} />
        <Route path="/adminlogin" element={<AdminLogin/>} />
        <Route path="/about" element={<About/>}/>
        </Route>
      </Routes>
      <Routes>
          <Route path="/admindashboard" element={<ProtectedRoute><AdminDashboard/></ProtectedRoute>}>
          <Route index element={<AdminProfile/>}/>
          <Route path="adminprofile" element={<AdminProfile/>}/>
          <Route path="inquiries" element={<Inquiries/>}/>
          <Route path="addvehicle" element={<AddVehicle/>}/>
          
          </Route>
      </Routes>
    </>
  )
}

export default App
