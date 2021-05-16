import React,{useState} from 'react';
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
    <div className="tab">
      <button onClick={Increment}> <AddIcon/></button>
      <h1>{number}</h1>
      <button onClick={Decrement}><RemoveIcon/></button>
    </div>
    </>
  )
}
export default App;

