import { Routes,Route } from 'react-router-dom';
import './App.css'
import '@ant-design/v5-patch-for-react-19';
import Layout from './Layout';
import Home from './Files/Home';
import DoctorLogin from './Files/DoctorLogin';
import SearchDoctor from './Files/SearchDoctor';
import DoctorDashBoard from './DoctorDashboard';

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<Home/>} />
        <Route path='doctorlogin' element={<DoctorLogin/>} />
        <Route path='searchdoctor' element={<SearchDoctor/>} />
        </Route>
      </Routes>
      <Routes>
         <Route path="doctordashboard" element={<DoctorDashBoard/>}>
         
         </Route>
      </Routes>
    </>
  )
}

export default App
