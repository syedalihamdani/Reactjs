 import React ,{useState} from 'react';
 import './App.css';

 const App=()=>{
   const [name,setname]=useState('');
   const [fullname,setfullname]=useState('');
const valueinput=(event)=>{
  console.log(event.target.value);
  setname(event.target.value);
}
const onsubmit=()=>{
  setfullname(name);
}
   return(
     <>
     <div className='outer'>

     <div className='inner'>
       <h1>Hello! {fullname}</h1>
       <input className='input' type="text" placeholder="Enter your Name" 
       onChange={valueinput} />
       <button onClick={onsubmit}>Submit Now</button>
     </div>
       </div>
     </>
   )
 }
 export default  App;