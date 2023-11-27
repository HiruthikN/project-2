/* eslint-disable no-unused-vars */
import { useState } from 'react'
import './App.css'
import Home from "./Pages/home";
import Login from "./Pages/login";
import Scss from "./Pages/scss";
import { Route,Routes } from 'react-router-dom';
function App() {

  return (
    <>
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/scss" element={<Scss />} />
      </Routes>
    </>
  )
}

export default App
