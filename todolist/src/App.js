import React, { useState } from 'react';
import Todolist from './Todolist';
import './App.css';

const App=()=>{
  const [inputevent,setinputevent]=useState('');
  
  const itemevent=(event)=>{
    setinputevent(event.target.value);
  };

  const [item,setitem]=useState([]);

  const listofitems=()=>{
    setitem((olditem)=>{
      return [...olditem,inputevent]
    });
    setinputevent("");
  }

  const deleteitem=(id)=>{
    setitem((olditem)=>{
      return olditem.filter((arrelem,index)=>{
        return index!==id;
      })
    })
  }

  return(
    <>
    <div className="central-div">
      <br/>
      <h1>Todo List</h1>
      <br/>
      <input type="text" placeholder="Add tast name here" onChange={itemevent}
      value={inputevent}
       />
      <button onClick={listofitems} >+</button>
      <ol>
          {item.map((itemval,index)=>{
          return <Todolist list={itemval}
          key={index}
          id={index}
          onSelect={deleteitem}
          />;
        })}
      </ol>
    </div>
    </>
  )
}
export default App;