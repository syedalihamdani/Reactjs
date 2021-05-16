import React from 'react';
import './Todolist.css';

const Todolist=(props)=>{
    return (
        <>
        <div className="ok">
        <i className="fas fa-times-circle"
        onClick={()=>{
            props.onSelect(props.id)
        }}
        />
            <li>{props.list}</li>

        </div>
        </>
    )
}

export default Todolist;