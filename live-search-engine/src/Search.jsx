import React, { useState } from 'react';
import './Search.css';
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
        <div className='outer'>
            <div className='inner'>
        <input className='input' type='text'  onChange={inputEvent} value={img} placeholder='Search here'/>
        {img===' '?null: <Sresult name={img}/>}
            </div>
        </div>
        </>
    )
}
export default About;