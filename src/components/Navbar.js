import React from 'react';
import {Link} from 'react-router-dom'

export default function Navbar(){
  return(
    <nav>
      <Link to="/about" className="link-style">
        about</Link>
        &nbsp;&nbsp;&nbsp;
        <Link to="/">Home</Link>
        &nbsp;&nbsp;&nbsp;
        <Link to ="/contact">Contact</Link>


      </nav>

  );

}