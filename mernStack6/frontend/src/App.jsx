import { Routes, Route } from 'react-router-dom'
import './App.css'
import Layout from './Layout'
import Home from './Files/Home'
import Insert from './Files/InsertAuthor'
import Display from './Files/DisplayAuthor'
import Addbook from './Files/Addbook'

function App() {

  return (
    <>
     <Routes>
      <Route path="/" element={<Layout />}>
      <Route index element={<Home/>}/>
      <Route path='home' element={<Home/>}/>
      <Route path='insert' element={<Insert/>}/>
      <Route path='display' element={<Display/>}/>
      <Route path="/addbook/:id" element={<Addbook/>}/>
      
      </Route>
     </Routes>
    </>
  )
}

export default App
