import React,{useState} from 'react';
import './App.css';
const App=()=>{
  const time=new Date().toLocaleTimeString();
  const [current,update]=useState(time);
  const currenttime=()=>{
    update(new Date().toLocaleTimeString());
  }
  setInterval(currenttime,1000);
  return(
    <>
    <div className='outer'>
      <div className='inner'>
    <h1>{current}</h1>
      </div>
    </div>
    </>
  )
}
export default App;