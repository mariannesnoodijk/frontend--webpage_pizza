import { useState } from 'react'
import './App.css'
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Menu from "./pages/Menu.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";

function App() {

  return (
    <>
        <div className="App">
            <Navbar />
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/menu" element={<Menu/>} />
                <Route path="/about" element={<About/>} />
                <Route path="/contact" element={<Contact/>} />
            </Routes>
            <Footer />
        </div>
    </>
  )
}

export default App
