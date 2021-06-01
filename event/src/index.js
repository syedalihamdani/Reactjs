 import React,{useState} from 'react';
 import ReactDom from 'react-dom';
 import './index.css';
const Event=()=>{
  const [bg,newbg]=useState('#d2bcd8');
  const change=()=>{
    const gr='skyblue';
    newbg(gr);
  }
  return(
    <>
    <div className='outer'>
      <div className='inner'>
        <div className='container'>


    <div className='box' style={{backgroundColor:bg}}>
   </div>
   <div className='box' style={{backgroundColor:bg}}>
   </div>
   <div className='box' style={{backgroundColor:bg}}>
     
   </div>
        </div>
   <button onMouseDown={change}>Change</button>
      </div>
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
 