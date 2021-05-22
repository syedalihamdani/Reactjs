 import React, { createContext } from 'react';
 import './App.css';
 import ComA from './ComA';

 const fname=createContext();
 const mname=createContext();
 const lname=createContext();

 const App=()=>{
     return(
         <>
         <fname.Provider value={"Hafiz"}>
             <mname.Provider value={"Syed"+" "+"Ali"}>
                 <lname.Provider value={"Hamdani"}>
                 <ComA/>
                 </lname.Provider>
             </mname.Provider>
             
         </fname.Provider>

        
         </>
     )
 }
 export default App;
 export {fname,mname,lname};