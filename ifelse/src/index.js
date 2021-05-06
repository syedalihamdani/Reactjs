 import React from 'react';
 import ReactDom from 'react-dom';
 const say='no';
 const imge='./smile.jpg';
 const imgr='./sad.jpg';
 const show=()=>{
   if(say==='yes'){
     return imge;
   }else{
     return imgr;
   }
 }
 ReactDom.render(
   <>
   <img src={show()} alt="Comfirmation"/>
   </>,
   document.getElementById('root')
 )