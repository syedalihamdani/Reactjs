import React from 'react';
import {useParams,useLocation,useHistory} from 'react-router-dom';
const Welcome=()=>{
    const {fname,lname}=useParams();
    const location=useLocation();
    const history=useHistory();
    console.log(location);
    console.log(history);
    return(
        <>
        <h1>Hi! {fname} {lname} Welcome to this page we are glad that
        you visited our page </h1>
        <h1>You current location is {location.pathname}</h1>
        <button onClick={()=>history.goBack()}>Go Back</button>
        {location.pathname===`/welcome/Hafiz/Ali` ?
        <button onClick={()=>history.push('/')}>Home page</button>:null}
        </>
    )
}
export default Welcome;