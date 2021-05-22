import React, { useContext } from 'react';
import {fname,mname,lname} from './App';

const ComC=()=>{
    const Firstname=useContext(fname);
    const Middlename=useContext(mname);
    const Lastname=useContext(lname);
    return(
        <>
        <h5>How are you? Mr.{Firstname} {Middlename} {Lastname}</h5>
        </>
    )
}
export default ComC;