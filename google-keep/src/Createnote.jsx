import React, { useState } from 'react';
import './Createnote.css';
import AddIcon from '@material-ui/icons/Add';
 

const Createnote=(props)=>{
  const [expand,setexpand]=useState(false);
  const [note,setnote]=useState({
    title:'',
    content:'',
  })
  const expandIt=()=>{
    setexpand(true);
  }
  const backtoNormal=()=>{
    setexpand(false);
  }
  const inputelement=(event)=>{
    const value=event.target.value;
    const name=event.target.name;
// Altenative way of writing these 2 lines;
//     const {name,value}=event.target;

    setnote((predata)=>{
      return {
        ...predata,
        [name]:value,
      }
    })

    console.log(note)

  }
  const addEvent=()=>{
    props.passnote(note);
    setnote({
      title:'',
      content:'',
    })
  }
  const onSubmit=(event)=>{
    event.preventDefault();
  }
  return(
    <>
    <div className="note" onDoubleClick={backtoNormal}>
        <form onSubmit={onSubmit}>
          {expand?
            <input className="box input" type="text" name="title" value={note.title} placeholder="Title" 
            onChange={inputelement} autoComplete="off"/>
            :null}
            <textarea className="box textarea" rows="" cols=" " name="content" value={note.content}
            onChange={inputelement}  placeholder="Write a note here" 
            onClick={expandIt}
            />
            {expand?
           <div className="but"> 
           <button className="box button" onClick={addEvent}><AddIcon/></button>
           </div> 
            :null}

        </form>
    </div>
    </>
  )
}
export default Createnote;