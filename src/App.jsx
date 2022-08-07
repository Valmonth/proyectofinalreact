import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { HashRouter, Route, Routes } from 'react-router-dom'
import { Home, Login, ProductDetail,Purchases } from "./pages";
import { NavBar, LoadingScreen } from "./components";
import { useSelector } from 'react-redux';
function App() {
  
  const isLoading = useSelector(state => state.isLoading)

  return (
    <HashRouter>
      <NavBar />
      {isLoading && <LoadingScreen/> }
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/productDetail/:id' element={<ProductDetail/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/Purchases' element={<Purchases/>}/>
      </Routes>
    </HashRouter>
  )
}

export default App
