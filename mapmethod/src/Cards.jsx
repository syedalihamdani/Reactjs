import React from 'react';
function Card(props){
    return(
      <>
      <div className="cards">
        <img src={props.srgimg} alt="Dark" title="Dark TV Series"/>
        <h1>{props.greating}</h1>
        <a href={props.link}><button>Watch Now</button></a>
      </div>
      </>
    )
  }
  export default Card;