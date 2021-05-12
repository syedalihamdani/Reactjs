 import React ,{useState} from 'react';

 const App=()=>{
   const [fullname,setfullname]=useState({
     fname:'',
     lname:'',
     email:'',
     phone:''
   })
   const [subfullname,setsubfullname]=useState({ //This is used for submit
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

   const onsubmit=(event)=>{
     event.preventDefault();
     alert("form submitted")
     setsubfullname({
      fname:fullname.fname,
      lname:fullname.lname,
      email:fullname.email,
      phone:fullname.phone
     })
   }
   return(
     <>
     <form onSubmit={onsubmit}>
       <h1>Hello! {subfullname.fname} {subfullname.lname}</h1><br/>{fullname.email}
       <br/>{fullname.phone}
       <h4>Enter your first name here</h4>
       <input type="text" name="fname" placeholder="Input here" 
       onChange={setvalue} />
       
       <h4>Enter your last name here</h4>
       <input type="text" name="lname" placeholder="Input here"  
       onChange={setvalue} />

        <h4>Enter your Email here</h4>
       <input type="email" name="email" placeholder="Input here"  
       onChange={setvalue} />

        <h4>Enter your last name here</h4>
       <input type="number" name="phone" placeholder="Input here"  
       onChange={setvalue} />

       <br/><br/>
       <button type="submit">Submit </button>
     </form>
    </>  
   )

 }

export default App;