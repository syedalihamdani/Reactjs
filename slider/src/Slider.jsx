 import React, { useState } from 'react';
 import  './styles.css';
 import image0 from './images/0.jpg';
 import image1 from './images/1.jpg';
 import image2 from './images/2.jpg';
 
 
   const Slider=()=>{

   return (
     <>
       <div className="container">
  <div className="wrapper">
    <div className="slider-holder">
      <div id="slider_image_1"><img src={image0} alt='1' /> </div>
      <div id="slider_image_2"><img src={image1} alt='1'/></div>
      <div id="slider_image_3"><img src={image2} alt='1' /></div>
    </div>
  </div>
  <div className="button-holder">
    <a href="#slider_image_1" className="dots" />
    <a href="#slider_image_2" className="dots" />
    <a href="#slider_image_3" className="dots" />
  </div>
</div>

     </>
   )
 }
 
 export default Slider;
 