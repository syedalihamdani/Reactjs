import React from 'react';
import './Header.css';
import logo from './photos/logo.jpg';

const Header=()=>{
  return(
    <>
        <div className="items">  
        <img src={logo} alt="logo" width="50" height="50"/>
        <h1>Ali Keep</h1>
        </div>
    </>
  )
}
export default Header;