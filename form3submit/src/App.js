import React ,{useState} from 'react';
import './App.css';

const App=()=>{
  const [fullname,setfullname]=useState({
    fname:'',
    lname:'',
    email:'',
    phone:''
  })
  
  const setvalue=(event)=>{
    console.log(event.target.value)
    console.log(event.target.name)
    const value=event.target.value;
    const name=event.target.name;
    setfullname((preValue)=>{
      if(name==='fname'){
        return{
          fname:value,
          lname:preValue.lname,
          email:preValue.lname,
          phone:preValue.lname,
        }
      }else if(name==='lname'){
       return{
         fname:preValue.fname,
         lname:value,
         email:preValue.email,
         phone:preValue.phone,
       }
     }else if(name==='email'){
       return{
         fname:preValue.fname,
         lname:preValue.lname,
         email:value,
         phone:preValue.phone,
       }
     }else if(name==='phone'){
       return{
         fname:preValue.fname,
         lname:preValue.lname,
         email:preValue.email,
         phone:value,
       }
     }
    })

  }
  const [Sfullname,Ssetfullname]=useState('');
  const onsubmit=(event)=>{
    event.preventDefault();
    Ssetfullname(fullname);
    alert("form submitted")
  }
  return(
    <>
    <div className='outer'>

    <form className='inner' onSubmit={onsubmit}>
      <h1>Hello! {Sfullname.fname} {Sfullname.lname}</h1><br/>{Sfullname.email}
      <br/>{Sfullname.phone}
      <h4>Enter your first name here</h4>
      <input className='input' type="text" name="fname" placeholder="Input here" 
      onChange={setvalue} value={fullname.fname} //not necessary 
      />
      
      <h4>Enter your last name here</h4>
      <input className='input' type="text" name="lname" placeholder="Input here"  
      onChange={setvalue} value={fullname.lname} //not necessary 
      />

       <h4>Enter your Email here</h4>
      <input className='input' type="email" name="email" placeholder="Input here"  
      onChange={setvalue} value={fullname.email} //not necessary 
      />

       <h4>Enter your last name here</h4>
      <input className='input' type="number" name="phone" placeholder="Input here"  
      onChange={setvalue} value={fullname.phone} //not necessary 
      />

      <br/><br/>
      <button type="submit">Submit </button>
    </form>
      </div>
   </>  
  )

}

export default App;