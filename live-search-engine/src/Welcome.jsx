import React from 'react';
import {useParams,} from 'react-router-dom';
const Welcome=()=>{
    const {fname,lname}=useParams();
    return(
        <>
        <h1>Hi! {fname} {lname} Welcome to this page we are glad that
        you visited our page </h1>
        </>
    )
}
export default Welcome;