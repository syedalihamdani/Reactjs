import React from 'react';
import ReactDom from 'react-dom';
import Card from './Card';
import Sdata from './Sdata';
ReactDom.render(
  <>
  {Sdata.map((val)=>{
    return(
      <Card 
      srgimg={val.srgimg}
      greating={val.greating}
      link={val.link}
      />
    );
    // NOT WORKING, DON'T KNOW THE REASON I WILL DEAL IT LATER.
    // NOT WORKING, DON'T KNOW THE REASON I WILL DEAL IT LATER.
    // NOT WORKING, DON'T KNOW THE REASON I WILL DEAL IT LATER.
    // NOT WORKING, DON'T KNOW THE REASON I WILL DEAL IT LATER.
  })}
</>,
document.getElementById('root')
);
