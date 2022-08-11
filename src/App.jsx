import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { HashRouter, Route, Routes } from 'react-router-dom'
import { Home, Login, ProductDetail, Purchases, Estatus } from "./pages";
import { NavBar, LoadingScreen, ProtectedRoutes } from "./components";
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
        <Route path='/Estatus' element={<Estatus/>}/>
        <Route element={<ProtectedRoutes />}>
        <Route path='/Purchases' element={<Purchases/>}/>
        </Route>
      </Routes>
    </HashRouter>
  )
}

export default App
