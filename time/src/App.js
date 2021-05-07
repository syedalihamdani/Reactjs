 import React,{useState} from 'react';
 const App=()=>{
   const time=new Date().toLocaleTimeString();
   const [current,update]=useState(time);
   const currenttime=()=>{
     update(new Date().toLocaleTimeString());
   }
   return(
     <>
     <h1>{current}</h1>
     <button onClick={currenttime}>Current time</button>
     </>
   )
 }
 export default App;