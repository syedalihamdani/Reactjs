import React from 'react';
import {Name} from './App';

const ComC=()=>{
    return(
        <>
        <h5>How are you?</h5>
        <Name.Consumer>
            {(Name)=>{
                return(
                    <h1>My name is {Name}</h1>
                )
            }}
        </Name.Consumer>
        </>
    )
}
export default ComC;