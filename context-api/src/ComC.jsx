import React from 'react';
import './ComC.css';
import {Name} from './App';

const ComC=()=>{
    return(
        <>
        <div className='outer'>
            <div className='inner'>

        <h1>Context is used to pass data</h1>
        <Name.Consumer>
            {(Name)=>{
                return(
                    <h1>This data has been passed from App component to last component C.{Name}</h1>
                    )
                }}
        </Name.Consumer>
                </div>
                </div>
        </>
    )
}
export default ComC;