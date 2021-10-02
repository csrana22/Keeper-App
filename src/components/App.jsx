import React,{useState} from "react";
import {BrowserRouter as Router,Route } from "react-router-dom";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import CreateArea from "./CreateArea";

function App(){



  const [final,setfinal]=useState([]);

  function handleClick(note){
setfinal((prev)=>{
  return [...prev,note];
})

  }

  function deleteNote(id){
    setfinal((prev)=>{
      return (prev.filter((note,index)=>{
        return index!==id;
      }))
    })
  }

  return( <Router>
    <div>
    <Header />
    <CreateArea click={handleClick} />
    {final.map((note,index)=>{
 return <Note key={index} id={index} title={note.title} content={note.content} delete={deleteNote}/>
    })}
    <Footer />
    </div>
    </Router>
  );
   

}
export default App;