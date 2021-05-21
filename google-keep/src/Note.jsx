import React from 'react';
import './Note.css';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';


const Note=(props)=>{
  const deleteNote=()=>{
    props.deleteItem(props.id);
  }
  return(
    <>
    <div className="note2">
        <h1>{props.title}</h1>
        <br/>
        <p>{props.content} </p>
        <button className="btn" onClick={deleteNote}>
            <DeleteOutlineIcon className="icon"/>
        </button>
    </div>
    
    </>
  )
}
export default Note;