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
    // const value=event.target.value;
    // const name=event.target.name;
    const {name,value}=event.target;
    setfullname((preValue)=>{
      return{
        ...preValue,
        [name]:value,
      }
    })

  }

  const onsubmit=(event)=>{
    event.preventDefault();
    alert("form submitted")
  }
  return(
    <>
    <div className='outer'>

    <form className='inner' onSubmit={onsubmit}>
      <h1>Hello! {fullname.fname} {fullname.lname}</h1><br/>{fullname.email}
      <br/>{fullname.phone}
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