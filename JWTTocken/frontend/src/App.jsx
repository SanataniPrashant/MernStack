import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./files/home";
import Registration from "./files/Registration";
import Login from "./files/Login";
import DashBoard from "./Dashboard";

const App=()=>{
  return(
    <>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>} />
          <Route path="home" element={<Home/>} />
          <Route path="registration" element={<Registration/>}/> 
          <Route path="login" element={<Login/>}/>   
        </Route>
        </Routes>
         <Routes>
           <Route path="dashboard" element={<DashBoard/>}>
           </Route>
         </Routes>
    </>
  )
}
export default App;