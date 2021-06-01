import React, { useEffect, useState } from 'react';

const style3={
  position:"absolute",
  right:"5px",
  top:"8%",
  listStyle:"none"
};

const listStyle={
  textAlign:"center",
  background:"white",
  borderRadius:"8px",
  borderBottom:"8px",
  padding:"5px",
};

const List=({style})=>{
  return  (<ul style={style}
  >
  <li style={listStyle}>Home</li>
  <li style={listStyle}>About</li>
  <li style={listStyle}>Services</li>
  <li style={listStyle}>Contact Us</li>
  </ul>
  )
};

const Mobilelist=()=>{
  const [active,setactive]=useState(false);
  return(
    <>
    <button style={{
      width:"50%",
      justifySelf:"end"
    }} onClick={()=>{
      setactive(!active)
    }

    }
    >
      {active ? "Close" : "Show"}Menu
    </button>
    {active && <List style={style3}/>}
    </>
  )
}

const Navbar=()=>{
const [ismoblie,setismobile]=useState(
  window.matchMedia('(max-width:768px)').matches
);
 useEffect(()=>{
   window.addEventListener("resize",()=>{
     setismobile( window.matchMedia('(max-width:768px)').matches);
   })
 })
  return(
    <>
    <nav style={{
      display:'grid',
      gridTemplateColumns:'50% 50%',
      alignItems:'center'
    }}>
      <h1>Brand logo</h1>
      {ismoblie ? <Mobilelist/> : <List
      style={{
        display:'flex',
        justifyContent:"space-between",
        listStyle:"none",
        paddingRight:"10px"
    
      }

      }
      />}
     
    </nav>
    </>
  )
}
export default Navbar;