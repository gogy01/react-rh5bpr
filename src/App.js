import React from "react";
import "./style.css";
import Home from './components/Home'
import Contact from './components/Contact'
import About from './components/About'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Navbar from './components/Navbar'
export default function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/about" element={<About/>}/> 
          </Routes>
      </Router>
    </div>
  );
}



