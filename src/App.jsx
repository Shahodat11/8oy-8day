import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/home/Home'
import CreateProduct from './pages/create-product/CreateProduct';


function App() {
  const [count, setCount] = useState(0)
  return (
    <>
    <div>
      <h2>CreateProduct</h2>
      <Link to={"/"}>Home</Link>
      <Link to={"/create-product"}>create-product</Link>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/create-product' element={<CreateProduct/>}/>
      </Routes>
    </div>
    </>
  )
}

export default App
