import React from 'react';
import './Navbar.css';
import {NavLink} from 'react-router-dom';



const Navbar=()=>{
    return(
        <>
        <NavLink exact activeClassName="active_class" className="link" to="/">Home</NavLink>
        <NavLink exact activeClassName="active_class" className="link" to='/about'>About</NavLink>
        <NavLink exact activeClassName="active_class" className="link" to="/servious">Servious</NavLink>
        <NavLink exact activeClassName="active_class" className="link" to="/about/no">Noway</NavLink>
        </>
    )
}
export default Navbar;