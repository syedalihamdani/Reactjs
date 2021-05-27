import React from 'react';

const About=(props)=>{
    const img=`https://source.unsplash.com/400x400/? ${props.name}`
    return(
        <>
        <img src={img} alt='nothig'/>
        </>
    )
}
export default About;