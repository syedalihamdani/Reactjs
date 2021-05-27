import React, { useState } from 'react';
import Sresult from './Sresult';

const About=()=>{
    const [img,setimg]=useState('');

    const inputEvent=(event)=>{
        const data=event.target.value
        setimg(data);
        console.log(data)

    }
    return(
        <>
        <br/> <br/> <br/>
        <input type='text'  onChange={inputEvent} value={img} placeholder='Search here'/>
        {img===' '?null: <Sresult name={img}/>}
        </>
    )
}
export default About;