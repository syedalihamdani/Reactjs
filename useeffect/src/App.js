 import React, { useEffect, useState } from 'react';
 import './App.css';
 const App=()=>{
   const [num,setnum]=useState(0);
   const [nums,setnums]=useState(100);
  //  This useEffect will run every time when render method call.Whenever we clicked on every 
  // button.
  //  useEffect(()=>{
  //    alert("Clicked")
  //  })

  // This will work on first clicked only
  // useEffect(()=>{
  //   alert("Clicked")
  // },[])

// This will run on when num value will changed.
  useEffect(()=>{
    alert("Clicked")
  },[num])

   const addintion=()=>{
     setnum(num+1)
   }

   const subtraction=()=>{
    setnum(num-1)
  }
  const multication=()=>{
    setnums(nums*2)
  }
  const division=()=>{
    setnums(nums/2)
  }
   return(
     <>
     <button onClick={addintion}>Click Me {num}</button>
     <button onClick={subtraction}>Click Me {num}</button>
     <button onClick={multication}>Click Me {nums}</button>
     <button onClick={division}>Click Me {nums}</button>
     </>
   )
 }
 export default App;