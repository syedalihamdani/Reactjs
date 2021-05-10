import React ,{useState} from 'react';
import './App';

const App=()=>{
  const [name,setname]=useState('');
  const [fullname,setfullname]=useState('');
  const [lfullname,lsetfullname]=useState('');
  const [lname,lsetname]=useState('');
const valueinput=(event)=>{
 console.log(event.target.value);
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
    <div className='divtag'>
      <form onSubmit={onsubmit}>

      <h1>Hello! {fullname} {lfullname}</h1>
      <input type="text" placeholder="Enter your Name" 
      onChange={valueinput} />
      <br/><br/>
      <input type="text" placeholder="Enter your Name" 
      onChange={lvalueinput} />
      <br/><br/>
      <button type="submit" >Submit Now</button>
      </form>
    </div>
    </>
  )
}
export default  App;