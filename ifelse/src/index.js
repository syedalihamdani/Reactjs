 import React from 'react';
 import './index.css';
 import ReactDom from 'react-dom';
 const say=prompt('Are you happy.say yes or no','yes');
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
   <div>

   <img src={show()} alt="Comfirmation"/>
   </div>
   </>,
   document.getElementById('root')
 )