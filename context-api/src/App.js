 import React, { createContext } from 'react';
 import './App.css';
 import ComA from './ComA';

 const Name=createContext();

 const App=()=>{
     return(
         <>
         <Name.Provider value={'Aslam'}>

         <ComA/>
         </Name.Provider>
         </>
     )
 }
 export default App;
 export {Name};