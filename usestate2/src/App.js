 import React,{useState} from 'react';

 const App=()=>{
   const [Count,setCount]=useState(0)
  //  useState S is capital.Always remember.
   const Increment=()=>{
     setCount(Count+1)
   }
   const Decrement=()=>{
     setCount(Count-1)
   }

   return(
     <>
     <h1>{Count}</h1>
     <button onClick={Increment}>Increment++</button>
     <button onClick={Decrement}>Decrement++</button>
     </>
   )
 }
 export default App;