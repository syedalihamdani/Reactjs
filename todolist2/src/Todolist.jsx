import React, { useState } from 'react';
import './Todolist.css';
import AddIcon from '@material-ui/icons/Add';
import List from './List';

const Todolist=()=>{
    const [item,setitem]=useState('');
    const [newitem,setnewitem]=useState([]);

    const listofitem=()=>{
        setnewitem((olditem)=>{
            return [...olditem,item]
        })
        setitem(' ');
    }

    const itemchange=(event)=>{
        setitem(event.target.value);
    }
    return(
        <>
        <div  className="sc">

        <div className='app'>
            <br/>
            <h1>To do list</h1>
        <div className="new"> 
            <input type='text' placeholder="Add items here" onChange={itemchange}
            value={item} />
            <button onClick={listofitem}><AddIcon/></button>
        </div>
        <br/>
        <ol>
            {newitem.map((Cvalue, index)=>{
                return <List key={index} id={index} get={Cvalue}/>
            })}
        </ol>
        </div>
        </div>
        
        </>

    )
}
export default Todolist;