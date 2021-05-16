import React ,{useState} from 'react';

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
const [Sfullname,Ssetfullname]=useState('');
  const onsubmit=(event)=>{
    event.preventDefault();
    Ssetfullname(fullname);
    alert("form submitted")
  }
  return(
    <>
    <form onSubmit={onsubmit}>
      <h1>Hello! {Sfullname.fname} {Sfullname.lname}</h1><br/>{Sfullname.email}
      <br/>{Sfullname.phone}
      <h4>Enter your first name here</h4>
      <input type="text" name="fname" placeholder="Input here" 
      onChange={setvalue} value={fullname.fname} //not necessary 
      />
      
      <h4>Enter your last name here</h4>
      <input type="text" name="lname" placeholder="Input here"  
      onChange={setvalue} value={fullname.lname} //not necessary 
      />

       <h4>Enter your Email here</h4>
      <input type="email" name="email" placeholder="Input here"  
      onChange={setvalue} value={fullname.email} //not necessary 
      />

       <h4>Enter your last name here</h4>
      <input type="number" name="phone" placeholder="Input here"  
      onChange={setvalue} value={fullname.phone} //not necessary 
       />

      <br/><br/>
      <button type="submit">Submit </button>
    </form>
   </>  
  )

}

export default App;