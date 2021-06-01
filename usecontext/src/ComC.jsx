import React, { useContext } from 'react';
import './ComC.css';
import {fname,mname,lname} from './App';

const ComC=()=>{
    const Firstname=useContext(fname);
    const Middlename=useContext(mname);
    const Lastname=useContext(lname);
    return(
        <>
        <div className='outer'>
            <div className='inner'>
        <h5>How are you? Mr.{Firstname} {Middlename} {Lastname}</h5>
            </div>
        </div>
        </>
    )
}
export default ComC;