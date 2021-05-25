import React from 'react';
import './App.css';
import Home from'./Home';
import About from './About';
import Error from './Error';
import Navbar from './Navbar';
import Servious from './Servious';
import {Route ,Switch} from 'react-router-dom';

const App=()=>{
    const No=()=>{
        return(
            <h1>No.don't come here</h1>
        )
    }
    return(
        <>
        <Navbar/>
        <Switch>
            <Route exact path="/" component={Home}/>
              {/* If we are not passing props use component method */}
            <Route exact path="/about" component={()=><About name="Props_used_here"/>}/>
             <Route exact path="/servious" render={()=><Servious name="Props_used_here"/>}/>
            {/* If we are passing props use render method */}
            <Route exact path="/about/no" component={No}/>
            <Route component={Error}/>
        </Switch>
        {/* <Home/>
        <About/> */}
        
        </>
    )
}
export default App;