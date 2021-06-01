import React from 'react';
import './App.css';
import Heading from './Heading.jsx';
import Para from './Para.jsx';
import List from './List.jsx';

function App(){
    return(
        <>
        <div className='outer'>
        <div className='inner'>
        <Heading/>
        <Para/>
        <List/>
        </div>
        </div>
        </>
    )
}
export default App;