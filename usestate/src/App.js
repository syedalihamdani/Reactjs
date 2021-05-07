 import React,{useState} from 'react';
 import './App.css';

 const App=()=>{
  // const state=useState();
  // console.log(state);
  const [count,setcount]=useState(0);
  const incume=()=>{
    setcount(count+1);
  }  
   return(
     <>
     <h1>{count}</h1>
    <button onClick={incume}>Click Me</button> 
     </>
   )
 }
 export default App;