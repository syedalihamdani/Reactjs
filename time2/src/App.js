import React,{useState} from 'react';
const App=()=>{
  const time=new Date().toLocaleTimeString();
  const [current,update]=useState(time);
  const currenttime=()=>{
    update(new Date().toLocaleTimeString());
  }
  setInterval(currenttime,1000);
  return(
    <>
    <h1>{current}</h1>
    </>
  )
}
export default App;