import React,{useState} from 'react';
import './App.css';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import './App.css';

const App=()=>{
  const [number,setnumber]=useState(0);

  const Increment=()=>{
    setnumber(number+1);
  }
  const Decrement=()=>{
    setnumber(()=>{
      if(number<=0){
        alert("Negative decrement is not allowed")
        return number;
      }else{
        return number-1;
      }
    });
  }
  return(
    <>
    <div className='outer'>
    <div className="inner">
      <button onClick={Increment}> <AddIcon/></button>
      <h1>{number}</h1>
      <button onClick={Decrement}><RemoveIcon/></button>
    </div>
    </div>
    </>
  )
}
export default App;

