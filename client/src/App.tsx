//Libs
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import React from 'react'

//Pages
import Register from './components/pages/Register'
import Home from './components/pages/Home'
import About from './components/pages/About'
import Apply from './components/pages/Apply'
import Login from './components/pages/Login'
import Perfil from './components/pages/Perfil'
import Restaurants from './components/pages/Restaurants'
import Payment from './components/pages/Payment'
import Coffee from './components/pages/Coffee'
import Footer from './components/layout/Footer'
import Container from './components/layout/Container'
import Info from "./components/pages/Info"
import News from "./components/pages/News";
import InfoCoffee from './components/pages/InfoCoffee'

//Layout
import Header from './components/layout/Header'





const App = () => {
  return (
    <Router>
      <Header/>
      <Container styleProp="bg-gray-50">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/apply" element={<Apply/>}/>
          <Route path="/info" element={<Info/>}/>
          <Route path="/restaurants" element={<Restaurants/>}/>
          <Route path="/coffee" element={<Coffee/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/payment" element={<Payment/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/perfil" element={<Perfil/>}/>
          <Route path="/news" element={<News/>}/>
          <Route path="/infoCoffee/:coffeeId/:coffeeId" element={<InfoCoffee/>}/>
          {/* <Route path="/infoCoffee/:coffeeId" element={<InfoCoffee/>}/> */}
        </Routes>
      </Container>
      <Footer/>
    </Router>
  );
}

export default App

