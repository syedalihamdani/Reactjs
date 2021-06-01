 import React,{useState} from 'react';
 import './App.css';

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
     <div className='outer'>
       <div className='inner'>
     <h1>{Count}</h1>
     <button onClick={Increment}>Increment++</button>
     <button onClick={Decrement}>Decrement++</button>
       </div>
     </div>
     </>
   )
 }
 export default App;