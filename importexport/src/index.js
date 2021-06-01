 import React from 'react';
 import './App.css';
 import ReactDom from 'react-dom';
import myfav,{favprog,myname,mynames} from './App';
//  When we use default at the time of exporting then at the time of importing we can any name 
// to the file.
const num1=parseFloat(prompt("Enter number 1"));
const num2=parseFloat(prompt("Enter number 2"));

ReactDom.render(
  <>
  <div className='outer'>

  <div className='inner'>

  <ol>
    <li>Thapa</li>
    <li>{myfav}</li>
    <li>{favprog}</li>
    <li>{myname()}</li>
    <li>{mynames()}</li>
  </ol>
  <h1>The Sum of 2 numbers are={num1+num2}</h1>
  <h1>The Subtraction of 2 numbers are={num1-num2}</h1>
  <h1>The Multiplication of 2 numbers are={num1*num2}</h1>
  <h1>The Division of 2 numbers are={num1/num2}</h1>
  </div>
  </div>
  </>,
  document.getElementById('root')
)