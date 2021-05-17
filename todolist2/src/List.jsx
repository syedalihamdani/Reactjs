import React, { useState } from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import './List.css';

const List=(props)=>{
    const [line,setline]=useState(false);
    const cutIt=()=>{
        setline(true);
    }
    return(
        <>
        <div className="get">
        <span onClick={cutIt}><DeleteIcon/></span>
        <br/>
        <li style={{textDecoration:line? "line-through":"none"}}>{props.get}</li>
        </div>
        </>
    )
}
export default List;