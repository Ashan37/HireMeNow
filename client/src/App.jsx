import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signin from './pages/Signin'
import Home from './pages/Home'
import Signup from './pages/Signup'
import Contact from './pages/Contact'
import About from './pages/About'
import aftersignin from './pages/aftersignin';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/signin" element={<Signin/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/aftersignin" element={<aftersignin.jsx/>} />
        
      </Routes>
    </Router>
  )
}

export default App;
