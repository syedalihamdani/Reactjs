 import React from 'react';
 import './index.css'
 import ReactDom from 'react-dom';
 import Card from './Card';
 import Sdata from './Sdata';
  // <Card srgimg="https://picsum.photos/200/300" greating="Hello" link="https://www.netflix.com/pk/title/80100172" />
  // <Card srgimg="https://picsum.photos/250/300" greating="Hi" link="https://www.netflix.com/pk/title/80990668" />
  // <Card srgimg="https://picsum.photos/300/300" greating="Phty mo" link="https://www.netflix.com/pk/title/80057281"/>
  ReactDom.render(            
  <>
  <div className='outer'>
      <div className='inner'>
  <Card srgimg={Sdata[0].srgimg}
  greeting={Sdata[0].greating}
  link={Sdata[0].link} />
  </div>
  <div className='inner'>
  <Card srgimg={Sdata[1].srgimg}
  greeting={Sdata[1].greating}
  link={Sdata[1].link} />
</div>
<div className='inner'>
  <Card srgimg={Sdata[2].srgimg}
  greeting={Sdata[2].greating}
  link={Sdata[2].link} />
  </div>
  </div>
  </>,
  

  document.getElementById('root')
 )
