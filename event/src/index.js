 import React,{useState} from 'react';
 import ReactDom from 'react-dom';
 import './index.css';
const Event=()=>{
  const [bg,newbg]=useState('red');
  const change=()=>{
    const gr='skyblue';
    newbg(gr);
  }
  return(
    <>
    <div style={{backgroundColor:bg}}>
     <h3 >Hello</h3>
     <button onClick={change}>Click Me</button>
   </div>
   <div style={{backgroundColor:bg}}>
     <h3 >Hello</h3>
     <button onMouseOver={change}>Click Me</button>
   </div>
   <div style={{backgroundColor:bg}}>
     <h3 >Hello</h3>
     <button onMouseDown={change}>Click Me</button>
   </div>
   </>
  )
}
 ReactDom.render(
   <>
   <Event/>
   </>,
   document.getElementById('root')
 )
 