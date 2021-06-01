 import React from 'react';
 import './index.css';
 import ReactDom from 'react-dom';
 const Slot=()=>{
 const a=Math.floor((Math.random()*3)+1);
 const x="🍎";
 const y='🍌';
 const z='🍇';
 if(a===1){
   return x;
 }else if(a===2){
   return y;
 }else{
   return z;
 }
}
const reload=()=>{
  window.location.reload();
}
 ReactDom.render(
   <>
   <div className='outer'>
     <div className='inner'>
   <h1>SLOT MACHINE GAME</h1>
  <h1>{Slot()} {Slot()} {Slot()}</h1>
  <h1>{Slot()} {Slot()} {Slot()}</h1>
  <h1>{Slot()} {Slot()} {Slot()}</h1>
  <button onClick={()=>reload()}>slot</button>
     </div>
   </div>
  </>,
document.getElementById('root')
 )