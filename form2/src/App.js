import React ,{useState} from 'react';
import './App.css';

const App=()=>{
  const [name,setname]=useState('');
  const [fullname,setfullname]=useState('');
  const [lfullname,lsetfullname]=useState('');
  const [lname,lsetname]=useState('');
const valueinput=(event)=>{
//  console.log(event.target.value);
 setname(event.target.value);
}
const lvalueinput=(event)=>{
  lsetname(event.target.value);
 }
const onsubmit=(event)=>{
 event.preventDefault(); 
 setfullname(name);
 lsetfullname(lname);
}
  return(
    <>
    <div className='outer'>
      <form className='inner' onSubmit={onsubmit}>
      <h1>Hello! {fullname} {lfullname}</h1>
      <input className='input' type="text" placeholder="Enter your First Name" 
      onChange={valueinput} value={name} />
      <br/>
      <input className='input' type="text" placeholder="Enter your Last Name" 
      onChange={lvalueinput}  value={lname}/>
      <button type="submit" >Submit Now</button>
      </form>
    </div>
    </>
  )
}
export default  App;