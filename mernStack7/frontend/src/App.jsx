import { Routes,Route } from 'react-router-dom';
import './App.css'
import '@ant-design/v5-patch-for-react-19';
import Layout from './Layout';
import Home from './Files/Home';
import DoctorLogin from './Files/DoctorLogin';
import SearchDoctor from './Files/SearchDoctor';
import DoctorDashBoard from './DoctorDashboard';
import PatientAppointment from './Files/PatientAppoinment';
import MyPatient from './Files/MyPatient';

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<Home/>} />
        <Route path='doctorlogin' element={<DoctorLogin/>} />
        <Route path='searchdoctor' element={<SearchDoctor/>} />
        <Route path="patientapp/:id" element={<PatientAppointment/>} />
        </Route>
      </Routes>
      <Routes>
         <Route path="doctordashboard" element={<DoctorDashBoard/>}>
         <Route path="mypatient" element={<MyPatient/>}/>
         </Route>
      </Routes>
    </>
  )
}

export default App
