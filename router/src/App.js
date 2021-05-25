 import React from 'react';
 import './App.css';
 import Home from'./Home';
 import About from './About';
 import Error from './Error';
 import {Route ,Switch} from 'react-router-dom';

 const App=()=>{
     const No=()=>{
         return(
             <h1>No.don't come here</h1>
         )
     }
     return(
         <>
         <Switch>
             <Route exact path="/" component={Home}/>
             <Route exact path="/about" component={About}/>
             <Route exact path="/about/no" component={No}/>
             <Route component={Error}/>
         </Switch>
         {/* <Home/>
         <About/> */}
         
         </>
     )
 }
 export default App;