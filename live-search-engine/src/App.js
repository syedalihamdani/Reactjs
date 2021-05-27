 import React from 'react';
 import './App.css';
 import {Switch,Route,Redirect} from 'react-router-dom';
 import Home from './Home';
 import About from './About';
 import Welcome from './Welcome';
import Contact from './Contact';
import Error from './Error';
import Navbar from './Navbar';
import Search from './Search';

 const App=()=>{
     return(
         <>
         <Navbar/>
         <Switch>
             <Route exact path="/" component={Home} />
             <Route exact path="/about" component={About} />
             <Route exact path="/contact" component={Contact} />
             <Route exact path="/search" component={Search} />
             <Route exact path="/welcome/:fname/:lname" component={Welcome} />
             {/* <Route  component={Error} /> */}
             <Redirect to="/"/>

         </Switch>

         </>
     )
 }
 export default App;