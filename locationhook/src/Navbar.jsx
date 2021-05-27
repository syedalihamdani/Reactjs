import React from 'react';
import './Navbar.css';
import {NavLink} from 'react-router-dom';


const Navbar=()=>{
    return(
        <>
        <NavLink exact activeClassName='homelink' className='link' to="/">Home</NavLink>
        <NavLink activeClassName='homelink' className='link' to="/about">About</NavLink>
        <NavLink activeClassName='homelink' className='link' to="/contact">Contact Us</NavLink>
        <NavLink activeClassName='homelink' className='link' to="/welcome/Syed ali/Hamdani">Welcomeing</NavLink>
        </>
    )
}
export default Navbar;