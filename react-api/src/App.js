 import React, { useEffect, useState } from 'react';
 import axios from 'axios';
 import './App.css';

 const App=()=>{
     const [num,setnum]=useState();
     const [name,setname]=useState();
     const [moves,setmoves]=useState();

     useEffect(()=>{
         async function getdata(){
             const res=await axios.get(` https://pokeapi.co/api/v2/pokemon/${num}`)
            //  console.log(res.data.name);
             setname(res.data.name);
             setmoves(res.data.moves.length);
         }
         getdata();
     })

     const ok=(event)=>{
         setnum(event.target.value)
     }
     return(
         <>
          <h1>You have selected<span style={{color:'red'}}> {num} number pokimon</span> </h1>
          <h1>My name is <span style={{color:'red'}}>{name}</span></h1>
          <h1>I have <span style={{color:'red'}}>{moves} moves</span></h1>
         <select value={num} onChange={ok}>
             <option value="1">1</option>
             <option value="25">25</option>
             <option value="3">3</option>
             <option value="4">4</option>
             <option value="5">5</option>
         </select>
         </>
     )
 }
 export default App;