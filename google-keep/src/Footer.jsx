import React from 'react';
import './Footer.css';

const Footer=()=>{
    const year=new Date().getFullYear();
  return(
    <>
    <div className="footer">
    <h5> Copy Right &copy;{year}; All rights are reserved</h5>
    </div>
    </>
  )
}
export default Footer;