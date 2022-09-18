import React, { useState } from 'react'
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { editPost } from '../../JS/actions/PostActions';

const EditPost = () => {



const { id} = useParams();
console.log(id)
const dispatch= useDispatch()
const post = useSelector((state) =>
state.PostReducer.posts.find((el) => el.id === id)
);
const [newTitle, setNewTitle] = useState(post.title)
const [newContent, setNewContent] = useState(post.content)
const navigate=useNavigate()

  return (
    <div>
      <input value ={newTitle} onChange={(e)=>setNewTitle(e.target.value)} type="text" placeholder='title'/>
      <textarea value={newContent} onChange={(e)=>setNewContent(e.target.value)}></textarea>
      <button onClick={()=>{dispatch(editPost(id, newTitle, newContent )); navigate(-1)}} >
        save
      </button>
    </div>
  )
}

export default EditPost