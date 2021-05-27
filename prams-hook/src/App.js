 import React from 'react';
 import './App.css';
 import {Switch,Route} from 'react-router-dom';
 import Home from './Home';
 import About from './About';
 import Welcome from './Welcome';
import Contact from './Contact';
import Error from './Error';
import Navbar from './Navbar';

 const App=()=>{
     return(
         <>
         <Navbar/>
         <Switch>
             <Route exact path="/" component={Home} />
             <Route path="/about" component={About} />
             <Route path="/contact" component={Contact} />
             <Route path="/welcome/:fname/:lname" component={Welcome} />
             <Route  component={Error} />
         </Switch>

         </>
     )
 }
 export default App;