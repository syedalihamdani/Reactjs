 import React, { useEffect, useState } from 'react';
 import './App.css';

 const App=()=>{
     const [num,setnum]=useState(0);
     useEffect(()=>{
         document.title=`Change in title ${num}`
     })
     const change=()=>{
         setnum(num+1)
     }
     return(
         <>
         <button onClick={change}>Change title</button>
         </>
     )
 }

 export default App;