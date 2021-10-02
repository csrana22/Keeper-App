import React,{useState} from "react";

function CreateArea(props){

const [note,setNote]=useState({
    title:"",
    content:""
})

function handleChange(event){
const {name,value}=event.target;
setNote((prev)=>{
    return {
        ...prev,
        [name]:value
    }
})
}
function submit(event){
    props.click(note);
    event.preventDefault();
   setNote({
       title:"",
       content: ""
   })
}
    return (
    <div>
        <form>
            <input onChange={handleChange} name="title" placeholder="title" value={note.title} />
            <textarea onChange={handleChange} name="content" placeholder="Take a note.." rows="3" value={note.content}/>
            <button onClick={submit}>Add</button>
        </form>
    </div>)
}
export default CreateArea;