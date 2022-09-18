import React, { useState } from 'react'
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { addPost } from '../../JS/actions/PostActions';

const AddPost = () => {
const [title, setTitle] = useState("")
const [content, setContent] = useState("")

const dispatch = useDispatch();
const navigate= useNavigate()

const handleClick=()=>{
  if(title){
  dispatch(addPost({title, content, id:uuidv4()}));
  navigate("/")}
else{ alert("title is required")}
}
  return (
    <div>
      <input onChange={(e)=>setTitle(e.target.value)} type="text" placeholder='title'/>
      <textarea onChange={(e)=>setContent(e.target.value)}></textarea>
      <button onClick={handleClick}>
        Add
      </button>
       
    </div>
  )
}

export default AddPost