import React, { useState } from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Createnote from './Createnote';
import Note from './Note';


const App=()=>{
  const [addItem,setaddItem]=useState([]);
  const addnote=(note)=>{
    setaddItem((predata)=>{
      return [...predata,note]
      
    });
  }

  const onDelete=(id)=>{
    setaddItem((olddata)=>{
      return olddata.filter((val,index)=>{
        return index !==id;
      })
    })
  }
  return(
    <>
    <Header/>
    <Createnote passnote={addnote}/>
    <div className="note3">    
    {addItem.map((Cvalue,index)=>{
      return <Note
      key={index}
      id={index}
      title={Cvalue.title}
      content={Cvalue.content}
      deleteItem={onDelete}
      />
    })}
    </div>
    <Footer/>
    </>
  )
}
export default App;