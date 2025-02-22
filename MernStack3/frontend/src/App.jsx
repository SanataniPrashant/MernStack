import { BrowserRouter, Routes, Route } from "react-router-dom";

import '@ant-design/v5-patch-for-react-19';
import Salary from "./files/SalarySum";
import Home from "./files/Home";
import Insert from "./files/InsertEmp";
import Display from "./files/Display";
import Search from "./files/SearchEmp";
import Update from "./files/Upsate";
import Layout from "./Layout";
import EmpEdit from "./files/Edit";

function App () {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>} />
            <Route path="home" element={<Home/>}/>
            <Route path="insert" element={<Insert/>}/>
            <Route path="display" element={<Display/>}/>
            <Route path="salarysummary" element={<Salary/>}/>
            <Route path="search" element={<Search/>} />
            <Route path="update" element={<Update/>}/>
            <Route path="/empedit/:id" element={<EmpEdit />}/> 
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
