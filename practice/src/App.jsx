import React, { useState } from 'react';

const App=()=>{
  const [black,setblack]=useState(true);
  const change=()=>{
    setblack(!black)
  }
  const one={
    backgroundColor:"black",
  color:'white'
  }
  const two={
    backgroundColor:"white",
  color:'black'
  }
  return(
    <>
    <h1 style={black?one:two}>hello</h1>
  <button onClick={change}>change</button>
  </>
  )
  };
     
export default App;