//Libs
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import React, { useState, useEffect } from 'react'

//Pages
import Register from './components/pages/Register';
import Home from './components/pages/Home';
import About from './components/pages/About'
import Apply from './components/pages/Apply'
import Login from './components/pages/Login'
import Perfil from './components/pages/Perfil'
import Info from './components/pages/Info'
import Payment from './components/pages/Payment'
import Coffee from './components/pages/Coffee'
import Footer from './components/layout/Footer'
import Container from './components/layout/Container';

//Layout
import Header from './components/layout/Header'


function App() {
  return (
    <Router>
      <Header/>
      <Container style="items-center justify-center flex-col" >
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/apply" element={<Apply/>}/>
          <Route path="/info" element={<Info/>}/>
          <Route path="/coffee" element={<Coffee/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/payment" element={<Payment/>}/>
          <Route path="/register" element={<Register/>}/>
        </Routes>
      </Container>
      <Footer/>
    </Router>
  );
}

export default App

