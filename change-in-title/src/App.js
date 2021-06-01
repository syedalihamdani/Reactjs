 import React, { useEffect, useState } from 'react';
 import './App.css';

 const App=()=>{
     const [num,setnum]=useState(0);
     useEffect(()=>{
         document.title=`Change number ${num}`
     })
     const change=()=>{
         setnum(num+1)
     }
     return(
         <>
         <div>
         <h1>Push this button to change the number in title</h1>
         <button onClick={change}>Change title</button>
         </div>
         </>
     )
 }

 export default App;