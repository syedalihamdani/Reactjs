 import React from 'react';
 import ReactDom from 'react-dom';
 const img1='https://picsum.photos/500';
 const img2='https://picsum.photos/200/300';
 const com='yess';
 const net=()=>{
   return(
     <img src={img1} alt="Nothing"/>
   )
 }
 const wet=()=>{
   return(
     <img src={img2} alt="What is Coming"/>
   )
 }
 ReactDom.render(
   <>
   {/* This is Ternary Operator. */}
   {com==='yes'? <img src={img1}/>:<img src={img2}/>}
   {com==='yes' ? <img src={img2}/>:<img src={img1}/>}
   {com==='yes' ? <img src={img1}/>:<img src={img2}/>}
   </>,
   document.getElementById('root')
 )